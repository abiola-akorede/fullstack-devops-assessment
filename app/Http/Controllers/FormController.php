<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function allForms()
    {
        $user = auth()->user();
        $forms = Form::where('user_id', $user->id)->get();
        return response()->json($forms);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        return view('forms.create', ['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeForm(Request $request)
    {
        $user = auth()->user();

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'fields' => 'required|array',
        ]);

        $form = new Form();
        $form->title = $validatedData['title'];
        $form->description = $validatedData['description'] ?? null;
        $form->fields = json_encode($validatedData['fields']);
        $form->user_id = $user->id;
        $form->save();

        return response()->json([
            'message' => 'The form was successfully created',
            'form' => $form], 201);
    }

    /**
     * Display the specified resource.
     */
    public function getForm($id)
    {
        $user = auth()->user();
        $form = Form::where('id', $id)->where('user_id', $user->id)->first();

        if (!$form) {
            return response()->json(['message' => 'Form not found'], 404);
        }

        return response()->json($form);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = auth()->user();
        $form = Form::where('id', $id)->where('user_id', $user->id)->first();

        if (!$form) {
            return response()->json(['message' => 'Form not found'], 404);
        }

        return view('forms.edit', ['form' => $form, 'user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateForm(Request $request, $id)
    {
        $user = auth()->user();
        $form = Form::where('id', $id)->where('user_id', $user->id)->first();


        if (!$form) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'fields' => 'required|array',
        ]);

        $form->title = $validatedData['title'];
        $form->description = $validatedData['description'] ?? null;
        $form->fields = json_encode($validatedData['fields']);
        $form->save();

        return response()->json([
            'message' => 'The form was successfully updated',
            'form' => $form], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deleteForm($id)
    {
        $user = auth()->user();

        if (!$form) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $form->delete();

        return response()->json(['message' => 'The form was successfully deleted'], 200);
    }
}
