<div>

        <div class="nk-sidebar-element nk-sidebar-head">
            <div class="nk-menu-trigger">
                <a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
                <a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
            </div>
            <div class="nk-sidebar-brand">
                <a href="html/index.html" class="logo-link nk-sidebar-logo">
                    <img class="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo">
                    <img class="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark">
                </a>
            </div>
        </div><!-- .nk-sidebar-element -->
        <div class="nk-sidebar-element nk-sidebar-body">
            <div class="nk-sidebar-content">
                <div class="nk-sidebar-menu" data-simplebar>
                    <ul class="nk-menu">
                        <li class="nk-menu-heading">
                            <h6 class="overline-title text-primary-alt">Settings</h6>
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="html/crm/index.html" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span>
                                <span class="nk-menu-text">Settings</span>
                            </a>
                        </li><!-- .nk-menu-item -->

                        <li class="nk-menu-heading">
                            <h6 class="overline-title text-primary-alt">Dashboards</h6>
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="{{ route('dashboard') }}" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span>
                                <span class="nk-menu-text"> Dashboard </span>
                            </a>
                        </li>

                        <li class="nk-menu-item has-sub">
                            <a href="#" class="nk-menu-link nk-menu-toggle">
                                <span class="nk-menu-icon"><em class="icon ni ni-task-fill-c"></em></span>
                                <span class="nk-menu-text">Transfer /  Receive <br> Money</span>
                            </a>
                            <ul class="nk-menu-sub">
                                <li class="nk-menu-item">
                                    <a href="{{ route('my-wallet') }}" class="nk-menu-link"><span class="nk-menu-text">Fund Wallet</span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="{{ route('transfer-to-account') }}" class="nk-menu-link"><span class="nk-menu-text">  Transfer to Account  </span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="{{ route('transfer-to-wallet') }}" class="nk-menu-link"><span class="nk-menu-text">  Transfer to Wallet  </span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="{{ route('receive_money') }}" class="nk-menu-link"><span class="nk-menu-text"> Receive Money  </span></a>
                                </li>
                            </ul><!-- .nk-menu-sub -->
                        </li><!-- .nk-menu-item -->

                        <li class="nk-menu-item">
                            <a href="{{ route('all-payment') }}" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-bitcoin-cash"></em></span>
                                <span class="nk-menu-text"> Buy Airtime / Data </span>
                            </a>
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item has-sub">
                            <a href="#" class="nk-menu-link nk-menu-toggle">
                                <span class="nk-menu-icon"><em class="icon ni ni-task-fill-c"></em></span>
                                <span class="nk-menu-text">Bill</span>
                            </a>
                            <ul class="nk-menu-sub">
                                <li class="nk-menu-item">
                                    <a href="/cable_tv" class="nk-menu-link"><span class="nk-menu-text">Cable TV</span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="/electricity" class="nk-menu-link"><span class="nk-menu-text"> Electricity  </span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="/internet" class="nk-menu-link"><span class="nk-menu-text"> Internet  </span></a>
                                </li>
                            </ul><!-- .nk-menu-sub -->
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item has-sub">
                            <a href="#" class="nk-menu-link nk-menu-toggle">
                                <span class="nk-menu-icon"><em class="icon ni ni-task-fill-c"></em></span>
                                <span class="nk-menu-text"> Educational </span>
                            </a>
                            <ul class="nk-menu-sub">
                                <li class="nk-menu-item">
                                    <a href="/waec" class="nk-menu-link"><span class="nk-menu-text">WAEC</span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="/jamb" class="nk-menu-link"><span class="nk-menu-text"> JAMB  </span></a>
                                </li>
                            </ul><!-- .nk-menu-sub -->
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="/bill_payment" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span>
                                <span class="nk-menu-text">Book Flight  </span>
                            </a>
                        </li><!-- .nk-menu-item -->

                        <!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="#" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span>
                                <span class="nk-menu-text"> Transaction </span>
                            </a>
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item has-sub">
                            <a href="#" class="nk-menu-link nk-menu-toggle">
                                <span class="nk-menu-icon"><em class="icon ni ni-task-fill-c"></em></span>
                                <span class="nk-menu-text">My Wallet</span>
                            </a>
                            <ul class="nk-menu-sub">
                                <li class="nk-menu-item">
                                    <a href="html/crm/running-task.html" class="nk-menu-link"><span class="nk-menu-text">Fund Wallet </span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/archive-task.html" class="nk-menu-link"><span class="nk-menu-text"> Fund Transfer  </span></a>
                                </li>
                                <li class="nk-menu-item">
                                    <a href="html/crm/archive-task.html" class="nk-menu-link"><span class="nk-menu-text"> Wallet History  </span></a>
                                </li>
                            </ul><!-- .nk-menu-sub -->
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="/reports" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span>
                                <span class="nk-menu-text">Reports</span>
                            </a>
                        </li><!-- .nk-menu-item -->
                        <li class="nk-menu-item">
                            <a href="/logout" class="nk-menu-link">
                                <span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span>
                                <span class="nk-menu-text">Logout</span>
                            </a>
                        </li><!-- .nk-menu-item -->

                    </ul><!-- .nk-menu -->
                </div><!-- .nk-sidebar-menu -->
            </div><!-- .nk-sidebar-content -->
        </div><!-- .nk-sidebar-element -->
    </div>

