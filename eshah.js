<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAZMOUR</title>
    <link rel="shortcut icon" href="JESUS2.svg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <meta name="description" content="مزمور هو موقع به سفر المزامير كاملا 151 اسحاح">
    <style>
        #twitter-share-btn {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.25rem;
            color: #56b8f5;
            background-color: #fff;
            cursor: pointer;
            border: 2px solid #56b8f5;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            display: none;
            transition: color 0.2s, background-color 0.2s ease-in-out;
        }

        #twitter-share-btn:hover {
            color: #fff;
            background-color: #56b8f5;
        }

        #twitter-share-btn i {
            pointer-events: none;
        }

        .btnEntrance {
            animation-duration: 0.2s;
            animation-fill-mode: both;
            animation-name: btnEntrance;
        }

        @keyframes btnEntrance {

            /* zoomIn */
            0% {
                opacity: 0;
                transform: scale3d(0.3, 0.3, 0.3);
            }

            100% {
                opacity: 1;
            }
        }

        :root {
            --succes--: black;
        }

        .select-wrapper {
            position: relative;
            z-index: 100;
        }

        .select {
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .select__trigger {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 22px;
            font-size: 20px;
            font-weight: 300;
            height: 60px;
            line-height: 60px;
            background: transparent;
            cursor: pointer;
        }

        .custom-options {
            position: absolute;
            display: block;
            top: 100%;
            left: 0;
            right: 0;
            border-top: 0;
            transition: all 0.5s;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            background-color: transparent;
            z-index: 2;
            backdrop-filter: blur(10px);
        }

        .select.open .custom-options {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        .custom-option {
            position: relative;
            display: block;
            padding: 0 22px 0 22px;
            font-size: 22px;
            font-weight: 300;
            line-height: 60px;
            cursor: pointer;
            transition: all 0.5s;
        }

        .custom-option:hover {
            cursor: pointer;
            background-color: #b2b2b2;
        }

        .arrow {
            position: relative;
            height: 15px;
            width: 15px;
        }

        .arrow::before,
        .arrow::after {
            content: "";
            position: absolute;
            bottom: 0px;
            width: 0.15rem;
            height: 100%;
            transition: all 0.5s;
        }

        .arrow::before {
            left: -5px;
            transform: rotate(45deg);
            background-color: #47A6E5;
        }

        .arrow::after {
            left: 5px;
            transform: rotate(-45deg);
            background-color: #47A6E5;
        }

        .open .arrow::before {
            left: -5px;
            transform: rotate(-45deg);
        }

        .open .arrow::after {
            left: 5px;
            transform: rotate(45deg);
        }

        ::selection {
            color: white;
            background-color: #47A6E5;
            padding: 20pc;
        }

        .form-select {
            border: 2px solid #47A6E5 !important;
            background-image: none;
            z-index: 200;
            border-radius: 5px !important;
            width: 260px !important;
            height: 67px !important;
        }

        /* width */
        ::-webkit-scrollbar {
            width: 2px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #47A6E5;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #47A6E5;
        }

        .red-mode {
            color: #47A6E5 !important;
        }

        .bg-transpent {
            background-color: transparent !important;
        }

        .border-bb {
            border-bottom: 2px solid #47A6E5;
        }

        a {
            text-decoration: none !important;
        }

        .button-unset {
            background-color: transparent !important;
            border: none !important;
            outline: none !important;
            color: black;
        }

        .ml-30px {
            margin-left: 30px;
        }

        .mt-30px {
            margin-top: 30px;
        }

        .form-select {
            display: block;
            width: 100%;
            padding: .375rem .75rem .375rem .75rem;
            -moz-padding-start: calc(0.75rem - 3px);
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: left .75rem center;
            background-size: 16px 12px;
            border: 2px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }

        .form-select:focus {
            border: 2px solid #47A6E5 !important;
            box-shadow: none !important;
        }

        select {
            text-align: right !important;
            margin-left: 0 !important;
        }

        select option:hover,
        select option:focus,
        select option:active {
            background: linear-gradient(#000000, #000000);
            background-color: #000000 !important;
            /* for IE */
            color: #ffed00 !important;
        }

        select option:checked {
            background: linear-gradient(#d6d6d6, #d6d6d6);
            background-color: #d6d6d6 !important;
            /* for IE */
            color: #000000 !important;
        }

        select option {
            background: linear-gradient(#d6d6d6, #d6d6d6);
            background-color: #d6d6d6 !important;
            /* for IE */
            color: #000000 !important;
        }

        select option:hover {
            background: linear-gradient(#d6d6d6, #d6d6d6);
            background-color: #d6d6d6 !important;
            /* for IE */
            color: #000000 !important;
        }

        .dark-mode-click {
            color: black;
            background-color: transparent;
        }

        .lined {
            line-height: 2.5;
            direction: rtl;
        }

        #moon {
            color: black;
        }

        .border-red {
            border: 2px solid #47A6E5 !important;
            text-align: center !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            margin: 30px;
            width: 90%;
            border-radius: 5px;
            padding: 10px;
            color: black;
            transition: .5s;
        }

        .border-red:hover {
            background-color: #47A6E5 !important;
            color: white !important;
        }

        .he-no-over {
            height: 600px;
            overflow: auto;
        }

        .vis {
            visibility: hidden;
        }

        @media only screen and (max-width: 500px) {
            #star-star {
                display: none;
            }

            #star-star2 {
                visibility: visible !important;
            }

            #chooser {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        #star-star2 {
            visibility: hidden;
        }

        @media only screen and (max-width: 360px) {
            #sun {
                display: none;
            }

            #moon {
                display: none;
            }

            #sun2 {
                visibility: visible !important;
            }

            #moon2 {
                visibility: visible !important;
            }
        }

        #sun2 {
            visibility: hidden;
        }

        #moon2 {
            visibility: hidden;
        }

        @media only screen and (max-width: 310px) {
            #search {
                display: none;
            }

            #search2 {
                visibility: visible !important;
            }
        }

        #search2 {
            visibility: hidden;
        }

        .unvis {
            visibility: visible !important;
        }

        .main {
            width: 50%;
            margin: 50px auto;
        }

        .has-search .form-control {
            padding-left: 2.375rem;
        }

        .has-search .form-control-feedback {
            position: absolute;
            z-index: 2;
            display: block;
            width: 2.375rem;
            height: 2.375rem;
            line-height: 2.375rem;
            text-align: center;
            pointer-events: none;
            color: #aaa;
        }

        .loader {
            overflow: hidden;
            text-align: center;
            height: 100%;
            width: 100%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }
    </style>
    <style>
        .search-bar input,
        .search-btn,
        .search-btn:before,
        .search-btn:after {
            transition: all 0.25s ease-out;
        }

        .search-bar input,
        .search-btn {
            width: 2.5em;
            height: 2.5em;
        }

        .search-bar input:invalid:not(:focus),
        .search-btn {
            cursor: pointer;
        }

        .search-bar,
        .search-bar input:focus,
        .search-bar input:valid {
            width: 100%;
        }

        .search-bar input:focus,
        .search-bar input:not(:focus)+.search-btn:focus {
            outline: none;
        }

        .search-bar {
            margin: auto;
            padding: 1.5em;
            max-width: 30em;
        }

        .search-bar input {
            background: transparent;
            border-radius: 1.5em;
            box-shadow: 0 0 0 0.4em #47A6E5;
            padding: 0.75em;
            transform: translate(0.5em, 0.5em) scale(0.5);
            transform-origin: 100% 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }

        .search-bar input::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        .search-bar input:focus,
        .search-bar input:valid {
            background: #fff;
            border-radius: 0.375em 0 0 0.375em;
            box-shadow: 0 0 0 0.1em #d9d9d9 inset;
            transform: scale(1);
        }

        .search-btn {
            border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
            padding: 0.75em;
            position: relative;
            transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
            transform-origin: 0 50%;
        }

        .search-bar input:focus+.search-btn,
        .search-bar input:valid+.search-btn {
            background: transparent;
            color: white;
            border-radius: 0 0.375em 0.375em 0;
            transform: scale(1);
            border: 2px solid #47A6E5;
        }

        .search-bar input:focus+.search-btn:before,
        .search-bar input:focus+.search-btn:after,
        .search-bar input:valid+.search-btn:before,
        .search-bar input:valid+.search-btn:after {
            opacity: 1;
        }

        .search-bar input:focus+.search-btn:active,
        .search-bar input:valid+.search-btn:active {
            transform: translateY(1px);
        }

        @media screen and (prefers-color-scheme: dark) {
            .search-bar input {
                box-shadow: 0 0 0 8px #f1f1f1;
            }

            .search-bar input:focus,
            .search-bar input:valid {
                box-shadow: 0 0 0 0.1em #47A6E5;
            }

            .search-btn {
                background: #f1f1f1;
            }
        }

        .form-control:focus {
            box-shadow: none;
            border: 2px solid #47A6E5;
        }

        .form-control {
            border-width: 2pX;
        }

        .todo-wrapper {
            border-radius: 4px;
            overflow: hidden;
            position: relative;
        }

        .btn {
            text-align: center;
            font-weight: bold;
            cursor: pointer;
            border-width: 1px;
            border-style: solid;
        }

        .btn-secondary:hover:after {
            width: 100%;
        }


        ul.todo-list {
            padding: 0;
            margin-bottom: 30px;
        }

        ul.todo-list li {
            position: relative;
            list-style-type: none;
            display: block;
            margin: 10px 0;
            background: #e0e8f5;
            border-radius: 3px;
            padding-left: 38px;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-right: 12px;
            overflow: hidden;
        }

        ul.todo-list.archived li {
            background: #fff;
        }

        .todo-text {
            position: relative;
            display: inline-block;
            padding: 0 0.5em;
        }


        ul.todo-list li .delete {
            position: absolute;
            height: 100%;
            top: 50%;
            left: 0px;
            transform: translateY(-50%);
            cursor: pointer;
            width: 44px;
            opacity: 1;
            background-color: #47A6E5;
            color: #fff;
            transition: all ease-in 0.25s;
        }

        ul.todo-list li .delete:after {
            position: absolute;
            content: '';
            width: 40px;
            height: 40px;
            top: 50%;
            left: 50%;
            background-image: url('https://nourabusoud.github.io/vue-todo-list/images/trash.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            transform: translate(-50%, -50%) scale(0.5);
            transition: all ease-in 0.25s;
        }

        .status.free {
            font-weight: bold;
            text-align: center;
            margin: 40px 0;
        }

        .status.free img {
            display: block;
            width: 50px;
            margin: 10px auto;
        }

        .todo-item-enter-active,
        .todo-item-leave-active {
            transition: opacity ease 0.25s, transform ease-in-out 0.3s;
            transform-origin: left center;
        }

        /* .todo-item-leave-active below version 2.1.8 */
        .todo-item-enter,
        .todo-item-leave-to {
            opacity: 0;
            transform: translateX(100%);
        }


        .slide-fade-enter-active,
        .slide-fade-leave-active {
            transition: all 0.3s ease;
        }

        /* .slide-fade-leave-active below version 2.1.8 */
        .slide-fade-enter,
        .slide-fade-leave-to {
            transform: scale(1.1);
            opacity: 0;
        }

        .ui-state-active,
        .ui-widget-content .ui-state-active,
        .ui-widget-header .ui-state-active,
        a.ui-button:active,
        .ui-button:active,
        .ui-button.ui-state-active:hover {
            border: 1px solid #aaaaaa;
            background: #cfd8e0;
            font-weight: normal;
            color: #212121;
        }
    </style>
</head>

<body>
        <button id="twitter-share-btn"><i class="fab fa-twitter" aria-label="Share on Twitter"></i></button>
        <nav class="navbar border-bb bg-transpent text-dark d-flex align-items-center justify-content-between">
            <div class="container">
                <a href="INDEX.HTML" class="navbar-brand red-mode">MAZMOUR<span
                        class="navbar-brand dark-mode-click">.COM</span></a>
                <div>
                    <button class="button-unset red-mode navbar-brand btn-lg btn-open-modal" id="star-star"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i
                            class="red-mode fa-5px fas fa-star"></i></button>
                    <button class="button-unset dark-mode-click navbar-brand" style="position: absolute;"
                        onclick="mode();" id="moon"><i class="fas fa-moon"></i></button>
                    <button class="button-unset dark-mode-click navbar-brand vis" onclick="modesun();" id="sun"><i
                            class="fas fa-sun"></i></button>
                    <button class="button-unset red-mode navbar-brand" id="search" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"><i class="red-mode fa-5px fas fa-search"></i></button>
                    <button class="button-unset navbar-brand dark-mode-click" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
                            class="fas fa-bars"></i></button>
                </div>
            </div>
        </nav>
        <div class="modal fade modal-fullscreen" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">SEARCH</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3" dir="rtl" style="flex-direction: row-reverse;">
                            <span type="button" style="    background: #47A6E5;
                color: white;
                cursor: pointer;
                border: 2px;" class="input-group-text" onclick="myFunction();" id="basic-addon1"><i
                                    class="fa fa-search"></i></span>
                            <input type="text" aria-label="Username" aria-describedby="basic-addon1"
                                class="form-control" id="txt1" placeholder="البحث في الاصحاح" aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
            </div>
            <script>

            </script>
        </div>
        <div class="text-left dark-mode-click" id="chooser" dir="rtl">

            <div class="select-wrapper form-select mt-30px ml-30px dark-mode-click" style="width: 260px !important;margin: 30px !important;    width: 100%;
margin-right: var(--bs-gutter-x,.75rem);
margin-left: var(--bs-gutter-x,.75rem);" dir="rtl" aria-label="Default select example">
                <div class="select">
                    <div class="select__trigger"><span id="show-ld">1</span>
                        <div class="arrow"></div>
                    </div>
                    <div class="custom-options he-no-over">
                        <span onclick="op1();" class="custom-option" value="1">1</span>
                        <span onclick="op2();" class="custom-option" value="2">2</span>
                        <span onclick="op3();" class="custom-option" value="3">3</span>
                        <span onclick="op4();" class="custom-option" value="4">4</span>
                        <span onclick="op5();" class="custom-option" value="5">5</span>
                        <span onclick="op6();" class="custom-option" value="6">6</span>
                        <span onclick="op7();" class="custom-option" value="7">7</span>
                        <span onclick="op8();" class="custom-option" value="8">8</span>
                        <span onclick="op9();" class="custom-option" value="9">9</span>
                        <span onclick="op10();" class="custom-option" value="10">10</span>
                        <span onclick="op11();" class="custom-option" value="11">11</span>
                        <span onclick="op12();" class="custom-option" value="12">12</span>
                        <span onclick="op13();" class="custom-option" value="13">13</span>
                        <span onclick="op14();" class="custom-option" value="14">14</span>
                        <span onclick="op15();" class="custom-option" value="15">15</span>
                        <span onclick="op16();" class="custom-option" value="16">16</span>
                        <span onclick="op17();" class="custom-option" value="17">17</span>
                        <span onclick="op18();" class="custom-option" value="18">18</span>
                        <span onclick="op19();" class="custom-option" value="19">19</span>
                        <span onclick="op20();" class="custom-option" value="20">20</span>
                        <span onclick="op21();" class="custom-option" value="21">21</span>
                        <span onclick="op22();" class="custom-option" value="22">22</span>
                        <span onclick="op23();" class="custom-option" value="23">23</span>
                        <span onclick="op24();" class="custom-option" value="24">24</span>
                        <span onclick="op25();" class="custom-option" value="25">25</span>
                        <span onclick="op26();" class="custom-option" value="26">26</span>
                        <span onclick="op27();" class="custom-option" value="26">27</span>
                        <span onclick="op28();" class="custom-option" value="26">28</span>
                        <span onclick="op29();" class="custom-option" value="26">29</span>
                        <span onclick="op30();" class="custom-option" value="30">30</span>
                        <span onclick="op31();" class="custom-option" value="31">31</span>
                        <span onclick="op32();" class="custom-option" value="32">32</span>
                        <span onclick="op33();" class="custom-option" value="33">33</span>
                        <span onclick="op34();" class="custom-option" value="34">34</span>
                        <span onclick="op35();" class="custom-option" value="35">35</span>
                        <span onclick="op36();" class="custom-option" value="36">36</span>
                        <span onclick="op37();" class="custom-option" value="37">37</span>
                        <span onclick="op38();" class="custom-option" value="38">38</span>
                        <span onclick="op39();" class="custom-option" value="39">39</span>
                        <span onclick="op40();" class="custom-option" value="40">40</span>
                        <span onclick="op41();" class="custom-option" value="41">41</span>
                        <span onclick="op42();" class="custom-option" value="42">42</span>
                        <span onclick="op43();" class="custom-option" value="43">43</span>
                        <span onclick="op44();" class="custom-option" value="44">44</span>
                        <span onclick="op45();" class="custom-option" value="45">45</span>
                        <span onclick="op46();" class="custom-option" value="46">46</span>
                        <span onclick="op47();" class="custom-option" value="47">47</span>
                        <span onclick="op48();" class="custom-option" value="48">48</span>
                        <span onclick="op49();" class="custom-option" value="49">49</span>
                        <span onclick="op50();" class="custom-option" value="50">50</span>
                        <span onclick="op51();" class="custom-option" value="51">51</span>
                        <span onclick="op52();" class="custom-option" value="52">52</span>
                        <span onclick="op53();" class="custom-option" value="53">53</span>
                        <span onclick="op54();" class="custom-option" value="54">54</span>
                        <span onclick="op55();" class="custom-option" value="55">55</span>
                        <span onclick="op56();" class="custom-option" value="56">56</span>
                        <span onclick="op57();" class="custom-option" value="57">57</span>
                        <span onclick="op58();" class="custom-option" value="58">58</span>
                        <span onclick="op59();" class="custom-option" value="59">59</span>
                        <span onclick="op60();" class="custom-option" value="60">60</span>
                        <span onclick="op61();" class="custom-option" value="61">61</span>
                        <span onclick="op62();" class="custom-option" value="62">62</span>
                        <span onclick="op63();" class="custom-option" value="63">63</span>
                        <span onclick="op64();" class="custom-option" value="64">64</span>
                        <span onclick="op65();" class="custom-option" value="65">65</span>
                        <span onclick="op66();" class="custom-option" value="66">66</span>
                        <span onclick="op67();" class="custom-option" value="67">67</span>
                        <span onclick="op68();" class="custom-option" value="68">68</span>
                        <span onclick="op69();" class="custom-option" value="69">69</span>
                        <span onclick="op70();" class="custom-option" value="70">70</span>
                        <span onclick="op71();" class="custom-option" value="71">71</span>
                        <span onclick="op72();" class="custom-option" value="72">72</span>
                        <span onclick="op73();" class="custom-option" value="73">73</span>
                        <span onclick="op74();" class="custom-option" value="74">74</span>
                        <span onclick="op75();" class="custom-option" value="75">75</span>
                        <span onclick="op76();" class="custom-option" value="76">76</span>
                        <span onclick="op77();" class="custom-option" value="77">77</span>
                        <span onclick="op78();" class="custom-option" value="78">78</span>
                        <span onclick="op79();" class="custom-option" value="79">79</span>
                        <span onclick="op80();" class="custom-option" value="80">80</span>
                        <span onclick="op81();" class="custom-option" value="81">81</span>
                        <span onclick="op82();" class="custom-option" value="82">82</span>
                        <span onclick="op83();" class="custom-option" value="83">83</span>
                        <span onclick="op84();" class="custom-option" value="84">84</span>
                        <span onclick="op85();" class="custom-option" value="85">85</span>
                        <span onclick="op86();" class="custom-option" value="86">86</span>
                        <span onclick="op87();" class="custom-option" value="87">87</span>
                        <span onclick="op88();" class="custom-option" value="88">88</span>
                        <span onclick="op89();" class="custom-option" value="89">89</span>
                        <span onclick="op90();" class="custom-option" value="90">90</span>
                        <span onclick="op91();" class="custom-option" value="91">91</span>
                        <span onclick="op92();" class="custom-option" value="92">92</span>
                        <span onclick="op93();" class="custom-option" value="93">93</span>
                        <span onclick="op94();" class="custom-option" value="94">94</span>
                        <span onclick="op95();" class="custom-option" value="95">95</span>
                        <span onclick="op96();" class="custom-option" value="96">96</span>
                        <span onclick="op97();" class="custom-option" value="97">97</span>
                        <span onclick="op98();" class="custom-option" value="98">98</span>
                        <span onclick="op99();" class="custom-option" value="99">99</span>
                        <span onclick="op100();" class="custom-option" value="100">100</span>
                        <span onclick="op101();" class="custom-option" value="101">101</span>
                        <span onclick="op102();" class="custom-option" value="102">102</span>
                        <span onclick="op103();" class="custom-option" value="103">103</span>
                        <span onclick="op104();" class="custom-option" value="104">104</span>
                        <span onclick="op105();" class="custom-option" value="105">105</span>
                        <span onclick="op106();" class="custom-option" value="106">106</span>
                        <span onclick="op107();" class="custom-option" value="107">107</span>
                        <span onclick="op108();" class="custom-option" value="108">108</span>
                        <span onclick="op109();" class="custom-option" value="109">109</span>
                        <span onclick="op110();" class="custom-option" value="110">110</span>
                        <span onclick="op111();" class="custom-option" value="111">111</span>
                        <span onclick="op112();" class="custom-option" value="112">112</span>
                        <span onclick="op113();" class="custom-option" value="113">113</span>
                        <span onclick="op114();" class="custom-option" value="114">114</span>
                        <span onclick="op115();" class="custom-option" value="115">115</span>
                        <span onclick="op116();" class="custom-option" value="116">116</span>
                        <span onclick="op117();" class="custom-option" value="117">117</span>
                        <span onclick="op118();" class="custom-option" value="118">118</span>
                        <span onclick="op119();" class="custom-option" value="119">119</span>
                        <span onclick="op120();" class="custom-option" value="120">120</span>
                        <span onclick="op121();" class="custom-option" value="121">121</span>
                        <span onclick="op122();" class="custom-option" value="122">122</span>
                        <span onclick="op123();" class="custom-option" value="123">123</span>
                        <span onclick="op124();" class="custom-option" value="124">124</span>
                        <span onclick="op125();" class="custom-option" value="125">125</span>
                        <span onclick="op126();" class="custom-option" value="126">126</span>
                        <span onclick="op127();" class="custom-option" value="127">127</span>
                        <span onclick="op128();" class="custom-option" value="128">128</span>
                        <span onclick="op129();" class="custom-option" value="129">129</span>
                        <span onclick="op130();" class="custom-option" value="130">130</span>
                        <span onclick="op131();" class="custom-option" value="131">131</span>
                        <span onclick="op132();" class="custom-option" value="132">132</span>
                        <span onclick="op133();" class="custom-option" value="133">133</span>
                        <span onclick="op134();" class="custom-option" value="134">134</span>
                        <span onclick="op135();" class="custom-option" value="135">135</span>
                        <span onclick="op136();" class="custom-option" value="136">136</span>
                        <span onclick="op137();" class="custom-option" value="137">137</span>
                        <span onclick="op138();" class="custom-option" value="138">138</span>
                        <span onclick="op139();" class="custom-option" value="139">139</span>
                        <span onclick="op140();" class="custom-option" value="140">140</span>
                        <span onclick="op141();" class="custom-option" value="141">141</span>
                        <span onclick="op142();" class="custom-option" value="142">142</span>
                        <span onclick="op143();" class="custom-option" value="143">143</span>
                        <span onclick="op144();" class="custom-option" value="144">144</span>
                        <span onclick="op145();" class="custom-option" value="145">145</span>
                        <span onclick="op146();" class="custom-option" value="146">146</span>
                        <span onclick="op147();" class="custom-option" value="147">147</span>
                        <span onclick="op148();" class="custom-option" value="148">148</span>
                        <span onclick="op149();" class="custom-option" value="149">149</span>
                        <span onclick="op150();" class="custom-option" value="150">150</span>
                        <span onclick="op151();" class="custom-option" value="151">151</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">    

        <section class="mt-30px container">
            <div class="row">
                <p class="col lined selectable-text-area" id="one">
                    1 طوبى للرجل الذي لم يسلك في مشورة الاشرار وفي طريق الخطاة لم يقف وفي مجلس المستهزئين لم يجلس. 2 لكن
                    في
                    ناموس الرب مسرته وفي ناموسه يلهج نهارا وليلا. 3 فيكون كشجرة مغروسة عند مجاري المياه.التي تعطي ثمرها
                    في
                    اوانه.وورقها لا يذبل.وكل ما يصنعه ينجح 4 ليس كذلك الاشرار لكنهم كالعصافة التي تذريها الريح. 5 لذلك
                    لا
                    تقوم الاشرار في الدين ولا الخطاة في جماعة الابرار. 6 لان الرب يعلم طريق الابرار.اما طريق الاشرار
                    فتهلك
                </p>
            </div>
    <div class="content">    
        </section>
        
        
        <div id="app">
            <section class="todo-wrapper">


    <div class="text-right" id="show-mode" dir="rtl" style="color: black;">
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header" style="flex-direction: row-reverse;">
                            <h5 class="modal-title" style="color: black;" id="staticBackdropLabel">MAZMOUR</h5>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body" dir="rtl">
                <div v-if="pending.length > 0">
                    <transition-group name="todo-item" tag="ul" class="todo-list">
                        <li v-for="(item, index) in pending" v-bind:key="item.title">
                            <span class="delete" @click="deleteItem(item)"></span>
                            <span class="todo-text">{{ item.title }}</span>
                        </li>
                        </transition>
                </div>

                <transition name="slide-fade">
                    <p class="status free" v-if="!pending.length"><img src="JESUS2.svg"
                            alt="empty">لم يتم اضافة اي اصحاح الي المفضلة</p>
                </transition>

        </div> 
        </section>
        </section> 
    </div>
    <div class="offcanvas offcanvas-end offcans" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">MAZMOUR</h5>
                <button type="button" class="btn-close text-reset red-mode bg-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body text-center">
                <div class="text-center">
                    <!-- <button class="button-unset border-red navbar-brand" onclick="bell();"><i class="fas fa-bell"></i> التذكير
                    لاحقا</button> -->

                    <form @keydown.enter.prevent=""><p style="cursor: pointer;" class="button-unset border-red navbar-brand" id="addto" v-bind:class="{ active: new_todo }" @click="addItem"><i
                            class="fas fa-star"></i> الاضافة الي المفضلة</p></div></form>
                    <button class="button-unset border-red navbar-brand" type="button" onclick="download();"><i
                            class="fas fa-download"></i> تنزيل السفر</button>
                    <button class="button-unset border-red navbar-brand" id="star-star2" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"><i class="fa-5px fas fa-star"></i>المفضلة</button>
                    <button class="button-unset dark-mode-click navbar-brand border-red" onclick="mode();" id="moon2"><i
                            class="fas fa-moon"></i>الوضع المظلم</button>
                    <button class="button-unset border-red navbar-brand" onclick="modesun();" id="sun2"><i
                            class="fas fa-sun"></i>الوضع الفاتح</button>
                    <button class="button-unset border-red navbar-brand" id="search2"><i
                            class="fa-5px fas fa-search"></i>البحث في السفر</button>
                </div>
                
            </div>
        </div>

                        <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.3/vue.min.js'></script>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script>
        document.body.style.backgroundColor = localStorage.getItem("dark-body-background-color");
        document.body.style.color = localStorage.getItem("dark-body-color");
        document.getElementById("offcanvasRight").classList.add(localStorage.getItem("dark-drop"));
        var all = document.getElementsByClassName('dark-mode-click');
        for (var i = 0; i < all.length; i++) {
            all[i].style.color = localStorage.getItem("dark-mode-pi");
        }
        var all2 = document.getElementsByClassName('border-red');
        for (var i = 0; i < all2.length; i++) {
            all2[i].style.color = localStorage.getItem("border-red");
        }
        document.getElementById("")
        document.getElementById("moon").classList.add(localStorage.getItem("vis-mode"));
        document.getElementById("moon").classList.remove(localStorage.getItem("vis-mode2"));
        document.getElementById("sun").classList.remove(localStorage.getItem("sun-mode2"));
        document.getElementById("sun").classList.add(localStorage.getItem("sun-mode"));
        document.documentElement.style.setProperty('--success--', localStorage.getItem("success"));
        function mode() {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            var all = document.getElementsByClassName('dark-mode-click');
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = 'white';
            }
            var all2 = document.getElementsByClassName('border-red');
            for (var i = 0; i < all2.length; i++) {
                all2[i].style.color = 'white';
            }
            localStorage.setItem("dark-drop", "bg-dark")
            document.getElementById("offcanvasRight").classList.add("bg-dark");
            document.getElementById("moon").classList.add("vis");
            document.getElementById("sun").classList.remove("vis");
            localStorage.setItem("sun-mode", "unvis");
            localStorage.setItem("dark-mode-pi", "white");
            localStorage.setItem("dark-body-background-color", "black");
            localStorage.setItem("dark-body-color", "white");
            localStorage.setItem("border-red", "white");
            localStorage.setItem("vis-mode", "vis");
            localStorage.setItem("sun-mode2", "vis");
            localStorage.setItem("vis-mode2", "unvis");
            localStorage.setItem("custom", "white");
            location.reload();
        }




        function modesun() {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            var all = document.getElementsByClassName('dark-mode-click');
            for (var i = 0; i < all.length; i++) {
                all[i].style.color = 'black';
            }
            var all2 = document.getElementsByClassName('border-red');
            for (var i = 0; i < all2.length; i++) {
                all2[i].style.color = 'black';
            }
            document.getElementById("offcanvasRight").classList.add("bg-white");
            document.getElementById("moon").classList.remove("vis");
            document.getElementById("sun").classList.add("vis");
            localStorage.removeItem('dark-mode-pi');
            localStorage.removeItem('dark-body-background-color');
            localStorage.removeItem('dark-body-color');
            localStorage.removeItem('border-red');
            localStorage.removeItem('dark-drop');
            localStorage.setItem("vis-mode", "unvis");
            localStorage.setItem("sun-mode", "vis");
            localStorage.setItem("sun-mode2", "unvis");
            localStorage.setItem("vis-mode2", "vis");
            localStorage.setItem("custom", "black");
            location.reload();
        }
        const input = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");
        
        const expand = () => {
          searchBtn.classList.toggle("close");
          input.classList.toggle("square");
        };
        
        const selectableTextArea = document.querySelectorAll(".selectable-text-area");
        const twitterShareBtn = document.querySelector("#twitter-share-btn");
        
        selectableTextArea.forEach((elem) => {
          elem.addEventListener("mouseup", selectableTextAreaMouseUp);
        });
        
        twitterShareBtn.addEventListener("click", twitterShareBtnClick);
        
        document.addEventListener("mousedown", documentMouseDown);
        
        function selectableTextAreaMouseUp(event) {
          setTimeout(() => {
            // In order to avoid some weird behavior...
            const selectedText = window.getSelection().toString().trim();
            if (selectedText.length) {
              const x = event.pageX;
              const y = event.pageY;
              const twitterShareBtnWidth = Number(
                getComputedStyle(twitterShareBtn).width.slice(0, -2)
              );
              const twitterShareBtnHeight = Number(
                getComputedStyle(twitterShareBtn).height.slice(0, -2)
              );
        
              if (document.activeElement !== twitterShareBtn) {
                twitterShareBtn.style.left = `${x - twitterShareBtnWidth * 0.5}px`;
                twitterShareBtn.style.top = `${y - twitterShareBtnHeight * 1.25}px`;
                twitterShareBtn.style.display = "block";
                twitterShareBtn.classList.add("btnEntrance");
              } else {
                twitterShareBtn.style.left = `${x - twitterShareBtnWidth * 0.5}px`;
                twitterShareBtn.style.top = `${y - twitterShareBtnHeight * 0.5}px`;
              }
            }
          }, 0);
        }
        
        function documentMouseDown(event) {
          if (
            event.target.id !== "twitter-share-btn" &&
            getComputedStyle(twitterShareBtn).display === "block"
          ) {
            twitterShareBtn.style.display = "none";
            twitterShareBtn.classList.remove("btnEntrance");
            window.getSelection().empty();
          }
        }
        
        function twitterShareBtnClick(event) {
          const selectedText = window.getSelection().toString().trim();
          if (selectedText.length) {
            // General Twitter Share URL: https://twitter.com/intent/tweet?text={title}&url={url}&hashtags={hash_tags}&via={user_id}
            const twitterShareUrl = "https://twitter.com/intent/tweet";
            const text = `${encodeURIComponent(selectedText)}`;
            const currentUrl = encodeURIComponent(window.location.href);
            const hashtags = "helloworld, test, testing";
            const via = "CodingJrney";
            window.open(
              `${twitterShareUrl}?text="${text}"&url=${currentUrl}&hashtags=${hashtags}&via=${via}`
            );
        
            // Alternatively, we could include everything in the "text" field -> more room to customize the tweet:
            // window.open(`${twitterShareUrl}?text="${text}" by @${via} ${hashtags.split(",").map(h => "%23"+h.trim()).join(" ")} ${currentUrl}`);
        
            // We could also specify new window features:
            // const newWindowOptions = "height=400,width=550,top=0,left=0,resizable=yes,scrollbars=yes";
            // window.open(`${twitterShareUrl}?text="${text}"&url=${currentUrl}&hashtags=${hashtags}&via=${via}`, "ShareOnTwitter", newWindowOptions);
          }
        }
        
        document.getElementById("one").innerText =
          localStorage.getItem("words") ||
          "1 طوبى للرجل الذي لم يسلك في مشورة الاشرار وفي طريق الخطاة لم يقف وفي مجلس المستهزئين لم يجلس. 2 لكن في ناموس الرب مسرته وفي ناموسه يلهج نهارا وليلا. 3 فيكون كشجرة مغروسة عند مجاري المياه.التي تعطي ثمرها في اوانه.وورقها لا يذبل.وكل ما يصنعه ينجح 4 ليس كذلك الاشرار لكنهم كالعصافة التي تذريها الريح. 5 لذلك لا تقوم الاشرار في الدين ولا الخطاة في جماعة الابرار. 6 لان الرب يعلم طريق الابرار.اما طريق الاشرار فتهلك";
        document.getElementById("show-ld").innerText =
          localStorage.getItem("count") || 1;
        
        for (const option of document.querySelectorAll(".custom-option")) {
          option.addEventListener("click", function () {
            if (!this.classList.contains("selected")) {
              this.classList.add("selected");
              this.closest(".select").querySelector(
                ".select__trigger span"
              ).textContent = this.textContent;
            }
          });
        }
        
        window.addEventListener("click", function (e) {
          const select = document.querySelector(".select");
          if (!select.contains(e.target)) {
            select.classList.remove("open");
          }
        });
        
        // const granted = (async () => {
        //     let granted = false;
        //     if (Notification.permission === 'granted') {
        //         granted = true;
        //     } else if (Notification.permission !== 'denied') {
        //         let permission = await Notification.requestPermission();
        //         granted = permission === 'granted' ? true : false;
        //     }
        //     return granted;
        // })();
        // const showNotification = (msg) => {
        //     const notification = new Notification('success', {
        //         body: msg,
        //         icon: 'JESUS2.svg'
        //     });
        //     setTimeout(() => {
        //         notification.close();
        //     }, 3 * 1000);
        
        //     notification.onclick = () => {
        //         window.focus();
        //     }
        // }
        // function bell() {
        //     granted && showNotification("ggfhgggggggggggggggggggggggggggggggf"); // short for if (granted) showNotification(...)
        // }
        
        // document.querySelector('.select-wrapper').addEventListener('click', function (){
        //     this.querySelector('.select').classList.toggle('open');
        // })
        for (const dropdown of document.querySelectorAll(".select-wrapper")) {
          dropdown.addEventListener("click", function () {
            this.querySelector(".select").classList.toggle("open");
          });
        }
        
        // window.addEventListener('click', function (e) {
        //     const select = document.querySelector('.select')
        //     if (!select.contains(e.target)) {
        //         select.classList.remove('open');
        //     }
        // });
        
        window.addEventListener("click", function (e) {
          for (const select of document.querySelectorAll(".select")) {
            if (!select.contains(e.target)) {
              select.classList.remove("open");
            }
          }
        });
        
        // function bell() {
        //   function notifyMe() {
        //     if (!("Notification" in window)) {
        //       alert("This browser does not support system notifications");
        //     }
        //     else if (Notification.permission === "granted") {
        //       notify();
        //     }
        //     else if (Notification.permission !== 'denied') {
        //       Notification.requestPermission(function (permission) {
        //         if (permission === "granted") {
        //           notify();
        //         }
        //       });
        //     }
        
        //     function notify() {
        //       setTimeout(() => {new Notification('التذكير بقراءة الاصحاح ' + localStorage.getItem("count"), {
        //         icon: 'JESUS2.svg',
        //       })} , 10000);     notification.onclick = function () {
        //         window.open("INDEX.HTML");
        //       };
        //     }
        
        //   }
        //   notifyMe();
        // }
        new Vue({
          el: ".content",
          data() {
            return {
              todoList: [],
              new_todo: "",
              showComplete: false,
            }
          },
          computed: {},
          mounted() {
            this.getTodos();
          },
          watch: {
            todoList: {
              handler: function (updatedList) {
                localStorage.setItem("todo_list", JSON.stringify(updatedList));
              },
              deep: true,
            },
          },
          computed: {
            pending: function () {
              return this.todoList.filter(function (item) {
                return !item.done;
              });
            },
            completed: function () {
              return this.todoList.filter(function (item) {
                return item.done;
              });
            },
            completedPercentage: function () {
              return (
                Math.floor((this.completed.length / this.todoList.length) * 100) + "%"
              );
            },
            today: function () {
              var weekday = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ];
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth() + 1; //January is 0!
              var yyyy = today.getFullYear();
        
              if (dd < 10) {
                dd = "0" + dd;
              }
        
              if (mm < 10) {
                mm = "0" + mm;
              }
        
              today = {
                day: weekday[today.getDay()],
                date: mm + "-" + dd + "-" + yyyy,
              };
              return today;
            },
          },
          methods: {
            getTodos() {
              if (localStorage.getItem("todo_list")) {
                this.todoList = JSON.parse(localStorage.getItem("todo_list"));
              }
            },
            addItem() {
              if (this.addItem !== localStorage.getItem("todo_list")) {
                    this.todoList.unshift({
                    id: this.todoList.length,
                    title: "الاصحاح " + document.getElementById("show-ld").innerHTML,
                    done: false,
              })
              this.new_todo = "";
              return true;
            }
            },
            deleteItem(item) {
              this.todoList.splice(this.todoList.indexOf(item), 1);
            }
          },
        });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var string = document.getElementById("one").innerHTML;
        var elDemo = document.getElementById("one");
        
        function getPortions(queryString, string) {
          var results = [];
          if (queryString.length > 0) {
            var rgxp = new RegExp("(\\S*)?(" + queryString + ")(\\S*)?", "ig");
            return string.replace(
              rgxp,
              (match) => '<b style="color: #47A6E5;">' + match + "</b>"
            );
          }
          return results;
        }
        
        
        
        
        
        
        
        
        document.getElementById("txt1").addEventListener("input", function () {
          if (!this.value) {
            elDemo.innerHTML = string;
            return;
          }
          var result = getPortions(this.value, string);
          document.getElementById("one").innerHTML = result;
        });
        
        function op1() {
          document.getElementById("show-ld").innerText = "1";
          localStorage.setItem("count", "1");
          document.getElementById("one").innerText = "1 طوبى للرجل الذي لم يسلك في مشورة الاشرار وفي طريق الخطاة لم يقف وفي مجلس المستهزئين لم يجلس. 2 لكن في ناموس الرب مسرته وفي ناموسه يلهج نهارا وليلا. 3 فيكون كشجرة مغروسة عند مجاري المياه.التي تعطي ثمرها في اوانه.وورقها لا يذبل.وكل ما يصنعه ينجح 4 ليس كذلك الاشرار لكنهم كالعصافة التي تذريها الريح. 5 لذلك لا تقوم الاشرار في الدين ولا الخطاة في جماعة الابرار. 6 لان الرب يعلم طريق الابرار.اما طريق الاشرار فتهلك";
            localStorage.setItem(
            "words","1 طوبى للرجل الذي لم يسلك في مشورة الاشرار وفي طريق الخطاة لم يقف وفي مجلس المستهزئين لم يجلس. 2 لكن في ناموس الرب مسرته وفي ناموسه يلهج نهارا وليلا. 3 فيكون كشجرة مغروسة عند مجاري المياه.التي تعطي ثمرها في اوانه.وورقها لا يذبل.وكل ما يصنعه ينجح 4 ليس كذلك الاشرار لكنهم كالعصافة التي تذريها الريح. 5 لذلك لا تقوم الاشرار في الدين ولا الخطاة في جماعة الابرار. 6 لان الرب يعلم طريق الابرار.اما طريق الاشرار فتهلك"
           );
          location.reload();
          document.getElementById("show-ld").innerHTML = "1";
        }
        function op2() {
          document.getElementById("show-ld").innerText = "2";
          localStorage.setItem("count", "2");
          document.getElementById("one").innerText =
            `1 لماذا ارتجت الامم وتفكر الشعوب في الباطل. 2 قام ملوك الارض وتامر الرؤساء معا على الرب وعلى مسيحه قائلين 3 لنقطع قيودهما ولنطرح عنا ربطهما 4 الساكن في السموات يضحك.الرب يستهزئ بهم. 5 حينئذ يتكلم عليهم بغضبه ويرجفهم بغيظه. 6 اما انا فقد مسحت ملكي على صهيون جبل قدسي 7 اني اخبر من جهة قضاء الرب.قال لي انت ابني.انا اليوم ولدتك 8 اسالني فاعطيك الامم ميراثا لك واقاصي الارض ملكا لك. 9 تحطمهم بقضيب من حديد.مثل اناء خزاف تكسرهم 10 فالان يا ايها الملوك تعقلوا.تادبوا يا قضاة الارض. 11 اعبدوا الرب بخوف واهتفوا برعدة. 12 قبلوا الابن لئلا يغضب فتبيدوا من الطريق لانه عن قليل يتقد غضبه.طوبى لجميع المتكلين عليه`;
          localStorage.setItem(
            `words`,
            `1 لماذا ارتجت الامم وتفكر الشعوب في الباطل. 2 قام ملوك الارض وتامر الرؤساء معا على الرب وعلى مسيحه قائلين 3 لنقطع قيودهما ولنطرح عنا ربطهما 4 الساكن في السموات يضحك.الرب يستهزئ بهم. 5 حينئذ يتكلم عليهم بغضبه ويرجفهم بغيظه. 6 اما انا فقد مسحت ملكي على صهيون جبل قدسي 7 اني اخبر من جهة قضاء الرب.قال لي انت ابني.انا اليوم ولدتك 8 اسالني فاعطيك الامم ميراثا لك واقاصي الارض ملكا لك. 9 تحطمهم بقضيب من حديد.مثل اناء خزاف تكسرهم 10 فالان يا ايها الملوك تعقلوا.تادبوا يا قضاة الارض. 11 اعبدوا الرب بخوف واهتفوا برعدة. 12 قبلوا الابن لئلا يغضب فتبيدوا من الطريق لانه عن قليل يتقد غضبه.طوبى لجميع المتكلين عليه`
          );
          location.reload();
          document.getElementById(`show-ld`).innerHTML = `2`;
        }
        function op3() {
          document.getElementById(`show-ld`).innerText = `3`;
          localStorage.setItem(`count`, `3`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود حينما هرب من وجه ابشالوم ابنه.يا رب ما اكثر مضايقي.كثيرون قائمون علي. 2 كثيرون يقولون لنفسي ليس له خلاص بالهه.سلاه 3 اما انت يا رب فترس لي.مجدي ورافع راسي. 4 بصوتي الى الرب اصرخ فيجيبني من جبل قدسه.سلاه 5 انا اضطجعت ونمت.استيقظت لان الرب يعضدني. 6 لا اخاف من ربوات الشعوب المصطفين علي من حولي. 7 قم يا رب.خلصني يا الهي.لانك ضربت كل اعدائي على الفك.هشمت اسنان الاشرار. 8 للرب الخلاص.على شعبك بركتك.سلاه`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود حينما هرب من وجه ابشالوم ابنه.يا رب ما اكثر مضايقي.كثيرون قائمون علي. 2 كثيرون يقولون لنفسي ليس له خلاص بالهه.سلاه 3 اما انت يا رب فترس لي.مجدي ورافع راسي. 4 بصوتي الى الرب اصرخ فيجيبني من جبل قدسه.سلاه 5 انا اضطجعت ونمت.استيقظت لان الرب يعضدني. 6 لا اخاف من ربوات الشعوب المصطفين علي من حولي. 7 قم يا رب.خلصني يا الهي.لانك ضربت كل اعدائي على الفك.هشمت اسنان الاشرار. 8 للرب الخلاص.على شعبك بركتك.سلاه`
          );
          location.reload();
          document.getElementById(`show-ld`).innerHTML = `3`;
        }
        function op4() {
          document.getElementById(`show-ld`).innerText = `4`;
          localStorage.setItem(`count`, `4`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار.مزمور لداود.عند دعائي استجب لي يا اله بري.في الضيق رحبت لي.تراءف علي واسمع صلاتي 2 يا بني البشر حتى متى يكون مجدي عارا.حتى متى تحبون الباطل وتبتغون الكذب.سلاه. 3 فاعلموا ان الرب قد ميز تقيه.الرب يسمع عندما ادعوه. 4 ارتعدوا ولا تخطئوا.تكلموا في قلوبكم على مضاجعكم واسكتوا.سلاه. 5 اذبحوا ذبائح البر وتوكلوا على الرب 6 كثيرون يقولون من يرينا خيرا.ارفع علينا نور وجهك يا رب. 7 جعلت سرورا في قلبي اعظم من سرورهم اذ كثرت حنطتهم وخمرهم. 8 بسلامة اضطجع بل ايضا انام.لانك انت يا رب منفردا في طمانينة تسكنني`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار.مزمور لداود.عند دعائي استجب لي يا اله بري.في الضيق رحبت لي.تراءف علي واسمع صلاتي 2 يا بني البشر حتى متى يكون مجدي عارا.حتى متى تحبون الباطل وتبتغون الكذب.سلاه. 3 فاعلموا ان الرب قد ميز تقيه.الرب يسمع عندما ادعوه. 4 ارتعدوا ولا تخطئوا.تكلموا في قلوبكم على مضاجعكم واسكتوا.سلاه. 5 اذبحوا ذبائح البر وتوكلوا على الرب 6 كثيرون يقولون من يرينا خيرا.ارفع علينا نور وجهك يا رب. 7 جعلت سرورا في قلبي اعظم من سرورهم اذ كثرت حنطتهم وخمرهم. 8 بسلامة اضطجع بل ايضا انام.لانك انت يا رب منفردا في طمانينة تسكنني`
          );
          location.reload();
        }
        function op5() {
          document.getElementById(`show-ld`).innerText = `5`;
          localStorage.setItem(`count`, `5`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات النفخ.مزمور لداود.لكلماتي اصغ يا رب.تامل صراخي. 2 استمع لصوت دعائي يا ملكي والهي لاني اليك اصلي. 3 يا رب بالغداة تسمع صوتي.بالغداة اوجه صلاتي نحوك وانتظر 4 لانك انت لست الها يسر بالشر.لا يساكنك الشرير. 5 لا يقف المفتخرون قدام عينيك.ابغضت كل فاعلي الاثم. 6 تهلك المتكلمين بالكذب.رجل الدماء والغش يكرهه الرب. 7 اما انا فبكثرة رحمتك ادخل بيتك.اسجد في هيكل قدسك بخوفك‏ 8 يا رب اهدني الى برك بسبب اعدائي.سهل قدامي طريقك. 9 لانه ليس في افواههم صدق.جوفهم هوة.حلقهم قبر مفتوح.السنتهم صقلوها. 10 دنهم يا الله.ليسقطوا من مؤامراتهم بكثرة ذنوبهم طوح بهم لانهم تمردوا عليك 11 ويفرح جميع المتكلين عليك.الى الابد يهتفون وتظللهم.ويبتهج بك محبو اسمك. 12 لانك انت تبارك الصديق يا رب.كانه بترس تحيطه بالرضا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات النفخ.مزمور لداود.لكلماتي اصغ يا رب.تامل صراخي. 2 استمع لصوت دعائي يا ملكي والهي لاني اليك اصلي. 3 يا رب بالغداة تسمع صوتي.بالغداة اوجه صلاتي نحوك وانتظر 4 لانك انت لست الها يسر بالشر.لا يساكنك الشرير. 5 لا يقف المفتخرون قدام عينيك.ابغضت كل فاعلي الاثم. 6 تهلك المتكلمين بالكذب.رجل الدماء والغش يكرهه الرب. 7 اما انا فبكثرة رحمتك ادخل بيتك.اسجد في هيكل قدسك بخوفك‏ 8 يا رب اهدني الى برك بسبب اعدائي.سهل قدامي طريقك. 9 لانه ليس في افواههم صدق.جوفهم هوة.حلقهم قبر مفتوح.السنتهم صقلوها. 10 دنهم يا الله.ليسقطوا من مؤامراتهم بكثرة ذنوبهم طوح بهم لانهم تمردوا عليك 11 ويفرح جميع المتكلين عليك.الى الابد يهتفون وتظللهم.ويبتهج بك محبو اسمك. 12 لانك انت تبارك الصديق يا رب.كانه بترس تحيطه بالرضا`
          );
          location.reload();
        }
        function op6() {
          document.getElementById(`show-ld`).innerText = `6`;
          localStorage.setItem(`count`, `6`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار على القرار.مزمور لداود.يا رب لا توبخني بغضبك ولا تؤدبني بغيظك. 2 ارحمني يا رب لاني ضعيف .اشفني يا رب لان عظامي قد رجفت 3 ونفسي قد ارتاعت جدا.وانت يا رب فحتى متى 4 عد يا رب.نج نفسي.خلصني من اجل رحمتك. 5 لانه ليس في الموت ذكرك.في الهاوية من يحمدك. 6 تعبت في تنهدي.اعوم في كل ليلة سريري بدموعي اذوب فراشي. 7 ساخت من الغم عيني.شاخت من كل مضايقي 8 ابعدوا عني يا جميع فاعلي الاثم.لان الرب قد سمع صوت بكائي. 9 سمع الرب تضرعي.الرب يقبل صلاتي. 10 جميع اعدائي يخزون ويرتاعون جدا.يعودون ويخزون بغتة`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار على القرار.مزمور لداود.يا رب لا توبخني بغضبك ولا تؤدبني بغيظك. 2 ارحمني يا رب لاني ضعيف .اشفني يا رب لان عظامي قد رجفت 3 ونفسي قد ارتاعت جدا.وانت يا رب فحتى متى 4 عد يا رب.نج نفسي.خلصني من اجل رحمتك. 5 لانه ليس في الموت ذكرك.في الهاوية من يحمدك. 6 تعبت في تنهدي.اعوم في كل ليلة سريري بدموعي اذوب فراشي. 7 ساخت من الغم عيني.شاخت من كل مضايقي 8 ابعدوا عني يا جميع فاعلي الاثم.لان الرب قد سمع صوت بكائي. 9 سمع الرب تضرعي.الرب يقبل صلاتي. 10 جميع اعدائي يخزون ويرتاعون جدا.يعودون ويخزون بغتة`
          );
          location.reload();
        }
        function op7() {
          document.getElementById(`show-ld`).innerText = `7`;
          localStorage.setItem(`count`, `7`);
          document.getElementById(`one`).innerText =
            `1 شجوية لداود غناها للرب بسبب كلام كوش البنياميني‏.يا رب الهي عليك توكلت.خلصني من كل الذين يطردونني ونجني. 2 لئلا يفترس كاسد نفسي هاشما اياها ولا منقذ 3 يا رب الهي ان كنت قد فعلت هذا ان وجد ظلم في يدي 4 ان كافات مسالمي شرا وسلبت مضايقي بلا سبب 5 فليطارد عدو نفسي وليدركها وليدس الى الارض حياتي وليحط الى التراب مجدي.سلاه 6 قم يا رب بغضبك ارتفع على سخط مضايقي وانتبه لي.بالحق اوصيت. 7 ومجمع القبائل يحيط بك فعد فوقها الى العلى. 8 الرب يدين الشعوب.اقض لي يا رب كحقي ومثل كمالي الذي في. 9 لينته شر الاشرار وثبت الصديق.فان فاحص القلوب والكلى الله البار. 10 ترسي عند الله مخلص مستقيمي القلوب 11 الله قاض عادل واله يسخط في كل يوم. 12 ان لم يرجع يحدد سيفه.مد قوسه وهياها. 13 وسدد نحوه الة الموت.يجعل سهامه ملتهبة 14 هوذا يمخض بالاثم.حمل تعبا وولد كذبا. 15 كرا جبا.حفره فسقط في الهوة التي صنع. 16 يرجع تعبه على راسه وعلى هامته يهبط ظلمه. 17 احمد الرب حسب بره.وارنم لاسم الرب العلي`;
          localStorage.setItem(
            `words`,
            `1 شجوية لداود غناها للرب بسبب كلام كوش البنياميني‏.يا رب الهي عليك توكلت.خلصني من كل الذين يطردونني ونجني. 2 لئلا يفترس كاسد نفسي هاشما اياها ولا منقذ 3 يا رب الهي ان كنت قد فعلت هذا ان وجد ظلم في يدي 4 ان كافات مسالمي شرا وسلبت مضايقي بلا سبب 5 فليطارد عدو نفسي وليدركها وليدس الى الارض حياتي وليحط الى التراب مجدي.سلاه 6 قم يا رب بغضبك ارتفع على سخط مضايقي وانتبه لي.بالحق اوصيت. 7 ومجمع القبائل يحيط بك فعد فوقها الى العلى. 8 الرب يدين الشعوب.اقض لي يا رب كحقي ومثل كمالي الذي في. 9 لينته شر الاشرار وثبت الصديق.فان فاحص القلوب والكلى الله البار. 10 ترسي عند الله مخلص مستقيمي القلوب 11 الله قاض عادل واله يسخط في كل يوم. 12 ان لم يرجع يحدد سيفه.مد قوسه وهياها. 13 وسدد نحوه الة الموت.يجعل سهامه ملتهبة 14 هوذا يمخض بالاثم.حمل تعبا وولد كذبا. 15 كرا جبا.حفره فسقط في الهوة التي صنع. 16 يرجع تعبه على راسه وعلى هامته يهبط ظلمه. 17 احمد الرب حسب بره.وارنم لاسم الرب العلي`
          );
          location.reload();
        }
        function op8() {
          document.getElementById(`show-ld`).innerText = `8`;
          localStorage.setItem(`count`, `8`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على الجتية.مزمور لداود.ايها الرب سيدنا ما امجد اسمك في كل الارض حيث جعلت جلالك فوق السموات. 2 من افواه الاطفال والرضع اسست حمدا بسبب اضدادك لتسكيت عدو ومنتقم 3 اذا ارى سمواتك عمل اصابعك القمر والنجوم التي كونتها 4 فمن هو الانسان حتى تذكره وابن ادم حتى تفتقده. 5 وتنقصه قليلا عن الملائكة وبمجد وبهاء تكلله. 6 تسلطه على اعمال يديك.جعلت كل شيء تحت قدميه. 7 الغنم والبقر جميعا وبهائم البر ايضا. 8 وطيور السماء وسمك البحر السالك في سبل المياه. 9 ايها الرب سيدنا ما امجد اسمك في كل الارض`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على الجتية.مزمور لداود.ايها الرب سيدنا ما امجد اسمك في كل الارض حيث جعلت جلالك فوق السموات. 2 من افواه الاطفال والرضع اسست حمدا بسبب اضدادك لتسكيت عدو ومنتقم 3 اذا ارى سمواتك عمل اصابعك القمر والنجوم التي كونتها 4 فمن هو الانسان حتى تذكره وابن ادم حتى تفتقده. 5 وتنقصه قليلا عن الملائكة وبمجد وبهاء تكلله. 6 تسلطه على اعمال يديك.جعلت كل شيء تحت قدميه. 7 الغنم والبقر جميعا وبهائم البر ايضا. 8 وطيور السماء وسمك البحر السالك في سبل المياه. 9 ايها الرب سيدنا ما امجد اسمك في كل الارض`
          );
          location.reload();
        }
        function op9() {
          document.getElementById(`show-ld`).innerText = `9`;
          localStorage.setItem(`count`, `9`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على موت الابن.مزمور لداود احمد الرب بكل قلبي.احدث بجميع عجائبك. 2 افرح وابتهج بك ارنم لاسمك ايها العلي. 3 عند رجوع اعدائي الى خلف يسقطون ويهلكون من قدام وجهك. 4 لانك اقمت حقي ودعواي.جلست على الكرسي قاضيا عادلا. 5 انتهرت الامم.اهلكت الشرير.محوت اسمهم الى الدهر والابد. 6 العدو تم خرابه الى الابد.وهدمت مدنا.باد ذكره نفسه. 7 اما الرب فالى الدهر يجلس.ثبت للقضاء كرسيه 8 وهو يقضي للمسكونة بالعدل.يدين الشعوب بالاستقامة. 9 ويكون الرب ملجا للمنسحق.ملجا في ازمنة الضيق. 10 ويتكل عليك العارفون اسمك.لانك لم تترك طالبيك يا رب 11 رنموا للرب الساكن في صهيون.اخبروا بين الشعوب بافعاله. 12 لانه مطالب بالدماء.ذكرهم.لم ينس صراخ المساكين 13 ارحمني يا رب.انظر مذلتي من مبغضي يا رافعي من ابواب الموت. 14 لكي احدث بكل تسابيحك في ابواب ابنة صهيون مبتهجا بخلاصك 15 تورطت الامم في الحفرة التي عملوها.في الشبكة التي اخفوها انتشبت ارجلهم. 16 معروف هو الرب.قضاء امضى.الشرير يعلق بعمل يديه.ضرب الاوتار.سلاه 17 الاشرار يرجعون الى الهاوية.كل الامم الناسين الله. 18 لانه لا ينسى المسكين الى الابد.رجاء البائسين لا يخيب الى الدهر. 19 قم يا رب.لا يعتز الانسان.لتحاكم الامم قدامك. 20 يا رب اجعل عليهم رعبا.ليعلم الامم انهم بشر.سلاه`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على موت الابن.مزمور لداود احمد الرب بكل قلبي.احدث بجميع عجائبك. 2 افرح وابتهج بك ارنم لاسمك ايها العلي. 3 عند رجوع اعدائي الى خلف يسقطون ويهلكون من قدام وجهك. 4 لانك اقمت حقي ودعواي.جلست على الكرسي قاضيا عادلا. 5 انتهرت الامم.اهلكت الشرير.محوت اسمهم الى الدهر والابد. 6 العدو تم خرابه الى الابد.وهدمت مدنا.باد ذكره نفسه. 7 اما الرب فالى الدهر يجلس.ثبت للقضاء كرسيه 8 وهو يقضي للمسكونة بالعدل.يدين الشعوب بالاستقامة. 9 ويكون الرب ملجا للمنسحق.ملجا في ازمنة الضيق. 10 ويتكل عليك العارفون اسمك.لانك لم تترك طالبيك يا رب 11 رنموا للرب الساكن في صهيون.اخبروا بين الشعوب بافعاله. 12 لانه مطالب بالدماء.ذكرهم.لم ينس صراخ المساكين 13 ارحمني يا رب.انظر مذلتي من مبغضي يا رافعي من ابواب الموت. 14 لكي احدث بكل تسابيحك في ابواب ابنة صهيون مبتهجا بخلاصك 15 تورطت الامم في الحفرة التي عملوها.في الشبكة التي اخفوها انتشبت ارجلهم. 16 معروف هو الرب.قضاء امضى.الشرير يعلق بعمل يديه.ضرب الاوتار.سلاه 17 الاشرار يرجعون الى الهاوية.كل الامم الناسين الله. 18 لانه لا ينسى المسكين الى الابد.رجاء البائسين لا يخيب الى الدهر. 19 قم يا رب.لا يعتز الانسان.لتحاكم الامم قدامك. 20 يا رب اجعل عليهم رعبا.ليعلم الامم انهم بشر.سلاه`
          );
          location.reload();
        }
        function op10() {
          document.getElementById(`show-ld`).innerText = `10`;
          localStorage.setItem(`count`, `10`);
          document.getElementById(`one`).innerText =
            `1 يا رب لماذا تقف بعيدا.لماذا تختفي في ازمنة الضيق. 2 في كبرياء الشرير يحترق المسكين.يؤخذون بالمؤامرة التي فكروا بها. 3 لان الشرير يفتخر بشهوات نفسه.والخاطف يجدف يهين الرب. 4 الشرير حسب تشامخ انفه يقول لا يطالب.كل افكاره انه لا اله. 5 تثبت سبله في كل حين.عالية احكامك فوقه.كل اعدائه ينفث فيهم. 6 قال في قلبه لا اتزعزع.من دور الى دور بلا سوء. 7 فمه مملوء لعنة وغشا وظلما.تحت لسانه مشقة واثم. 8 يجلس في مكمن الديار في المختفيات يقتل البري.عيناه تراقبان المسكين. 9 يكمن في المختفى كاسد في عريسه.يكمن ليخطف المسكين.يخطف المسكين بجذبه في شبكته. 10 فتنسحق وتنحني وتسقط المساكين ببراثنه. 11 قال في قلبه ان الله قد نسي.حجب وجهه.لا يرى الى الابد 12 قم يا رب.يا الله ارفع يدك.لا تنس المساكين. 13 لماذا اهان الشرير الله.لماذا قال في قلبه لا تطالب. 14 قد رايت لانك تبصر المشقة والغم لتجازي بيدك.اليك يسلم المسكين امره.انت صرت معين اليتيم 15 احطم ذراع الفاجر.والشرير تطلب شره ولا تجده. 16 الرب ملك الى الدهر والابد بادت الامم من ارضه. 17 تاوه الودعاء قد سمعت يا رب.تثبت قلوبهم.تميل اذنك 18 لحق اليتيم والمنسحق لكي لا يعود ايضا يرعبهم انسان من الارض`;
          localStorage.setItem(
            `words`,
            `1 يا رب لماذا تقف بعيدا.لماذا تختفي في ازمنة الضيق. 2 في كبرياء الشرير يحترق المسكين.يؤخذون بالمؤامرة التي فكروا بها. 3 لان الشرير يفتخر بشهوات نفسه.والخاطف يجدف يهين الرب. 4 الشرير حسب تشامخ انفه يقول لا يطالب.كل افكاره انه لا اله. 5 تثبت سبله في كل حين.عالية احكامك فوقه.كل اعدائه ينفث فيهم. 6 قال في قلبه لا اتزعزع.من دور الى دور بلا سوء. 7 فمه مملوء لعنة وغشا وظلما.تحت لسانه مشقة واثم. 8 يجلس في مكمن الديار في المختفيات يقتل البري.عيناه تراقبان المسكين. 9 يكمن في المختفى كاسد في عريسه.يكمن ليخطف المسكين.يخطف المسكين بجذبه في شبكته. 10 فتنسحق وتنحني وتسقط المساكين ببراثنه. 11 قال في قلبه ان الله قد نسي.حجب وجهه.لا يرى الى الابد 12 قم يا رب.يا الله ارفع يدك.لا تنس المساكين. 13 لماذا اهان الشرير الله.لماذا قال في قلبه لا تطالب. 14 قد رايت لانك تبصر المشقة والغم لتجازي بيدك.اليك يسلم المسكين امره.انت صرت معين اليتيم 15 احطم ذراع الفاجر.والشرير تطلب شره ولا تجده. 16 الرب ملك الى الدهر والابد بادت الامم من ارضه. 17 تاوه الودعاء قد سمعت يا رب.تثبت قلوبهم.تميل اذنك 18 لحق اليتيم والمنسحق لكي لا يعود ايضا يرعبهم انسان من الارض`
          );
          location.reload();
        }
        function op11() {
          document.getElementById(`show-ld`).innerText = `11`;
          localStorage.setItem(`count`, `11`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لداود.على الرب توكلت.كيف تقولون لنفسي اهربوا الى جبالكم كعصفور. 2 لانه هوذا الاشرار يمدون القوس.فوقوا السهم في الوتر ليرموا في الدجى مستقيمي القلوب. 3 اذا انقلبت الاعمدة فالصديق ماذا يفعل 4 الرب في هيكل قدسه.الرب في السماء كرسيه.عيناه تنظران اجفانه تمتحن بني ادم. 5 الرب يمتحن الصديق.اما الشرير ومحب الظلم فتبغضه نفسه. 6 يمطر على الاشرار فخاخا نارا وكبريتا وريح السموم نصيب كاسهم. 7 لان الرب عادل ويحب العدل.المستقيم يبصر وجهه`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لداود.على الرب توكلت.كيف تقولون لنفسي اهربوا الى جبالكم كعصفور. 2 لانه هوذا الاشرار يمدون القوس.فوقوا السهم في الوتر ليرموا في الدجى مستقيمي القلوب. 3 اذا انقلبت الاعمدة فالصديق ماذا يفعل 4 الرب في هيكل قدسه.الرب في السماء كرسيه.عيناه تنظران اجفانه تمتحن بني ادم. 5 الرب يمتحن الصديق.اما الشرير ومحب الظلم فتبغضه نفسه. 6 يمطر على الاشرار فخاخا نارا وكبريتا وريح السموم نصيب كاسهم. 7 لان الرب عادل ويحب العدل.المستقيم يبصر وجهه`
          );
          location.reload();
        }
        function op12() {
          document.getElementById(`show-ld`).innerText = `12`;
          localStorage.setItem(`count`, `12`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على القرار.مزمور لداود.خلص يا رب لانه قد انقرض التقي لانه قد انقطع الامناء من بني البشر. 2 يتكلمون بالكذب كل واحد مع صاحبه بشفاه ملقة بقلب فقلب يتكلمون. 3 يقطع الرب جميع الشفاه الملقة واللسان المتكلم بالعظائم 4 الذين قالوا بالسنتنا نتجبر.شفاهنا معنا من هو سيد علينا 5 من اغتصاب المساكين من صرخة البائسين الان اقوم يقول الرب.اجعل في وسع الذي ينفث فيه 6 كلام الرب كلام نقي كفضة مصفاه في بوطة في الارض ممحوصة سبع مرات. 7 انت يا رب تحفظهم.تحرسهم من هذا الجيل الى الدهر. 8 الاشرار يتمشون من كل ناحية عند ارتفاع الارذال بين الناس`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على القرار.مزمور لداود.خلص يا رب لانه قد انقرض التقي لانه قد انقطع الامناء من بني البشر. 2 يتكلمون بالكذب كل واحد مع صاحبه بشفاه ملقة بقلب فقلب يتكلمون. 3 يقطع الرب جميع الشفاه الملقة واللسان المتكلم بالعظائم 4 الذين قالوا بالسنتنا نتجبر.شفاهنا معنا من هو سيد علينا 5 من اغتصاب المساكين من صرخة البائسين الان اقوم يقول الرب.اجعل في وسع الذي ينفث فيه 6 كلام الرب كلام نقي كفضة مصفاه في بوطة في الارض ممحوصة سبع مرات. 7 انت يا رب تحفظهم.تحرسهم من هذا الجيل الى الدهر. 8 الاشرار يتمشون من كل ناحية عند ارتفاع الارذال بين الناس`
          );
          location.reload();
        }
        function op13() {
          document.getElementById(`show-ld`).innerText = `13`;
          localStorage.setItem(`count`, `13`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.الى متى يا رب تنساني كل النسيان.الى متى تحجب وجهك عني. 2 الى متى اجعل هموما في نفسي وحزنا في قلبي كل يوم.الى متى يرتفع عدوي علي. 3 انظر واستجب لي يا رب الهي.انر عيني لئلا انام نوم الموت. 4 لئلا يقول عدوي قد قويت عليه.لئلا يهتف مضايقي باني تزعزعت 5 اما انا فعلى رحمتك توكلت.يبتهج قلبي بخلاصك. 6 اغني للرب لانه احسن الي`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.الى متى يا رب تنساني كل النسيان.الى متى تحجب وجهك عني. 2 الى متى اجعل هموما في نفسي وحزنا في قلبي كل يوم.الى متى يرتفع عدوي علي. 3 انظر واستجب لي يا رب الهي.انر عيني لئلا انام نوم الموت. 4 لئلا يقول عدوي قد قويت عليه.لئلا يهتف مضايقي باني تزعزعت 5 اما انا فعلى رحمتك توكلت.يبتهج قلبي بخلاصك. 6 اغني للرب لانه احسن الي`
          );
          location.reload();
        }
        function op14() {
          document.getElementById(`show-ld`).innerText = `14`;
          localStorage.setItem(`count`, `14`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لداود.قال الجاهل في قلبه ليس اله.فسدوا ورجسوا بافعالهم.ليس من يعمل صلاحا. 2 الرب من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله. 3 الكل قد زاغوا معا فسدوا.ليس من يعمل صلاحا ليس ولا واحد 4 الم يعلم كل فاعلي الاثم الذين ياكلون شعبي كما ياكلون الخبز والرب لم يدعوا. 5 هناك خافوا خوفا لان الله في الجيل البار. 6 راي المسكين ناقضتم لان الرب ملجاه. 7 ليت من صهيون خلاص اسرائيل.عند رد الرب سبي شعبه يهتف يعقوب ويفرح اسرائيل`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لداود.قال الجاهل في قلبه ليس اله.فسدوا ورجسوا بافعالهم.ليس من يعمل صلاحا. 2 الرب من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله. 3 الكل قد زاغوا معا فسدوا.ليس من يعمل صلاحا ليس ولا واحد 4 الم يعلم كل فاعلي الاثم الذين ياكلون شعبي كما ياكلون الخبز والرب لم يدعوا. 5 هناك خافوا خوفا لان الله في الجيل البار. 6 راي المسكين ناقضتم لان الرب ملجاه. 7 ليت من صهيون خلاص اسرائيل.عند رد الرب سبي شعبه يهتف يعقوب ويفرح اسرائيل`
          );
          location.reload();
        }
        function op15() {
          document.getElementById(`show-ld`).innerText = `15`;
          localStorage.setItem(`count`, `15`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود.يا رب من ينزل في مسكنك.من يسكن في جبل قدسك. 2 السالك بالكمال والعامل الحق والمتكلم بالصدق في قلبه. 3 الذي لا يشي بلسانه ولا يصنع شرا بصاحبه ولا يحمل تعييرا على قريبه. 4 والرذيل محتقر في عينيه ويكرم خائفي الرب.يحلف للضرر ولا يغير‏ 5 فضته لا يعطيها بالربا ولا ياخذ الرشوة على البريء.الذي يصنع هذا لا يتزعزع الى الدهر`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود.يا رب من ينزل في مسكنك.من يسكن في جبل قدسك. 2 السالك بالكمال والعامل الحق والمتكلم بالصدق في قلبه. 3 الذي لا يشي بلسانه ولا يصنع شرا بصاحبه ولا يحمل تعييرا على قريبه. 4 والرذيل محتقر في عينيه ويكرم خائفي الرب.يحلف للضرر ولا يغير‏ 5 فضته لا يعطيها بالربا ولا ياخذ الرشوة على البريء.الذي يصنع هذا لا يتزعزع الى الدهر`
          );
          location.reload();
        }
        function op16() {
          document.getElementById(`show-ld`).innerText = `16`;
          localStorage.setItem(`count`, `16`);
          document.getElementById(`one`).innerText =
            `1 مذهبة لداود.احفظني يا الله لاني عليك توكلت. 2 قلت للرب انت سيدي.خيري لا شيء غيرك. 3 القديسون الذين في الارض والافاضل كل مسرتي بهم. 4 تكثر اوجاعهم الذين اسرعوا وراء اخر.لا اسكب سكائبهم من دم.ولا اذكر اسماءهم بشفتي. 5 الرب نصيب قسمتي وكاسي.انت قابض قرعتي. 6 حبال وقعت لي في النعماء.فالميراث حسن عندي 7 ابارك الرب الذي نصحني.وايضا بالليل تنذرني كليتاي. 8 جعلت الرب امامي في كل حين.لانه عن يميني فلا اتزعزع. 9 لذلك فرح قلبي وابتهجت روحي.جسدي ايضا يسكن مطمئنا. 10 لانك لن تترك نفسي في الهاوية.لن تدع تقيك يرى فسادا. 11 تعرفني سبيل الحياة.امامك شبع سرور.في يمينك نعم الى الابد`;
          localStorage.setItem(
            `words`,
            `1 مذهبة لداود.احفظني يا الله لاني عليك توكلت. 2 قلت للرب انت سيدي.خيري لا شيء غيرك. 3 القديسون الذين في الارض والافاضل كل مسرتي بهم. 4 تكثر اوجاعهم الذين اسرعوا وراء اخر.لا اسكب سكائبهم من دم.ولا اذكر اسماءهم بشفتي. 5 الرب نصيب قسمتي وكاسي.انت قابض قرعتي. 6 حبال وقعت لي في النعماء.فالميراث حسن عندي 7 ابارك الرب الذي نصحني.وايضا بالليل تنذرني كليتاي. 8 جعلت الرب امامي في كل حين.لانه عن يميني فلا اتزعزع. 9 لذلك فرح قلبي وابتهجت روحي.جسدي ايضا يسكن مطمئنا. 10 لانك لن تترك نفسي في الهاوية.لن تدع تقيك يرى فسادا. 11 تعرفني سبيل الحياة.امامك شبع سرور.في يمينك نعم الى الابد`
          );
          location.reload();
        }
        function op17() {
          document.getElementById(`show-ld`).innerText = `17`;
          localStorage.setItem(`count`, `17`);
          document.getElementById(`one`).innerText =
            `1 صلاة لداود.اسمع يا رب للحق.انصت الى صراخي اصغ الى صلاتي من شفتين بلا غش. 2 من قدامك يخرج قضائي.عيناك تنظران المستقيمات. 3 جربت قلبي تعهدته ليلا.محصتني.لا تجد في ذموما.لا يتعدى فمي. 4 من جهة اعمال الناس فبكلام شفتيك انا تحفظت من طرق المعتنف‏. 5 تمسكت خطواتي باثارك فما زلت قدماي 6 انا دعوتك لانك تستجيب لي يا الله.امل اذنك الي.اسمع كلامي 7 ميز مراحمك يا مخلص المتكلين عليك بيمينك من المقاومين. 8 احفظني مثل حدقة العين.بظل جناحيك استرني 9 من وجه الاشرار الذين يخربونني اعدائي بالنفس الذين يكتنفونني. 10 قلبهم السمين قد اغلقوا.بافواههم قد تكلموا بالكبرياء. 11 في خطواتنا الان قد احاطوا بنا.نصبوا اعينهم ليزلقونا الى الارض. 12 مثله مثل الاسد القرم الى الافتراس وكالشبل الكامن في عريسه 13 قم يا رب تقدمه.اصرعه.نج نفسي من الشرير بسيفك 14 من الناس بيدك يا رب من اهل الدنيا.نصيبهم في حياتهم.بذخائرك تملا بطونهم.يشبعون اولادا ويتركون فضالتهم لاطفالهم. 15 اما انا فبالبر انظر وجهك.اشبع اذا استيقظت بشبهك`;
          localStorage.setItem(
            `words`,
            `1 صلاة لداود.اسمع يا رب للحق.انصت الى صراخي اصغ الى صلاتي من شفتين بلا غش. 2 من قدامك يخرج قضائي.عيناك تنظران المستقيمات. 3 جربت قلبي تعهدته ليلا.محصتني.لا تجد في ذموما.لا يتعدى فمي. 4 من جهة اعمال الناس فبكلام شفتيك انا تحفظت من طرق المعتنف‏. 5 تمسكت خطواتي باثارك فما زلت قدماي 6 انا دعوتك لانك تستجيب لي يا الله.امل اذنك الي.اسمع كلامي 7 ميز مراحمك يا مخلص المتكلين عليك بيمينك من المقاومين. 8 احفظني مثل حدقة العين.بظل جناحيك استرني 9 من وجه الاشرار الذين يخربونني اعدائي بالنفس الذين يكتنفونني. 10 قلبهم السمين قد اغلقوا.بافواههم قد تكلموا بالكبرياء. 11 في خطواتنا الان قد احاطوا بنا.نصبوا اعينهم ليزلقونا الى الارض. 12 مثله مثل الاسد القرم الى الافتراس وكالشبل الكامن في عريسه 13 قم يا رب تقدمه.اصرعه.نج نفسي من الشرير بسيفك 14 من الناس بيدك يا رب من اهل الدنيا.نصيبهم في حياتهم.بذخائرك تملا بطونهم.يشبعون اولادا ويتركون فضالتهم لاطفالهم. 15 اما انا فبالبر انظر وجهك.اشبع اذا استيقظت بشبهك`
          );
          location.reload();
        }
        function op18() {
          document.getElementById(`show-ld`).innerText = `18`;
          localStorage.setItem(`count`, `18`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لعبد الرب داود الذي كلم الرب بكلام هذا النشيد في اليوم الذي انقذه فيه الرب من ايدي كل اعدائه ومن يد شاول.فقال احبك يا رب يا قوتي. 2 الرب صخرتي وحصني ومنقذي.الهي صخرتي به احتمي.ترسي وقرن خلاصي وملجاي. 3 ادعوا الرب الحميد فاتخلص من اعدائي. 4 اكتنفتني حبال الموت.وسيول الهلاك افزعتني. 5 حبال الهاوية حاقت بي.اشراك الموت انتشبت بي. 6 في ضيقي دعوت الرب والى الهي صرخت.فسمع من هيكله صوتي وصراخي قدامه دخل اذنيه. 7 فارتجت الارض وارتعشت اسس الجبال ارتعدت وارتجت لانه غضب. 8 صعد دخان من انفه ونار من فمه اكلت.جمر اشتعلت منه. 9 طاطا السموات ونزل وضباب تحت رجليه. 10 ركب على كروب وطار وهف على اجنحة الرياح. 11 جعل الظلمة ستره حوله مظلته ضباب المياه وظلام الغمام. 12 من الشعاع قدامه عبرت سحبه.برد وجمر نار‏. 13 ارعد الرب من السموات والعلي اعطى صوته بردا وجمر نار. 14 ارسل سهامه فشتتهم وبروقا كثيرة فازعجهم. 15 فظهرت اعماق المياه وانكشفت اسس المسكونة من زجرك يا رب من نسمة ريح انفك. 16 ارسل من العلى فاخذني.نشلني من مياه كثيرة. 17 انقذني من عدوي القوي ومن مبغضي لانهم اقوى مني. 18 اصابوني في يوم بليتي وكان الرب سندي. 19 اخرجني الى الرحب.خلصني لانه سر بي. 20 يكافئني الرب حسب بري.حسب طهارة يدي يرد لي. 21 لاني حفظت طرق الرب ولم اعص الهي. 22 لان جميع احكامه امامي وفرائضه لم ابعدها عن نفسي. 23 واكون كاملا معه واتحفظ من اثمي. 24 فيرد الرب لي كبري وكطهارة يدي امام عينيه 25 مع الرحيم تكون رحيما.مع الرجل الكامل تكون كاملا. 26 مع الطاهر تكون طاهرا ومع الاعوج تكون ملتويا. 27 لانك انت تخلص الشعب البائس والاعين المرتفعة تضعها. 28 لانك انت تضيء سراجي.الرب الهي ينير ظلمتي. 29 لاني بك اقتحمت جيشا وبالهي تسورت اسوارا. 30 الله طريقه كامل.قول الرب نقي.ترس هو لجميع المحتمين به. 31 لانه من هو اله غير الرب.ومن هو صخرة سوى الهنا‏ 32 الاله الذي ينطقني بالقوة ويصير طريقي كاملا 33 الذي يجعل رجلي كالايل وعلى مرتفعاتي يقيمني. 34 الذي يعلم يدي القتال فتحنى بذراعي قوس من نحاس. 35 وتجعل لي ترس خلاصك ويمينك تعضدني ولطفك يعظمني. 36 توسع خطواتي تحتي فلم تتقلقل عقباي. 37 اتبع اعدائي فادركهم ولا ارجع حتى افنيهم. 38 اسحقهم فلا يستطيعون القيام.يسقطون تحت رجلي 39 تنطقني بقوة للقتال.تصرع تحتي القائمين علي. 40 وتعطيني اقفية اعدائي ومبغضي افنيهم. 41 يصرخون ولا مخلص.الى الرب فلا يستجيب لهم. 42 فاسحقهم كالغبار قدام الريح.مثل طين الاسواق اطرحهم. 43 تنقذني من مخاصمات الشعب.تجعلني راسا للامم.شعب لم اعرفه يتعبد لي. 44 من سماع الاذن يسمعون لي.بنو الغرباء يتذللون لي. 45 بنو الغرباء يبلون ويزحفون من حصونهم. 46 حي هو الرب ومبارك صخرتي ومرتفع اله خلاصي 47 الاله المنتقم لي والذي يخضع الشعوب تحتي 48 منجي من اعدائي.رافعي ايضا فوق القائمين علي.من الرجل الظالم تنقذني. 49 لذلك احمدك يا رب في الامم وارنم لاسمك. 50 برج خلاص لملكه والصانع رحمة لمسيحه لداود ونسله الى الابد‏`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لعبد الرب داود الذي كلم الرب بكلام هذا النشيد في اليوم الذي انقذه فيه الرب من ايدي كل اعدائه ومن يد شاول.فقال احبك يا رب يا قوتي. 2 الرب صخرتي وحصني ومنقذي.الهي صخرتي به احتمي.ترسي وقرن خلاصي وملجاي. 3 ادعوا الرب الحميد فاتخلص من اعدائي. 4 اكتنفتني حبال الموت.وسيول الهلاك افزعتني. 5 حبال الهاوية حاقت بي.اشراك الموت انتشبت بي. 6 في ضيقي دعوت الرب والى الهي صرخت.فسمع من هيكله صوتي وصراخي قدامه دخل اذنيه. 7 فارتجت الارض وارتعشت اسس الجبال ارتعدت وارتجت لانه غضب. 8 صعد دخان من انفه ونار من فمه اكلت.جمر اشتعلت منه. 9 طاطا السموات ونزل وضباب تحت رجليه. 10 ركب على كروب وطار وهف على اجنحة الرياح. 11 جعل الظلمة ستره حوله مظلته ضباب المياه وظلام الغمام. 12 من الشعاع قدامه عبرت سحبه.برد وجمر نار‏. 13 ارعد الرب من السموات والعلي اعطى صوته بردا وجمر نار. 14 ارسل سهامه فشتتهم وبروقا كثيرة فازعجهم. 15 فظهرت اعماق المياه وانكشفت اسس المسكونة من زجرك يا رب من نسمة ريح انفك. 16 ارسل من العلى فاخذني.نشلني من مياه كثيرة. 17 انقذني من عدوي القوي ومن مبغضي لانهم اقوى مني. 18 اصابوني في يوم بليتي وكان الرب سندي. 19 اخرجني الى الرحب.خلصني لانه سر بي. 20 يكافئني الرب حسب بري.حسب طهارة يدي يرد لي. 21 لاني حفظت طرق الرب ولم اعص الهي. 22 لان جميع احكامه امامي وفرائضه لم ابعدها عن نفسي. 23 واكون كاملا معه واتحفظ من اثمي. 24 فيرد الرب لي كبري وكطهارة يدي امام عينيه 25 مع الرحيم تكون رحيما.مع الرجل الكامل تكون كاملا. 26 مع الطاهر تكون طاهرا ومع الاعوج تكون ملتويا. 27 لانك انت تخلص الشعب البائس والاعين المرتفعة تضعها. 28 لانك انت تضيء سراجي.الرب الهي ينير ظلمتي. 29 لاني بك اقتحمت جيشا وبالهي تسورت اسوارا. 30 الله طريقه كامل.قول الرب نقي.ترس هو لجميع المحتمين به. 31 لانه من هو اله غير الرب.ومن هو صخرة سوى الهنا‏ 32 الاله الذي ينطقني بالقوة ويصير طريقي كاملا 33 الذي يجعل رجلي كالايل وعلى مرتفعاتي يقيمني. 34 الذي يعلم يدي القتال فتحنى بذراعي قوس من نحاس. 35 وتجعل لي ترس خلاصك ويمينك تعضدني ولطفك يعظمني. 36 توسع خطواتي تحتي فلم تتقلقل عقباي. 37 اتبع اعدائي فادركهم ولا ارجع حتى افنيهم. 38 اسحقهم فلا يستطيعون القيام.يسقطون تحت رجلي 39 تنطقني بقوة للقتال.تصرع تحتي القائمين علي. 40 وتعطيني اقفية اعدائي ومبغضي افنيهم. 41 يصرخون ولا مخلص.الى الرب فلا يستجيب لهم. 42 فاسحقهم كالغبار قدام الريح.مثل طين الاسواق اطرحهم. 43 تنقذني من مخاصمات الشعب.تجعلني راسا للامم.شعب لم اعرفه يتعبد لي. 44 من سماع الاذن يسمعون لي.بنو الغرباء يتذللون لي. 45 بنو الغرباء يبلون ويزحفون من حصونهم. 46 حي هو الرب ومبارك صخرتي ومرتفع اله خلاصي 47 الاله المنتقم لي والذي يخضع الشعوب تحتي 48 منجي من اعدائي.رافعي ايضا فوق القائمين علي.من الرجل الظالم تنقذني. 49 لذلك احمدك يا رب في الامم وارنم لاسمك. 50 برج خلاص لملكه والصانع رحمة لمسيحه لداود ونسله الى الابد‏`
          );
          location.reload();
        }
        function op19() {
          document.getElementById(`show-ld`).innerText = `19`;
          localStorage.setItem(`count`, `19`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.السموات تحدث بمجد الله.والفلك يخبر بعمل يديه. 2 يوم الى يوم يذيع كلاما وليل الى ليل يبدي علما. 3 لا قول ولا كلام.لا يسمع صوتهم. 4 في كل الارض خرج منطقهم والى اقصى المسكونة كلماتهم.جعل للشمس مسكنا فيها 5 وهي مثل العروس الخارج من حجلته.يبتهج مثل الجبار للسباق في الطريق. 6 من اقصى السموات خروجها ومدارها الى اقاصيها ولا شيء يختفي من حرها 7 ناموس الرب كامل يرد النفس.شهادات الرب صادقة تصير الجاهل حكيما. 8 وصايا الرب مستقيمة تفرح القلب.امر الرب طاهر ينير العينين. 9 خوف الرب نقي ثابت الى الابد.احكام الرب حق عادلة كلها. 10 اشهى من الذهب والابريز الكثير واحلى من العسل وقطر الشهاد. 11 ايضا عبدك يحذر بها وفي حفظها ثواب عظيم. 12 السهوات من يشعر بها.من الخطايا المستترة ابرئني 13 ايضا من المتكبرين احفظ عبدك فلا يتسلطوا علي.حينئذ اكون كاملا واتبرا من ذنب عظيم. 14 لتكن اقوال فمي وفكر قلبي مرضية امامك يا رب صخرتي ووليي`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.السموات تحدث بمجد الله.والفلك يخبر بعمل يديه. 2 يوم الى يوم يذيع كلاما وليل الى ليل يبدي علما. 3 لا قول ولا كلام.لا يسمع صوتهم. 4 في كل الارض خرج منطقهم والى اقصى المسكونة كلماتهم.جعل للشمس مسكنا فيها 5 وهي مثل العروس الخارج من حجلته.يبتهج مثل الجبار للسباق في الطريق. 6 من اقصى السموات خروجها ومدارها الى اقاصيها ولا شيء يختفي من حرها 7 ناموس الرب كامل يرد النفس.شهادات الرب صادقة تصير الجاهل حكيما. 8 وصايا الرب مستقيمة تفرح القلب.امر الرب طاهر ينير العينين. 9 خوف الرب نقي ثابت الى الابد.احكام الرب حق عادلة كلها. 10 اشهى من الذهب والابريز الكثير واحلى من العسل وقطر الشهاد. 11 ايضا عبدك يحذر بها وفي حفظها ثواب عظيم. 12 السهوات من يشعر بها.من الخطايا المستترة ابرئني 13 ايضا من المتكبرين احفظ عبدك فلا يتسلطوا علي.حينئذ اكون كاملا واتبرا من ذنب عظيم. 14 لتكن اقوال فمي وفكر قلبي مرضية امامك يا رب صخرتي ووليي`
          );
          location.reload();
        }
        function op20() {
          document.getElementById(`show-ld`).innerText = `20`;
          localStorage.setItem(`count`, `20`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.ليستجب لك الرب في يوم الضيق.ليرفعك اسم اله يعقوب. 2 ليرسل لك عونا من قدسه ومن صهيون ليعضدك. 3 ليذكر كل تقدماتك ويستسمن محرقاتك.سلاه. 4 ليعطك حسب قلبك ويتمم كل رايك. 5 نترنم بخلاصك وباسم الهنا نرفع رايتنا.ليكمل الرب كل سؤلك 6 الان عرفت ان الرب مخلص مسيحه يستجيبه من سماء قدسه بجبروت خلاص يمينه. 7 هؤلاء بالمركبات وهؤلاء بالخيل.اما نحن فاسم الرب الهنا نذكر 8 هم جثوا وسقطوا اما نحن فقمنا وانتصبنا. 9 يا رب خلص.ليستجب لنا الملك في يوم دعائنا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.ليستجب لك الرب في يوم الضيق.ليرفعك اسم اله يعقوب. 2 ليرسل لك عونا من قدسه ومن صهيون ليعضدك. 3 ليذكر كل تقدماتك ويستسمن محرقاتك.سلاه. 4 ليعطك حسب قلبك ويتمم كل رايك. 5 نترنم بخلاصك وباسم الهنا نرفع رايتنا.ليكمل الرب كل سؤلك 6 الان عرفت ان الرب مخلص مسيحه يستجيبه من سماء قدسه بجبروت خلاص يمينه. 7 هؤلاء بالمركبات وهؤلاء بالخيل.اما نحن فاسم الرب الهنا نذكر 8 هم جثوا وسقطوا اما نحن فقمنا وانتصبنا. 9 يا رب خلص.ليستجب لنا الملك في يوم دعائنا`
          );
          location.reload();
        }
        function op21() {
          document.getElementById(`show-ld`).innerText = `21`;
          localStorage.setItem(`count`, `21`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.يا رب بقوتك يفرح الملك وبخلاصك كيف لا يبتهج جدا. 2 شهوة قلبه اعطيته وملتمس شفتيه لم تمنعه.سلاه. 3 لانك تتقدمه ببركات خير.وضعت على راسه تاجا من ابريز. 4 حياة سالك فاعطيته.طول الايام الى الدهر والابد. 5 عظيم مجده بخلاصك جلالا وبهاء تضع عليه. 6 لانك جعلته بركات الى الابد.تفرحه ابتهاجا امامك. 7 لان الملك يتوكل على الرب.وبنعمة العلي لا يتزعزع 8 تصيب يدك جميع اعدائك.يمينك تصيب كل مبغضيك. 9 تجعلهم مثل تنور نار في زمان حضورك.الرب بسخطه يبتلعهم وتاكلهم النار. 10 تبيد ثمرهم من الارض وذريتهم من بين بني ادم. 11 لانهم نصبوا عليك شرا.تفكروا بمكيدة.لم يستطيعوها. 12 لانك تجعلهم يتولون.تفوق السهام على اوتارك تلقاء وجوههم. 13 ارتفع يا رب بقوتك.نرنم وننغم بجبروتك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.يا رب بقوتك يفرح الملك وبخلاصك كيف لا يبتهج جدا. 2 شهوة قلبه اعطيته وملتمس شفتيه لم تمنعه.سلاه. 3 لانك تتقدمه ببركات خير.وضعت على راسه تاجا من ابريز. 4 حياة سالك فاعطيته.طول الايام الى الدهر والابد. 5 عظيم مجده بخلاصك جلالا وبهاء تضع عليه. 6 لانك جعلته بركات الى الابد.تفرحه ابتهاجا امامك. 7 لان الملك يتوكل على الرب.وبنعمة العلي لا يتزعزع 8 تصيب يدك جميع اعدائك.يمينك تصيب كل مبغضيك. 9 تجعلهم مثل تنور نار في زمان حضورك.الرب بسخطه يبتلعهم وتاكلهم النار. 10 تبيد ثمرهم من الارض وذريتهم من بين بني ادم. 11 لانهم نصبوا عليك شرا.تفكروا بمكيدة.لم يستطيعوها. 12 لانك تجعلهم يتولون.تفوق السهام على اوتارك تلقاء وجوههم. 13 ارتفع يا رب بقوتك.نرنم وننغم بجبروتك`
          );
          location.reload();
        }
        function op22() {
          document.getElementById(`show-ld`).innerText = `22`;
          localStorage.setItem(`count`, `22`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ايلة الصبح.مزمور لداود.الهي الهي لماذا تركتني.بعيدا عن خلاصي عن كلام زفيري. 2 الهي في النهار ادعو فلا تستجيب في الليل ادعو فلا هدوء لي. 3 وانت القدوس الجالس بين تسبيحات اسرائيل 4 عليك اتكل اباؤنا.اتكلوا فنجيتهم. 5 اليك صرخوا فنجوا.عليك اتكلوا فلم يخزوا. 6 اما انا فدودة لا انسان.عار عند البشر ومحتقر الشعب. 7 كل الذين يرونني يستهزئون بي.يفغرون الشفاه وينغضون الراس قائلين 8 اتكل على الرب فلينجه.لينقذه لانه سر به. 9 لانك انت جذبتني من البطن.جعلتني مطمئنا على ثديي امي. 10 عليك القيت من الرحم.من بطن امي انت الهي. 11 لا تتباعد عني لان الضيق قريب.لانه لا معين 12 احاطت بي ثيران كثيرة.اقوياء باشان اكتنفتني. 13 فغروا علي افواههم كاسد مفترس مزمجر. 14 كالماء انسكبت.انفصلت كل عظامي.صار قلبي كالشمع.قد ذاب في‏ وسط امعائي. 15 يبست مثل شقفة قوتي ولصق لساني بحنكي والى تراب الموت تضعني. 16 لانه قد احاطت بي كلاب.جماعة من الاشرار اكتنفتني.ثقبوا يدي ورجلي. 17 احصي كل عظامي.وهم ينظرون ويتفرسون في. 18 يقسمون ثيابي بينهم وعلى لباسي يقترعون 19 اما انت يا رب فلا تبعد.يا قوتي اسرع الى نصرتي. 20 انقذ من السيف نفسي.من يد الكلب وحيدتي. 21 خلصني من فم الاسد ومن قرون بقر الوحش استجب لي 22 اخبر باسمك اخوتي.في وسط الجماعة اسبحك. 23 يا خائفي الرب سبحوه.مجدوه يا معشر ذرية يعقوب.واخشوه يا زرع اسرائيل جميعا. 24 لانه لم يحتقر ولم يرذل مسكنة المسكين ولم يحجب وجهه عنه بل عند صراخه اليه استمع. 25 من قبلك تسبيحي في الجماعة العظيمة.اوفي بنذوري قدام خائفيه 26 ياكل الودعاء ويشبعون.يسبح الرب طالبوه.تحيا قلوبكم الى الابد. 27 تذكر وترجع الى الرب كل اقاصي الارض.وتسجد قدامك كل قبائل الامم. 28 لان للرب الملك وهو المتسلط على الامم. 29 اكل وسجد كل سميني الارض.قدامه يجثو كل من ينحدر الى التراب ومن لم يحي نفسه. 30 الذرية تتعبد له.يخبر عن الرب الجيل الاتي. 31 ياتون ويخبرون ببره شعبا سيولد بانه قد فعل`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ايلة الصبح.مزمور لداود.الهي الهي لماذا تركتني.بعيدا عن خلاصي عن كلام زفيري. 2 الهي في النهار ادعو فلا تستجيب في الليل ادعو فلا هدوء لي. 3 وانت القدوس الجالس بين تسبيحات اسرائيل 4 عليك اتكل اباؤنا.اتكلوا فنجيتهم. 5 اليك صرخوا فنجوا.عليك اتكلوا فلم يخزوا. 6 اما انا فدودة لا انسان.عار عند البشر ومحتقر الشعب. 7 كل الذين يرونني يستهزئون بي.يفغرون الشفاه وينغضون الراس قائلين 8 اتكل على الرب فلينجه.لينقذه لانه سر به. 9 لانك انت جذبتني من البطن.جعلتني مطمئنا على ثديي امي. 10 عليك القيت من الرحم.من بطن امي انت الهي. 11 لا تتباعد عني لان الضيق قريب.لانه لا معين 12 احاطت بي ثيران كثيرة.اقوياء باشان اكتنفتني. 13 فغروا علي افواههم كاسد مفترس مزمجر. 14 كالماء انسكبت.انفصلت كل عظامي.صار قلبي كالشمع.قد ذاب في‏ وسط امعائي. 15 يبست مثل شقفة قوتي ولصق لساني بحنكي والى تراب الموت تضعني. 16 لانه قد احاطت بي كلاب.جماعة من الاشرار اكتنفتني.ثقبوا يدي ورجلي. 17 احصي كل عظامي.وهم ينظرون ويتفرسون في. 18 يقسمون ثيابي بينهم وعلى لباسي يقترعون 19 اما انت يا رب فلا تبعد.يا قوتي اسرع الى نصرتي. 20 انقذ من السيف نفسي.من يد الكلب وحيدتي. 21 خلصني من فم الاسد ومن قرون بقر الوحش استجب لي 22 اخبر باسمك اخوتي.في وسط الجماعة اسبحك. 23 يا خائفي الرب سبحوه.مجدوه يا معشر ذرية يعقوب.واخشوه يا زرع اسرائيل جميعا. 24 لانه لم يحتقر ولم يرذل مسكنة المسكين ولم يحجب وجهه عنه بل عند صراخه اليه استمع. 25 من قبلك تسبيحي في الجماعة العظيمة.اوفي بنذوري قدام خائفيه 26 ياكل الودعاء ويشبعون.يسبح الرب طالبوه.تحيا قلوبكم الى الابد. 27 تذكر وترجع الى الرب كل اقاصي الارض.وتسجد قدامك كل قبائل الامم. 28 لان للرب الملك وهو المتسلط على الامم. 29 اكل وسجد كل سميني الارض.قدامه يجثو كل من ينحدر الى التراب ومن لم يحي نفسه. 30 الذرية تتعبد له.يخبر عن الرب الجيل الاتي. 31 ياتون ويخبرون ببره شعبا سيولد بانه قد فعل`
          );
          location.reload();
        }
        function op23() {
          document.getElementById(`show-ld`).innerText = `23`;
          localStorage.setItem(`count`, `23`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود.الرب راعي فلا يعوزني شيء. 2 في مراع خضر يربضني.الى مياه الراحة يوردني. 3 يرد نفسي.يهديني الى سبل البر من اجل اسمه. 4 ايضا اذا سرت في وادي ظل الموت لا اخاف شرا لانك انت معي.عصاك وعكازك هما يعزيانني. 5 ترتب قدامي مائدة تجاه مضايقي.مسحت بالدهن راسي.كاسي ريا. 6 انما خير ورحمة يتبعانني كل ايام حياتي واسكن في بيت الرب الى مدى الايام`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود.الرب راعي فلا يعوزني شيء. 2 في مراع خضر يربضني.الى مياه الراحة يوردني. 3 يرد نفسي.يهديني الى سبل البر من اجل اسمه. 4 ايضا اذا سرت في وادي ظل الموت لا اخاف شرا لانك انت معي.عصاك وعكازك هما يعزيانني. 5 ترتب قدامي مائدة تجاه مضايقي.مسحت بالدهن راسي.كاسي ريا. 6 انما خير ورحمة يتبعانني كل ايام حياتي واسكن في بيت الرب الى مدى الايام`
          );
          location.reload();
        }
        function op24() {
          document.getElementById(`show-ld`).innerText = `24`;
          localStorage.setItem(`count`, `24`);
          document.getElementById(`one`).innerText =
            `1 لداود.مزمور.للرب الارض وملؤها.المسكونة وكل الساكنين فيها. 2 لانه على البحار اسسها وعلى الانهار ثبتها 3 من يصعد الى جبل الرب ومن يقوم في موضع قدسه. 4 الطاهر اليدين والنقي القلب الذي لم يحمل نفسه الى الباطل ولا حلف كذبا. 5 يحمل بركة من عند الرب وبرا من اله خلاصه. 6 هذا هو الجيل الطالبه الملتمسون وجهك يا يعقوب.سلاه 7 ارفعن ايتها الارتاج رؤوسكن وارتفعن ايتها الابواب الدهريات فيدخل ملك المجد. 8 من هو هذا ملك المجد.الرب القدير الجبار الرب الجبار في القتال. 9 ارفعن ايتها الارتاج رؤوسكن وارفعنها ايتها الابواب الدهريات فيدخل ملك المجد. 10 من هو هذا ملك المجد.رب الجنود هو ملك المجد.سلاه`;
          localStorage.setItem(
            `words`,
            `1 لداود.مزمور.للرب الارض وملؤها.المسكونة وكل الساكنين فيها. 2 لانه على البحار اسسها وعلى الانهار ثبتها 3 من يصعد الى جبل الرب ومن يقوم في موضع قدسه. 4 الطاهر اليدين والنقي القلب الذي لم يحمل نفسه الى الباطل ولا حلف كذبا. 5 يحمل بركة من عند الرب وبرا من اله خلاصه. 6 هذا هو الجيل الطالبه الملتمسون وجهك يا يعقوب.سلاه 7 ارفعن ايتها الارتاج رؤوسكن وارتفعن ايتها الابواب الدهريات فيدخل ملك المجد. 8 من هو هذا ملك المجد.الرب القدير الجبار الرب الجبار في القتال. 9 ارفعن ايتها الارتاج رؤوسكن وارفعنها ايتها الابواب الدهريات فيدخل ملك المجد. 10 من هو هذا ملك المجد.رب الجنود هو ملك المجد.سلاه`
          );
          location.reload();
        }
        function op25() {
          document.getElementById(`show-ld`).innerText = `25`;
          localStorage.setItem(`count`, `25`);
          document.getElementById(`one`).innerText =
            `1 لداود.اليك يا رب ارفع نفسي. 2 يا الهي عليك توكلت.فلا تدعني اخزى.لا تشمت بي اعدائي. 3 ايضا كل منتظريك لا يخزوا.ليخز الغادرون بلا سبب. 4 طرقك يا رب عرفني.سبلك علمني. 5 دربني في حقك وعلمني.لانك انت اله خلاصي.اياك انتظرت اليوم كله. 6 اذكر مراحمك يا رب واحساناتك لانها منذ الازل هي. 7 لا تذكر خطايا صباي ولا معاصي.كرحمتك اذكرني انت من اجل جودك يا رب 8 الرب صالح ومستقيم.لذلك يعلم الخطاة الطريق. 9 يدرب الودعاء في الحق ويعلم الودعاء طرقه. 10 كل سبل الرب رحمة وحق لحافظي عهده وشهاداته. 11 من اجل اسمك يا رب اغفر اثمي لانه عظيم. 12 من هو الانسان الخائف الرب.يعلمه طريقا يختاره. 13 نفسه في الخير تبيت ونسله يرث الارض. 14 سر الرب لخائفيه.وعهده لتعليمهم. 15 عيناي دائما الى الرب.لانه هو يخرج رجلي من الشبكة 16 التفت الي وارحمني لاني وحد ومسكين انا. 17 افرج ضيقات قلبي.من شدائدي اخرجني. 18 انظر الى ذلي وتعبي واغفر جميع خطاياي. 19 انظر الى اعدائي لانهم قد كثروا.وبغضا ظلما ابغضوني. 20 احفظ نفسي وانقذني.لا اخزى لاني عليك توكلت. 21 يحفظني الكمال والاستقامة لاني انتظرتك. 22 يا الله افدي اسرائيل من كل ضيقاته`;
          localStorage.setItem(
            `words`,
            `1 لداود.اليك يا رب ارفع نفسي. 2 يا الهي عليك توكلت.فلا تدعني اخزى.لا تشمت بي اعدائي. 3 ايضا كل منتظريك لا يخزوا.ليخز الغادرون بلا سبب. 4 طرقك يا رب عرفني.سبلك علمني. 5 دربني في حقك وعلمني.لانك انت اله خلاصي.اياك انتظرت اليوم كله. 6 اذكر مراحمك يا رب واحساناتك لانها منذ الازل هي. 7 لا تذكر خطايا صباي ولا معاصي.كرحمتك اذكرني انت من اجل جودك يا رب 8 الرب صالح ومستقيم.لذلك يعلم الخطاة الطريق. 9 يدرب الودعاء في الحق ويعلم الودعاء طرقه. 10 كل سبل الرب رحمة وحق لحافظي عهده وشهاداته. 11 من اجل اسمك يا رب اغفر اثمي لانه عظيم. 12 من هو الانسان الخائف الرب.يعلمه طريقا يختاره. 13 نفسه في الخير تبيت ونسله يرث الارض. 14 سر الرب لخائفيه.وعهده لتعليمهم. 15 عيناي دائما الى الرب.لانه هو يخرج رجلي من الشبكة 16 التفت الي وارحمني لاني وحد ومسكين انا. 17 افرج ضيقات قلبي.من شدائدي اخرجني. 18 انظر الى ذلي وتعبي واغفر جميع خطاياي. 19 انظر الى اعدائي لانهم قد كثروا.وبغضا ظلما ابغضوني. 20 احفظ نفسي وانقذني.لا اخزى لاني عليك توكلت. 21 يحفظني الكمال والاستقامة لاني انتظرتك. 22 يا الله افدي اسرائيل من كل ضيقاته`
          );
          location.reload();
        }
        function op26() {
          document.getElementById(`show-ld`).innerText = `26`;
          localStorage.setItem(`count`, `26`);
          document.getElementById(`one`).innerText =
            `1 لداود.اقض لي يا رب لاني بكمالي سلكت وعلى الرب توكلت بلا تقلقل. 2 جربني يا رب وامتحني.صف كليتي وقلبي. 3 لان رحمتك امام عيني.وقد سلكت بحقك. 4 لم اجلس مع اناس السوء.ومع الماكرين لا ادخل. 5 ابغضت جماعة الاثمة ومع الاشرار لا اجلس‏. 6 اغسل يدي في النقاوة فاطوف بمذبحك يا رب 7 لاسمع بصوت الحمد واحدث بجميع عجائبك. 8 يا رب احببت محل بيتك وموضع مسكن مجدك 9 لا تجمع مع الخطاة نفسي ولا مع رجال الدماء حياتي. 10 الذين في ايديهم رذيلة ويمينهم ملانة رشوة. 11 اما انا فبكمالي اسلك.افدني وارحمني. 12 رجلي واقفة على سهل.في الجماعات ابارك الرب`;
          localStorage.setItem(
            `words`,
            `1 لداود.اقض لي يا رب لاني بكمالي سلكت وعلى الرب توكلت بلا تقلقل. 2 جربني يا رب وامتحني.صف كليتي وقلبي. 3 لان رحمتك امام عيني.وقد سلكت بحقك. 4 لم اجلس مع اناس السوء.ومع الماكرين لا ادخل. 5 ابغضت جماعة الاثمة ومع الاشرار لا اجلس‏. 6 اغسل يدي في النقاوة فاطوف بمذبحك يا رب 7 لاسمع بصوت الحمد واحدث بجميع عجائبك. 8 يا رب احببت محل بيتك وموضع مسكن مجدك 9 لا تجمع مع الخطاة نفسي ولا مع رجال الدماء حياتي. 10 الذين في ايديهم رذيلة ويمينهم ملانة رشوة. 11 اما انا فبكمالي اسلك.افدني وارحمني. 12 رجلي واقفة على سهل.في الجماعات ابارك الرب`
          );
          location.reload();
        }
        function op27() {
          document.getElementById(`show-ld`).innerText = `27`;
          localStorage.setItem(`count`, `27`);
          document.getElementById(`one`).innerText =
            `1 لداود.الرب نوري وخلاصي ممن اخاف.الرب حصن حياتي ممن ارتعب. 2 عندما اقترب الي الاشرار لياكلوا لحمي مضايقي واعدائي عثروا وسقطوا. 3 ان نزل علي جيش لا يخاف قلبي.ان قامت علي حرب ففي ذلك انا مطمئن. 4 واحدة سالت من الرب واياها التمس.ان اسكن في بيت الرب كل ايام حياتي لكي انظر الى جمال الرب واتفرس في هيكله. 5 لانه يخبئني في مظلته في يوم الشر.يسترني بستر خيمته.على صخرة يرفعني. 6 والان يرتفع راسي على اعدائي حولي فاذبح في خيمته ذبائح الهتاف.اغني وارنم للرب 7 استمع يا رب.بصوتي ادعو فارحمني واستجب لي. 8 لك قال قلبي قلت اطلبوا وجهي.وجهك يا رب اطلب. 9 لا تحجب وجهك عني.لا تخيب بسخط عبدك.قد كنت عوني.فلا ترفضني ولا تتركني يا اله خلاصي. 10 ان ابي وامي قد تركاني والرب يضمني. 11 علمني يا رب طريقك.واهدني في سبيل مستقيم بسبب اعدائي. 12 لا تسلمني الى مرام مضايقي.لانه قد قام علي شهود زور ونافث ظلم. 13 لولا انني امنت بان ارى جود الرب في ارض الاحياء. 14 انتظر الرب.ليتشدد وليتشجع قلبك وانتظر الرب`;
          localStorage.setItem(
            `words`,
            `1 لداود.الرب نوري وخلاصي ممن اخاف.الرب حصن حياتي ممن ارتعب. 2 عندما اقترب الي الاشرار لياكلوا لحمي مضايقي واعدائي عثروا وسقطوا. 3 ان نزل علي جيش لا يخاف قلبي.ان قامت علي حرب ففي ذلك انا مطمئن. 4 واحدة سالت من الرب واياها التمس.ان اسكن في بيت الرب كل ايام حياتي لكي انظر الى جمال الرب واتفرس في هيكله. 5 لانه يخبئني في مظلته في يوم الشر.يسترني بستر خيمته.على صخرة يرفعني. 6 والان يرتفع راسي على اعدائي حولي فاذبح في خيمته ذبائح الهتاف.اغني وارنم للرب 7 استمع يا رب.بصوتي ادعو فارحمني واستجب لي. 8 لك قال قلبي قلت اطلبوا وجهي.وجهك يا رب اطلب. 9 لا تحجب وجهك عني.لا تخيب بسخط عبدك.قد كنت عوني.فلا ترفضني ولا تتركني يا اله خلاصي. 10 ان ابي وامي قد تركاني والرب يضمني. 11 علمني يا رب طريقك.واهدني في سبيل مستقيم بسبب اعدائي. 12 لا تسلمني الى مرام مضايقي.لانه قد قام علي شهود زور ونافث ظلم. 13 لولا انني امنت بان ارى جود الرب في ارض الاحياء. 14 انتظر الرب.ليتشدد وليتشجع قلبك وانتظر الرب`
          );
          location.reload();
        }
        function op28() {
          document.getElementById(`show-ld`).innerText = `28`;
          localStorage.setItem(`count`, `28`);
          document.getElementById(`one`).innerText =
            `1 لداود.اليك يا رب اصرخ يا صخرتي لا تتصامم من جهتي لئلا تسكت عني فاشبه الهابطين في الجب. 2 استمع صوت تضرعي اذ استغيث بك وارفع يدي الى محراب قدسك. 3 لا تجذبني مع الاشرار ومع فعلة الاثم المخاطبين اصحابهم بالسلام والشر في قلوبهم. 4 اعطهم حسب فعلهم وحسب شر اعمالهم.حسب صنع ايديهم اعطهم.رد عليهم معاملتهم. 5 لانهم لم ينتبهوا الى افعال الرب ولا الى اعمال يديه يهدمهم ولا يبنيهم 6 مبارك الرب لانه سمع صوت تضرعي. 7 الرب عزي وترسي عليه اتكل قلبي فانتصرت.ويبتهج قلبي وباغنيتي احمده. 8 الرب عز لهم وحصن خلاص مسيحه هو. 9 خلص شعبك وبارك ميراثك وارعهم واحملهم الى الابد`;
          localStorage.setItem(
            `words`,
            `1 لداود.اليك يا رب اصرخ يا صخرتي لا تتصامم من جهتي لئلا تسكت عني فاشبه الهابطين في الجب. 2 استمع صوت تضرعي اذ استغيث بك وارفع يدي الى محراب قدسك. 3 لا تجذبني مع الاشرار ومع فعلة الاثم المخاطبين اصحابهم بالسلام والشر في قلوبهم. 4 اعطهم حسب فعلهم وحسب شر اعمالهم.حسب صنع ايديهم اعطهم.رد عليهم معاملتهم. 5 لانهم لم ينتبهوا الى افعال الرب ولا الى اعمال يديه يهدمهم ولا يبنيهم 6 مبارك الرب لانه سمع صوت تضرعي. 7 الرب عزي وترسي عليه اتكل قلبي فانتصرت.ويبتهج قلبي وباغنيتي احمده. 8 الرب عز لهم وحصن خلاص مسيحه هو. 9 خلص شعبك وبارك ميراثك وارعهم واحملهم الى الابد`
          );
          location.reload();
        }
        function op29() {
          document.getElementById(`show-ld`).innerText = `29`;
          localStorage.setItem(`count`, `29`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود.قدموا للرب يا ابناء الله قدموا للرب مجدا وعزا. 2 قدموا للرب مجد اسمه.اسجدوا للرب في زينة مقدسة 3 صوت الرب على المياه.اله المجد ارعد.الرب فوق المياه الكثيرة. 4 صوت الرب بالقوة.صوت الرب بالجلال. 5 صوت الرب مكسر الارز ويكسر الرب ارز لبنان. 6 ويمرحها مثل عجل.لبنان وسريون مثل فرير البقر الوحشي. 7 صوت الرب يقدح لهب نار 8 صوت الرب يزلزل البرية يزلزل الرب برية قادش. 9 صوت الرب يولد الايل ويكشف الوعور وفي هيكله الكل قائل مجد. 10 الرب بالطوفان جلس ويجلس الرب ملكا الى الابد. 11 الرب يعطي عزا لشعبه.الرب يبارك شعبه بالسلام`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود.قدموا للرب يا ابناء الله قدموا للرب مجدا وعزا. 2 قدموا للرب مجد اسمه.اسجدوا للرب في زينة مقدسة 3 صوت الرب على المياه.اله المجد ارعد.الرب فوق المياه الكثيرة. 4 صوت الرب بالقوة.صوت الرب بالجلال. 5 صوت الرب مكسر الارز ويكسر الرب ارز لبنان. 6 ويمرحها مثل عجل.لبنان وسريون مثل فرير البقر الوحشي. 7 صوت الرب يقدح لهب نار 8 صوت الرب يزلزل البرية يزلزل الرب برية قادش. 9 صوت الرب يولد الايل ويكشف الوعور وفي هيكله الكل قائل مجد. 10 الرب بالطوفان جلس ويجلس الرب ملكا الى الابد. 11 الرب يعطي عزا لشعبه.الرب يبارك شعبه بالسلام`
          );
          location.reload();
        }
        function op30() {
          document.getElementById(`show-ld`).innerText = `30`;
          localStorage.setItem(`count`, `30`);
          document.getElementById(`one`).innerText =
            `1 مزمور اغنية تدشين البيت.لداود.اعظمك يا رب لانك نشلتني ولم تشمت بي اعدائي. 2 يا رب الهي استغثت بك فشفيتني. 3 يا رب اصعدت من الهاوية نفسي احييتني من بين الهابطين في الجب. 4 رنموا للرب يا اتقياءه واحمدوا ذكر قدسه. 5 لان للحظة غضبه.حياة في رضاه.عند المساء يبيت البكاء وفي الصباح ترنم 6 وانا قلت في طمانينتي لا اتزعزع الى الابد. 7 يا رب برضاك ثبت لجبلي عزا.حجبت وجهك فصرت مرتاعا. 8 اليك يا رب اصرخ والى السيد اتضرع. 9 ما الفائدة من دمي اذا نزلت الى الحفرة.هل يحمدك التراب.هل يخبر بحقك. 10 استمع يا رب وارحمني يا رب كن معينا لي. 11 حولت نوحي الى رقص لي.حللت مسحي ومنطقتني فرحا 12 لكي تترنم لك روحي ولا تسكت.يا رب الهي الى الابد احمدك`;
          localStorage.setItem(
            `words`,
            `1 مزمور اغنية تدشين البيت.لداود.اعظمك يا رب لانك نشلتني ولم تشمت بي اعدائي. 2 يا رب الهي استغثت بك فشفيتني. 3 يا رب اصعدت من الهاوية نفسي احييتني من بين الهابطين في الجب. 4 رنموا للرب يا اتقياءه واحمدوا ذكر قدسه. 5 لان للحظة غضبه.حياة في رضاه.عند المساء يبيت البكاء وفي الصباح ترنم 6 وانا قلت في طمانينتي لا اتزعزع الى الابد. 7 يا رب برضاك ثبت لجبلي عزا.حجبت وجهك فصرت مرتاعا. 8 اليك يا رب اصرخ والى السيد اتضرع. 9 ما الفائدة من دمي اذا نزلت الى الحفرة.هل يحمدك التراب.هل يخبر بحقك. 10 استمع يا رب وارحمني يا رب كن معينا لي. 11 حولت نوحي الى رقص لي.حللت مسحي ومنطقتني فرحا 12 لكي تترنم لك روحي ولا تسكت.يا رب الهي الى الابد احمدك`
          );
          location.reload();
        }
        function op31() {
          document.getElementById(`show-ld`).innerText = `31`;
          localStorage.setItem(`count`, `31`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.عليك يا رب توكلت.لا تدعني اخزى مدى الدهر.بعدلك نجني. 2 امل الي اذنك.سريعا انقذني.كن لي صخرة حصن بيت ملجا لتخليصي. 3 لان صخرتي ومعقلي انت.من اجل اسمك تهديني وتقودني. 4 اخرجني من الشبكة التي خباوها لي.لانك انت حصني. 5 في يدك استودع روحي.فديتني يا رب اله الحق. 6 ابغضت الذين يراعون اباطيل كاذبة.اما انا فعلى الرب توكلت. 7 ابتهج وافرح برحمتك لانك نظرت الى مذلتي وعرفت في الشدائد نفسي. 8 ولم تحبسني في يد العدو بل اقمت في الرحب رجلي 9 ارحمني يا رب لاني في ضيق.خسفت من الغم عيني.نفسي وبطني. 10 لان حياتي قد فنيت بالحزن وسنيني بالتنهد.ضعفت بشقاوتي قوتي وبليت عظامي. 11 عند كل اعدائي صرت عارا وعند جيراني بالكلية ورعبا لمعارفي.الذين راوني خارجا هربوا عني. 12 نسيت من القلب مثل الميت.صرت مثل اناء متلف. 13 لاني سمعت مذمة من كثيرين.الخوف مستدير بي بمؤامرتهم معا علي.تفكروا في اخذ نفسي 14 اما انا فعليك توكلت يا رب.قلت الهي انت. 15 في يدك اجالي.نجني من يد اعدائي ومن الذين يطردونني. 16 اضئ بوجهك على عبدك.خلصني برحمتك. 17 يا رب لا تدعني اخزى لاني دعوتك.ليخز الاشرار.ليسكتوا في الهاوية. 18 لتبكم شفاه الكذب المتكلمة على الصديق بوقاحة بكبرياء واستهانة 19 ما اعظم جودك الذي ذخرته لخائفيك.وفعلته للمتكلين عليك تجاه بني البشر. 20 تسترهم بستر وجهك من مكايد الناس.تخفيهم في مظلة من مخاصمة الالسن. 21 مبارك الرب لانه قد جعل عجبا رحمته لي في مدينة محصنة. 22 وانا قلت في حيرتي اني قد انقطعت من قدام عينيك.ولكنك سمعت صوت تضرعي اذ صرخت اليك 23 احبوا الرب يا جميع اتقيائه.الرب حافظ الامانة ومجاز بكثرة العامل بالكبرياء. 24 لتتشدد ولتتشجع قلوبكم يا جميع المنتظرين الرب`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.عليك يا رب توكلت.لا تدعني اخزى مدى الدهر.بعدلك نجني. 2 امل الي اذنك.سريعا انقذني.كن لي صخرة حصن بيت ملجا لتخليصي. 3 لان صخرتي ومعقلي انت.من اجل اسمك تهديني وتقودني. 4 اخرجني من الشبكة التي خباوها لي.لانك انت حصني. 5 في يدك استودع روحي.فديتني يا رب اله الحق. 6 ابغضت الذين يراعون اباطيل كاذبة.اما انا فعلى الرب توكلت. 7 ابتهج وافرح برحمتك لانك نظرت الى مذلتي وعرفت في الشدائد نفسي. 8 ولم تحبسني في يد العدو بل اقمت في الرحب رجلي 9 ارحمني يا رب لاني في ضيق.خسفت من الغم عيني.نفسي وبطني. 10 لان حياتي قد فنيت بالحزن وسنيني بالتنهد.ضعفت بشقاوتي قوتي وبليت عظامي. 11 عند كل اعدائي صرت عارا وعند جيراني بالكلية ورعبا لمعارفي.الذين راوني خارجا هربوا عني. 12 نسيت من القلب مثل الميت.صرت مثل اناء متلف. 13 لاني سمعت مذمة من كثيرين.الخوف مستدير بي بمؤامرتهم معا علي.تفكروا في اخذ نفسي 14 اما انا فعليك توكلت يا رب.قلت الهي انت. 15 في يدك اجالي.نجني من يد اعدائي ومن الذين يطردونني. 16 اضئ بوجهك على عبدك.خلصني برحمتك. 17 يا رب لا تدعني اخزى لاني دعوتك.ليخز الاشرار.ليسكتوا في الهاوية. 18 لتبكم شفاه الكذب المتكلمة على الصديق بوقاحة بكبرياء واستهانة 19 ما اعظم جودك الذي ذخرته لخائفيك.وفعلته للمتكلين عليك تجاه بني البشر. 20 تسترهم بستر وجهك من مكايد الناس.تخفيهم في مظلة من مخاصمة الالسن. 21 مبارك الرب لانه قد جعل عجبا رحمته لي في مدينة محصنة. 22 وانا قلت في حيرتي اني قد انقطعت من قدام عينيك.ولكنك سمعت صوت تضرعي اذ صرخت اليك 23 احبوا الرب يا جميع اتقيائه.الرب حافظ الامانة ومجاز بكثرة العامل بالكبرياء. 24 لتتشدد ولتتشجع قلوبكم يا جميع المنتظرين الرب`
          );
          location.reload();
        }
        function op32() {
          document.getElementById(`show-ld`).innerText = `32`;
          localStorage.setItem(`count`, `32`);
          document.getElementById(`one`).innerText =
            `1 لداود.قصيدة.طوبى للذي غفر اثمه وسترت خطيته. 2 طوبى لرجل لا يحسب له الرب خطية ولا في روحه غش 3 لما سكت بليت عظامي من زفيري اليوم كله. 4 لان يدك ثقلت علي نهارا وليلا.تحولت رطوبتي الى يبوسة القيظ‏.سلاه. 5 اعترف لك بخطيتي ولا اكتم اثمي.قلت اعترف للرب بذنبي وانت رفعت اثام خطيتي.سلاه. 6 لهذا يصلي لك كل تقي في وقت يجدك فيه.عند غمارة المياه الكثيرة اياه لا تصيب. 7 انت ستر لي.من الضيق تحفظني.بترنم النجاة تكتنفني.سلاه 8 اعلمك وارشدك الطريق التي تسلكها. انصحك.عيني عليك. 9 لا تكونوا كفرس او بغل بلا فهم.بلجام وزمام زينته يكم لئلا يدنو اليك. 10 كثيرة هي نكبات الشرير.اما المتوكل على الرب فالرحمة تحيط به 11 افرحوا بالرب وابتهجوا يا ايها الصديقون واهتفوا يا جميع المستقيمي القلوب`;
          localStorage.setItem(
            `words`,
            `1 لداود.قصيدة.طوبى للذي غفر اثمه وسترت خطيته. 2 طوبى لرجل لا يحسب له الرب خطية ولا في روحه غش 3 لما سكت بليت عظامي من زفيري اليوم كله. 4 لان يدك ثقلت علي نهارا وليلا.تحولت رطوبتي الى يبوسة القيظ‏.سلاه. 5 اعترف لك بخطيتي ولا اكتم اثمي.قلت اعترف للرب بذنبي وانت رفعت اثام خطيتي.سلاه. 6 لهذا يصلي لك كل تقي في وقت يجدك فيه.عند غمارة المياه الكثيرة اياه لا تصيب. 7 انت ستر لي.من الضيق تحفظني.بترنم النجاة تكتنفني.سلاه 8 اعلمك وارشدك الطريق التي تسلكها. انصحك.عيني عليك. 9 لا تكونوا كفرس او بغل بلا فهم.بلجام وزمام زينته يكم لئلا يدنو اليك. 10 كثيرة هي نكبات الشرير.اما المتوكل على الرب فالرحمة تحيط به 11 افرحوا بالرب وابتهجوا يا ايها الصديقون واهتفوا يا جميع المستقيمي القلوب`
          );
          location.reload();
        }
        function op33() {
          document.getElementById(`show-ld`).innerText = `33`;
          localStorage.setItem(`count`, `33`);
          document.getElementById(`one`).innerText =
            `1 اهتفوا ايها الصديقون بالرب.بالمستقيمين يليق التسبيح. 2 احمدوا الرب بالعود.بربابة ذات عشرة اوتار رنموا له. 3 غنوا له اغنية جديدة.احسنوا العزف بهتاف. 4 لان كلمة الرب مستقيمة وكل صنعه بالامانة. 5 يحب البر والعدل.امتلات الارض من رحمة الرب. 6 بكلمة الرب صنعت السموات وبنسمة فيه كل جنودها. 7 يجمع كند امواه اليم يجعل اللجج في اهراء. 8 لتخش الرب كل الارض ومنه ليخف كل سكان المسكونة. 9 لانه قال فكان.هو امر فصار. 10 الرب ابطل مؤامرة الامم.لاشى افكار الشعوب. 11 اما مؤامرة الرب فالى الابد تثبت.افكار قلبه الى دور فدور 12 طوبى للامة التي الرب الهها الشعب الذي اختاره ميراثا لنفسه. 13 من السموات نظر الرب.راى جميع بني البشر. 14 من مكان سكناه تطلع الى جميع سكان الارض. 15 المصور قلوبهم جميعا المنتبه الى كل اعمالهم. 16 لن يخلص الملك بكثرة الجيش.الجبار لا ينقذ بعظم القوة. 17 باطل هو الفرس لاجل الخلاص وبشدة قوته لا ينجي. 18 هوذا عين الرب على خائفيه الراجين رحمته 19 لينجي من الموت انفسهم وليستحييهم في الجوع 20 انفسنا انتظرت الرب.معونتنا وترسنا هو. 21 لانه به تفرح قلوبنا لاننا على اسمه القدوس اتكلنا. 22 لتكن يا رب رحمتك علينا حسبما انتظرناك`;
          localStorage.setItem(
            `words`,
            `1 اهتفوا ايها الصديقون بالرب.بالمستقيمين يليق التسبيح. 2 احمدوا الرب بالعود.بربابة ذات عشرة اوتار رنموا له. 3 غنوا له اغنية جديدة.احسنوا العزف بهتاف. 4 لان كلمة الرب مستقيمة وكل صنعه بالامانة. 5 يحب البر والعدل.امتلات الارض من رحمة الرب. 6 بكلمة الرب صنعت السموات وبنسمة فيه كل جنودها. 7 يجمع كند امواه اليم يجعل اللجج في اهراء. 8 لتخش الرب كل الارض ومنه ليخف كل سكان المسكونة. 9 لانه قال فكان.هو امر فصار. 10 الرب ابطل مؤامرة الامم.لاشى افكار الشعوب. 11 اما مؤامرة الرب فالى الابد تثبت.افكار قلبه الى دور فدور 12 طوبى للامة التي الرب الهها الشعب الذي اختاره ميراثا لنفسه. 13 من السموات نظر الرب.راى جميع بني البشر. 14 من مكان سكناه تطلع الى جميع سكان الارض. 15 المصور قلوبهم جميعا المنتبه الى كل اعمالهم. 16 لن يخلص الملك بكثرة الجيش.الجبار لا ينقذ بعظم القوة. 17 باطل هو الفرس لاجل الخلاص وبشدة قوته لا ينجي. 18 هوذا عين الرب على خائفيه الراجين رحمته 19 لينجي من الموت انفسهم وليستحييهم في الجوع 20 انفسنا انتظرت الرب.معونتنا وترسنا هو. 21 لانه به تفرح قلوبنا لاننا على اسمه القدوس اتكلنا. 22 لتكن يا رب رحمتك علينا حسبما انتظرناك`
          );
          location.reload();
        }
        function op34() {
          document.getElementById(`show-ld`).innerText = `34`;
          localStorage.setItem(`count`, `34`);
          document.getElementById(`one`).innerText =
            `1 لداود عندما غير عقله قدام ابيمالك فطرده فانطلق.ابارك الرب في كل حين.دائما تسبيحه في فمي. 2 بالرب تفتخر نفسي.يسمع الودعاء فيفرحون. 3 عظموا الرب معي ولنعل اسمه معا 4 طلبت الى الرب فاستجاب لي ومن كل مخاوفي انقذني. 5 نظروا اليه واستناروا ووجوههم لم تخجل. 6 هذا المسكين صرخ والرب استمعه ومن كل ضيقاته خلصه. 7 ملاك الرب حال حول خائفيه وينجيهم. 8 ذوقوا وانظروا ما اطيب الرب.طوبى للرجل المتوكل عليه. 9 اتقوا الرب يا قديسيه لانه ليس عوز لمتقيه. 10 الاشبال احتاجت وجاعت واما طالبو الرب فلا يعوزهم شيء من الخير 11 هلم ايها البنون استمعوا الي فاعلمكم مخافة الرب. 12 من هو الانسان الذي يهوى الحياة ويحب كثرة الايام ليرى خيرا. 13 صن لسانك عن الشر وشفتيك عن التكلم بالغش. 14 حد عن الشر واصنع الخير.اطلب السلامة واسع وراءها. 15 عينا الرب نحو الصديقين واذناه الى صراخهم. 16 وجه الرب ضد عاملي الشر ليقطع من الارض ذكرهم. 17 اولئك صرخوا والرب سمع ومن كل شدائدهم انقذهم. 18 قريب هو الرب من المنكسري القلوب ويخلص المنسحقي الروح. 19 كثيرة هي بلايا الصديق ومن جميعها ينجيه الرب. 20 يحفظ جميع عظامه.واحد منها لا ينكسر. 21 الشر يميت الشرير ومبغضو الصديق يعاقبون. 22 الرب فادي نفوس عبيده وكل من اتكل عليه لا يعاقب`;
          localStorage.setItem(
            `words`,
            `1 لداود عندما غير عقله قدام ابيمالك فطرده فانطلق.ابارك الرب في كل حين.دائما تسبيحه في فمي. 2 بالرب تفتخر نفسي.يسمع الودعاء فيفرحون. 3 عظموا الرب معي ولنعل اسمه معا 4 طلبت الى الرب فاستجاب لي ومن كل مخاوفي انقذني. 5 نظروا اليه واستناروا ووجوههم لم تخجل. 6 هذا المسكين صرخ والرب استمعه ومن كل ضيقاته خلصه. 7 ملاك الرب حال حول خائفيه وينجيهم. 8 ذوقوا وانظروا ما اطيب الرب.طوبى للرجل المتوكل عليه. 9 اتقوا الرب يا قديسيه لانه ليس عوز لمتقيه. 10 الاشبال احتاجت وجاعت واما طالبو الرب فلا يعوزهم شيء من الخير 11 هلم ايها البنون استمعوا الي فاعلمكم مخافة الرب. 12 من هو الانسان الذي يهوى الحياة ويحب كثرة الايام ليرى خيرا. 13 صن لسانك عن الشر وشفتيك عن التكلم بالغش. 14 حد عن الشر واصنع الخير.اطلب السلامة واسع وراءها. 15 عينا الرب نحو الصديقين واذناه الى صراخهم. 16 وجه الرب ضد عاملي الشر ليقطع من الارض ذكرهم. 17 اولئك صرخوا والرب سمع ومن كل شدائدهم انقذهم. 18 قريب هو الرب من المنكسري القلوب ويخلص المنسحقي الروح. 19 كثيرة هي بلايا الصديق ومن جميعها ينجيه الرب. 20 يحفظ جميع عظامه.واحد منها لا ينكسر. 21 الشر يميت الشرير ومبغضو الصديق يعاقبون. 22 الرب فادي نفوس عبيده وكل من اتكل عليه لا يعاقب`
          );
          location.reload();
        }
        function op35() {
          document.getElementById(`show-ld`).innerText = `35`;
          localStorage.setItem(`count`, `35`);
          document.getElementById(`one`).innerText =
            `1 لداود.خاصم يا رب مخاصمي.قاتل مقاتلي. 2 امسك مجنا وترسا وانهض الى معونتي 3 واشرع رمحا وصد تلقاء مطاردي.قل لنفسي خلاصك انا‏. 4 ليخز وليخجل الذين يطلبون نفسي.ليرتد الى الوراء ويخجل المتفكرون باساءتي. 5 ليكونوا مثل العصافة قدام الريح وملاك الرب داحرهم. 6 ليكن طريقهم ظلاما وزلقا وملاك الرب طاردهم. 7 لانهم بلا سبب اخفوا لي هوة شبكتهم.بلا سبب حفروا لنفسي. 8 لتاته التهلكة وهو لا يعلم ولتنشب به الشبكة التي اخفاها وفي التهلكة نفسها ليقع. 9 اما نفسي فتفرح بالرب وتبتهج بخلاصه. 10 جميع عظامي تقول يا رب من مثلك المنقذ المسكين ممن هو اقوى منه والفقير والبائس من سالبه 11 شهود زور يقومون وعما لم اعلم يسالونني. 12 يجازونني عن الخير شرا ثكلا لنفسي. 13 اما انا ففي مرضهم كان لباسي مسحا.اذللت بالصوم نفسي.وصلاتي الى حضني ترجع. 14 كانه قريب كانه اخي كنت اتمشى.كمن ينوح على امه انحنيت حزينا. 15 ولكنهم في ظلعي فرحوا واجتمعوا.اجتمعوا علي شاتمين ولم اعلم.مزقوا ولم يكفوا. 16 بين الفجار المجان لاجل كعكة حرقوا علي اسنانهم 17 يا رب الى متى تنظر.استرد نفسي من تهلكاتهم وحيدتي من الاشبال. 18 احمدك في الجماعة الكثيرة في شعب عظيم اسبحك. 19 لا يشمت بي الذين هم اعدائي باطلا ولا يتغامز بالعين الذين يبغضونني بلا سبب. 20 لانهم لا يتكلمون بالسلام وعلى الهادئين في الارض يفتكرون بكلام مكر. 21 فغروا علي افواههم.قالوا هه هه قد رات اعيننا. 22 قد رايت يا رب.لا تسكت يا سيد لا تبتعد عني. 23 استيقظ وانتبه الى حكمي يا الهي وسيدي الى دعواي. 24 اقض لي حسب عدلك يا رب الهي فلا يشمتوا بي. 25 لا يقولوا في قلوبهم هه شهوتنا.لا يقولوا قد ابتلعناه. 26 ليخز وليخجل معا الفرحون بمصيبتي.ليلبس الخزي والخجل المتعظمون علي 27 ليهتف ويفرح المبتغون حقي وليقولوا دائما ليتعظم الرب المسرور بسلامة عبده. 28 ولساني يلهج بعدلك.اليوم كله بحمدك`;
          localStorage.setItem(
            `words`,
            `1 لداود.خاصم يا رب مخاصمي.قاتل مقاتلي. 2 امسك مجنا وترسا وانهض الى معونتي 3 واشرع رمحا وصد تلقاء مطاردي.قل لنفسي خلاصك انا‏. 4 ليخز وليخجل الذين يطلبون نفسي.ليرتد الى الوراء ويخجل المتفكرون باساءتي. 5 ليكونوا مثل العصافة قدام الريح وملاك الرب داحرهم. 6 ليكن طريقهم ظلاما وزلقا وملاك الرب طاردهم. 7 لانهم بلا سبب اخفوا لي هوة شبكتهم.بلا سبب حفروا لنفسي. 8 لتاته التهلكة وهو لا يعلم ولتنشب به الشبكة التي اخفاها وفي التهلكة نفسها ليقع. 9 اما نفسي فتفرح بالرب وتبتهج بخلاصه. 10 جميع عظامي تقول يا رب من مثلك المنقذ المسكين ممن هو اقوى منه والفقير والبائس من سالبه 11 شهود زور يقومون وعما لم اعلم يسالونني. 12 يجازونني عن الخير شرا ثكلا لنفسي. 13 اما انا ففي مرضهم كان لباسي مسحا.اذللت بالصوم نفسي.وصلاتي الى حضني ترجع. 14 كانه قريب كانه اخي كنت اتمشى.كمن ينوح على امه انحنيت حزينا. 15 ولكنهم في ظلعي فرحوا واجتمعوا.اجتمعوا علي شاتمين ولم اعلم.مزقوا ولم يكفوا. 16 بين الفجار المجان لاجل كعكة حرقوا علي اسنانهم 17 يا رب الى متى تنظر.استرد نفسي من تهلكاتهم وحيدتي من الاشبال. 18 احمدك في الجماعة الكثيرة في شعب عظيم اسبحك. 19 لا يشمت بي الذين هم اعدائي باطلا ولا يتغامز بالعين الذين يبغضونني بلا سبب. 20 لانهم لا يتكلمون بالسلام وعلى الهادئين في الارض يفتكرون بكلام مكر. 21 فغروا علي افواههم.قالوا هه هه قد رات اعيننا. 22 قد رايت يا رب.لا تسكت يا سيد لا تبتعد عني. 23 استيقظ وانتبه الى حكمي يا الهي وسيدي الى دعواي. 24 اقض لي حسب عدلك يا رب الهي فلا يشمتوا بي. 25 لا يقولوا في قلوبهم هه شهوتنا.لا يقولوا قد ابتلعناه. 26 ليخز وليخجل معا الفرحون بمصيبتي.ليلبس الخزي والخجل المتعظمون علي 27 ليهتف ويفرح المبتغون حقي وليقولوا دائما ليتعظم الرب المسرور بسلامة عبده. 28 ولساني يلهج بعدلك.اليوم كله بحمدك`
          );
          location.reload();
        }
        function op36() {
          document.getElementById(`show-ld`).innerText = `36`;
          localStorage.setItem(`count`, `36`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لعبد الرب داود.نامة معصية الشرير في داخل قلبي ان ليس خوف الله امام عينيه. 2 لانه ملق نفسه لنفسه من جهة وجدان اثمه وبغضه. 3 كلام فمه اثم وغش.كف عن التعقل عن عمل الخير. 4 يتفكر بالاثم على مضجعه.يقف في طريق غير صالح.لا يرفض الشر 5 يا رب في السموات رحمتك.امانتك الى الغمام. 6 عدلك مثل جبال الله واحكامك لجة عظيمة.الناس والبهائم تخلص يا‏ رب. 7 ما اكرم رحمتك يا الله.فبنو البشر في ظل جناحيك يحتمون. 8 يروون من دسم بيتك ومن نهر نعمك تسقيهم. 9 لان عندك ينبوع الحياة.بنورك نرى نورا. 10 ادم رحمتك للذين يعرفونك وعدلك للمستقيمي القلب. 11 لا تاتني رجل الكبرياء ويد الاشرار لا تزحزحني. 12 هناك سقط فاعلو الاثم.دحروا فلم يستطيعوا القيام`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لعبد الرب داود.نامة معصية الشرير في داخل قلبي ان ليس خوف الله امام عينيه. 2 لانه ملق نفسه لنفسه من جهة وجدان اثمه وبغضه. 3 كلام فمه اثم وغش.كف عن التعقل عن عمل الخير. 4 يتفكر بالاثم على مضجعه.يقف في طريق غير صالح.لا يرفض الشر 5 يا رب في السموات رحمتك.امانتك الى الغمام. 6 عدلك مثل جبال الله واحكامك لجة عظيمة.الناس والبهائم تخلص يا‏ رب. 7 ما اكرم رحمتك يا الله.فبنو البشر في ظل جناحيك يحتمون. 8 يروون من دسم بيتك ومن نهر نعمك تسقيهم. 9 لان عندك ينبوع الحياة.بنورك نرى نورا. 10 ادم رحمتك للذين يعرفونك وعدلك للمستقيمي القلب. 11 لا تاتني رجل الكبرياء ويد الاشرار لا تزحزحني. 12 هناك سقط فاعلو الاثم.دحروا فلم يستطيعوا القيام`
          );
          location.reload();
        }
        function op37() {
          document.getElementById(`show-ld`).innerText = `37`;
          localStorage.setItem(`count`, `37`);
          document.getElementById(`one`).innerText =
            `1 لداود.لا تغر من الاشرار ولا تحسد عمال الاثم 2 فانهم مثل الحشيش سريعا يقطعون ومثل العشب الاخضر يذبلون. 3 اتكل على الرب وافعل الخير.اسكن الارض وارع الامانة. 4 وتلذذ بالرب فيعطيك سؤل قلبك. 5 سلم للرب طريقك واتكل عليه وهو يجري. 6 ويخرج مثل النور برك وحقك مثل الظهيرة. 7 انتظر الرب واصبر له ولا تغر من الذي ينجح في طريقه من الرجل المجري مكايد. 8 كف عن الغضب واترك السخط ولا تغر لفعل الشر. 9 لان عاملي الشر يقطعون والذين ينتظرون الرب هم يرثون الارض. 10 بعد قليل لا يكون الشرير.تطلع في مكانه فلا يكون. 11 اما الودعاء فيرثون الارض ويتلذذون في كثرة السلامة 12 الشرير يتفكر ضد الصديق ويحرق عليه اسنانه. 13 الرب يضحك به لانه راى ان يومه ات. 14 الاشرار قد سلوا السيف ومدوا قوسهم لرمي المسكين والفقير لقتل المستقيم طريقهم. 15 سيفهم يدخل في قلبهم وقسيهم تنكسر 16 القليل الذي للصديق خير من ثروة اشرار كثيرين. 17 لان سواعد الاشرار تنكسر وعاضد الصديقين الرب. 18 الرب عارف ايام الكملة وميراثهم الى الابد يكون. 19 لا يخزون في زمن السوء وفي ايام الجوع يشبعون. 20 لان الاشرار يهلكون واعداء الرب كبهاء المراعي.فنوا.كالدخان فنوا. 21 الشرير يستقرض ولا يفي واما الصديق فيتراف ويعطي. 22 لان المباركين منه يرثون الارض والملعونين منه يقطعون 23 من قبل الرب تتثبت خطوات الانسان وفي طريقه يسر. 24 اذا سقط لا ينطرح لان الرب مسند يده. 25 ايضا كنت فتى وقد شخت ولم ار صديقا تخلي عنه ولا ذرية له تلتمس خبزا. 26 اليوم كله يتراف ويقرض ونسله للبركة 27 حد عن الشر وافعل الخير واسكن الى الابد. 28 لان الرب يحب الحق ولا يتخلى عن اتقيائه.الى الابد يحفظون اما نسل الاشرار فينقطع. 29 الصديقون يرثون الارض ويسكنونها الى الابد. 30 فم الصديق يلهج بالحكمة ولسانه ينطق بالحق. 31 شريعة الهه في قلبه.لا تتقلقل خطواته. 32 الشرير يراقب الصديق محاولا ان يميته 33 الرب لا يتركه في يده ولا يحكم عليه عند محاكمته. 34 انتظر الرب واحفظ طريقه فيرفعك لترث الارض.الى انقراض الاشرار تنظر 35 قد رايت الشرير عاتيا وارفا مثل شجرة شارقة ناضرة. 36 عبر فاذا هو ليس بموجود والتمسته فلم يوجد. 37 لاحظ الكامل وانظر المستقيم فان العقب لانسان السلامة. 38 اما الاشرار فيبادون جميعا.عقب الاشرار ينقطع. 39 اما خلاص الصديقين فمن قبل الرب حصنهم في زمان الضيق. 40 ويعينهم الرب وينجيهم.ينقذهم من الاشرار ويخلصهم لانهم احتموا به`;
          localStorage.setItem(
            `words`,
            `1 لداود.لا تغر من الاشرار ولا تحسد عمال الاثم 2 فانهم مثل الحشيش سريعا يقطعون ومثل العشب الاخضر يذبلون. 3 اتكل على الرب وافعل الخير.اسكن الارض وارع الامانة. 4 وتلذذ بالرب فيعطيك سؤل قلبك. 5 سلم للرب طريقك واتكل عليه وهو يجري. 6 ويخرج مثل النور برك وحقك مثل الظهيرة. 7 انتظر الرب واصبر له ولا تغر من الذي ينجح في طريقه من الرجل المجري مكايد. 8 كف عن الغضب واترك السخط ولا تغر لفعل الشر. 9 لان عاملي الشر يقطعون والذين ينتظرون الرب هم يرثون الارض. 10 بعد قليل لا يكون الشرير.تطلع في مكانه فلا يكون. 11 اما الودعاء فيرثون الارض ويتلذذون في كثرة السلامة 12 الشرير يتفكر ضد الصديق ويحرق عليه اسنانه. 13 الرب يضحك به لانه راى ان يومه ات. 14 الاشرار قد سلوا السيف ومدوا قوسهم لرمي المسكين والفقير لقتل المستقيم طريقهم. 15 سيفهم يدخل في قلبهم وقسيهم تنكسر 16 القليل الذي للصديق خير من ثروة اشرار كثيرين. 17 لان سواعد الاشرار تنكسر وعاضد الصديقين الرب. 18 الرب عارف ايام الكملة وميراثهم الى الابد يكون. 19 لا يخزون في زمن السوء وفي ايام الجوع يشبعون. 20 لان الاشرار يهلكون واعداء الرب كبهاء المراعي.فنوا.كالدخان فنوا. 21 الشرير يستقرض ولا يفي واما الصديق فيتراف ويعطي. 22 لان المباركين منه يرثون الارض والملعونين منه يقطعون 23 من قبل الرب تتثبت خطوات الانسان وفي طريقه يسر. 24 اذا سقط لا ينطرح لان الرب مسند يده. 25 ايضا كنت فتى وقد شخت ولم ار صديقا تخلي عنه ولا ذرية له تلتمس خبزا. 26 اليوم كله يتراف ويقرض ونسله للبركة 27 حد عن الشر وافعل الخير واسكن الى الابد. 28 لان الرب يحب الحق ولا يتخلى عن اتقيائه.الى الابد يحفظون اما نسل الاشرار فينقطع. 29 الصديقون يرثون الارض ويسكنونها الى الابد. 30 فم الصديق يلهج بالحكمة ولسانه ينطق بالحق. 31 شريعة الهه في قلبه.لا تتقلقل خطواته. 32 الشرير يراقب الصديق محاولا ان يميته 33 الرب لا يتركه في يده ولا يحكم عليه عند محاكمته. 34 انتظر الرب واحفظ طريقه فيرفعك لترث الارض.الى انقراض الاشرار تنظر 35 قد رايت الشرير عاتيا وارفا مثل شجرة شارقة ناضرة. 36 عبر فاذا هو ليس بموجود والتمسته فلم يوجد. 37 لاحظ الكامل وانظر المستقيم فان العقب لانسان السلامة. 38 اما الاشرار فيبادون جميعا.عقب الاشرار ينقطع. 39 اما خلاص الصديقين فمن قبل الرب حصنهم في زمان الضيق. 40 ويعينهم الرب وينجيهم.ينقذهم من الاشرار ويخلصهم لانهم احتموا به`
          );
          location.reload();
        }
        function op38() {
          document.getElementById(`show-ld`).innerText = `38`;
          localStorage.setItem(`count`, `38`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود للتذكير.يا رب لا توبخني بسخطك ولا تؤدبني بغيظك 2 لان سهامك قد انتشبت في ونزلت علي يدك. 3 ليست في جسدي صحة من جهة غضبك.ليست في عظامي سلامة من جهة خطيتي 4 لان اثامي قد طمت فوق راسي.كحمل ثقيل اثقل مما احتمل. 5 قد انتنت قاحت حبر ضربي من جهة حماقتي. 6 لويت انحنيت الى الغاية اليوم كله ذهبت حزينا. 7 لان خاصرتي قد امتلاتا احتراقا وليست في جسدي صحة. 8 خدرت وانسحقت الى الغاية.كنت ائن من زفير قلبي 9 يا رب امامك كل تاوهي وتنهدي ليس بمستور عنك. 10 قلبي خافق.قوتي فارقتني ونور عيني ايضا ليس معي. 11 احبائي واصحابي يقفون تجاه ضربتي واقاربي وقفوا بعيدا. 12 وطالبو نفسي نصبوا شركا والملتمسون لي الشر تكلموا بالمفاسد واليوم كله يلهجون بالغش 13 واما انا فكاصم.لا اسمع.وكابكم لا يفتح فاه. 14 واكون مثل انسان لا يسمع وليس في فمه حجة. 15 لاني لك يا رب صبرت انت تستجيب يا رب الهي. 16 لاني قلت لئلا يشمتوا بي.عندما زلت قدمي تعظموا علي. 17 لانني موشك ان اظلع ووجعي مقابلي دائما‏. 18 لانني اخبر باثمي واغتم من خطيتي. 19 واما اعدائي فاحياء.عظموا.والذين يبغضونني ظلما كثروا. 20 والمجازون عن الخير بشر يقاومونني لاجل اتباعي الصلاح. 21 لا تتركني يا رب.يا الهي لا تبعد عني. 22 اسرع الى معونتي يا رب يا خلاصي`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود للتذكير.يا رب لا توبخني بسخطك ولا تؤدبني بغيظك 2 لان سهامك قد انتشبت في ونزلت علي يدك. 3 ليست في جسدي صحة من جهة غضبك.ليست في عظامي سلامة من جهة خطيتي 4 لان اثامي قد طمت فوق راسي.كحمل ثقيل اثقل مما احتمل. 5 قد انتنت قاحت حبر ضربي من جهة حماقتي. 6 لويت انحنيت الى الغاية اليوم كله ذهبت حزينا. 7 لان خاصرتي قد امتلاتا احتراقا وليست في جسدي صحة. 8 خدرت وانسحقت الى الغاية.كنت ائن من زفير قلبي 9 يا رب امامك كل تاوهي وتنهدي ليس بمستور عنك. 10 قلبي خافق.قوتي فارقتني ونور عيني ايضا ليس معي. 11 احبائي واصحابي يقفون تجاه ضربتي واقاربي وقفوا بعيدا. 12 وطالبو نفسي نصبوا شركا والملتمسون لي الشر تكلموا بالمفاسد واليوم كله يلهجون بالغش 13 واما انا فكاصم.لا اسمع.وكابكم لا يفتح فاه. 14 واكون مثل انسان لا يسمع وليس في فمه حجة. 15 لاني لك يا رب صبرت انت تستجيب يا رب الهي. 16 لاني قلت لئلا يشمتوا بي.عندما زلت قدمي تعظموا علي. 17 لانني موشك ان اظلع ووجعي مقابلي دائما‏. 18 لانني اخبر باثمي واغتم من خطيتي. 19 واما اعدائي فاحياء.عظموا.والذين يبغضونني ظلما كثروا. 20 والمجازون عن الخير بشر يقاومونني لاجل اتباعي الصلاح. 21 لا تتركني يا رب.يا الهي لا تبعد عني. 22 اسرع الى معونتي يا رب يا خلاصي`
          );
          location.reload();
        }
        function op39() {
          document.getElementById(`show-ld`).innerText = `39`;
          localStorage.setItem(`count`, `39`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.ليدوثون.مزمور لداود.قلت اتحفظ لسبيلي من الخطا بلساني.احفظ لفمي كمامة فيما الشرير مقابلي. 2 صمت صمتا سكت عن الخير فتحرك وجعي. 3 حمي قلبي في جوفي.عند لهجي اشتعلت النار.تكلمت بلساني. 4 عرفني يا رب نهايتي ومقدار ايامي كم هي فاعلم كيف انا زائل. 5 هوذا جعلت ايامي اشبارا وعمري كلا شيء قدامك.انما نفخة كل انسان قد جعل.سلاه. 6 انما كخيال يتمشى الانسان.انما باطلا يضجون.يذخر ذخائر ولا يدري من يضمها 7 والان ماذا انتظرت يا رب.رجائي فيك هو. 8 من كل معاصي نجني.لا تجعلني عارا عند الجاهل. 9 صمت.لا افتح فمي لانك انت فعلت. 10 ارفع عني ضربك من مهاجمة يدك انا قد فنيت. 11 بتاديبات ان ادبت الانسان من اجل اثمه افنيت مثل العث مشتهاه.انما كل انسان نفخة.سلاه. 12 استمع صلاتي يا رب واصغ الى صراخي.لا تسكت عن دموعي.لاني‏ انا غريب عندك.نزيل مثل جميع ابائي. 13 اقتصر عني فاتبلج قبل ان اذهب فلا اوجد`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.ليدوثون.مزمور لداود.قلت اتحفظ لسبيلي من الخطا بلساني.احفظ لفمي كمامة فيما الشرير مقابلي. 2 صمت صمتا سكت عن الخير فتحرك وجعي. 3 حمي قلبي في جوفي.عند لهجي اشتعلت النار.تكلمت بلساني. 4 عرفني يا رب نهايتي ومقدار ايامي كم هي فاعلم كيف انا زائل. 5 هوذا جعلت ايامي اشبارا وعمري كلا شيء قدامك.انما نفخة كل انسان قد جعل.سلاه. 6 انما كخيال يتمشى الانسان.انما باطلا يضجون.يذخر ذخائر ولا يدري من يضمها 7 والان ماذا انتظرت يا رب.رجائي فيك هو. 8 من كل معاصي نجني.لا تجعلني عارا عند الجاهل. 9 صمت.لا افتح فمي لانك انت فعلت. 10 ارفع عني ضربك من مهاجمة يدك انا قد فنيت. 11 بتاديبات ان ادبت الانسان من اجل اثمه افنيت مثل العث مشتهاه.انما كل انسان نفخة.سلاه. 12 استمع صلاتي يا رب واصغ الى صراخي.لا تسكت عن دموعي.لاني‏ انا غريب عندك.نزيل مثل جميع ابائي. 13 اقتصر عني فاتبلج قبل ان اذهب فلا اوجد`
          );
          location.reload();
        }
        function op40() {
          document.getElementById(`show-ld`).innerText = `40`;
          localStorage.setItem(`count`, `40`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.انتظارا انتظرت الرب فمال الي وسمع صراخي 2 واصعدني من جب الهلاك من طين الحماة واقام على صخرة رجلي.ثبت خطواتي 3 وجعل في فمي ترنيمة جديدة تسبيحة لالهنا.كثيرون يرون ويخافون ويتوكلون على الرب 4 طوبى للرجل الذي جعل الرب متكله ولم يلتفت الى الغطاريس والمنحرفين الى الكذب. 5 كثيرا ما جعلت انت ايها الرب الهي عجائبك وافكارك من جهتنا.لا تقوم لديك.لاخبرن واتكلمن بها.زادت عن ان تعد. 6 بذبيحة وتقدمة لم تسر.اذني فتحت.محرقة وذبيحة خطية لم تطلب 7 حينئذ قلت هانذا جئت.بدرج الكتاب مكتوب عني 8 ان افعل مشيئتك يا الهي سررت.وشريعتك في وسط احشائي 9 بشرت ببر في جماعة عظيمة.هوذا شفتاي لم امنعهما.انت يا رب علمت. 10 لم اكتم عدلك في وسط قلبي.تكلمت بامانتك وخلاصك.لم اخف رحمتك وحقك عن الجماعة العظيمة 11 اما انت يا رب فلا تمنع رافتك عني.تنصرني رحمتك وحقك دائما. 12 لان شرورا لا تحصى قد اكتنفتني.حاقت بي اثامي ولا استطيع ان‏ ابصر.كثرت اكثر من شعر راسي وقلبي قد تركني. 13 ارتض يا رب بان تنجيني.يا رب الى معونتي اسرع. 14 ليخز وليخجل معا الذين يطلبون نفسي لاهلاكها.ليرتد الى الوراء وليخز المسرورون باذيتي 15 ليستوحش من اجل خزيهم القائلون لي هه هه 16 ليبتهج ويفرح بك جميع طالبيك.ليقل ابدا محبو خلاصك يتعظم الرب 17 اما انا فمسكين وبائس الرب يهتم بي.عوني ومنقذي انت.يا الهي لا تبطئ`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.انتظارا انتظرت الرب فمال الي وسمع صراخي 2 واصعدني من جب الهلاك من طين الحماة واقام على صخرة رجلي.ثبت خطواتي 3 وجعل في فمي ترنيمة جديدة تسبيحة لالهنا.كثيرون يرون ويخافون ويتوكلون على الرب 4 طوبى للرجل الذي جعل الرب متكله ولم يلتفت الى الغطاريس والمنحرفين الى الكذب. 5 كثيرا ما جعلت انت ايها الرب الهي عجائبك وافكارك من جهتنا.لا تقوم لديك.لاخبرن واتكلمن بها.زادت عن ان تعد. 6 بذبيحة وتقدمة لم تسر.اذني فتحت.محرقة وذبيحة خطية لم تطلب 7 حينئذ قلت هانذا جئت.بدرج الكتاب مكتوب عني 8 ان افعل مشيئتك يا الهي سررت.وشريعتك في وسط احشائي 9 بشرت ببر في جماعة عظيمة.هوذا شفتاي لم امنعهما.انت يا رب علمت. 10 لم اكتم عدلك في وسط قلبي.تكلمت بامانتك وخلاصك.لم اخف رحمتك وحقك عن الجماعة العظيمة 11 اما انت يا رب فلا تمنع رافتك عني.تنصرني رحمتك وحقك دائما. 12 لان شرورا لا تحصى قد اكتنفتني.حاقت بي اثامي ولا استطيع ان‏ ابصر.كثرت اكثر من شعر راسي وقلبي قد تركني. 13 ارتض يا رب بان تنجيني.يا رب الى معونتي اسرع. 14 ليخز وليخجل معا الذين يطلبون نفسي لاهلاكها.ليرتد الى الوراء وليخز المسرورون باذيتي 15 ليستوحش من اجل خزيهم القائلون لي هه هه 16 ليبتهج ويفرح بك جميع طالبيك.ليقل ابدا محبو خلاصك يتعظم الرب 17 اما انا فمسكين وبائس الرب يهتم بي.عوني ومنقذي انت.يا الهي لا تبطئ`
          );
          location.reload();
        }
        function op41() {
          document.getElementById(`show-ld`).innerText = `41`;
          localStorage.setItem(`count`, `41`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.طوبى للذي ينظر الى المسكين.في يوم الشر ينجيه الرب. 2 الرب يحفظه ويحييه.يغتبط في الارض ولا يسلمه الى مرام اعدائه. 3 الرب يعضده وهو على فراش الضعف.مهدت مضجعه كله في مرضه 4 انا قلت يا رب ارحمني.اشف نفسي لاني قد اخطات اليك. 5 اعدائي يتقاولون علي بشر.متى يموت ويبيد اسمه. 6 وان دخل ليراني يتكلم بالكذب.قلبه يجمع لنفسه اثما.يخرج في الخارج يتكلم. 7 كل مبغضي يتناجون معا علي.علي تفكروا باذيتي. 8 يقولون امر رديء قد انسكب عليه.حيث اضطجع لا يعود يقوم. 9 ايضا رجل سلامتي الذي وثقت به اكل خبزي رفع علي عقبه 10 اما انت يا رب فارحمني واقمني فاجازيهم. 11 بهذا علمت انك سررت بي انه لم يهتف علي عدوي. 12 اما انا فبكمالي دعمتني واقمتني قدامك الى الابد. 13 مبارك الرب اله اسرائيل من الازل والى الابد.امين فامين`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.طوبى للذي ينظر الى المسكين.في يوم الشر ينجيه الرب. 2 الرب يحفظه ويحييه.يغتبط في الارض ولا يسلمه الى مرام اعدائه. 3 الرب يعضده وهو على فراش الضعف.مهدت مضجعه كله في مرضه 4 انا قلت يا رب ارحمني.اشف نفسي لاني قد اخطات اليك. 5 اعدائي يتقاولون علي بشر.متى يموت ويبيد اسمه. 6 وان دخل ليراني يتكلم بالكذب.قلبه يجمع لنفسه اثما.يخرج في الخارج يتكلم. 7 كل مبغضي يتناجون معا علي.علي تفكروا باذيتي. 8 يقولون امر رديء قد انسكب عليه.حيث اضطجع لا يعود يقوم. 9 ايضا رجل سلامتي الذي وثقت به اكل خبزي رفع علي عقبه 10 اما انت يا رب فارحمني واقمني فاجازيهم. 11 بهذا علمت انك سررت بي انه لم يهتف علي عدوي. 12 اما انا فبكمالي دعمتني واقمتني قدامك الى الابد. 13 مبارك الرب اله اسرائيل من الازل والى الابد.امين فامين`
          );
          location.reload();
        }
        function op42() {
          document.getElementById(`show-ld`).innerText = `42`;
          localStorage.setItem(`count`, `42`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.قصيدة لبني قورح.كما يشتاق الايل الى جداول المياه هكذا تشتاق نفسي اليك يا الله. 2 عطشت نفسي الى الله الى الاله الحي.متى اجيء واتراءى قدام الله. 3 صارت لي دموعي خبزا نهارا وليلا اذ قيل لي كل يوم اين الهك. 4 هذه اذكرها فاسكب نفسي علي.لاني كنت امر مع الجماع اتدرج‏ معهم الى بيت الله بصوت ترنم وحمد جمهور معيد. 5 لماذا انت منحنية يا نفسي ولماذا تئنين في.ارتجي الله لاني بعد احمده لاجل خلاص وجهه 6 يا الهي نفسي منحنية في.لذلك اذكرك من ارض الاردن وجبال حرمون من جبل مصعر. 7 غمر ينادي غمرا عند صوت ميازيبك.كل تياراتك ولججك طمت علي. 8 بالنهار يوصي الرب رحمته وبالليل تسبيحه عندي صلاة لاله حياتي. 9 اقول لله صخرتي لماذا نسيتني.لماذا اذهب حزينا من مضايقة العدو. 10 بسحق في عظامي عيرني مضايقي بقولهم لي كل يوم اين الهك. 11 لماذا انت منحنية يا نفسي ولماذا تئنين في.ترجي الله لاني بعد احمده خلاص وجهي والهي`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.قصيدة لبني قورح.كما يشتاق الايل الى جداول المياه هكذا تشتاق نفسي اليك يا الله. 2 عطشت نفسي الى الله الى الاله الحي.متى اجيء واتراءى قدام الله. 3 صارت لي دموعي خبزا نهارا وليلا اذ قيل لي كل يوم اين الهك. 4 هذه اذكرها فاسكب نفسي علي.لاني كنت امر مع الجماع اتدرج‏ معهم الى بيت الله بصوت ترنم وحمد جمهور معيد. 5 لماذا انت منحنية يا نفسي ولماذا تئنين في.ارتجي الله لاني بعد احمده لاجل خلاص وجهه 6 يا الهي نفسي منحنية في.لذلك اذكرك من ارض الاردن وجبال حرمون من جبل مصعر. 7 غمر ينادي غمرا عند صوت ميازيبك.كل تياراتك ولججك طمت علي. 8 بالنهار يوصي الرب رحمته وبالليل تسبيحه عندي صلاة لاله حياتي. 9 اقول لله صخرتي لماذا نسيتني.لماذا اذهب حزينا من مضايقة العدو. 10 بسحق في عظامي عيرني مضايقي بقولهم لي كل يوم اين الهك. 11 لماذا انت منحنية يا نفسي ولماذا تئنين في.ترجي الله لاني بعد احمده خلاص وجهي والهي`
          );
          location.reload();
        }
        function op43() {
          document.getElementById(`show-ld`).innerText = `43`;
          localStorage.setItem(`count`, `43`);
          document.getElementById(`one`).innerText =
            `1 اقض لي يا الله وخاصم مخاصمتي مع امة غير راحمة ومن انسان غش وظلم نجني. 2 لانك انت اله حصني.لماذا رفضتني.لماذا اتمشى حزينا من مضايقة العدو. 3 ارسل نورك وحقك هما يهديانني وياتيان بي الى جبل قدسك والى مساكنك. 4 فاتي الى مذبح الله الى الله بهجة فرحي واحمدك بالعود يا الله الهي. 5 لماذا انت منحنية يا نفسي ولماذا تئنين في.ترجي الله لاني بعد احمده خلاص وجهي والهي`;
          localStorage.setItem(
            `words`,
            `1 اقض لي يا الله وخاصم مخاصمتي مع امة غير راحمة ومن انسان غش وظلم نجني. 2 لانك انت اله حصني.لماذا رفضتني.لماذا اتمشى حزينا من مضايقة العدو. 3 ارسل نورك وحقك هما يهديانني وياتيان بي الى جبل قدسك والى مساكنك. 4 فاتي الى مذبح الله الى الله بهجة فرحي واحمدك بالعود يا الله الهي. 5 لماذا انت منحنية يا نفسي ولماذا تئنين في.ترجي الله لاني بعد احمده خلاص وجهي والهي`
          );
          location.reload();
        }
        function op44() {
          document.getElementById(`show-ld`).innerText = `44`;
          localStorage.setItem(`count`, `44`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لبني قورح.قصيدة.اللهم باذاننا قد سمعنا.اباؤنا اخبرونا بعمل عملته في ايامهم في ايام القدم. 2 انت بيدك استاصلت الامم وغرستهم.حطمت شعوبا ومددتهم. 3 لانه ليس بسيفهم امتلكوا الارض ولا ذراعهم خلصتهم لكن يمينك وذراعك ونور وجهك لانك رضيت عنهم 4 انت هو ملكي يا الله.فامر بخلاص يعقوب. 5 بك ننطح مضايقينا.باسمك ندوس القائمين علينا. 6 لاني على قوسي لا اتكل وسيفي لا يخلصني. 7 لانك انت خلصتنا من مضايقينا واخزيت مبغضينا. 8 بالله نفتخر اليوم كله واسمك نحمد الى الدهر.سلاه 9 لكنك قد رفضتنا واخجلتنا ولا تخرج مع جنودنا. 10 ترجعنا الى الوراء عن العدو ومبغضونا نهبوا لانفسهم. 11 جعلتنا كالضان اكلا.ذريتنا بين الامم. 12 بعت شعبك بغير مال وما ربحت بثمنهم. 13 تجعلنا عارا عند جيراننا.هزاة وسخرة للذين حولنا. 14 تجعلنا مثلا بين الشعوب.لانغاض الراس بين الامم. 15 اليوم كله خجلي امامي وخزي وجهي قد غطاني 16 من صوت المعير والشاتم.من وجه عدو ومنتقم 17 هذا كله جاء علينا وما نسيناك ولا خنا في عهدك. 18 لم يرتد قلبنا الى وراء ولا مالت خطواتنا عن طريقك 19 حتى سحقتنا في مكان التنانين وغطيتنا بظل الموت. 20 ان نسينا اسم الهنا او بسطنا ايدينا الى اله غريب 21 افلا يفحص الله عن هذا لانه هو يعرف خفيات القلب. 22 لاننا من اجلك نمات اليوم كله.قد حسبنا مثل غنم للذبح 23 استيقظ.لماذا تتغافى يا رب.انتبه.لا ترفض الى الابد. 24 لماذا تحجب وجهك وتنسى مذلتنا وضيقنا. 25 لان انفسنا منحنية الى التراب.لصقت في الارض بطوننا. 26 قم عونا لنا وافدنا من اجل رحمتك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لبني قورح.قصيدة.اللهم باذاننا قد سمعنا.اباؤنا اخبرونا بعمل عملته في ايامهم في ايام القدم. 2 انت بيدك استاصلت الامم وغرستهم.حطمت شعوبا ومددتهم. 3 لانه ليس بسيفهم امتلكوا الارض ولا ذراعهم خلصتهم لكن يمينك وذراعك ونور وجهك لانك رضيت عنهم 4 انت هو ملكي يا الله.فامر بخلاص يعقوب. 5 بك ننطح مضايقينا.باسمك ندوس القائمين علينا. 6 لاني على قوسي لا اتكل وسيفي لا يخلصني. 7 لانك انت خلصتنا من مضايقينا واخزيت مبغضينا. 8 بالله نفتخر اليوم كله واسمك نحمد الى الدهر.سلاه 9 لكنك قد رفضتنا واخجلتنا ولا تخرج مع جنودنا. 10 ترجعنا الى الوراء عن العدو ومبغضونا نهبوا لانفسهم. 11 جعلتنا كالضان اكلا.ذريتنا بين الامم. 12 بعت شعبك بغير مال وما ربحت بثمنهم. 13 تجعلنا عارا عند جيراننا.هزاة وسخرة للذين حولنا. 14 تجعلنا مثلا بين الشعوب.لانغاض الراس بين الامم. 15 اليوم كله خجلي امامي وخزي وجهي قد غطاني 16 من صوت المعير والشاتم.من وجه عدو ومنتقم 17 هذا كله جاء علينا وما نسيناك ولا خنا في عهدك. 18 لم يرتد قلبنا الى وراء ولا مالت خطواتنا عن طريقك 19 حتى سحقتنا في مكان التنانين وغطيتنا بظل الموت. 20 ان نسينا اسم الهنا او بسطنا ايدينا الى اله غريب 21 افلا يفحص الله عن هذا لانه هو يعرف خفيات القلب. 22 لاننا من اجلك نمات اليوم كله.قد حسبنا مثل غنم للذبح 23 استيقظ.لماذا تتغافى يا رب.انتبه.لا ترفض الى الابد. 24 لماذا تحجب وجهك وتنسى مذلتنا وضيقنا. 25 لان انفسنا منحنية الى التراب.لصقت في الارض بطوننا. 26 قم عونا لنا وافدنا من اجل رحمتك`
          );
          location.reload();
        }
        function op45() {
          document.getElementById(`show-ld`).innerText = `45`;
          localStorage.setItem(`count`, `45`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على السوسن.لبني قورح.قصيدة.ترنيمة محبة.فاض قلبي بكلام صالح.متكلم انا بانشائي للملك.لساني قلم كاتب ماهر 2 انت ابرع جمالا من بني البشر.انسكبت النعمة على شفتيك لذلك باركك الله الى الابد. 3 تقلد سيفك على فخذك ايها الجبار جلالك وبهاءك. 4 وبجلالك اقتحم.اركب.من اجل الحق والدعة والبر فتريك يمينك مخاوف. 5 نبلك المسنونة في قلب اعداء الملك.شعوب تحتك يسقطون 6 كرسيك يا الله الى دهر الدهور.قضيب استقامة قضيب ملكك. 7 احببت البر وابغضت الاثم من اجل ذلك مسحك الله الهك بدهن الابتهاج اكثر من رفقائك. 8 كل ثيابك مر وعود وسليخة.من قصور العاج سرتك الاوتار. 9 بنات ملوك بين حظياتك.جعلت الملكة عن يمينك بذهب اوفير 10 اسمعي يا بنت وانظري واميلي اذنك وانسي شعبك وبيت ابيك 11 فيشتهي الملك حسنك لانه هو سيدك فاسجدي له. 12 وبنت صور اغنى الشعوب تترضى وجهك بهدية 13 كلها مجد ابنة الملك في خدرها.منسوجة بذهب ملابسها. 14 بملابس مطرزة تحضر الى الملك.في اثرها عذارى صاحباتها.مقدمات اليك 15 يحضرن بفرح وابتهاج.يدخلن الى قصر الملك. 16 عوض عن ابائك يكون بنوك تقيمهم رؤساء في كل الارض. 17 اذكر اسمك في كل دور فدور.من اجل ذلك تحمدك الشعوب الى الدهر والابد`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على السوسن.لبني قورح.قصيدة.ترنيمة محبة.فاض قلبي بكلام صالح.متكلم انا بانشائي للملك.لساني قلم كاتب ماهر 2 انت ابرع جمالا من بني البشر.انسكبت النعمة على شفتيك لذلك باركك الله الى الابد. 3 تقلد سيفك على فخذك ايها الجبار جلالك وبهاءك. 4 وبجلالك اقتحم.اركب.من اجل الحق والدعة والبر فتريك يمينك مخاوف. 5 نبلك المسنونة في قلب اعداء الملك.شعوب تحتك يسقطون 6 كرسيك يا الله الى دهر الدهور.قضيب استقامة قضيب ملكك. 7 احببت البر وابغضت الاثم من اجل ذلك مسحك الله الهك بدهن الابتهاج اكثر من رفقائك. 8 كل ثيابك مر وعود وسليخة.من قصور العاج سرتك الاوتار. 9 بنات ملوك بين حظياتك.جعلت الملكة عن يمينك بذهب اوفير 10 اسمعي يا بنت وانظري واميلي اذنك وانسي شعبك وبيت ابيك 11 فيشتهي الملك حسنك لانه هو سيدك فاسجدي له. 12 وبنت صور اغنى الشعوب تترضى وجهك بهدية 13 كلها مجد ابنة الملك في خدرها.منسوجة بذهب ملابسها. 14 بملابس مطرزة تحضر الى الملك.في اثرها عذارى صاحباتها.مقدمات اليك 15 يحضرن بفرح وابتهاج.يدخلن الى قصر الملك. 16 عوض عن ابائك يكون بنوك تقيمهم رؤساء في كل الارض. 17 اذكر اسمك في كل دور فدور.من اجل ذلك تحمدك الشعوب الى الدهر والابد`
          );
          location.reload();
        }
        function op46() {
          document.getElementById(`show-ld`).innerText = `46`;
          localStorage.setItem(`count`, `46`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لبني قورح.على الجواب.ترنيمة.الله لنا ملجا وقوة.عونا في الضيقات وجد شديدا. 2 لذلك لا نخشى ولو تزحزحت الارض ولو انقلبت الجبال الى قلب البحار 3 تعج وتجيش مياهها.تتزعزع الجبال بطموها.سلاه 4 نهر سواقيه تفرح مدينة الله مقدس مساكن العلي. 5 الله في وسطها فلن تتزعزع.يعينها الله عند اقبال الصبح. 6 عجت الامم.تزعزعت الممالك.اعطى صوته ذابت الارض. 7 رب الجنود معنا.ملجانا اله يعقوب.سلاه 8 هلموا انظروا اعمال الله كيف جعل خربا في الارض. 9 مسكن الحروب الى اقصى الارض.يكسر القوس ويقطع الرمح.المركبات يحرقها بالنار. 10 كفوا واعلموا اني انا الله.اتعالى بين الامم اتعالى في الارض. 11 رب الجنود معنا.ملجانا اله يعقوب.سلاه`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لبني قورح.على الجواب.ترنيمة.الله لنا ملجا وقوة.عونا في الضيقات وجد شديدا. 2 لذلك لا نخشى ولو تزحزحت الارض ولو انقلبت الجبال الى قلب البحار 3 تعج وتجيش مياهها.تتزعزع الجبال بطموها.سلاه 4 نهر سواقيه تفرح مدينة الله مقدس مساكن العلي. 5 الله في وسطها فلن تتزعزع.يعينها الله عند اقبال الصبح. 6 عجت الامم.تزعزعت الممالك.اعطى صوته ذابت الارض. 7 رب الجنود معنا.ملجانا اله يعقوب.سلاه 8 هلموا انظروا اعمال الله كيف جعل خربا في الارض. 9 مسكن الحروب الى اقصى الارض.يكسر القوس ويقطع الرمح.المركبات يحرقها بالنار. 10 كفوا واعلموا اني انا الله.اتعالى بين الامم اتعالى في الارض. 11 رب الجنود معنا.ملجانا اله يعقوب.سلاه`
          );
          location.reload();
        }
        function op47() {
          document.getElementById(`show-ld`).innerText = `47`;
          localStorage.setItem(`count`, `47`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لبني قورح.مزمور.يا جميع الامم صفقوا بالايادي.اهتفوا لله بصوت الابتهاج. 2 لان الرب علي.مخوف ملك كبير على كل الارض. 3 يخضع الشعوب تحتنا والامم تحت اقدامنا. 4 يختار لنا نصيبنا فخر يعقوب الذي احبه.سلاه 5 صعد الله بهتاف الرب بصوت الصور. 6 رنموا لله رنموا.رنموا لملكنا رنموا. 7 لان الله ملك الارض كلها رنموا قصيدة. 8 ملك الله على الامم.الله جلس على كرسي قدسه. 9 شرفاء الشعوب اجتمعوا.شعب اله ابراهيم.لان لله مجان الارض.هو متعال جدا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لبني قورح.مزمور.يا جميع الامم صفقوا بالايادي.اهتفوا لله بصوت الابتهاج. 2 لان الرب علي.مخوف ملك كبير على كل الارض. 3 يخضع الشعوب تحتنا والامم تحت اقدامنا. 4 يختار لنا نصيبنا فخر يعقوب الذي احبه.سلاه 5 صعد الله بهتاف الرب بصوت الصور. 6 رنموا لله رنموا.رنموا لملكنا رنموا. 7 لان الله ملك الارض كلها رنموا قصيدة. 8 ملك الله على الامم.الله جلس على كرسي قدسه. 9 شرفاء الشعوب اجتمعوا.شعب اله ابراهيم.لان لله مجان الارض.هو متعال جدا`
          );
          location.reload();
        }
        function op48() {
          document.getElementById(`show-ld`).innerText = `48`;
          localStorage.setItem(`count`, `48`);
          document.getElementById(`one`).innerText =
            `1 تسبيحة مزمور.لبني قورح.عظيم هو الرب وحميد جدا في مدينة الهنا جبل قدسه. 2 جميل الارتفاع فرح كل الارض جبل صهيون.فرح اقاصي الشمال مدينة الملك العظيم. 3 الله في قصورها يعرف ملجا 4 لانه هوذا الملوك اجتمعوا.مضوا جميعا. 5 لما راوا بهتوا ارتاعوا فروا. 6 اخذتهم الرعدة هناك.والمخاض كوالدة. 7 بريح شرقية تكسر سفن ترشيش. 8 كما سمعنا هكذا راينا في مدينة رب الجنود في مدينة الهنا.الله يثبتها الى الابد.سلاه 9 ذكرنا يا الله رحمتك في وسط هيكلك. 10 نظير اسمك يا الله تسبيحك الى اقاصي الارض.يمينك ملانة برا. 11 يفرح جبل صهيون تبتهج بنات يهوذا من اجل احكامك 12 طوفوا بصهيون ودوروا حولها.عدوا ابراجها. 13 ضعوا قلوبكم على متارسها.تاملوا قصورها لكي تحدثوا بها جيلا اخر. 14 لان الله هذا هو الهنا الى الدهر والابد.هو يهدينا حتى الى‏ الموت`;
          localStorage.setItem(
            `words`,
            `1 تسبيحة مزمور.لبني قورح.عظيم هو الرب وحميد جدا في مدينة الهنا جبل قدسه. 2 جميل الارتفاع فرح كل الارض جبل صهيون.فرح اقاصي الشمال مدينة الملك العظيم. 3 الله في قصورها يعرف ملجا 4 لانه هوذا الملوك اجتمعوا.مضوا جميعا. 5 لما راوا بهتوا ارتاعوا فروا. 6 اخذتهم الرعدة هناك.والمخاض كوالدة. 7 بريح شرقية تكسر سفن ترشيش. 8 كما سمعنا هكذا راينا في مدينة رب الجنود في مدينة الهنا.الله يثبتها الى الابد.سلاه 9 ذكرنا يا الله رحمتك في وسط هيكلك. 10 نظير اسمك يا الله تسبيحك الى اقاصي الارض.يمينك ملانة برا. 11 يفرح جبل صهيون تبتهج بنات يهوذا من اجل احكامك 12 طوفوا بصهيون ودوروا حولها.عدوا ابراجها. 13 ضعوا قلوبكم على متارسها.تاملوا قصورها لكي تحدثوا بها جيلا اخر. 14 لان الله هذا هو الهنا الى الدهر والابد.هو يهدينا حتى الى‏ الموت`
          );
          location.reload();
        }
        function op49() {
          document.getElementById(`show-ld`).innerText = `49`;
          localStorage.setItem(`count`, `49`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لبني قورح.مزمور.اسمعوا هذا يا جميع الشعوب.اصغوا يا جميع سكان الدنيا 2 عال ودون اغنياء وفقراء سواء. 3 فمي يتكلم بالحكم ولهج قلبي فهم. 4 اميل اذني الى مثل واوضح بعود لغزي 5 لماذا اخاف في ايام الشر عندما يحيط بي اثم متعقبي. 6 الذين يتكلون على ثروتهم وبكثرة غناهم يفتخرون. 7 الاخ لن يفدي الانسان فداء ولا يعطي الله كفارة عنه. 8 وكريمة هي فدية نفوسهم فغلقت الى الدهر. 9 حتى يحيا الى الابد فلا يرى القبر. 10 بل يراه.الحكماء يموتون.كذلك الجاهل والبليد يهلكان ويتركان ثروتهما لاخرين. 11 باطنهم ان بيوتهم الى الابد مساكنهم الى دور فدور.ينادون باسمائهم في الاراضي. 12 والانسان في كرامة لا يبيت.يشبه البهائم التي تباد. 13 هذا طريقهم اعتمادهم وخلفاؤهم يرتضون باقوالهم.سلاه. 14 مثل الغنم للهاوية يساقون.الموت يرعاهم ويسودهم المستقيمون.غداة وصورتهم تبلى.الهاوية مسكن لهم. 15 انما الله يفدي نفسي من يد الهاوية لانه ياخذني.سلاه 16 لا تخش اذا استغنى انسان اذا زاد مجد بيته. 17 لانه عند موته كله لا ياخذ.لا ينزل وراءه مجده. 18 لانه في حياته يبارك نفسه.ويحمدونك اذا احسنت الى نفسك. 19 تدخل الى جيل ابائه الذين لا يعاينون النور الى الابد. 20 انسان في كرامة ولا يفهم يشبه البهائم التي تباد`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لبني قورح.مزمور.اسمعوا هذا يا جميع الشعوب.اصغوا يا جميع سكان الدنيا 2 عال ودون اغنياء وفقراء سواء. 3 فمي يتكلم بالحكم ولهج قلبي فهم. 4 اميل اذني الى مثل واوضح بعود لغزي 5 لماذا اخاف في ايام الشر عندما يحيط بي اثم متعقبي. 6 الذين يتكلون على ثروتهم وبكثرة غناهم يفتخرون. 7 الاخ لن يفدي الانسان فداء ولا يعطي الله كفارة عنه. 8 وكريمة هي فدية نفوسهم فغلقت الى الدهر. 9 حتى يحيا الى الابد فلا يرى القبر. 10 بل يراه.الحكماء يموتون.كذلك الجاهل والبليد يهلكان ويتركان ثروتهما لاخرين. 11 باطنهم ان بيوتهم الى الابد مساكنهم الى دور فدور.ينادون باسمائهم في الاراضي. 12 والانسان في كرامة لا يبيت.يشبه البهائم التي تباد. 13 هذا طريقهم اعتمادهم وخلفاؤهم يرتضون باقوالهم.سلاه. 14 مثل الغنم للهاوية يساقون.الموت يرعاهم ويسودهم المستقيمون.غداة وصورتهم تبلى.الهاوية مسكن لهم. 15 انما الله يفدي نفسي من يد الهاوية لانه ياخذني.سلاه 16 لا تخش اذا استغنى انسان اذا زاد مجد بيته. 17 لانه عند موته كله لا ياخذ.لا ينزل وراءه مجده. 18 لانه في حياته يبارك نفسه.ويحمدونك اذا احسنت الى نفسك. 19 تدخل الى جيل ابائه الذين لا يعاينون النور الى الابد. 20 انسان في كرامة ولا يفهم يشبه البهائم التي تباد`
          );
          location.reload();
        }
        function op50() {
          document.getElementById(`show-ld`).innerText = `50`;
          localStorage.setItem(`count`, `50`);
          document.getElementById(`one`).innerText =
            `1 مزمور.لاساف.اله الالهة الرب تكلم ودعا الارض من مشرق الشمس الى مغربها. 2 من صهيون كمال الجمال الله اشرق. 3 ياتي الهنا ولا يصمت.نار قدامه تاكل وحوله عاصف جدا. 4 يدعو السموات من فوق والارض الى مداينة شعبه. 5 اجمعوا الي اتقيائي القاطعين عهدي على ذبيحة. 6 وتخبر السموات بعدله لان الله هو الديان.سلاه 7 اسمع يا شعبي فاتكلم.يا اسرائيل فاشهد عليك.الله الهك انا. 8 لا على ذبائحك اوبخك.فان محرقاتك هي دائما قدامي. 9 لا اخذ من بيتك ثورا ولا من حظائرك اعتدة. 10 لان لي حيوان الوعر والبهائم على الجبال الالوف. 11 قد علمت كل طيور الجبال ووحوش البرية عندي. 12 ان جعت فلا اقول لك لان لي المسكونة وملاها. 13 هل اكل لحم الثيران او اشرب دم التيوس. 14 اذبح لله حمدا واوف العلي نذورك 15 وادعني في يوم الضيق انقذك فتمجدني 16 وللشرير قال الله مالك تحدث بفرائضي وتحمل عهدي على فمك. 17 وانت قد ابغضت التاديب والقيت كلامي خلفك. 18 اذا رايت سارقا وافقته ومع الزناة نصيبك. 19 اطلقت فمك بالشر ولسانك يخترع غشا. 20 تجلس تتكلم على اخيك.لابن امك تضع معثرة. 21 هذه صنعت وسكت.ظننت اني مثلك.اوبخك واصف خطاياك امام عينيك. 22 افهموا هذا يا ايها الناسون الله لئلا افترسكم ولا منقذ. 23 ذابح الحمد يمجدني والمقوم طريقه اريه خلاص الله`;
          localStorage.setItem(
            `words`,
            `1 مزمور.لاساف.اله الالهة الرب تكلم ودعا الارض من مشرق الشمس الى مغربها. 2 من صهيون كمال الجمال الله اشرق. 3 ياتي الهنا ولا يصمت.نار قدامه تاكل وحوله عاصف جدا. 4 يدعو السموات من فوق والارض الى مداينة شعبه. 5 اجمعوا الي اتقيائي القاطعين عهدي على ذبيحة. 6 وتخبر السموات بعدله لان الله هو الديان.سلاه 7 اسمع يا شعبي فاتكلم.يا اسرائيل فاشهد عليك.الله الهك انا. 8 لا على ذبائحك اوبخك.فان محرقاتك هي دائما قدامي. 9 لا اخذ من بيتك ثورا ولا من حظائرك اعتدة. 10 لان لي حيوان الوعر والبهائم على الجبال الالوف. 11 قد علمت كل طيور الجبال ووحوش البرية عندي. 12 ان جعت فلا اقول لك لان لي المسكونة وملاها. 13 هل اكل لحم الثيران او اشرب دم التيوس. 14 اذبح لله حمدا واوف العلي نذورك 15 وادعني في يوم الضيق انقذك فتمجدني 16 وللشرير قال الله مالك تحدث بفرائضي وتحمل عهدي على فمك. 17 وانت قد ابغضت التاديب والقيت كلامي خلفك. 18 اذا رايت سارقا وافقته ومع الزناة نصيبك. 19 اطلقت فمك بالشر ولسانك يخترع غشا. 20 تجلس تتكلم على اخيك.لابن امك تضع معثرة. 21 هذه صنعت وسكت.ظننت اني مثلك.اوبخك واصف خطاياك امام عينيك. 22 افهموا هذا يا ايها الناسون الله لئلا افترسكم ولا منقذ. 23 ذابح الحمد يمجدني والمقوم طريقه اريه خلاص الله`
          );
          location.reload();
        }
        function op51() {
          document.getElementById(`show-ld`).innerText = `51`;
          localStorage.setItem(`count`, `51`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود عندما جاء اليه ناثان النبي بعد ما دخل الى بثشبع.ارحمني يا الله حسب رحمتك.حسب كثرة رافتك امح معاصي. 2 اغسلني كثيرا من اثمي ومن خطيتي طهرني. 3 لاني عارف بمعاصي وخطيتي امامي دائما. 4 اليك وحدك اخطات والشر قدام عينيك صنعت لكي تتبرر في اقوالك وتزكو في قضائك. 5 هانذا بالاثم صورت وبالخطية حبلت بي امي 6 ها قد سررت بالحق في الباطن ففي السريرة تعرفني حكمة. 7 طهرني بالزوفا فاطهر.اغسلني فابيض اكثر من الثلج. 8 اسمعني سرورا وفرحا.فتبتهج عظام سحقتها. 9 استر وجهك عن خطاياي وامح كل اثامي‏ 10 قلبا نقيا اخلق في يا الله وروحا مستقيما جدد في داخلي. 11 لا تطرحني من قدام وجهك وروحك القدوس لا تنزعه مني. 12 رد لي بهجة خلاصك وبروح منتدبة اعضدني. 13 فاعلم الاثمة طرقك والخطاة اليك يرجعون 14 نجني من الدماء يا الله اله خلاصي.فيسبح لساني برك. 15 يا رب افتح شفتي فيخبر فمي بتسبيحك. 16 لانك لا تسر بذبيحة والا فكنت اقدمها.بمحرقة لا ترضى. 17 ذبائح الله هي روح منكسرة.القلب المنكسر والمنسحق يا الله لا تحتقره 18 احسن برضاك الى صهيون.ابن اسوار اورشليم. 19 حينئذ تسر بذبائح البر محرقة وتقدمة تامة.حينئذ يصعدون على مذبحك عجولا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود عندما جاء اليه ناثان النبي بعد ما دخل الى بثشبع.ارحمني يا الله حسب رحمتك.حسب كثرة رافتك امح معاصي. 2 اغسلني كثيرا من اثمي ومن خطيتي طهرني. 3 لاني عارف بمعاصي وخطيتي امامي دائما. 4 اليك وحدك اخطات والشر قدام عينيك صنعت لكي تتبرر في اقوالك وتزكو في قضائك. 5 هانذا بالاثم صورت وبالخطية حبلت بي امي 6 ها قد سررت بالحق في الباطن ففي السريرة تعرفني حكمة. 7 طهرني بالزوفا فاطهر.اغسلني فابيض اكثر من الثلج. 8 اسمعني سرورا وفرحا.فتبتهج عظام سحقتها. 9 استر وجهك عن خطاياي وامح كل اثامي‏ 10 قلبا نقيا اخلق في يا الله وروحا مستقيما جدد في داخلي. 11 لا تطرحني من قدام وجهك وروحك القدوس لا تنزعه مني. 12 رد لي بهجة خلاصك وبروح منتدبة اعضدني. 13 فاعلم الاثمة طرقك والخطاة اليك يرجعون 14 نجني من الدماء يا الله اله خلاصي.فيسبح لساني برك. 15 يا رب افتح شفتي فيخبر فمي بتسبيحك. 16 لانك لا تسر بذبيحة والا فكنت اقدمها.بمحرقة لا ترضى. 17 ذبائح الله هي روح منكسرة.القلب المنكسر والمنسحق يا الله لا تحتقره 18 احسن برضاك الى صهيون.ابن اسوار اورشليم. 19 حينئذ تسر بذبائح البر محرقة وتقدمة تامة.حينئذ يصعدون على مذبحك عجولا`
          );
          location.reload();
        }
        function op52() {
          document.getElementById(`show-ld`).innerText = `52`;
          localStorage.setItem(`count`, `52`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.قصيدة لداود عندما جاء دواغ الادومي واخبر شاول وقال له جاء داود الى بيت اخيمالك.لماذا تفتخر بالشر ايها الجبار.رحمة الله هي كل يوم. 2 لسانك يخترع مفاسد كموسى مسنونة يعمل بالغش. 3 احببت الشر اكثر من الخير.الكذب اكثر من التكلم بالصدق.سلاه 4 احببت كل كلام مهلك ولسان غش. 5 ايضا يهدمك الله الى الابد.يخطفك ويقلعك من مسكنك ويستاصلك من ارض الاحياء.سلاه. 6 فيرى الصديقون ويخافون وعليه يضحكون. 7 هوذا الانسان الذي لم يجعل الله حصنه بل اتكل على كثرة غناه واعتز بفساده 8 اما انا فمثل زيتونة خضراء في بيت الله.توكلت على رحمة الله الى الدهر والابد. 9 احمدك الى الدهر لانك فعلت وانتظر اسمك فانه صالح قدام اتقيائك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.قصيدة لداود عندما جاء دواغ الادومي واخبر شاول وقال له جاء داود الى بيت اخيمالك.لماذا تفتخر بالشر ايها الجبار.رحمة الله هي كل يوم. 2 لسانك يخترع مفاسد كموسى مسنونة يعمل بالغش. 3 احببت الشر اكثر من الخير.الكذب اكثر من التكلم بالصدق.سلاه 4 احببت كل كلام مهلك ولسان غش. 5 ايضا يهدمك الله الى الابد.يخطفك ويقلعك من مسكنك ويستاصلك من ارض الاحياء.سلاه. 6 فيرى الصديقون ويخافون وعليه يضحكون. 7 هوذا الانسان الذي لم يجعل الله حصنه بل اتكل على كثرة غناه واعتز بفساده 8 اما انا فمثل زيتونة خضراء في بيت الله.توكلت على رحمة الله الى الدهر والابد. 9 احمدك الى الدهر لانك فعلت وانتظر اسمك فانه صالح قدام اتقيائك`
          );
          location.reload();
        }
        function op53() {
          document.getElementById(`show-ld`).innerText = `53`;
          localStorage.setItem(`count`, `53`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على العود.قصيدة لداود قال الجاهل في قلبه ليس اله.فسدوا ورجسوا رجاسة.ليس من يعمل صلاحا. 2 الله من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله. 3 كلهم قد ارتدوا معا فسدوا.ليس من يعمل صلاحا ليس ولا واحد 4 الم يعلم فاعلو الاثم الذين ياكلون شعبي كما ياكلون الخبز والله لم يدعوا. 5 هناك خافوا خوفا ولم يكن خوف لان الله قد بدد عظام محاصرك.اخزيتهم لان الله قد رفضهم. 6 ليت من صهيون خلاص اسرائيل.عند رد الله سبي شعبه يهتف يعقوب ويفرح اسرائيل`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على العود.قصيدة لداود قال الجاهل في قلبه ليس اله.فسدوا ورجسوا رجاسة.ليس من يعمل صلاحا. 2 الله من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله. 3 كلهم قد ارتدوا معا فسدوا.ليس من يعمل صلاحا ليس ولا واحد 4 الم يعلم فاعلو الاثم الذين ياكلون شعبي كما ياكلون الخبز والله لم يدعوا. 5 هناك خافوا خوفا ولم يكن خوف لان الله قد بدد عظام محاصرك.اخزيتهم لان الله قد رفضهم. 6 ليت من صهيون خلاص اسرائيل.عند رد الله سبي شعبه يهتف يعقوب ويفرح اسرائيل`
          );
          location.reload();
        }
        function op54() {
          document.getElementById(`show-ld`).innerText = `54`;
          localStorage.setItem(`count`, `54`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار.قصيدة لداود عندما اتى الزيفيون وقالوا لشاول اليس داود مختبئا عندنا.اللهم باسمك خلصني وبقوتك احكم لي. 2 اسمع يا الله صلاتي اصغ الى كلام فمي. 3 لان غرباء قد قاموا علي وعتاة طلبوا نفسي.لم يجعلوا الله امامهم.سلاه. 4 هوذا الله معين لي.الرب بين عاضدي نفسي. 5 يرجع الشر على اعدائي.بحقك افنهم. 6 اذبح لك منتدبا.احمد اسمك يا رب لانه صالح. 7 لانه من كل ضيق نجاني وباعدائي رات عيني`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار.قصيدة لداود عندما اتى الزيفيون وقالوا لشاول اليس داود مختبئا عندنا.اللهم باسمك خلصني وبقوتك احكم لي. 2 اسمع يا الله صلاتي اصغ الى كلام فمي. 3 لان غرباء قد قاموا علي وعتاة طلبوا نفسي.لم يجعلوا الله امامهم.سلاه. 4 هوذا الله معين لي.الرب بين عاضدي نفسي. 5 يرجع الشر على اعدائي.بحقك افنهم. 6 اذبح لك منتدبا.احمد اسمك يا رب لانه صالح. 7 لانه من كل ضيق نجاني وباعدائي رات عيني`
          );
          location.reload();
        }
        function op55() {
          document.getElementById(`show-ld`).innerText = `55`;
          localStorage.setItem(`count`, `55`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار.قصيدة لداود.اصغ يا الله الى صلاتي ولا تتغاض عن تضرعي. 2 استمع لي واستجب لي.اتحير في كربتي واضطرب 3 من صوت العدو من قبل ظلم الشرير.لانهم يحيلون علي اثما وبغضب يضطهدونني. 4 يمخض قلبي في داخلي واهوال الموت سقطت علي. 5 خوف ورعدة اتيا علي وغشيني رعب. 6 فقلت ليت لي جناحا كالحمامة فاطير واستريح. 7 هانذا كنت ابعد هاربا وابيت في البرية.سلاه. 8 كنت اسرع في نجاتي من الريح العاصفة ومن النوء 9 اهلك يا رب فرق السنتهم لاني قد رايت ظلما وخصاما في المدينة. 10 نهارا وليلا يحيطون بها على اسوارها واثم ومشقة في وسطها. 11 مفاسد في وسطها ولا يبرح من ساحتها ظلم وغش. 12 لانه ليس عدو يعيرني فاحتمل.ليس مبغضي تعظم علي فاختبئ منه 13 بل انت انسان عديلي الفي وصديقي 14 الذي معه كانت تحلو لنا العشرة.الى بيت الله كنا نذهب في الجمهور. 15 ليبغتهم الموت.لينحدروا الى الهاوية احياء لان في مساكنهم في وسطهم شرورا 16 اما انا فالى الله اصرخ والرب يخلصني. 17 مساء وصباحا وظهرا اشكو وانوح فيسمع صوتي. 18 فدى بسلام نفسي من قتال علي لانهم بكثرة كانوا حولي. 19 يسمع الله فيذلهم والجالس منذ القدم.سلاه.الذين ليس لهم تغير ولا يخافون الله. 20 القى يديه على مسالميه.نقض عهده. 21 انعم من الزبدة فمه وقلبه قتال.الين من الزيت كلماته وهي سيوف مسلولة 22 الق على الرب همك فهو يعولك.لا يدع الصديق يتزعزع الى الابد. 23 وانت يا الله تحدرهم الى جب الهلاك.رجال الدماء والغش لا ينصفون ايامهم.اما انا فاتكل عليك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار.قصيدة لداود.اصغ يا الله الى صلاتي ولا تتغاض عن تضرعي. 2 استمع لي واستجب لي.اتحير في كربتي واضطرب 3 من صوت العدو من قبل ظلم الشرير.لانهم يحيلون علي اثما وبغضب يضطهدونني. 4 يمخض قلبي في داخلي واهوال الموت سقطت علي. 5 خوف ورعدة اتيا علي وغشيني رعب. 6 فقلت ليت لي جناحا كالحمامة فاطير واستريح. 7 هانذا كنت ابعد هاربا وابيت في البرية.سلاه. 8 كنت اسرع في نجاتي من الريح العاصفة ومن النوء 9 اهلك يا رب فرق السنتهم لاني قد رايت ظلما وخصاما في المدينة. 10 نهارا وليلا يحيطون بها على اسوارها واثم ومشقة في وسطها. 11 مفاسد في وسطها ولا يبرح من ساحتها ظلم وغش. 12 لانه ليس عدو يعيرني فاحتمل.ليس مبغضي تعظم علي فاختبئ منه 13 بل انت انسان عديلي الفي وصديقي 14 الذي معه كانت تحلو لنا العشرة.الى بيت الله كنا نذهب في الجمهور. 15 ليبغتهم الموت.لينحدروا الى الهاوية احياء لان في مساكنهم في وسطهم شرورا 16 اما انا فالى الله اصرخ والرب يخلصني. 17 مساء وصباحا وظهرا اشكو وانوح فيسمع صوتي. 18 فدى بسلام نفسي من قتال علي لانهم بكثرة كانوا حولي. 19 يسمع الله فيذلهم والجالس منذ القدم.سلاه.الذين ليس لهم تغير ولا يخافون الله. 20 القى يديه على مسالميه.نقض عهده. 21 انعم من الزبدة فمه وقلبه قتال.الين من الزيت كلماته وهي سيوف مسلولة 22 الق على الرب همك فهو يعولك.لا يدع الصديق يتزعزع الى الابد. 23 وانت يا الله تحدرهم الى جب الهلاك.رجال الدماء والغش لا ينصفون ايامهم.اما انا فاتكل عليك`
          );
          location.reload();
        }
        function op56() {
          document.getElementById(`show-ld`).innerText = `56`;
          localStorage.setItem(`count`, `56`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على الحمامة البكماء بين الغرباء.مذهبة لداود عندما اخذه الفلسطينيون في جت.ارحمني يا الله لان الانسان يتهممني واليوم كله محاربا يضايقني. 2 تهممني اعدائي اليوم كله لان كثيرين يقاومونني بكبرياء. 3 في يوم خوفي انا عليك اتكل. 4 الله افتخر بكلامه على الله توكلت فلا اخاف.ماذا يصنعه بي البشر. 5 اليوم كله يحرفون كلامي.علي كل افكارهم بالشر. 6 يجتمعون يختفون يلاحظون خطواتي عندما ترصدوا نفسي. 7 على اثمهم جازهم.بغضب اخضع الشعوب يا الله. 8 تيهاني راقبت.اجعل انت دموعي في زقك.اما هي في سفرك 9 حينئذ ترتد اعدائي الى الوراء في يوم ادعوك فيه.هذا قد علمته لان الله لي. 10 الله افتخر بكلامه الرب افتخر بكلامه. 11 على الله توكلت فلا اخاف.ماذا يصنعه بي الانسان. 12 اللهم علي نذورك.اوفي ذبائح شكر لك. 13 لانك نجيت نفسي من الموت.نعم ورجلي من الزلق لكي اسير قدام الله في نور الاحياء`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على الحمامة البكماء بين الغرباء.مذهبة لداود عندما اخذه الفلسطينيون في جت.ارحمني يا الله لان الانسان يتهممني واليوم كله محاربا يضايقني. 2 تهممني اعدائي اليوم كله لان كثيرين يقاومونني بكبرياء. 3 في يوم خوفي انا عليك اتكل. 4 الله افتخر بكلامه على الله توكلت فلا اخاف.ماذا يصنعه بي البشر. 5 اليوم كله يحرفون كلامي.علي كل افكارهم بالشر. 6 يجتمعون يختفون يلاحظون خطواتي عندما ترصدوا نفسي. 7 على اثمهم جازهم.بغضب اخضع الشعوب يا الله. 8 تيهاني راقبت.اجعل انت دموعي في زقك.اما هي في سفرك 9 حينئذ ترتد اعدائي الى الوراء في يوم ادعوك فيه.هذا قد علمته لان الله لي. 10 الله افتخر بكلامه الرب افتخر بكلامه. 11 على الله توكلت فلا اخاف.ماذا يصنعه بي الانسان. 12 اللهم علي نذورك.اوفي ذبائح شكر لك. 13 لانك نجيت نفسي من الموت.نعم ورجلي من الزلق لكي اسير قدام الله في نور الاحياء`
          );
          location.reload();
        }
        function op57() {
          document.getElementById(`show-ld`).innerText = `57`;
          localStorage.setItem(`count`, `57`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على لا تهلك.مذهبة لداود عندما هرب من قدام‏ شاول في المغارة.ارحمني يا الله ارحمني لانه بك احتمت نفسي وبظل جناحيك احتمي الى ان تعبر المصائب. 2 اصرخ الى الله العلي الى الله المحامي عني. 3 يرسل من السماء ويخلصني.عير الذي يتهممني.سلاه.يرسل الله رحمته وحقه. 4 نفسي بين الاشبال.اضطجع بين المتقدين بني ادم اسنانهم اسنة وسهام ولسانهم سيف ماض. 5 ارتفع اللهم على السموات.ليرتفع على كل الارض مجدك. 6 هياوا شبكة لخطواتي.انحنت نفسي.حفروا قدامي حفرة.سقطوا في وسطها.سلاه 7 ثابت قلبي يا الله ثابت قلبي.اغني وارنم‏. 8 استيقظ يا مجدي.استيقظي يا رباب ويا عود انا استيقظ سحرا. 9 احمدك بين الشعوب يا رب.ارنم لك بين الامم. 10 لان رحمتك قد عظمت الى السموات والى الغمام حقك. 11 ارتفع اللهم على السموات ليرتفع على كل الارض مجدك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على لا تهلك.مذهبة لداود عندما هرب من قدام‏ شاول في المغارة.ارحمني يا الله ارحمني لانه بك احتمت نفسي وبظل جناحيك احتمي الى ان تعبر المصائب. 2 اصرخ الى الله العلي الى الله المحامي عني. 3 يرسل من السماء ويخلصني.عير الذي يتهممني.سلاه.يرسل الله رحمته وحقه. 4 نفسي بين الاشبال.اضطجع بين المتقدين بني ادم اسنانهم اسنة وسهام ولسانهم سيف ماض. 5 ارتفع اللهم على السموات.ليرتفع على كل الارض مجدك. 6 هياوا شبكة لخطواتي.انحنت نفسي.حفروا قدامي حفرة.سقطوا في وسطها.سلاه 7 ثابت قلبي يا الله ثابت قلبي.اغني وارنم‏. 8 استيقظ يا مجدي.استيقظي يا رباب ويا عود انا استيقظ سحرا. 9 احمدك بين الشعوب يا رب.ارنم لك بين الامم. 10 لان رحمتك قد عظمت الى السموات والى الغمام حقك. 11 ارتفع اللهم على السموات ليرتفع على كل الارض مجدك`
          );
          location.reload();
        }
        function op58() {
          document.getElementById(`show-ld`).innerText = `58`;
          localStorage.setItem(`count`, `58`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على لا تهلك.لداود.مذهبة.احقا بالحق الاخرس تتكلمون بالمستقيمات تقضون يا بني ادم. 2 بل بالقلب تعملون شرورا في الارض ظلم ايديكم تزنون. 3 زاغ الاشرار من الرحم ضلوا من البطن متكلمين كذبا. 4 لهم حمة مثل حمة الحية.مثل الصل الاصم يسد اذنه 5 الذي لا يستمع الى صوت الحواة الراقين رقى حكيم 6 اللهم كسر اسنانهم في افواههم.اهشم اضراس الاشبال يا رب. 7 ليذوبوا كالماء ليذهبوا.اذا فوق سهامه فلتنب. 8 كما يذوب الحلزون ماشيا.مثل سقط المراة لا يعاينوا الشمس. 9 قبل ان تشعر قدوركم بالشوك نيئا او محروقا يجرفهم. 10 يفرح الصديق اذ راى النقمة.يغسل خطواته بدم الشرير. 11 ويقول الانسان ان للصديق ثمرا.انه يوجد اله قاض في الارض`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على لا تهلك.لداود.مذهبة.احقا بالحق الاخرس تتكلمون بالمستقيمات تقضون يا بني ادم. 2 بل بالقلب تعملون شرورا في الارض ظلم ايديكم تزنون. 3 زاغ الاشرار من الرحم ضلوا من البطن متكلمين كذبا. 4 لهم حمة مثل حمة الحية.مثل الصل الاصم يسد اذنه 5 الذي لا يستمع الى صوت الحواة الراقين رقى حكيم 6 اللهم كسر اسنانهم في افواههم.اهشم اضراس الاشبال يا رب. 7 ليذوبوا كالماء ليذهبوا.اذا فوق سهامه فلتنب. 8 كما يذوب الحلزون ماشيا.مثل سقط المراة لا يعاينوا الشمس. 9 قبل ان تشعر قدوركم بالشوك نيئا او محروقا يجرفهم. 10 يفرح الصديق اذ راى النقمة.يغسل خطواته بدم الشرير. 11 ويقول الانسان ان للصديق ثمرا.انه يوجد اله قاض في الارض`
          );
          location.reload();
        }
        function op59() {
          document.getElementById(`show-ld`).innerText = `59`;
          localStorage.setItem(`count`, `59`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على لا تهلك.مذهبة لداود لما ارسل شاول وراقبوا البيت ليقتلوه.انقذني من اعدائي يا الهي.من مقاومي احمني. 2 نجني من فاعلي الاثم ومن رجال الدماء خلصني. 3 لانهم يكمنون لنفسي.الاقوياء يجتمعون علي لا لاثمي ولا لخطيتي يا رب. 4 بلا اثم مني يجرون ويعدون انفسهم.استيقظ الى لقائي وانظر. 5 وانت يا رب اله الجنود اله اسرائيل انتبه لتطالب كل الامم.كل غادر اثيم لا ترحم.سلاه. 6 يعودون عند المساء يهرون مثل الكلب ويدورون في المدينة. 7 هوذا يبقون بافواههم.سيوف في شفاههم.لانهم يقولون من سامع. 8 اما انت يا رب فتضحك بهم.تستهزئ بجميع الامم. 9 من قوته اليك التجئ لان الله ملجاي 10 الهي رحمته تتقدمني.الله يريني باعدائي. 11 لا تقتلهم لئلا ينسى شعبي.تيههم بقوتك واهبطهم يا رب ترسنا. 12 خطية افواههم هي كلام شفاههم.وليؤخذوا بكبريائهم ومن اللعنة ومن الكذب الذي يحدثون به. 13 افن بحنق افن ولا يكونوا وليعلموا ان الله متسلط في يعقوب الى اقاصي الارض.سلاه. 14 ويعودون عند المساء يهرون مثل الكلب ويدورون في المدينة. 15 هم يتيهون للاكل.ان لم يشبعوا ويبيتوا 16 اما انا فاغني بقوتك وارنم بالغداة برحمتك لانك كنت ملجا لي ومناصا في يوم ضيقي. 17 يا قوتي لك ارنم لان الله ملجاي اله رحمتي`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على لا تهلك.مذهبة لداود لما ارسل شاول وراقبوا البيت ليقتلوه.انقذني من اعدائي يا الهي.من مقاومي احمني. 2 نجني من فاعلي الاثم ومن رجال الدماء خلصني. 3 لانهم يكمنون لنفسي.الاقوياء يجتمعون علي لا لاثمي ولا لخطيتي يا رب. 4 بلا اثم مني يجرون ويعدون انفسهم.استيقظ الى لقائي وانظر. 5 وانت يا رب اله الجنود اله اسرائيل انتبه لتطالب كل الامم.كل غادر اثيم لا ترحم.سلاه. 6 يعودون عند المساء يهرون مثل الكلب ويدورون في المدينة. 7 هوذا يبقون بافواههم.سيوف في شفاههم.لانهم يقولون من سامع. 8 اما انت يا رب فتضحك بهم.تستهزئ بجميع الامم. 9 من قوته اليك التجئ لان الله ملجاي 10 الهي رحمته تتقدمني.الله يريني باعدائي. 11 لا تقتلهم لئلا ينسى شعبي.تيههم بقوتك واهبطهم يا رب ترسنا. 12 خطية افواههم هي كلام شفاههم.وليؤخذوا بكبريائهم ومن اللعنة ومن الكذب الذي يحدثون به. 13 افن بحنق افن ولا يكونوا وليعلموا ان الله متسلط في يعقوب الى اقاصي الارض.سلاه. 14 ويعودون عند المساء يهرون مثل الكلب ويدورون في المدينة. 15 هم يتيهون للاكل.ان لم يشبعوا ويبيتوا 16 اما انا فاغني بقوتك وارنم بالغداة برحمتك لانك كنت ملجا لي ومناصا في يوم ضيقي. 17 يا قوتي لك ارنم لان الله ملجاي اله رحمتي`
          );
          location.reload();
        }
        function op60() {
          document.getElementById(`show-ld`).innerText = `60`;
          localStorage.setItem(`count`, `60`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على السوسن.شهادة مذهبة لداود للتعليم.عند محاربته ارام النهرين وارام صوبة فرجع يواب وضرب من ادوم في وادي الملح اثني عشر الفا.يا الله رفضتنا اقتحمتنا سخطت.ارجعنا. 2 زلزلت الارض فصمتها.اجبر كسرها لانها متزعزعة. 3 اريت شعبك عسرا.سقيتنا خمر الترنح. 4 اعطيت خائفيك راية ترفع لاجل الحق.سلاه. 5 لكي ينجو احباؤك.خلص بيمينك واستجب لي 6 الله قد تكلم بقدسه.ابتهج اقسم شكيم واقيس وادي سكوت. 7 لي جلعاد ولي منسى وافرايم خوذة راسي يهوذا صولجاني. 8 مواب مرحضتي.على ادوم اطرح نعلي.يا فلسطين اهتفي علي 9 من يقودني الى المدينة المحصنة.من يهديني الى ادوم. 10 اليس انت يا الله الذي رفضتنا ولا تخرج يا الله مع جيوشنا. 11 اعطنا عونا في الضيق فباطل هو خلاص الانسان. 12 بالله نصنع بباس وهو يدوس اعداءنا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على السوسن.شهادة مذهبة لداود للتعليم.عند محاربته ارام النهرين وارام صوبة فرجع يواب وضرب من ادوم في وادي الملح اثني عشر الفا.يا الله رفضتنا اقتحمتنا سخطت.ارجعنا. 2 زلزلت الارض فصمتها.اجبر كسرها لانها متزعزعة. 3 اريت شعبك عسرا.سقيتنا خمر الترنح. 4 اعطيت خائفيك راية ترفع لاجل الحق.سلاه. 5 لكي ينجو احباؤك.خلص بيمينك واستجب لي 6 الله قد تكلم بقدسه.ابتهج اقسم شكيم واقيس وادي سكوت. 7 لي جلعاد ولي منسى وافرايم خوذة راسي يهوذا صولجاني. 8 مواب مرحضتي.على ادوم اطرح نعلي.يا فلسطين اهتفي علي 9 من يقودني الى المدينة المحصنة.من يهديني الى ادوم. 10 اليس انت يا الله الذي رفضتنا ولا تخرج يا الله مع جيوشنا. 11 اعطنا عونا في الضيق فباطل هو خلاص الانسان. 12 بالله نصنع بباس وهو يدوس اعداءنا`
          );
          location.reload();
        }
        function op61() {
          document.getElementById(`show-ld`).innerText = `61`;
          localStorage.setItem(`count`, `61`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على ذوات الاوتار.لداود.اسمع يا الله صراخي واصغ الى صلاتي. 2 من اقصى الارض ادعوك اذا غشي على قلبي.الى صخرة ارفع مني تهديني. 3 لانك كنت ملجا لي.برج قوة من وجه العدو. 4 لاسكنن في مسكنك الى الدهور.احتمي بستر جناحيك.سلاه. 5 لانك انت يا الله استمعت نذوري.اعطيت ميراث خائفي اسمك. 6 الى ايام الملك تضيف اياما سنينه كدور فدور. 7 يجلس قدام الله الى الدهر.اجعل رحمة وحقا يحفظانه. 8 هكذا ارنم لاسمك الى الابد لوفاء نذوري يوما فيوما`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على ذوات الاوتار.لداود.اسمع يا الله صراخي واصغ الى صلاتي. 2 من اقصى الارض ادعوك اذا غشي على قلبي.الى صخرة ارفع مني تهديني. 3 لانك كنت ملجا لي.برج قوة من وجه العدو. 4 لاسكنن في مسكنك الى الدهور.احتمي بستر جناحيك.سلاه. 5 لانك انت يا الله استمعت نذوري.اعطيت ميراث خائفي اسمك. 6 الى ايام الملك تضيف اياما سنينه كدور فدور. 7 يجلس قدام الله الى الدهر.اجعل رحمة وحقا يحفظانه. 8 هكذا ارنم لاسمك الى الابد لوفاء نذوري يوما فيوما`
          );
          location.reload();
        }
        function op62() {
          document.getElementById(`show-ld`).innerText = `62`;
          localStorage.setItem(`count`, `62`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على يدوثون.مزمور لداود.انما لله انتظرت نفسي.من قبله خلاصي. 2 انما هو صخرتي وخلاصي ملجاي.لا اتزعزع كثيرا 3 الى متى تهجمون على الانسان.تهدمونه كلكم كحائط منقض كجدار واقع. 4 انما يتامرون ليدفعوه عن شرفه.يرضون بالكذب.بافواههم يباركون وبقلوبهم يلعنون.سلاه 5 انما لله انتظري يا نفسي لان من قبله رجائي. 6 انما هو صخرتي وخلاصي ملجاي فلا اتزعزع. 7 على الله خلاصي ومجدي صخرة قوتي محتماي في الله. 8 توكلوا عليه في كل حين يا قوم اسكبوا قدامه قلوبكم.الله ملجا لنا.سلاه 9 انما باطل بنو ادم.كذب بنو البشر.في الموازين هم الى فوق.هم من باطل اجمعون. 10 لا تتكلوا على الظلم ولا تصيروا باطلا في الخطف.ان زاد الغنى فلا تضعوا عليه قلبا. 11 مرة واحدة تكلم الرب وهاتين الاثنتين سمعت ان العزة لله. 12 ولك يا رب الرحمة لانك انت تجازي الانسان كعمله`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على يدوثون.مزمور لداود.انما لله انتظرت نفسي.من قبله خلاصي. 2 انما هو صخرتي وخلاصي ملجاي.لا اتزعزع كثيرا 3 الى متى تهجمون على الانسان.تهدمونه كلكم كحائط منقض كجدار واقع. 4 انما يتامرون ليدفعوه عن شرفه.يرضون بالكذب.بافواههم يباركون وبقلوبهم يلعنون.سلاه 5 انما لله انتظري يا نفسي لان من قبله رجائي. 6 انما هو صخرتي وخلاصي ملجاي فلا اتزعزع. 7 على الله خلاصي ومجدي صخرة قوتي محتماي في الله. 8 توكلوا عليه في كل حين يا قوم اسكبوا قدامه قلوبكم.الله ملجا لنا.سلاه 9 انما باطل بنو ادم.كذب بنو البشر.في الموازين هم الى فوق.هم من باطل اجمعون. 10 لا تتكلوا على الظلم ولا تصيروا باطلا في الخطف.ان زاد الغنى فلا تضعوا عليه قلبا. 11 مرة واحدة تكلم الرب وهاتين الاثنتين سمعت ان العزة لله. 12 ولك يا رب الرحمة لانك انت تجازي الانسان كعمله`
          );
          location.reload();
        }
        function op63() {
          document.getElementById(`show-ld`).innerText = `63`;
          localStorage.setItem(`count`, `63`);
          document.getElementById(`one`).innerText =
            `1 مزمور لداود لما كان في برية يهوذا.يا الله الهي انت.اليك ابكر.عطشت اليك نفسي يشتاق اليك جسدي في ارض ناشفة ويابسة بلا ماء 2 لكي ابصر قوتك ومجدك كما قد رايتك في قدسك. 3 لان رحمتك افضل من الحياة.شفتاي تسبحانك. 4 هكذا اباركك في حياتي.باسمك ارفع يدي. 5 كما من شحم ودسم تشبع نفسي وبشفتي الابتهاج يسبحك فمي 6 اذا ذكرتك على فراشي.في السهد الهج بك. 7 لانك كنت عونا لي وبظل جناحيك ابتهج 8 التصقت نفسي بك.يمينك تعضدني. 9 اما الذين هم للتهلكة يطلبون نفسي فيدخلون في اسافل الارض. 10 يدفعون الى يدي السيف.يكونون نصيبا لبنات اوى. 11 اما الملك فيفرح بالله.يفتخر كل من يحلف به.لان افواه المتكلمين بالكذب تسد`;
          localStorage.setItem(
            `words`,
            `1 مزمور لداود لما كان في برية يهوذا.يا الله الهي انت.اليك ابكر.عطشت اليك نفسي يشتاق اليك جسدي في ارض ناشفة ويابسة بلا ماء 2 لكي ابصر قوتك ومجدك كما قد رايتك في قدسك. 3 لان رحمتك افضل من الحياة.شفتاي تسبحانك. 4 هكذا اباركك في حياتي.باسمك ارفع يدي. 5 كما من شحم ودسم تشبع نفسي وبشفتي الابتهاج يسبحك فمي 6 اذا ذكرتك على فراشي.في السهد الهج بك. 7 لانك كنت عونا لي وبظل جناحيك ابتهج 8 التصقت نفسي بك.يمينك تعضدني. 9 اما الذين هم للتهلكة يطلبون نفسي فيدخلون في اسافل الارض. 10 يدفعون الى يدي السيف.يكونون نصيبا لبنات اوى. 11 اما الملك فيفرح بالله.يفتخر كل من يحلف به.لان افواه المتكلمين بالكذب تسد`
          );
          location.reload();
        }
        function op64() {
          document.getElementById(`show-ld`).innerText = `64`;
          localStorage.setItem(`count`, `64`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.استمع يا الله صوتي في شكواي.من خوف العدو احفظ حياتي. 2 استرني من مؤامرة الاشرار من جمهور فاعلي الاثم 3 الذين صقلوا السنتهم كالسيف.فوقوا سهمهم كلاما مرا 4 ليرموا الكامل في المختفى بغتة يرمونه ولا يخشون. 5 يشددون انفسهم لامر رديء.يتحادثون بطمر فخاخ.قالوا من يراهم 6 يخترعون اثما تمموا اختراعا محكما.وداخل الانسان وقلبه عميق 7 فيرميهم الله بسهم بغتة كانت ضربتهم. 8 ويوقعون السنتهم على انفسهم.ينغض الراس كل من ينظر اليهم. 9 ويخشى كل انسان ويخبر بفعل الله وبعمله يفطنون. 10 يفرح الصديق بالرب ويحتمي به ويبتهج كل المستقيمي القلوب`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.استمع يا الله صوتي في شكواي.من خوف العدو احفظ حياتي. 2 استرني من مؤامرة الاشرار من جمهور فاعلي الاثم 3 الذين صقلوا السنتهم كالسيف.فوقوا سهمهم كلاما مرا 4 ليرموا الكامل في المختفى بغتة يرمونه ولا يخشون. 5 يشددون انفسهم لامر رديء.يتحادثون بطمر فخاخ.قالوا من يراهم 6 يخترعون اثما تمموا اختراعا محكما.وداخل الانسان وقلبه عميق 7 فيرميهم الله بسهم بغتة كانت ضربتهم. 8 ويوقعون السنتهم على انفسهم.ينغض الراس كل من ينظر اليهم. 9 ويخشى كل انسان ويخبر بفعل الله وبعمله يفطنون. 10 يفرح الصديق بالرب ويحتمي به ويبتهج كل المستقيمي القلوب`
          );
          location.reload();
        }
        function op65() {
          document.getElementById(`show-ld`).innerText = `65`;
          localStorage.setItem(`count`, `65`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.مزمور لداود.تسبيحة.لك ينبغي التسبيح يا الله في صهيون ولك يوفى النذر. 2 يا سامع الصلاة اليك ياتي كل بشر. 3 اثام قد قويت علي.معاصينا انت تكفر عنها. 4 طوبى للذي تختاره وتقربه ليسكن في ديارك.لنشبعن من خير بيتك قدس هيكلك 5 بمخاوف في العدل تستجيبنا يا اله خلاصنا يا متكل جميع اقاصي الارض والبحر البعيدة. 6 المثبت الجبال بقوته المتنطق بالقدرة 7 المهدئ عجيج البحار عجيج امواجها وضجيج الامم. 8 وتخاف سكان الاقاصي من اياتك.تجعل مطالع الصباح والمساء تبتهج. 9 تعهدت الارض وجعلتها تفيض.تغنيها جدا.سواقي الله ملانة ماء.تهيء طعامهم لانك هكذا تعدها. 10 ارو اتلامها مهد اخاديدها.بالغيوث تحللها.تبارك غلتها. 11 كللت السنة بجودك واثارك تقطر دسما. 12 تقطر مراع البرية وتتنطق الاكام بالبهجة. 13 اكتست المروج غنما والاودية تتعطف برا.تهتف وايضا تغني`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.مزمور لداود.تسبيحة.لك ينبغي التسبيح يا الله في صهيون ولك يوفى النذر. 2 يا سامع الصلاة اليك ياتي كل بشر. 3 اثام قد قويت علي.معاصينا انت تكفر عنها. 4 طوبى للذي تختاره وتقربه ليسكن في ديارك.لنشبعن من خير بيتك قدس هيكلك 5 بمخاوف في العدل تستجيبنا يا اله خلاصنا يا متكل جميع اقاصي الارض والبحر البعيدة. 6 المثبت الجبال بقوته المتنطق بالقدرة 7 المهدئ عجيج البحار عجيج امواجها وضجيج الامم. 8 وتخاف سكان الاقاصي من اياتك.تجعل مطالع الصباح والمساء تبتهج. 9 تعهدت الارض وجعلتها تفيض.تغنيها جدا.سواقي الله ملانة ماء.تهيء طعامهم لانك هكذا تعدها. 10 ارو اتلامها مهد اخاديدها.بالغيوث تحللها.تبارك غلتها. 11 كللت السنة بجودك واثارك تقطر دسما. 12 تقطر مراع البرية وتتنطق الاكام بالبهجة. 13 اكتست المروج غنما والاودية تتعطف برا.تهتف وايضا تغني`
          );
          location.reload();
        }
        function op66() {
          document.getElementById(`show-ld`).innerText = `66`;
          localStorage.setItem(`count`, `66`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.تسبيحة مزمور.اهتفي لله يا كل الارض. 2 رنموا بمجد اسمه.اجعلوا تسبيحه ممجدا. 3 قولوا لله ما اهيب اعمالك.من عظم قوتك تتملق لك اعداؤك. 4 كل الارض تسجد لك وترنم لك.ترنم لاسمك.سلاه 5 هلم انظروا اعمال الله.فعله المرهب نحو بني ادم‏. 6 حول البحر الى يبس وفي النهر عبروا بالرجل.هناك فرحنا به. 7 متسلط بقوته الى الدهر.عيناه تراقبان الامم.المتمردون لا يرفعن انفسهم.سلاه 8 باركوا الهنا يا ايها الشعوب وسمعوا صوت تسبيحه. 9 الجاعل انفسنا في الحياة ولم يسلم ارجلنا الى الزلل. 10 لانك جربتنا يا الله.محصتنا كمحص الفضة. 11 ادخلتنا الى الشبكة.جعلت ضغطا على متوننا. 12 ركبت اناسا على رؤوسنا.دخلنا في النار والماء ثم اخرجتنا الى الخصب 13 ادخل الى بيتك بمحرقات اوفيك نذوري 14 التي نطقت بها شفتاي وتكلم بها فمي في ضيقي 15 اصعد لك محرقات سمينة مع بخور كباش اقدم بقرا مع تيوس.سلاه 16 هلم اسمعوا فاخبركم يا كل الخائفين الله بما صنع لنفسي. 17 صرخت اليه بفمي وتبجيل على لساني. 18 ان راعيت اثما في قلبي لا يستمع لي الرب. 19 لكن قد سمع الله.اصغى الى صوت صلاتي. 20 مبارك الله الذي لم يبعد صلاتي ولا رحمته عني`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.تسبيحة مزمور.اهتفي لله يا كل الارض. 2 رنموا بمجد اسمه.اجعلوا تسبيحه ممجدا. 3 قولوا لله ما اهيب اعمالك.من عظم قوتك تتملق لك اعداؤك. 4 كل الارض تسجد لك وترنم لك.ترنم لاسمك.سلاه 5 هلم انظروا اعمال الله.فعله المرهب نحو بني ادم‏. 6 حول البحر الى يبس وفي النهر عبروا بالرجل.هناك فرحنا به. 7 متسلط بقوته الى الدهر.عيناه تراقبان الامم.المتمردون لا يرفعن انفسهم.سلاه 8 باركوا الهنا يا ايها الشعوب وسمعوا صوت تسبيحه. 9 الجاعل انفسنا في الحياة ولم يسلم ارجلنا الى الزلل. 10 لانك جربتنا يا الله.محصتنا كمحص الفضة. 11 ادخلتنا الى الشبكة.جعلت ضغطا على متوننا. 12 ركبت اناسا على رؤوسنا.دخلنا في النار والماء ثم اخرجتنا الى الخصب 13 ادخل الى بيتك بمحرقات اوفيك نذوري 14 التي نطقت بها شفتاي وتكلم بها فمي في ضيقي 15 اصعد لك محرقات سمينة مع بخور كباش اقدم بقرا مع تيوس.سلاه 16 هلم اسمعوا فاخبركم يا كل الخائفين الله بما صنع لنفسي. 17 صرخت اليه بفمي وتبجيل على لساني. 18 ان راعيت اثما في قلبي لا يستمع لي الرب. 19 لكن قد سمع الله.اصغى الى صوت صلاتي. 20 مبارك الله الذي لم يبعد صلاتي ولا رحمته عني`
          );
          location.reload();
        }
        function op67() {
          document.getElementById(`show-ld`).innerText = `67`;
          localStorage.setItem(`count`, `67`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار.مزمور.تسبيحة.ليتحنن الله علينا وليباركنا.لينر بوجهه علينا.سلاه. 2 لكي يعرف في الارض طريقك وفي كل الامم خلاصك. 3 يحمدك الشعوب يا الله يحمدك الشعوب كلهم. 4 تفرح وتبتهج الامم لانك تدين الشعوب بالاستقامة.وامم الارض تهديهم.سلاه. 5 يحمدك الشعوب يا الله يحمدك الشعوب كلهم. 6 الارض اعطت غلتها.يباركنا الله الهنا. 7 يباركنا الله وتخشاه كل اقاصي الارض`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار.مزمور.تسبيحة.ليتحنن الله علينا وليباركنا.لينر بوجهه علينا.سلاه. 2 لكي يعرف في الارض طريقك وفي كل الامم خلاصك. 3 يحمدك الشعوب يا الله يحمدك الشعوب كلهم. 4 تفرح وتبتهج الامم لانك تدين الشعوب بالاستقامة.وامم الارض تهديهم.سلاه. 5 يحمدك الشعوب يا الله يحمدك الشعوب كلهم. 6 الارض اعطت غلتها.يباركنا الله الهنا. 7 يباركنا الله وتخشاه كل اقاصي الارض`
          );
          location.reload();
        }
        function op68() {
          document.getElementById(`show-ld`).innerText = `68`;
          localStorage.setItem(`count`, `68`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لداود.مزمور.تسبيحة.يقوم الله.يتبدد اعداؤه ويهرب مبغضوه من امام وجهه. 2 كما يذرى الدخان تذريهم.كما يذوب الشمع قدام النار يبيد الاشرار قدام الله. 3 والصديقون يفرحون يبتهجون امام الله ويطفرون فرحا 4 غنوا لله رنموا لاسمه.اعدوا طريقا للراكب في القفار باسمه ياه واهتفوا امامه. 5 ابو اليتامى وقاضي الارامل الله في مسكن قدسه. 6 الله مسكن المتوحدين في بيت مخرج الاسرى الى فلاح.انما المتمردون يسكنون الرمضاء 7 اللهم عند خروجك امام شعبك عند صعودك في القفر.سلاه. 8 الارض ارتعدت السموات ايضا قطرت امام وجه الله سينا نفسه من وجه الله اله اسرائيل. 9 مطرا غزيرا نضحت يا الله.ميراثك وهو معي انت اصلحته. 10 قطيعك سكن فيه.هيات بجودك للمساكين يا الله. 11 الرب يعطي كلمة.المبشرات بها جند كثير. 12 ملوك جيوش يهربون يهربون.الملازمة البيت تقسم الغنائم. 13 اذا اضطجعتم بين الحضائر فاجنحة حمامة مغشاة بفضة وريشها بصفرة الذهب. 14 عندما شتت القدير ملوكا فيها اثلجت في صلمون 15 جبل الله جبل باشان.جبل اسنمة جبل باشان. 16 لماذا ايتها الجبال المسنمة ترصدن الجبل الذي اشتهاه الله لسكنه.بل الرب يسكن فيه الى الابد. 17 مركبات الله ربوات الوف مكررة.الرب فيها.سينا في القدس. 18 صعدت الى العلاء.سبيت سبيا.قبلت عطايا بين الناس وايضا المتمردين للسكن ايها الرب الاله 19 مبارك الرب يوما فيوما.يحملنا اله خلاصنا.سلاه. 20 الله لنا اله خلاص وعند الرب السيد للموت مخارج. 21 ولكن الله يسحق رؤوس اعدائه الهامة الشعراء للسالك في ذنوبه. 22 قال الرب من باشان ارجع.ارجع من اعماق البحر 23 لكي تصبغ رجلك بالدم.السن كلابك من الاعداء نصيبهم. 24 راوا طرقك يا الله طرق الهي ملكي في القدس. 25 من قدام المغنون ومن وراء ضاربو الاوتار في الوسط فتيات ضاربات الدفوف. 26 في الجماعات باركوا الله الرب ايها الخارجون من عين اسرائيل. 27 هناك بنيامين الصغير متسلطهم رؤساء يهوذا جلهم رؤساء زبولون رؤساء نفتالي. 28 قد امر الهك بعزك.ايد يا الله هذا الذي فعلته لنا 29 من هيكلك فوق اورشليم لك تقدم ملوك هدايا. 30 انتهر وحش القصب صوار الثيران مع عجول الشعوب المترامين بقطع فضة.شتت الشعوب الذين يسرون بالقتال. 31 ياتي شرفاء من مصر.كوش تسرع بيديها الى الله 32 يا ممالك الارض غنوا لله رنموا للسيد.سلاه. 33 للراكب على سماء السموات القديمة.هوذا يعطي صوته صوت قوة. 34 اعطوا عزا لله.على اسرائيل جلاله وقوته في الغمام. 35 مخوف انت يا الله من مقادسك.اله اسرائيل هو المعطي قوة وشدة للشعب.مبارك الله`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لداود.مزمور.تسبيحة.يقوم الله.يتبدد اعداؤه ويهرب مبغضوه من امام وجهه. 2 كما يذرى الدخان تذريهم.كما يذوب الشمع قدام النار يبيد الاشرار قدام الله. 3 والصديقون يفرحون يبتهجون امام الله ويطفرون فرحا 4 غنوا لله رنموا لاسمه.اعدوا طريقا للراكب في القفار باسمه ياه واهتفوا امامه. 5 ابو اليتامى وقاضي الارامل الله في مسكن قدسه. 6 الله مسكن المتوحدين في بيت مخرج الاسرى الى فلاح.انما المتمردون يسكنون الرمضاء 7 اللهم عند خروجك امام شعبك عند صعودك في القفر.سلاه. 8 الارض ارتعدت السموات ايضا قطرت امام وجه الله سينا نفسه من وجه الله اله اسرائيل. 9 مطرا غزيرا نضحت يا الله.ميراثك وهو معي انت اصلحته. 10 قطيعك سكن فيه.هيات بجودك للمساكين يا الله. 11 الرب يعطي كلمة.المبشرات بها جند كثير. 12 ملوك جيوش يهربون يهربون.الملازمة البيت تقسم الغنائم. 13 اذا اضطجعتم بين الحضائر فاجنحة حمامة مغشاة بفضة وريشها بصفرة الذهب. 14 عندما شتت القدير ملوكا فيها اثلجت في صلمون 15 جبل الله جبل باشان.جبل اسنمة جبل باشان. 16 لماذا ايتها الجبال المسنمة ترصدن الجبل الذي اشتهاه الله لسكنه.بل الرب يسكن فيه الى الابد. 17 مركبات الله ربوات الوف مكررة.الرب فيها.سينا في القدس. 18 صعدت الى العلاء.سبيت سبيا.قبلت عطايا بين الناس وايضا المتمردين للسكن ايها الرب الاله 19 مبارك الرب يوما فيوما.يحملنا اله خلاصنا.سلاه. 20 الله لنا اله خلاص وعند الرب السيد للموت مخارج. 21 ولكن الله يسحق رؤوس اعدائه الهامة الشعراء للسالك في ذنوبه. 22 قال الرب من باشان ارجع.ارجع من اعماق البحر 23 لكي تصبغ رجلك بالدم.السن كلابك من الاعداء نصيبهم. 24 راوا طرقك يا الله طرق الهي ملكي في القدس. 25 من قدام المغنون ومن وراء ضاربو الاوتار في الوسط فتيات ضاربات الدفوف. 26 في الجماعات باركوا الله الرب ايها الخارجون من عين اسرائيل. 27 هناك بنيامين الصغير متسلطهم رؤساء يهوذا جلهم رؤساء زبولون رؤساء نفتالي. 28 قد امر الهك بعزك.ايد يا الله هذا الذي فعلته لنا 29 من هيكلك فوق اورشليم لك تقدم ملوك هدايا. 30 انتهر وحش القصب صوار الثيران مع عجول الشعوب المترامين بقطع فضة.شتت الشعوب الذين يسرون بالقتال. 31 ياتي شرفاء من مصر.كوش تسرع بيديها الى الله 32 يا ممالك الارض غنوا لله رنموا للسيد.سلاه. 33 للراكب على سماء السموات القديمة.هوذا يعطي صوته صوت قوة. 34 اعطوا عزا لله.على اسرائيل جلاله وقوته في الغمام. 35 مخوف انت يا الله من مقادسك.اله اسرائيل هو المعطي قوة وشدة للشعب.مبارك الله`
          );
          location.reload();
        }
        function op69() {
          document.getElementById(`show-ld`).innerText = `69`;
          localStorage.setItem(`count`, `69`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على السوسن.لداود.خلصني يا الله لان المياه قد دخلت الى نفسي. 2 غرقت في حماة عميقة وليس مقر.دخلت الى اعماق المياه والسيل غمرني. 3 تعبت من صراخي.يبس حلقي.كلت عيناي من انتظار الهي. 4 اكثر من شعر راسي الذين يبغضونني بلا سبب.اعتز مستهلكي اعدائي ظلما.حينئذ رددت الذي لم اخطفه 5 يا الله انت عرفت حماقتي وذنوبي عنك لم تخف. 6 لا يخز بي منتظروك يا سيد رب الجنود.لا يخجل بي ملتمسوك يا اله اسرائيل. 7 لاني من اجلك احتملت العار.غطى الخجل وجهي. 8 صرت اجنبيا عند اخوتي وغريبا عند بني امي. 9 لان غيرة بيتك اكلتني وتعييرات معيريك وقعت علي. 10 وابكيت بصوم نفسي فصار ذلك عارا علي. 11 جعلت لباسي مسحا وصرت لهم مثلا. 12 يتكلم في الجالسون في الباب واغاني شرابي المسكر 13 اما انا فلك صلاتي يا رب في وقت رضى يا الله بكثرة رحمتك استجب لي بحق خلاصك. 14 نجني من الطين فلا اغرق نجني من مبغضي ومن اعماق المياه. 15 لا يغمرني سيل المياه ولا يبتلعني العمق ولا تطبق الهاوية علي فاها. 16 استجب لي يا رب لان رحمتك صالحة.ككثرة مراحمك التفت الي. 17 ولا تحجب وجهك عن عبدك.لان لي ضيقا.استجب لي سريعا. 18 اقترب الى نفسي.فكها.بسبب اعدائي افدني. 19 انت عرفت عاري وخزيي وخجلي.قدامك جميع مضايقي. 20 العار قد كسر قلبي فمرضت.انتظرت رقة فلم تكن ومعزين فلم اجد 21 ويجعلون في طعامي علقما وفي عطشي يسقونني خلا 22 لتصر مائدتهم قدامهم فخا وللامنين شركا. 23 لتظلم عيونهم عن البصر وقلقل متونهم دائما. 24 صب عليهم سخطك وليدركهم حمو غضبك‏. 25 لتصر دارهم خرابا وفي خيامهم لا يكن ساكن. 26 لان الذي ضربته انت هم طردوه وبوجع الذين جرحتهم يتحدثون. 27 اجعل اثما على اثمهم ولا يدخلوا في برك. 28 ليمحوا من سفر الاحياء ومع الصديقين لا يكتبوا 29 اما انا فمسكين وكئيب.خلاصك يا الله فليرفعني. 30 اسبح اسم الله بتسبيح واعظمه بحمد. 31 فيستطاب عند الرب اكثر من ثور بقر ذي قرون واظلاف. 32 يرى ذلك الودعاء فيفرحون وتحيا قلوبكم يا طالبي الله. 33 لان الرب سامع للمساكين ولا يحتقر اسراه. 34 تسبحه السموات والارض البحار وكل ما يدب فيها. 35 لان الله يخلص صهيون ويبني مدن يهوذا فيسكنون هناك ويرثونها. 36 ونسل عبيده يملكونها ومحبو اسمه يسكنون فيها`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على السوسن.لداود.خلصني يا الله لان المياه قد دخلت الى نفسي. 2 غرقت في حماة عميقة وليس مقر.دخلت الى اعماق المياه والسيل غمرني. 3 تعبت من صراخي.يبس حلقي.كلت عيناي من انتظار الهي. 4 اكثر من شعر راسي الذين يبغضونني بلا سبب.اعتز مستهلكي اعدائي ظلما.حينئذ رددت الذي لم اخطفه 5 يا الله انت عرفت حماقتي وذنوبي عنك لم تخف. 6 لا يخز بي منتظروك يا سيد رب الجنود.لا يخجل بي ملتمسوك يا اله اسرائيل. 7 لاني من اجلك احتملت العار.غطى الخجل وجهي. 8 صرت اجنبيا عند اخوتي وغريبا عند بني امي. 9 لان غيرة بيتك اكلتني وتعييرات معيريك وقعت علي. 10 وابكيت بصوم نفسي فصار ذلك عارا علي. 11 جعلت لباسي مسحا وصرت لهم مثلا. 12 يتكلم في الجالسون في الباب واغاني شرابي المسكر 13 اما انا فلك صلاتي يا رب في وقت رضى يا الله بكثرة رحمتك استجب لي بحق خلاصك. 14 نجني من الطين فلا اغرق نجني من مبغضي ومن اعماق المياه. 15 لا يغمرني سيل المياه ولا يبتلعني العمق ولا تطبق الهاوية علي فاها. 16 استجب لي يا رب لان رحمتك صالحة.ككثرة مراحمك التفت الي. 17 ولا تحجب وجهك عن عبدك.لان لي ضيقا.استجب لي سريعا. 18 اقترب الى نفسي.فكها.بسبب اعدائي افدني. 19 انت عرفت عاري وخزيي وخجلي.قدامك جميع مضايقي. 20 العار قد كسر قلبي فمرضت.انتظرت رقة فلم تكن ومعزين فلم اجد 21 ويجعلون في طعامي علقما وفي عطشي يسقونني خلا 22 لتصر مائدتهم قدامهم فخا وللامنين شركا. 23 لتظلم عيونهم عن البصر وقلقل متونهم دائما. 24 صب عليهم سخطك وليدركهم حمو غضبك‏. 25 لتصر دارهم خرابا وفي خيامهم لا يكن ساكن. 26 لان الذي ضربته انت هم طردوه وبوجع الذين جرحتهم يتحدثون. 27 اجعل اثما على اثمهم ولا يدخلوا في برك. 28 ليمحوا من سفر الاحياء ومع الصديقين لا يكتبوا 29 اما انا فمسكين وكئيب.خلاصك يا الله فليرفعني. 30 اسبح اسم الله بتسبيح واعظمه بحمد. 31 فيستطاب عند الرب اكثر من ثور بقر ذي قرون واظلاف. 32 يرى ذلك الودعاء فيفرحون وتحيا قلوبكم يا طالبي الله. 33 لان الرب سامع للمساكين ولا يحتقر اسراه. 34 تسبحه السموات والارض البحار وكل ما يدب فيها. 35 لان الله يخلص صهيون ويبني مدن يهوذا فيسكنون هناك ويرثونها. 36 ونسل عبيده يملكونها ومحبو اسمه يسكنون فيها`
          );
          location.reload();
        }
        function op70() {
          document.getElementById(`show-ld`).innerText = `70`;
          localStorage.setItem(`count`, `70`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لداود للتذكير.اللهم الى تنجيتي يا رب الى معونتي اسرع. 2 ليخز ويخجل طالبو نفسي.ليرتد الى خلف ويخجل المشتهون لي شرا 3 ليرجع من اجل خزيهم القائلون هه هه. 4 وليبتهج ويفرح بك كل طالبيك وليقل دائما محبو خلاصك ليتعظم الرب 5 اما انا فمسكين وفقير.اللهم اسرع الي.معيني ومنقذي انت.يا رب لا تبطؤ`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لداود للتذكير.اللهم الى تنجيتي يا رب الى معونتي اسرع. 2 ليخز ويخجل طالبو نفسي.ليرتد الى خلف ويخجل المشتهون لي شرا 3 ليرجع من اجل خزيهم القائلون هه هه. 4 وليبتهج ويفرح بك كل طالبيك وليقل دائما محبو خلاصك ليتعظم الرب 5 اما انا فمسكين وفقير.اللهم اسرع الي.معيني ومنقذي انت.يا رب لا تبطؤ`
          );
          location.reload();
        }
        function op71() {
          document.getElementById(`show-ld`).innerText = `71`;
          localStorage.setItem(`count`, `71`);
          document.getElementById(`one`).innerText =
            `1 بك يا رب احتميت فلا اخزى الى الدهر. 2 بعدلك نجني وانقذني امل الي اذنك وخلصني. 3 كن لي صخرة ملجا ادخله دائما.امرت بخلاصي لانك صخرتي وحصني. 4 يا الهي نجني من يد الشرير من كف فاعل الشر والظالم. 5 لانك انت رجائي يا سيدي الرب متكلي منذ صباي. 6 عليك استندت من البطن وانت مخرجي من احشاء امي بك تسبيحي دائما. 7 صرت كاية لكثيرين.اما انت فملجاي القوي. 8 يمتلئ فمي من تسبيحك اليوم كله من مجدك 9 لا ترفضني في زمن الشيخوخة.لا تتركني عند فناء قوتي. 10 لان اعدائي تقاولوا علي والذين يرصدون نفسي تامروا معا 11 قائلين ان الله قد تركه.الحقوه وامسكوه لانه لا منقذ له. 12 يا الله لا تبعد عني يا الهي الى معونتي اسرع. 13 ليخز ويفن مخاصمو نفسي.ليلبس العار والخجل الملتمسون لي شرا. 14 اما انا فارجو دائما وازيد على كل تسبيحك. 15 فمي يحدث بعدلك اليوم كله بخلاصك لاني لا اعرف لها اعدادا. 16 اتي بجبروت السيد الرب.اذكر برك وحدك 17 اللهم قد علمتني منذ صباي والى الان اخبر بعجائبك. 18 وايضا الى الشيخوخة والشيب يا الله لا تتركني حتى اخبر بذراعك الجيل المقبل وبقوتك كل ات‏. 19 وبرك الى العلياء يا الله الذي صنعت العظائم.يا الله من مثلك 20 انت الذي اريتنا ضيقات كثيرة وردية تعود فتحيينا ومن اعماق الارض تعود فتصعدنا. 21 تزيد عظمتي وترجع فتعزيني. 22 فانا ايضا احمدك برباب حقك يا الهي.ارنم لك بالعود يا قدوس اسرائيل. 23 تبتهج شفتاي اذ ارنم لك ونفسي التي فديتها. 24 ولساني ايضا اليوم كله يلهج ببرك.لانه قد خزي لانه قد خجل الملتمسون لي شرا`;
          localStorage.setItem(
            `words`,
            `1 بك يا رب احتميت فلا اخزى الى الدهر. 2 بعدلك نجني وانقذني امل الي اذنك وخلصني. 3 كن لي صخرة ملجا ادخله دائما.امرت بخلاصي لانك صخرتي وحصني. 4 يا الهي نجني من يد الشرير من كف فاعل الشر والظالم. 5 لانك انت رجائي يا سيدي الرب متكلي منذ صباي. 6 عليك استندت من البطن وانت مخرجي من احشاء امي بك تسبيحي دائما. 7 صرت كاية لكثيرين.اما انت فملجاي القوي. 8 يمتلئ فمي من تسبيحك اليوم كله من مجدك 9 لا ترفضني في زمن الشيخوخة.لا تتركني عند فناء قوتي. 10 لان اعدائي تقاولوا علي والذين يرصدون نفسي تامروا معا 11 قائلين ان الله قد تركه.الحقوه وامسكوه لانه لا منقذ له. 12 يا الله لا تبعد عني يا الهي الى معونتي اسرع. 13 ليخز ويفن مخاصمو نفسي.ليلبس العار والخجل الملتمسون لي شرا. 14 اما انا فارجو دائما وازيد على كل تسبيحك. 15 فمي يحدث بعدلك اليوم كله بخلاصك لاني لا اعرف لها اعدادا. 16 اتي بجبروت السيد الرب.اذكر برك وحدك 17 اللهم قد علمتني منذ صباي والى الان اخبر بعجائبك. 18 وايضا الى الشيخوخة والشيب يا الله لا تتركني حتى اخبر بذراعك الجيل المقبل وبقوتك كل ات‏. 19 وبرك الى العلياء يا الله الذي صنعت العظائم.يا الله من مثلك 20 انت الذي اريتنا ضيقات كثيرة وردية تعود فتحيينا ومن اعماق الارض تعود فتصعدنا. 21 تزيد عظمتي وترجع فتعزيني. 22 فانا ايضا احمدك برباب حقك يا الهي.ارنم لك بالعود يا قدوس اسرائيل. 23 تبتهج شفتاي اذ ارنم لك ونفسي التي فديتها. 24 ولساني ايضا اليوم كله يلهج ببرك.لانه قد خزي لانه قد خجل الملتمسون لي شرا`
          );
          location.reload();
        }
        function op72() {
          document.getElementById(`show-ld`).innerText = `72`;
          localStorage.setItem(`count`, `72`);
          document.getElementById(`one`).innerText =
            `1 لسليمان.اللهم اعطي احكامك للملك وبرك لابن الملك. 2 يدين شعبك بالعدل ومساكينك بالحق. 3 تحمل الجبال سلاما للشعب والاكام بالبر. 4 يقضي لمساكين الشعب.يخلص بني البائسين ويسحق الظالم. 5 يخشونك ما دامت الشمس وقدام القمر الى دور فدور. 6 ينزل مثل المطر على الجزاز ومثل الغيوث الذارفة على الارض. 7 يشرق في ايامه الصديق وكثرة السلام الى ان يضمحل القمر. 8 ويملك من البحر الى البحر ومن النهر الى اقاصي الارض 9 امامه تجثو اهل البرية واعداؤه يلحسون التراب. 10 ملوك ترشيش والجزائر يرسلون تقدمة.ملوك شبا وسبا يقدمون هدية. 11 ويسجد له كل الملوك.كل الامم تتعبد له. 12 لانه ينجي الفقير المستغيث والمسكين اذ لا معين له. 13 يشفق على المسكين والبائس ويخلص انفس الفقراء. 14 من الظلم والخطف يفدي انفسهم ويكرم دمهم في عينيه. 15 ويعيش ويعطيه من ذهب شبا.ويصلي لاجله دائما .اليوم كله يباركه 16 تكون حفنة بر في الارض في رؤوس الجبال.تتمايل مثل لبنان ثمرتها ويزهرون من المدينة مثل عشب الارض. 17 يكون اسمه الى الدهر.قدام الشمس يمتد اسمه.ويتباركون به.كل امم الارض يطوبونه. 18 مبارك الرب الله اله اسرائيل الصانع العجائب وحده. 19 ومبارك اسم مجده الى الدهر ولتمتلئ الارض كلها من مجده.امين ثم امين 20 تمت صلوات داود بن يسى`;
          localStorage.setItem(
            `words`,
            `1 لسليمان.اللهم اعطي احكامك للملك وبرك لابن الملك. 2 يدين شعبك بالعدل ومساكينك بالحق. 3 تحمل الجبال سلاما للشعب والاكام بالبر. 4 يقضي لمساكين الشعب.يخلص بني البائسين ويسحق الظالم. 5 يخشونك ما دامت الشمس وقدام القمر الى دور فدور. 6 ينزل مثل المطر على الجزاز ومثل الغيوث الذارفة على الارض. 7 يشرق في ايامه الصديق وكثرة السلام الى ان يضمحل القمر. 8 ويملك من البحر الى البحر ومن النهر الى اقاصي الارض 9 امامه تجثو اهل البرية واعداؤه يلحسون التراب. 10 ملوك ترشيش والجزائر يرسلون تقدمة.ملوك شبا وسبا يقدمون هدية. 11 ويسجد له كل الملوك.كل الامم تتعبد له. 12 لانه ينجي الفقير المستغيث والمسكين اذ لا معين له. 13 يشفق على المسكين والبائس ويخلص انفس الفقراء. 14 من الظلم والخطف يفدي انفسهم ويكرم دمهم في عينيه. 15 ويعيش ويعطيه من ذهب شبا.ويصلي لاجله دائما .اليوم كله يباركه 16 تكون حفنة بر في الارض في رؤوس الجبال.تتمايل مثل لبنان ثمرتها ويزهرون من المدينة مثل عشب الارض. 17 يكون اسمه الى الدهر.قدام الشمس يمتد اسمه.ويتباركون به.كل امم الارض يطوبونه. 18 مبارك الرب الله اله اسرائيل الصانع العجائب وحده. 19 ومبارك اسم مجده الى الدهر ولتمتلئ الارض كلها من مجده.امين ثم امين 20 تمت صلوات داود بن يسى`
          );
          location.reload();
        }
        function op73() {
          document.getElementById(`show-ld`).innerText = `73`;
          localStorage.setItem(`count`, `73`);
          document.getElementById(`one`).innerText =
            `1 مزمور لاساف.انما صالح الله لاسرائيل لانقياء القلب. 2 اما انا فكادت تزل قدماي.لولا قليل لزلقت خطواتي. 3 لاني غرت من المتكبرين اذ رايت سلامة الاشرار. 4 لانه ليست في موتهم شدائد وجسمهم سمين. 5 ليسوا في تعب الناس ومع البشر لا يصابون. 6 لذلك تقلدوا الكبرياء.لبسوا كثوب ظلمهم. 7 جحظت عيونهم من الشحم.جاوزوا تصورات القلب. 8 يستهزئون ويتكلمون بالشر ظلما من العلاء يتكلمون. 9 جعلوا افواههم في السماء والسنتهم تتمشى في الارض. 10 لذلك يرجع شعبه الى هنا وكمياه مروية يمتصون منهم. 11 وقالوا كيف يعلم الله وهل عند العلي معرفة. 12 هوذا هؤلاء هم الاشرار ومستريحين الى الدهر يكثرون ثروة 13 حقا قد زكيت قلبي باطلا وغسلت بالنقاوة يدي. 14 وكنت مصابا اليوم كله وتادبت كل صباح. 15 لو قلت احدث هكذا لغدرت بجيل بنيك. 16 فلما قصدت معرفة هذا اذ هو تعب في عيني. 17 حتى دخلت مقادس الله وانتبهت الى اخرتهم. 18 حقا في مزالق جعلتهم.اسقطتهم الى البوار. 19 كيف صاروا للخراب بغتة.اضمحلوا فنوا من الدواهي‏. 20 كحلم عند التيقظ يا رب عند التيقظ تحتقر خيالهم 21 لانه تمرمر قلبي وانتخست في كليتي. 22 وانا بليد ولا اعرف.صرت كبهيم عندك. 23 ولكني دائما معك.امسكت بيدي اليمنى. 24 برايك تهديني وبعد الى مجد تاخذني. 25 من لي في السماء.ومعك لا اريد شيئا في الارض. 26 قد فني لحمي وقلبي.صخرة قلبي ونصيبي الله الى الدهر. 27 لانه هوذا البعداء عنك يبيدون.تهلك كل من يزني عنك. 28 اما انا فالاقتراب الى الله حسن لي.جعلت بالسيد الرب ملجاي لاخبر بكل صنائعك`;
          localStorage.setItem(
            `words`,
            `1 مزمور لاساف.انما صالح الله لاسرائيل لانقياء القلب. 2 اما انا فكادت تزل قدماي.لولا قليل لزلقت خطواتي. 3 لاني غرت من المتكبرين اذ رايت سلامة الاشرار. 4 لانه ليست في موتهم شدائد وجسمهم سمين. 5 ليسوا في تعب الناس ومع البشر لا يصابون. 6 لذلك تقلدوا الكبرياء.لبسوا كثوب ظلمهم. 7 جحظت عيونهم من الشحم.جاوزوا تصورات القلب. 8 يستهزئون ويتكلمون بالشر ظلما من العلاء يتكلمون. 9 جعلوا افواههم في السماء والسنتهم تتمشى في الارض. 10 لذلك يرجع شعبه الى هنا وكمياه مروية يمتصون منهم. 11 وقالوا كيف يعلم الله وهل عند العلي معرفة. 12 هوذا هؤلاء هم الاشرار ومستريحين الى الدهر يكثرون ثروة 13 حقا قد زكيت قلبي باطلا وغسلت بالنقاوة يدي. 14 وكنت مصابا اليوم كله وتادبت كل صباح. 15 لو قلت احدث هكذا لغدرت بجيل بنيك. 16 فلما قصدت معرفة هذا اذ هو تعب في عيني. 17 حتى دخلت مقادس الله وانتبهت الى اخرتهم. 18 حقا في مزالق جعلتهم.اسقطتهم الى البوار. 19 كيف صاروا للخراب بغتة.اضمحلوا فنوا من الدواهي‏. 20 كحلم عند التيقظ يا رب عند التيقظ تحتقر خيالهم 21 لانه تمرمر قلبي وانتخست في كليتي. 22 وانا بليد ولا اعرف.صرت كبهيم عندك. 23 ولكني دائما معك.امسكت بيدي اليمنى. 24 برايك تهديني وبعد الى مجد تاخذني. 25 من لي في السماء.ومعك لا اريد شيئا في الارض. 26 قد فني لحمي وقلبي.صخرة قلبي ونصيبي الله الى الدهر. 27 لانه هوذا البعداء عنك يبيدون.تهلك كل من يزني عنك. 28 اما انا فالاقتراب الى الله حسن لي.جعلت بالسيد الرب ملجاي لاخبر بكل صنائعك`
          );
          location.reload();
        }
        function op74() {
          document.getElementById(`show-ld`).innerText = `74`;
          localStorage.setItem(`count`, `74`);
          document.getElementById(`one`).innerText =
            `1 قصيدة لاساف.لماذا رفضتنا يا الله الى الابد.لماذا يدخن غضبك على غنم مرعاك. 2 اذكر جماعتك التي اقتنيتها منذ القدم وفديتها سبط ميراثك.جبل صهيون هذا الذي سكنت فيه. 3 ارفع خطواتك الى الخرب الابدية.الكل قد حطم العدو في المقدس. 4 قد زمجر مقاوموك في وسط معهدك جعلوا اياتهم ايات. 5 يبان كانه رافع فؤوس على الاشجار المشتبكة. 6 والان منقوشاته معا بالفؤوس والمعاول يكسرون. 7 اطلقوا النار في مقدسك.دنسوا للارض مسكن اسمك. 8 قالوا في قلوبهم لنفنيهم معا.احرقوا كل معاهد الله في الارض‏. 9 اياتنا لا نرى.لا نبي بعد.ولا بيننا من يعرف حتى متى 10 حتى متى يا الله يعير المقاوم ويهين العدو اسمك الى الغاية. 11 لماذا ترد يدك ويمينك.اخرجها من وسط حضنك.افن. 12 والله ملكي منذ القدم فاعل الخلاص في وسط الارض. 13 انت شققت البحر بقوتك.كسرت رؤوس التنانين على المياه. 14 انت رضضت رؤوس لوياثان.جعلته طعاما للشعب لاهل البرية. 15 انت فجرت عينا وسيلا.انت يبست انهارا دائمة الجريان. 16 لك النهار ولك ايضا الليل.انت هيات النور والشمس. 17 انت نصبت كل تخوم الارض الصيف والشتاء انت خلقتهما 18 اذكر هذا ان العدو قد عير الرب وشعبا جاهلا قد اهان اسمك. 19 لا تسلم للوحش نفس يمامتك.قطيع بائسيك لا تنس الى الابد. 20 انظر الى العهد.لان مظلمات الارض امتلات من مساكن الظلم. 21 لا يرجعن المنسحق خازيا.الفقير والبائس ليسبحا اسمك. 22 قم يا الله.اقم دعواك.اذكر تعيير الجاهل اياك اليوم كله. 23 لا تنس صوت اضدادك ضجيج مقاوميك الصاعد دائما`;
          localStorage.setItem(
            `words`,
            `1 قصيدة لاساف.لماذا رفضتنا يا الله الى الابد.لماذا يدخن غضبك على غنم مرعاك. 2 اذكر جماعتك التي اقتنيتها منذ القدم وفديتها سبط ميراثك.جبل صهيون هذا الذي سكنت فيه. 3 ارفع خطواتك الى الخرب الابدية.الكل قد حطم العدو في المقدس. 4 قد زمجر مقاوموك في وسط معهدك جعلوا اياتهم ايات. 5 يبان كانه رافع فؤوس على الاشجار المشتبكة. 6 والان منقوشاته معا بالفؤوس والمعاول يكسرون. 7 اطلقوا النار في مقدسك.دنسوا للارض مسكن اسمك. 8 قالوا في قلوبهم لنفنيهم معا.احرقوا كل معاهد الله في الارض‏. 9 اياتنا لا نرى.لا نبي بعد.ولا بيننا من يعرف حتى متى 10 حتى متى يا الله يعير المقاوم ويهين العدو اسمك الى الغاية. 11 لماذا ترد يدك ويمينك.اخرجها من وسط حضنك.افن. 12 والله ملكي منذ القدم فاعل الخلاص في وسط الارض. 13 انت شققت البحر بقوتك.كسرت رؤوس التنانين على المياه. 14 انت رضضت رؤوس لوياثان.جعلته طعاما للشعب لاهل البرية. 15 انت فجرت عينا وسيلا.انت يبست انهارا دائمة الجريان. 16 لك النهار ولك ايضا الليل.انت هيات النور والشمس. 17 انت نصبت كل تخوم الارض الصيف والشتاء انت خلقتهما 18 اذكر هذا ان العدو قد عير الرب وشعبا جاهلا قد اهان اسمك. 19 لا تسلم للوحش نفس يمامتك.قطيع بائسيك لا تنس الى الابد. 20 انظر الى العهد.لان مظلمات الارض امتلات من مساكن الظلم. 21 لا يرجعن المنسحق خازيا.الفقير والبائس ليسبحا اسمك. 22 قم يا الله.اقم دعواك.اذكر تعيير الجاهل اياك اليوم كله. 23 لا تنس صوت اضدادك ضجيج مقاوميك الصاعد دائما`
          );
          location.reload();
        }
        function op75() {
          document.getElementById(`show-ld`).innerText = `75`;
          localStorage.setItem(`count`, `75`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على لا تهلك.مزمور لاساف.تسبيحة.نحمدك يا الله نحمدك واسمك قريب.يحدثون بعجائبك. 2 لاني اعين ميعادا.انا بالمستقيمات اقضي. 3 ذابت الارض وكل سكانها.انا وزنت اعمدتها.سلاه 4 قلت للمفتخرين لا تفتخروا وللاشرار لا ترفعوا قرنا. 5 لا ترفعوا الى العلى قرنكم.لا تتكلموا بعنق متصلب. 6 لانه لا من المشرق ولا من المغرب ولا من برية الجبال. 7 ولكن الله هو القاضي.هذا يضعه وهذا يرفعه. 8 لان في يد الرب كاسا وخمرها مختمرة.ملانة شرابا ممزوجا.وهو يسكب منها.لكن عكرها يمصه يشربه كل اشرار الارض 9 اما انا فاخبر الى الدهر.ارنم لاله يعقوب‏. 10 وكل قرون الاشرار اعضب قرون الصديق تنتصب`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على لا تهلك.مزمور لاساف.تسبيحة.نحمدك يا الله نحمدك واسمك قريب.يحدثون بعجائبك. 2 لاني اعين ميعادا.انا بالمستقيمات اقضي. 3 ذابت الارض وكل سكانها.انا وزنت اعمدتها.سلاه 4 قلت للمفتخرين لا تفتخروا وللاشرار لا ترفعوا قرنا. 5 لا ترفعوا الى العلى قرنكم.لا تتكلموا بعنق متصلب. 6 لانه لا من المشرق ولا من المغرب ولا من برية الجبال. 7 ولكن الله هو القاضي.هذا يضعه وهذا يرفعه. 8 لان في يد الرب كاسا وخمرها مختمرة.ملانة شرابا ممزوجا.وهو يسكب منها.لكن عكرها يمصه يشربه كل اشرار الارض 9 اما انا فاخبر الى الدهر.ارنم لاله يعقوب‏. 10 وكل قرون الاشرار اعضب قرون الصديق تنتصب`
          );
          location.reload();
        }
        function op76() {
          document.getElementById(`show-ld`).innerText = `76`;
          localStorage.setItem(`count`, `76`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على ذوات الاوتار.مزمور لاساف.تسبيحة.الله معروف في يهوذا اسمه عظيم في اسرائيل. 2 كانت في ساليم مظلته ومسكنه في صهيون. 3 هناك سحق القسي البارقة.المجن والسيف والقتال.سلاه 4 ابهى انت امجد من جبال السلب. 5 سلب اشداء القلب.ناموا سنتهم.كل رجال الباس لم يجدوا ايديهم 6 من انتهارك يا اله يعقوب يسبخ فارس وخيل. 7 انت مهوب انت.فمن يقف قدامك حال غضبك. 8 من السماء اسمعت حكما.الارض فزعت وسكتت 9 عند قيام الله للقضاء لتخليص كل ودعاء الارض.سلاه. 10 لان غضب الانسان يحمدك.بقية الغضب تتمنطق بها 11 انذروا واوفوا للرب الهكم يا جميع الذين حوله.ليقدموا هدية للمهوب. 12 يقطف روح الرؤساء.هو مهوب لملوك الارض`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على ذوات الاوتار.مزمور لاساف.تسبيحة.الله معروف في يهوذا اسمه عظيم في اسرائيل. 2 كانت في ساليم مظلته ومسكنه في صهيون. 3 هناك سحق القسي البارقة.المجن والسيف والقتال.سلاه 4 ابهى انت امجد من جبال السلب. 5 سلب اشداء القلب.ناموا سنتهم.كل رجال الباس لم يجدوا ايديهم 6 من انتهارك يا اله يعقوب يسبخ فارس وخيل. 7 انت مهوب انت.فمن يقف قدامك حال غضبك. 8 من السماء اسمعت حكما.الارض فزعت وسكتت 9 عند قيام الله للقضاء لتخليص كل ودعاء الارض.سلاه. 10 لان غضب الانسان يحمدك.بقية الغضب تتمنطق بها 11 انذروا واوفوا للرب الهكم يا جميع الذين حوله.ليقدموا هدية للمهوب. 12 يقطف روح الرؤساء.هو مهوب لملوك الارض`
          );
          location.reload();
        }
        function op77() {
          document.getElementById(`show-ld`).innerText = `77`;
          localStorage.setItem(`count`, `77`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على يدوثون.لاساف مزمور.صوتي الى الله فاصرخ.صوتي الى الله فاصغى الي. 2 في يوم ضيقي التمست الرب.يدي في الليل انبسطت ولم تخدر.ابت نفسي التعزية. 3 اذكر الله فائن.اناجي نفسي فيغشى على روحي.سلاه 4 امسكت اجفان عيني.انزعجت فلم اتكلم. 5 تفكرت في ايام القدم السنين الدهرية. 6 اذكر ترنمي في الليل.مع قلبي اناجي وروحي تبحث. 7 هل الى الدهور يرفض الرب ولا يعود للرضا بعد. 8 هل انتهت الى الابد رحمته انقطعت كلمته الى دور فدور. 9 هل نسي الله رافة او قفص برجزه مراحمه.سلاه 10 فقلت هذا ما يعلني تغير يمين العلي. 11 اذكر اعمال الرب اذ اتذكر عجائبك منذ القدم 12 والهج بجميع افعالك وبصنائعك اناجي 13 اللهم في القدس طريقك.اي اله عظيم مثل الله. 14 انت الاله الصانع العجائب.عرفت بين الشعوب قوتك. 15 فككت بذراعك شعبك بني يعقوب ويوسف.سلاه. 16 ابصرتك المياه يا الله ابصرتك المياه ففزعت ارتعدت ايضا اللجج 17 سكبت الغيوم مياها اعطت السحب صوتا.ايضا سهامك طارت. 18 صوت رعدك في الزوبعة البروق اضاءت المسكونة.ارتعدت ورجفت الارض. 19 في البحر طريقك وسبلك في المياه الكثيرة واثارك لم تعرف. 20 هديت شعبك كالغنم بيد موسى وهرون`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على يدوثون.لاساف مزمور.صوتي الى الله فاصرخ.صوتي الى الله فاصغى الي. 2 في يوم ضيقي التمست الرب.يدي في الليل انبسطت ولم تخدر.ابت نفسي التعزية. 3 اذكر الله فائن.اناجي نفسي فيغشى على روحي.سلاه 4 امسكت اجفان عيني.انزعجت فلم اتكلم. 5 تفكرت في ايام القدم السنين الدهرية. 6 اذكر ترنمي في الليل.مع قلبي اناجي وروحي تبحث. 7 هل الى الدهور يرفض الرب ولا يعود للرضا بعد. 8 هل انتهت الى الابد رحمته انقطعت كلمته الى دور فدور. 9 هل نسي الله رافة او قفص برجزه مراحمه.سلاه 10 فقلت هذا ما يعلني تغير يمين العلي. 11 اذكر اعمال الرب اذ اتذكر عجائبك منذ القدم 12 والهج بجميع افعالك وبصنائعك اناجي 13 اللهم في القدس طريقك.اي اله عظيم مثل الله. 14 انت الاله الصانع العجائب.عرفت بين الشعوب قوتك. 15 فككت بذراعك شعبك بني يعقوب ويوسف.سلاه. 16 ابصرتك المياه يا الله ابصرتك المياه ففزعت ارتعدت ايضا اللجج 17 سكبت الغيوم مياها اعطت السحب صوتا.ايضا سهامك طارت. 18 صوت رعدك في الزوبعة البروق اضاءت المسكونة.ارتعدت ورجفت الارض. 19 في البحر طريقك وسبلك في المياه الكثيرة واثارك لم تعرف. 20 هديت شعبك كالغنم بيد موسى وهرون`
          );
          location.reload();
        }
        function op78() {
          document.getElementById(`show-ld`).innerText = `78`;
          localStorage.setItem(`count`, `78`);
          document.getElementById(`one`).innerText =
            `1 قصيدة لاساف.اصغ يا شعبي الى شريعتي.اميلوا اذانكم الى كلام فمي. 2 افتح بمثل فمي.اذيع الغازا منذ القدم. 3 التي سمعناها وعرفناها واباؤنا اخبرونا. 4 لا نخفي عن بنيهم الى الجيل الاخر مخبرين بتسابيح الرب وقوته وعجائبه التي صنع. 5 اقام شهادة في يعقوب ووضع شريعة في اسرائيل التي اوصى اباءنا ان يعرفوا بها ابناءهم 6 لكي يعلم الجيل الاخر.بنون يولدون فيقومون ويخبرون ابناءهم 7 فيجعلون على الله اعتمادهم ولا ينسون اعمال الله بل يحفظون وصاياه 8 ولا يكونون مثل ابائهم جيلا زائغا وماردا جيلا لم يثبت قلبه ولم تكن روحه امينة لله 9 بنو افرايم النازعون في القوس الرامون انقلبوا في يوم الحرب. 10 لم يحفظوا عهد الله وابوا السلوك في شريعته 11 ونسوا افعاله وعجائبه التي اراهم. 12 قدام ابائهم صنع اعجوبة في ارض مصر بلاد صوعن. 13 شق البحر فعبرهم ونصب المياه كند. 14 وهداهم بالسحاب نهارا والليل كله بنور نار. 15 شق صخورا في البرية وسقاهم كانه من لجج عظيمة. 16 اخرج مجاري من صخرة واجرى مياها كالانهار. 17 ثم عادوا ايضا ليخطئوا اليه لعصيان العلي في الارض الناشفة. 18 وجربوا الله في قلوبهم بسؤالهم طعاما لشهوتهم. 19 فوقعوا في الله.قالوا هل يقدر الله ان يرتب مائدة في البرية. 20 هوذا ضرب الصخرة فجرت المياه وفاضت الاودية.هل يقدر ايضا ان يعطي خبزا ويهيئ لحما لشعبه. 21 لذلك سمع الرب فغضب واشتعلت نار في يعقوب وسخط ايضا صعد على اسرائيل. 22 لانهم لم يؤمنوا بالله ولم يتكلوا على خلاصه. 23 فامر السحاب من فوق وفتح مصاريع السموات 24 وامطر عليهم منا للاكل وبر السماء اعطاهم. 25 اكل الانسان خبز الملائكة.ارسل عليهم زادا للشبع. 26 اهاج شرقية في السماء وساق بقوته جنوبية 27 وامطر عليهم لحما مثل التراب وكرمل البحر طيورا ذوات اجنحة. 28 واسقطها في وسط محلتهم حوالي مساكنهم. 29 فاكلوا وشبعوا جدا واتاهم بشهوتهم. 30 لم يزوغوا عن شهوتهم طعامهم بعد في افواههم 31 فصعد عليهم غضب الله وقتل من اسمنهم.وصرع مختاري اسرائيل. 32 في هذا كله اخطاوا بعد ولم يؤمنوا بعجائبه 33 فافنى ايامهم بالباطل وسنيهم بالرعب. 34 اذ قتلهم طلبوه ورجعوا وبكروا الى الله 35 وذكروا ان الله صخرتهم والله العلي وليهم. 36 فخادعوه بافواههم وكذبوا عليه بالسنتهم. 37 اما قلوبهم فلم تثبت معه ولم يكونوا امناء في عهده 38 اما هو فرؤوف يغفر الاثم ولا يهلك وكثيرا ما رد غضبه ولم يشعل كل سخطه. 39 ذكر انهم بشر ريح تذهب ولا تعود. 40 كم عصوه في البرية واحزنوه في القفر. 41 رجعوا وجربوا الله وعنوا قدوس اسرائيل. 42 لم يذكروا يده يوم فداهم من العدو 43 حيث جعل في مصر اياته وعجائبه في بلاد صوعن 44 اذ حول خلجانهم الى دم ومجاريهم لكي لا يشربوا. 45 ارسل عليهم بعوضا فاكلهم وضفادع فافسدتهم. 46 اسلم للجردم غلتهم وتعبهم للجراد. 47 اهلك بالبرد كرومهم وجميزهم بالصقيع. 48 ودفع الى البرد بهائمهم ومواشيهم للبروق. 49 ارسل عليهم حمو غضبه سخطا ورجزا وضيقا جيش ملائكة اشرار‏. 50 مهد سبيلا لغضبه.لم يمنع من الموت انفسهم بل دفع حياتهم للوبا 51 وضرب كل بكر في مصر.اوائل القدرة في خيام حام. 52 وساق مثل الغنم شعبه وقادهم مثل قطيع في البرية. 53 وهداهم امنين فلم يجزعوا.اما اعداؤهم فغمرهم البحر. 54 وادخلهم في تخوم قدسه هذا الجبل الذي اقتنته يمينه. 55 وطرد الامم من قدامهم وقسمهم بالحبل ميراثا واسكن في خيامهم اسباط اسرائيل 56 فجربوا وعصوا الله العلي وشهاداته لم يحفظوا 57 بل ارتدوا وغدروا مثل ابائهم.انحرفوا كقوس مخطئة. 58 اغاظوه بمرتفعاتهم واغاروه بتماثيلهم. 59 سمع الله فغضب ورذل اسرائيل جدا 60 ورفض مسكن شيلو الخيمة التي نصبها بين الناس. 61 وسلم للسبي عزه وجلاله ليد العدو. 62 ودفع الى السيف شعبه وغضب على ميراثه. 63 مختاروه اكلتهم النار وعذاراه لم يحمدن. 64 كهنته سقطوا بالسيف وارامله لم يبكين 65 فاستيقظ الرب كنائم كجبار معيط من الخمر. 66 فضرب اعداءه الى الوراء.جعلهم عارا ابديا. 67 ورفض خيمة يوسف ولم يختر سبط افرايم. 68 بل اختار سبط يهوذا جبل صهيون الذي احبه. 69 وبنى مثل مرتفعات مقدسه كالارض التي اسسها الى الابد. 70 واختار داود عبده واخذه من حظائر الغنم. 71 من خلف المرضعات اتى به ليرعى يعقوب شعبه واسرائيل ميراثه. 72 فرعاهم حسب كمال قلبه وبمهارة يديه هداهم`;
          localStorage.setItem(
            `words`,
            `1 قصيدة لاساف.اصغ يا شعبي الى شريعتي.اميلوا اذانكم الى كلام فمي. 2 افتح بمثل فمي.اذيع الغازا منذ القدم. 3 التي سمعناها وعرفناها واباؤنا اخبرونا. 4 لا نخفي عن بنيهم الى الجيل الاخر مخبرين بتسابيح الرب وقوته وعجائبه التي صنع. 5 اقام شهادة في يعقوب ووضع شريعة في اسرائيل التي اوصى اباءنا ان يعرفوا بها ابناءهم 6 لكي يعلم الجيل الاخر.بنون يولدون فيقومون ويخبرون ابناءهم 7 فيجعلون على الله اعتمادهم ولا ينسون اعمال الله بل يحفظون وصاياه 8 ولا يكونون مثل ابائهم جيلا زائغا وماردا جيلا لم يثبت قلبه ولم تكن روحه امينة لله 9 بنو افرايم النازعون في القوس الرامون انقلبوا في يوم الحرب. 10 لم يحفظوا عهد الله وابوا السلوك في شريعته 11 ونسوا افعاله وعجائبه التي اراهم. 12 قدام ابائهم صنع اعجوبة في ارض مصر بلاد صوعن. 13 شق البحر فعبرهم ونصب المياه كند. 14 وهداهم بالسحاب نهارا والليل كله بنور نار. 15 شق صخورا في البرية وسقاهم كانه من لجج عظيمة. 16 اخرج مجاري من صخرة واجرى مياها كالانهار. 17 ثم عادوا ايضا ليخطئوا اليه لعصيان العلي في الارض الناشفة. 18 وجربوا الله في قلوبهم بسؤالهم طعاما لشهوتهم. 19 فوقعوا في الله.قالوا هل يقدر الله ان يرتب مائدة في البرية. 20 هوذا ضرب الصخرة فجرت المياه وفاضت الاودية.هل يقدر ايضا ان يعطي خبزا ويهيئ لحما لشعبه. 21 لذلك سمع الرب فغضب واشتعلت نار في يعقوب وسخط ايضا صعد على اسرائيل. 22 لانهم لم يؤمنوا بالله ولم يتكلوا على خلاصه. 23 فامر السحاب من فوق وفتح مصاريع السموات 24 وامطر عليهم منا للاكل وبر السماء اعطاهم. 25 اكل الانسان خبز الملائكة.ارسل عليهم زادا للشبع. 26 اهاج شرقية في السماء وساق بقوته جنوبية 27 وامطر عليهم لحما مثل التراب وكرمل البحر طيورا ذوات اجنحة. 28 واسقطها في وسط محلتهم حوالي مساكنهم. 29 فاكلوا وشبعوا جدا واتاهم بشهوتهم. 30 لم يزوغوا عن شهوتهم طعامهم بعد في افواههم 31 فصعد عليهم غضب الله وقتل من اسمنهم.وصرع مختاري اسرائيل. 32 في هذا كله اخطاوا بعد ولم يؤمنوا بعجائبه 33 فافنى ايامهم بالباطل وسنيهم بالرعب. 34 اذ قتلهم طلبوه ورجعوا وبكروا الى الله 35 وذكروا ان الله صخرتهم والله العلي وليهم. 36 فخادعوه بافواههم وكذبوا عليه بالسنتهم. 37 اما قلوبهم فلم تثبت معه ولم يكونوا امناء في عهده 38 اما هو فرؤوف يغفر الاثم ولا يهلك وكثيرا ما رد غضبه ولم يشعل كل سخطه. 39 ذكر انهم بشر ريح تذهب ولا تعود. 40 كم عصوه في البرية واحزنوه في القفر. 41 رجعوا وجربوا الله وعنوا قدوس اسرائيل. 42 لم يذكروا يده يوم فداهم من العدو 43 حيث جعل في مصر اياته وعجائبه في بلاد صوعن 44 اذ حول خلجانهم الى دم ومجاريهم لكي لا يشربوا. 45 ارسل عليهم بعوضا فاكلهم وضفادع فافسدتهم. 46 اسلم للجردم غلتهم وتعبهم للجراد. 47 اهلك بالبرد كرومهم وجميزهم بالصقيع. 48 ودفع الى البرد بهائمهم ومواشيهم للبروق. 49 ارسل عليهم حمو غضبه سخطا ورجزا وضيقا جيش ملائكة اشرار‏. 50 مهد سبيلا لغضبه.لم يمنع من الموت انفسهم بل دفع حياتهم للوبا 51 وضرب كل بكر في مصر.اوائل القدرة في خيام حام. 52 وساق مثل الغنم شعبه وقادهم مثل قطيع في البرية. 53 وهداهم امنين فلم يجزعوا.اما اعداؤهم فغمرهم البحر. 54 وادخلهم في تخوم قدسه هذا الجبل الذي اقتنته يمينه. 55 وطرد الامم من قدامهم وقسمهم بالحبل ميراثا واسكن في خيامهم اسباط اسرائيل 56 فجربوا وعصوا الله العلي وشهاداته لم يحفظوا 57 بل ارتدوا وغدروا مثل ابائهم.انحرفوا كقوس مخطئة. 58 اغاظوه بمرتفعاتهم واغاروه بتماثيلهم. 59 سمع الله فغضب ورذل اسرائيل جدا 60 ورفض مسكن شيلو الخيمة التي نصبها بين الناس. 61 وسلم للسبي عزه وجلاله ليد العدو. 62 ودفع الى السيف شعبه وغضب على ميراثه. 63 مختاروه اكلتهم النار وعذاراه لم يحمدن. 64 كهنته سقطوا بالسيف وارامله لم يبكين 65 فاستيقظ الرب كنائم كجبار معيط من الخمر. 66 فضرب اعداءه الى الوراء.جعلهم عارا ابديا. 67 ورفض خيمة يوسف ولم يختر سبط افرايم. 68 بل اختار سبط يهوذا جبل صهيون الذي احبه. 69 وبنى مثل مرتفعات مقدسه كالارض التي اسسها الى الابد. 70 واختار داود عبده واخذه من حظائر الغنم. 71 من خلف المرضعات اتى به ليرعى يعقوب شعبه واسرائيل ميراثه. 72 فرعاهم حسب كمال قلبه وبمهارة يديه هداهم`
          );
          location.reload();
        }
        function op79() {
          document.getElementById(`show-ld`).innerText = `79`;
          localStorage.setItem(`count`, `79`);
          document.getElementById(`one`).innerText =
            `1 مزمور.لاساف.اللهم ان الامم قد دخلوا ميراثك.نجسوا هيكل قدسك.جعلوا اورشليم اكواما. 2 دفعوا جثث عبيدك طعاما لطيور السماء.لحم اتقيائك لوحوش الارض 3 سفكوا دمهم كالماء حول اورشليم وليس من يدفن. 4 صرنا عارا عند جيراننا هزءا وسخرة للذين حولنا. 5 الى متى يا رب تغضب كل الغضب وتتقد كالنار غيرتك. 6 افض رجزك على الامم الذين لا يعرفونك وعلى الممالك التي لم تدع باسمك. 7 لانهم قد اكلوا يعقوب واخربوا مسكنه 8 لا تذكر علينا ذنوب الاولين.لتتقدمنا مراحمك سريعا لاننا قد تذللنا جدا. 9 اعنا يا اله خلاصنا من اجل مجد اسمك ونجنا واغفر خطايانا من اجل اسمك. 10 لماذا يقول الامم اين هو الههم.لتعرف عند الامم قدام اعيننا نقمة دم عبيدك المهراق. 11 ليدخل قدامك انين الاسير.كعظمة ذراعك استبق بني الموت. 12 ورد على جيراننا سبعة اضعاف في احضانهم العار الذي عيروك به يا رب. 13 اما نحن شعبك وغنم رعايتك نحمدك الى الدهر.الى دور فدور نحدث بتسبيحك`;
          localStorage.setItem(
            `words`,
            `1 مزمور.لاساف.اللهم ان الامم قد دخلوا ميراثك.نجسوا هيكل قدسك.جعلوا اورشليم اكواما. 2 دفعوا جثث عبيدك طعاما لطيور السماء.لحم اتقيائك لوحوش الارض 3 سفكوا دمهم كالماء حول اورشليم وليس من يدفن. 4 صرنا عارا عند جيراننا هزءا وسخرة للذين حولنا. 5 الى متى يا رب تغضب كل الغضب وتتقد كالنار غيرتك. 6 افض رجزك على الامم الذين لا يعرفونك وعلى الممالك التي لم تدع باسمك. 7 لانهم قد اكلوا يعقوب واخربوا مسكنه 8 لا تذكر علينا ذنوب الاولين.لتتقدمنا مراحمك سريعا لاننا قد تذللنا جدا. 9 اعنا يا اله خلاصنا من اجل مجد اسمك ونجنا واغفر خطايانا من اجل اسمك. 10 لماذا يقول الامم اين هو الههم.لتعرف عند الامم قدام اعيننا نقمة دم عبيدك المهراق. 11 ليدخل قدامك انين الاسير.كعظمة ذراعك استبق بني الموت. 12 ورد على جيراننا سبعة اضعاف في احضانهم العار الذي عيروك به يا رب. 13 اما نحن شعبك وغنم رعايتك نحمدك الى الدهر.الى دور فدور نحدث بتسبيحك`
          );
          location.reload();
        }
        function op80() {
          document.getElementById(`show-ld`).innerText = `80`;
          localStorage.setItem(`count`, `80`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.على السوسن.شهادة.لاساف.مزمور.يا راعي اسرائيل اصغ يا قائد يوسف كالضان يا جالسا على الكروبيم اشرق 2 قدام افرايم وبنيامين ومنسى ايقظ جبروتك وهلم لخلاصنا. 3 يا الله ارجعنا وانر بوجهك فنخلص 4 يا رب اله الجنود الى متى تدخن على صلاة شعبك. 5 قد اطعمتهم خبز الدموع وسقيتهم الدموع بالكيل. 6 جعلتنا نزاعا عند جيراننا واعداؤنا يستهزئون بين انفسهم. 7 يا اله الجنود ارجعنا وانر بوجهك فنخلص 8 كرمة من مصر نقلت.طردت امما وغرستها. 9 هيات قدامها فاصلت اصولها فملات الارض. 10 غطى الجبال ظلها واغصانها ارز الله. 11 مدت قضبانها الى البحر والى النهر فروعها. 12 فلماذا هدمت جدرانها فيقطفها كل عابري الطريق. 13 يفسدها الخنزير من الوعر ويرعاها وحش البرية 14 يا اله الجنود ارجعن اطلع من السماء وانظر وتعهد هذه الكرمة 15 والغرس الذي غرسته يمينك والابن الذي اخترته لنفسك. 16 هي محروقة بنار مقطوعة.من انتهار وجهك يبيدون. 17 لتكن يدك على رجل يمينك وعلى ابن ادم الذي اخترته لنفسك. 18 فلا نرتد عنك.احينا فندعو باسمك. 19 يا رب اله الجنود ارجعنا.انر بوجهك فنخلص`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.على السوسن.شهادة.لاساف.مزمور.يا راعي اسرائيل اصغ يا قائد يوسف كالضان يا جالسا على الكروبيم اشرق 2 قدام افرايم وبنيامين ومنسى ايقظ جبروتك وهلم لخلاصنا. 3 يا الله ارجعنا وانر بوجهك فنخلص 4 يا رب اله الجنود الى متى تدخن على صلاة شعبك. 5 قد اطعمتهم خبز الدموع وسقيتهم الدموع بالكيل. 6 جعلتنا نزاعا عند جيراننا واعداؤنا يستهزئون بين انفسهم. 7 يا اله الجنود ارجعنا وانر بوجهك فنخلص 8 كرمة من مصر نقلت.طردت امما وغرستها. 9 هيات قدامها فاصلت اصولها فملات الارض. 10 غطى الجبال ظلها واغصانها ارز الله. 11 مدت قضبانها الى البحر والى النهر فروعها. 12 فلماذا هدمت جدرانها فيقطفها كل عابري الطريق. 13 يفسدها الخنزير من الوعر ويرعاها وحش البرية 14 يا اله الجنود ارجعن اطلع من السماء وانظر وتعهد هذه الكرمة 15 والغرس الذي غرسته يمينك والابن الذي اخترته لنفسك. 16 هي محروقة بنار مقطوعة.من انتهار وجهك يبيدون. 17 لتكن يدك على رجل يمينك وعلى ابن ادم الذي اخترته لنفسك. 18 فلا نرتد عنك.احينا فندعو باسمك. 19 يا رب اله الجنود ارجعنا.انر بوجهك فنخلص`
          );
          location.reload();
        }
        function op81() {
          document.getElementById(`show-ld`).innerText = `81`;
          localStorage.setItem(`count`, `81`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على الجتية.لاساف.رنموا لله قوتنا اهتفوا لاله يعقوب. 2 ارفعوا نغمة وهاتوا دفا عودا حلوا مع رباب. 3 انفخوا في راس الشهر بالبوق عند الهلال ليوم عيدنا. 4 لان هذا فريضة لاسرائيل حكم لاله يعقوب. 5 جعله شهادة في يوسف عند خروجه على ارض مصر.سمعت لسانا لم اعرفه 6 ابعدت من الحمل كتفه.يداه تحولتا عن السل. 7 في الضيق دعوت فنجيتك.استجبتك في ستر الرعد.جربتك على ماء مريبة.سلاه 8 اسمع يا شعبي فاحذرك.يا اسرائيل ان سمعت لي 9 لا يكن فيك اله غريب ولا تسجد لاله اجنبي. 10 انا الرب الهك الذي اصعدك من ارض مصر.افغر فاك فاملاه. 11 فلم يسمع شعبي لصوتي واسرائيل لم يرض بي. 12 فسلمتهم الى قساوة قلوبهم.ليسلكوا في مؤامرات انفسهم. 13 لو سمع لي شعبي وسلك اسرائيل في طرقي 14 سريعا كنت اخضع اعداءهم وعلى مضايقيهم كنت ارد يدي. 15 مبغضو الرب يتذللون له.ويكون وقتهم الى الدهر. 16 وكان اطعمه من شحم الحنطة.ومن الصخرة كنت اشبعك عسلا`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على الجتية.لاساف.رنموا لله قوتنا اهتفوا لاله يعقوب. 2 ارفعوا نغمة وهاتوا دفا عودا حلوا مع رباب. 3 انفخوا في راس الشهر بالبوق عند الهلال ليوم عيدنا. 4 لان هذا فريضة لاسرائيل حكم لاله يعقوب. 5 جعله شهادة في يوسف عند خروجه على ارض مصر.سمعت لسانا لم اعرفه 6 ابعدت من الحمل كتفه.يداه تحولتا عن السل. 7 في الضيق دعوت فنجيتك.استجبتك في ستر الرعد.جربتك على ماء مريبة.سلاه 8 اسمع يا شعبي فاحذرك.يا اسرائيل ان سمعت لي 9 لا يكن فيك اله غريب ولا تسجد لاله اجنبي. 10 انا الرب الهك الذي اصعدك من ارض مصر.افغر فاك فاملاه. 11 فلم يسمع شعبي لصوتي واسرائيل لم يرض بي. 12 فسلمتهم الى قساوة قلوبهم.ليسلكوا في مؤامرات انفسهم. 13 لو سمع لي شعبي وسلك اسرائيل في طرقي 14 سريعا كنت اخضع اعداءهم وعلى مضايقيهم كنت ارد يدي. 15 مبغضو الرب يتذللون له.ويكون وقتهم الى الدهر. 16 وكان اطعمه من شحم الحنطة.ومن الصخرة كنت اشبعك عسلا`
          );
          location.reload();
        }
        function op82() {
          document.getElementById(`show-ld`).innerText = `82`;
          localStorage.setItem(`count`, `82`);
          document.getElementById(`one`).innerText =
            `1 مزمور لاساف.الله قائم في مجمع الله.في وسط الالهة يقضي. 2 حتى متى تقضون جورا وترفعون وجوه الاشرار.سلاه. 3 اقضوا للذليل ولليتيم.انصفوا المسكين والبائس. 4 نجوا المسكين والفقير.من يد الاشرار انقذوا 5 لا يعلمون ولا يفهمون.في الظلمة يتمشون.تتزعزع كل اسس الارض. 6 انا قلت انكم الهة وبنو العلي كلكم. 7 لكن مثل الناس تموتون وكاحد الرؤساء تسقطون. 8 قم يا الله.دن الارض.لانك انت تمتلك كل الامم`;
          localStorage.setItem(
            `words`,
            `1 مزمور لاساف.الله قائم في مجمع الله.في وسط الالهة يقضي. 2 حتى متى تقضون جورا وترفعون وجوه الاشرار.سلاه. 3 اقضوا للذليل ولليتيم.انصفوا المسكين والبائس. 4 نجوا المسكين والفقير.من يد الاشرار انقذوا 5 لا يعلمون ولا يفهمون.في الظلمة يتمشون.تتزعزع كل اسس الارض. 6 انا قلت انكم الهة وبنو العلي كلكم. 7 لكن مثل الناس تموتون وكاحد الرؤساء تسقطون. 8 قم يا الله.دن الارض.لانك انت تمتلك كل الامم`
          );
          location.reload();
        }
        function op83() {
          document.getElementById(`show-ld`).innerText = `83`;
          localStorage.setItem(`count`, `83`);
          document.getElementById(`one`).innerText =
            `1 تسبيحة.مزمور لاساف.اللهم لا تصمت لا تسكت ولا تهدا يا الله. 2 فهوذا اعداؤك يعجون ومبغضوك قد رفعوا الراس. 3 على شعبك مكروا مؤامرة وتشاوروا على احميائك. 4 قالوا هلم نبدهم من بين الشعوب ولا يذكر اسم اسرائيل بعد 5 لانهم تامروا بالقلب معا.عليك تعاهدوا عهدا. 6 خيام ادوم والاسمعيليين .مواب والهاجريون. 7 جبال وعمون وعماليق.فلسطين مع سكان صور. 8 اشور ايضا اتفق معهم.صاروا ذراعا لبني لوط.سلاه. 9 افعل بهم كما بمديان كما بسيسرا كما بيابين في وادي قيشون. 10 بادوا في عين دور.صاروا دمنا للارض. 11 اجعلهم شرفاءهم مثل غراب ومثل ذئب.ومثل زبح ومثل صلمناع كل امرائهم. 12 الذين قالوا لنمتلك لانفسنا مساكن الله 13 يا الهي اجعلهم مثل الجل مثل القش امام الريح. 14 كنار تحرق الوعر كلهيب يشعل الجبال 15 هكذا اطردهم بعاصفتك وبزوبعتك روعهم. 16 املا وجوههم خزيا فيطلبوا اسمك يا رب. 17 ليخزوا ويرتاعوا الى الابد وليخجلوا ويبيدوا 18 ويعلموا انك اسمك يهوه وحدك العلي على كل الارض`;
          localStorage.setItem(
            `words`,
            `1 تسبيحة.مزمور لاساف.اللهم لا تصمت لا تسكت ولا تهدا يا الله. 2 فهوذا اعداؤك يعجون ومبغضوك قد رفعوا الراس. 3 على شعبك مكروا مؤامرة وتشاوروا على احميائك. 4 قالوا هلم نبدهم من بين الشعوب ولا يذكر اسم اسرائيل بعد 5 لانهم تامروا بالقلب معا.عليك تعاهدوا عهدا. 6 خيام ادوم والاسمعيليين .مواب والهاجريون. 7 جبال وعمون وعماليق.فلسطين مع سكان صور. 8 اشور ايضا اتفق معهم.صاروا ذراعا لبني لوط.سلاه. 9 افعل بهم كما بمديان كما بسيسرا كما بيابين في وادي قيشون. 10 بادوا في عين دور.صاروا دمنا للارض. 11 اجعلهم شرفاءهم مثل غراب ومثل ذئب.ومثل زبح ومثل صلمناع كل امرائهم. 12 الذين قالوا لنمتلك لانفسنا مساكن الله 13 يا الهي اجعلهم مثل الجل مثل القش امام الريح. 14 كنار تحرق الوعر كلهيب يشعل الجبال 15 هكذا اطردهم بعاصفتك وبزوبعتك روعهم. 16 املا وجوههم خزيا فيطلبوا اسمك يا رب. 17 ليخزوا ويرتاعوا الى الابد وليخجلوا ويبيدوا 18 ويعلموا انك اسمك يهوه وحدك العلي على كل الارض`
          );
          location.reload();
        }
        function op84() {
          document.getElementById(`show-ld`).innerText = `84`;
          localStorage.setItem(`count`, `84`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين على الجتية.لبني قورح.مزمور.ما احلى مساكنك يا رب الجنود. 2 تشتاق بل تتوق نفسي الى ديار الرب.قلبي ولحمي يهتفان بالاله الحي. 3 العصفور ايضا وجد بيتا والسنونة عشا لنفسها حيث تضع افراخها مذابحك يا رب الجنود ملكي والهي. 4 طوبى للساكنين في بيتك ابدا يسبحونك.سلاه 5 طوبى لاناس عزهم بك.طرق بيتك في قلوبهم. 6 عابرين في وادي البكاء يصيرونه ينبوعا.ايضا ببركات يغطون مورة 7 يذهبون من قوة الى قوة.يرون قدام الله في صهيون 8 يا رب اله الجنود اسمع صلاتي واصغ يا اله يعقوب.سلاه. 9 يا مجننا انظر يا الله والتفت الى وجه مسيحك. 10 لان يوما واحدا في ديارك خير من الف.اخترت الوقوف على العتبة في بيت الهي على السكن في خيام الاشرار. 11 لان الرب الله شمس ومجن.الرب يعطي رحمة ومجدا.لا يمنع خيرا عن السالكين بالكمال. 12 يا رب الجنود طوبى للانسان المتكل عليك`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين على الجتية.لبني قورح.مزمور.ما احلى مساكنك يا رب الجنود. 2 تشتاق بل تتوق نفسي الى ديار الرب.قلبي ولحمي يهتفان بالاله الحي. 3 العصفور ايضا وجد بيتا والسنونة عشا لنفسها حيث تضع افراخها مذابحك يا رب الجنود ملكي والهي. 4 طوبى للساكنين في بيتك ابدا يسبحونك.سلاه 5 طوبى لاناس عزهم بك.طرق بيتك في قلوبهم. 6 عابرين في وادي البكاء يصيرونه ينبوعا.ايضا ببركات يغطون مورة 7 يذهبون من قوة الى قوة.يرون قدام الله في صهيون 8 يا رب اله الجنود اسمع صلاتي واصغ يا اله يعقوب.سلاه. 9 يا مجننا انظر يا الله والتفت الى وجه مسيحك. 10 لان يوما واحدا في ديارك خير من الف.اخترت الوقوف على العتبة في بيت الهي على السكن في خيام الاشرار. 11 لان الرب الله شمس ومجن.الرب يعطي رحمة ومجدا.لا يمنع خيرا عن السالكين بالكمال. 12 يا رب الجنود طوبى للانسان المتكل عليك`
          );
          location.reload();
        }
        function op85() {
          document.getElementById(`show-ld`).innerText = `85`;
          localStorage.setItem(`count`, `85`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لبني قورح.مزمور.رضيت يا رب على ارضك.ارجعت سبي يعقوب. 2 غفرت اثم شعبك.سترت كل خطيتهم.سلاه. 3 حجزت كل رجزك.رجعت عن حمو غضبك. 4 ارجعنا يا اله خلاصنا وانف غضبك عنا. 5 هل الى الدهر تسخط علينا.هل تطيل غضبك الى دور فدور. 6 الا تعود انت فتحيينا فيفرح بك شعبك. 7 ارنا يا رب رحمتك واعطنا خلاصك 8 اني اسمع ما يتكلم به الله الرب.لانه يتكلم بالسلام لشعبه ولاتقيائه فلا يرجعن الى الحماقة. 9 لان خلاصه قريب من خائفيه ليسكن المجد في ارضنا. 10 الرحمة والحق التقيا.البر والسلام تلاثما. 11 الحق من الارض ينبت والبر من السماء يطلع. 12 ايضا الرب يعطي الخير وارضنا تعطي غلتها. 13 البر قدامه يسلك ويطا في طريق خطواته`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لبني قورح.مزمور.رضيت يا رب على ارضك.ارجعت سبي يعقوب. 2 غفرت اثم شعبك.سترت كل خطيتهم.سلاه. 3 حجزت كل رجزك.رجعت عن حمو غضبك. 4 ارجعنا يا اله خلاصنا وانف غضبك عنا. 5 هل الى الدهر تسخط علينا.هل تطيل غضبك الى دور فدور. 6 الا تعود انت فتحيينا فيفرح بك شعبك. 7 ارنا يا رب رحمتك واعطنا خلاصك 8 اني اسمع ما يتكلم به الله الرب.لانه يتكلم بالسلام لشعبه ولاتقيائه فلا يرجعن الى الحماقة. 9 لان خلاصه قريب من خائفيه ليسكن المجد في ارضنا. 10 الرحمة والحق التقيا.البر والسلام تلاثما. 11 الحق من الارض ينبت والبر من السماء يطلع. 12 ايضا الرب يعطي الخير وارضنا تعطي غلتها. 13 البر قدامه يسلك ويطا في طريق خطواته`
          );
          location.reload();
        }
        function op86() {
          document.getElementById(`show-ld`).innerText = `86`;
          localStorage.setItem(`count`, `86`);
          document.getElementById(`one`).innerText =
            `1 صلاة لداود.امل يا رب اذنك.استجب لي.لاني مسكين وبائس انا. 2 احفظ نفسي لاني تقي.يا الهي خلص انت عبدك المتكل عليك‏. 3 ارحمني يا رب لانني اليك اصرخ اليوم كله. 4 فرح نفس عبدك لانني اليك يا رب ارفع نفسي. 5 لانك انت يا رب صالح وغفور وكثير الرحمة لكل الداعين اليك 6 اصغ يا رب الى صلاتي وانصت الى صوت تضرعاتي. 7 في يوم ضيقي ادعوك لانك تستجيب لي. 8 لا مثل لك بين الالهة يا رب ولا مثل اعمالك. 9 كل الامم الذين صنعتهم ياتون ويسجدون امامك يا رب ويمجدون اسمك 10 لانك عظيم انت وصانع عجائب.انت الله وحدك 11 علمني يا رب طريقك اسلك في حقك.وحد قلبي لخوف اسمك. 12 احمدك يا رب الهي من كل قلبي وامجد اسمك الى الدهر‏. 13 لان رحمتك عظيمة نحوي وقد نجيت نفسي من الهاوية السفلى 14 اللهم المتكبرون قد قاموا علي وجماعة العتاة طلبوا نفسي ولم يجعلوك امامهم. 15 اما انت يا رب فاله رحيم ورؤوف طويل الروح وكثير الرحمة والحق 16 التفت الي وارحمني.اعط عبدك قوتك وخلص ابن امتك. 17 اصنع معي اية للخير فيرى ذلك مبغضي فيخزوا لانك انت يا رب اعنتني وعزيتني`;
          localStorage.setItem(
            `words`,
            `1 صلاة لداود.امل يا رب اذنك.استجب لي.لاني مسكين وبائس انا. 2 احفظ نفسي لاني تقي.يا الهي خلص انت عبدك المتكل عليك‏. 3 ارحمني يا رب لانني اليك اصرخ اليوم كله. 4 فرح نفس عبدك لانني اليك يا رب ارفع نفسي. 5 لانك انت يا رب صالح وغفور وكثير الرحمة لكل الداعين اليك 6 اصغ يا رب الى صلاتي وانصت الى صوت تضرعاتي. 7 في يوم ضيقي ادعوك لانك تستجيب لي. 8 لا مثل لك بين الالهة يا رب ولا مثل اعمالك. 9 كل الامم الذين صنعتهم ياتون ويسجدون امامك يا رب ويمجدون اسمك 10 لانك عظيم انت وصانع عجائب.انت الله وحدك 11 علمني يا رب طريقك اسلك في حقك.وحد قلبي لخوف اسمك. 12 احمدك يا رب الهي من كل قلبي وامجد اسمك الى الدهر‏. 13 لان رحمتك عظيمة نحوي وقد نجيت نفسي من الهاوية السفلى 14 اللهم المتكبرون قد قاموا علي وجماعة العتاة طلبوا نفسي ولم يجعلوك امامهم. 15 اما انت يا رب فاله رحيم ورؤوف طويل الروح وكثير الرحمة والحق 16 التفت الي وارحمني.اعط عبدك قوتك وخلص ابن امتك. 17 اصنع معي اية للخير فيرى ذلك مبغضي فيخزوا لانك انت يا رب اعنتني وعزيتني`
          );
          location.reload();
        }
        function op87() {
          document.getElementById(`show-ld`).innerText = `87`;
          localStorage.setItem(`count`, `87`);
          document.getElementById(`one`).innerText =
            `1 لبني قورح.مزمور تسبيحة.اساسه في الجبال المقدسة. 2 الرب احب ابواب صهيون اكثر من جميع مساكن يعقوب. 3 قد قيل بك امجاد يا مدينة الله.سلاه 4 اذكر رهب وبابل عارفتي.هوذا فلسطين وصور مع كوش.هذا ولد هناك. 5 ولصهيون يقال هذا الانسان وهذا الانسان ولد فيها وهي العلي يثبتها. 6 الرب يعد في كتابة الشعوب ان هذا ولد هناك.سلاه. 7 ومغنون كعازفين كل السكان فيك`;
          localStorage.setItem(
            `words`,
            `1 لبني قورح.مزمور تسبيحة.اساسه في الجبال المقدسة. 2 الرب احب ابواب صهيون اكثر من جميع مساكن يعقوب. 3 قد قيل بك امجاد يا مدينة الله.سلاه 4 اذكر رهب وبابل عارفتي.هوذا فلسطين وصور مع كوش.هذا ولد هناك. 5 ولصهيون يقال هذا الانسان وهذا الانسان ولد فيها وهي العلي يثبتها. 6 الرب يعد في كتابة الشعوب ان هذا ولد هناك.سلاه. 7 ومغنون كعازفين كل السكان فيك`
          );
          location.reload();
        }
        function op88() {
          document.getElementById(`show-ld`).innerText = `88`;
          localStorage.setItem(`count`, `88`);
          document.getElementById(`one`).innerText =
            `1 تسبيحة مزمور لبني قورح.لامام المغنين على العود للغناء.قصيدة لهيمان الازراحي.يا رب اله خلاصي بالنهار والليل صرخت امامك. 2 فلتات قدامك صلاتي.امل اذنك الى صراخي. 3 لانه قد شبعت من المصائب نفسي وحياتي الى الهاوية دنت. 4 حسبت مثل المنحدرين الى الجب.صرت كرجل لا قوة له. 5 بين الاموات فراشي مثل القتلى المضطجعين في القبر الذين لا تذكرهم بعد وهم من يدك انقطعوا. 6 وضعتني في الجب الاسفل في ظلمات في اعماق. 7 علي استقر غضبك وبكل تياراتك ذللتني.سلاه. 8 ابعدت عني معارفي.جعلتني رجسا لهم.اغلق علي فما اخرج. 9 عيني ذابت من الذل.دعوتك يا رب كل يوم. بسطت اليك يدي 10 افلعلك للاموات تصنع عجائب ام الاخيلة تقوم تمجدك.سلاه. 11 هل يحدث في القبر برحمتك او بحقك في الهلاك. 12 هل تعرف في الظلمة عجائبك وبرك في ارض النسيان 13 اما انا فاليك يا رب صرخت وفي الغداة صلاتي تتقدمك. 14 لماذا يا رب ترفض نفسي.لماذا تحجب وجهك عني. 15 انا مسكين ومسلم الروح منذ صباي.احتملت اهوالك.تحيرت. 16 علي عبر سخطك.اهوالك اهلكتني. 17 احاطت بي كالمياه اليوم كله.اكتنفتني معا. 18 ابعدت عني محبا وصاحبا.معارفي في الظلمة`;
          localStorage.setItem(
            `words`,
            `1 تسبيحة مزمور لبني قورح.لامام المغنين على العود للغناء.قصيدة لهيمان الازراحي.يا رب اله خلاصي بالنهار والليل صرخت امامك. 2 فلتات قدامك صلاتي.امل اذنك الى صراخي. 3 لانه قد شبعت من المصائب نفسي وحياتي الى الهاوية دنت. 4 حسبت مثل المنحدرين الى الجب.صرت كرجل لا قوة له. 5 بين الاموات فراشي مثل القتلى المضطجعين في القبر الذين لا تذكرهم بعد وهم من يدك انقطعوا. 6 وضعتني في الجب الاسفل في ظلمات في اعماق. 7 علي استقر غضبك وبكل تياراتك ذللتني.سلاه. 8 ابعدت عني معارفي.جعلتني رجسا لهم.اغلق علي فما اخرج. 9 عيني ذابت من الذل.دعوتك يا رب كل يوم. بسطت اليك يدي 10 افلعلك للاموات تصنع عجائب ام الاخيلة تقوم تمجدك.سلاه. 11 هل يحدث في القبر برحمتك او بحقك في الهلاك. 12 هل تعرف في الظلمة عجائبك وبرك في ارض النسيان 13 اما انا فاليك يا رب صرخت وفي الغداة صلاتي تتقدمك. 14 لماذا يا رب ترفض نفسي.لماذا تحجب وجهك عني. 15 انا مسكين ومسلم الروح منذ صباي.احتملت اهوالك.تحيرت. 16 علي عبر سخطك.اهوالك اهلكتني. 17 احاطت بي كالمياه اليوم كله.اكتنفتني معا. 18 ابعدت عني محبا وصاحبا.معارفي في الظلمة`
          );
          location.reload();
        }
        function op89() {
          document.getElementById(`show-ld`).innerText = `89`;
          localStorage.setItem(`count`, `89`);
          document.getElementById(`one`).innerText =
            `1 قصيدة لايثان الازراحي.بمراحم الرب اغني الى الدهر.لدور فدور اخبر عن حقك بفمي. 2 لاني قلت ان الرحمة الى الدهر تبنى.السموات تثبت فيها حقك. 3 قطعت عهدا مع مختاري.حلفت لداود عبدي 4 الى الدهر اثبت نسلك وابني الى دور فدور كرسيك.سلاه. 5 والسموات تحمد عجائبك يا رب وحقك ايضا في جماعة القديسين. 6 لانه من في السماء يعادل الرب.من يشبه الرب بين ابناء الله. 7 اله مهوب جدا في مؤامرة القديسين ومخوف عند جميع الذين حوله 8 يا رب اله الجنود من مثلك قوي رب وحقك من حولك. 9 انت متسلط على كبرياء البحر.عند ارتفاع لججه انت تسكنها. 10 انت سحقت رهب مثل القتيل.بذراع قوتك بددت اعداءك. 11 لك السموات.لك ايضا الارض .المسكونة وملؤها انت اسستهما‏. 12 الشمال والجنوب انت خلقتهما.تابور وحرمون باسمك يهتفان. 13 لك ذراع القدرة.قوية يدك.مرتفعة يمينك. 14 العدل والحق قاعدة كرسيك.الرحمة والامانة تتقدمان امام وجهك. 15 طوبى للشعب العارفين الهتاف.يا رب بنور وجهك يسلكون. 16 باسمك يبتهجون اليوم كله وبعدلك يرتفعون. 17 لانك انت فخر قوتهم وبرضاك ينتصب قرننا. 18 لان الرب مجننا وقدوس اسرائيل ملكنا 19 حينئذ كلمت برؤيا تقيك وقلت جعلت عونا على قوي.رفعت مختارا من بين الشعب. 20 وجدت داود عبدي.بدهن قدسي مسحته. 21 الذي تثبت يدي معه.ايضا ذراعي تشدده. 22 لا يرغمه عدو وابن الاثم لا يذلله. 23 واسحق اعداءه امام وجهه واضرب مبغضيه. 24 اما امانتي ورحمتي فمعه وباسمي ينتصب قرنه. 25 واجعل على البحر يده وعلى الانهار يمينه. 26 هو يدعوني ابي انت.الهي وصخرة خلاصي. 27 انا ايضا اجعله بكرا اعلى من ملوك الارض. 28 الى الدهر احفظ له رحمتي.وعهدي يثبت له. 29 واجعل الى الابد نسله وكرسيه مثل ايام السموات. 30 ان ترك بنوه شريعتي ولم يسلكوا باحكامي 31 ان نقضوا فرائضي ولم يحفظوا وصاياي 32 افتقد بعصا معصيتهم وبضربات اثمهم. 33 اما رحمتي فلا انزعها عنه ولا اكذب من جهة امانتي. 34 لا انقض عهدي ولا اغير ما خرج من شفتي. 35 مرة حلفت بقدسي اني لا اكذب لداود. 36 نسله الى الدهر يكون وكرسيه كالشمس امامي. 37 مثل القمر يثبت الى الدهر.والشاهد في السماء امين.سلاه 38 لكنك رفضت ورذلت.غضبت على مسيحك. 39 نقضت عهد عبدك.نجست تاجه في التراب. 40 هدمت كل جدرانه.جعلت حصونه خرابا. 41 افسده كل عابري الطريق.صار عارا عند جيرانه. 42 رفعت يمين مضايقيه.فرحت جميع اعدائه. 43 ايضا رددت حد سيفه ولم تنصره في القتال. 44 ابطلت بهاءه والقيت كرسيه الى الارض. 45 قصرت ايام شبابه غطيته بالخزي.سلاه 46 حتى متى يا رب تختبئ كل الاختباء.حتى متى يتقد كالنار غضبك 47 اذكر كيف انا زائل.الى اي باطل خلقت جميع بني ادم. 48 اي انسان يحيا ولا يرى الموت اي ينجي نفسه من يد الهاوية.سلاه. 49 اين مراحمك الاول يا رب التي حلفت بها لداود بامانتك. 50 اذكر يا رب عار عبيدك.الذي احتمله في حضني من كثرة الامم كلها 51 الذي به عير اعداؤك يا رب الذين عيروا اثار مسيحك. 52 مبارك الرب الى الدهر.امين فامين`;
          localStorage.setItem(
            `words`,
            `1 قصيدة لايثان الازراحي.بمراحم الرب اغني الى الدهر.لدور فدور اخبر عن حقك بفمي. 2 لاني قلت ان الرحمة الى الدهر تبنى.السموات تثبت فيها حقك. 3 قطعت عهدا مع مختاري.حلفت لداود عبدي 4 الى الدهر اثبت نسلك وابني الى دور فدور كرسيك.سلاه. 5 والسموات تحمد عجائبك يا رب وحقك ايضا في جماعة القديسين. 6 لانه من في السماء يعادل الرب.من يشبه الرب بين ابناء الله. 7 اله مهوب جدا في مؤامرة القديسين ومخوف عند جميع الذين حوله 8 يا رب اله الجنود من مثلك قوي رب وحقك من حولك. 9 انت متسلط على كبرياء البحر.عند ارتفاع لججه انت تسكنها. 10 انت سحقت رهب مثل القتيل.بذراع قوتك بددت اعداءك. 11 لك السموات.لك ايضا الارض .المسكونة وملؤها انت اسستهما‏. 12 الشمال والجنوب انت خلقتهما.تابور وحرمون باسمك يهتفان. 13 لك ذراع القدرة.قوية يدك.مرتفعة يمينك. 14 العدل والحق قاعدة كرسيك.الرحمة والامانة تتقدمان امام وجهك. 15 طوبى للشعب العارفين الهتاف.يا رب بنور وجهك يسلكون. 16 باسمك يبتهجون اليوم كله وبعدلك يرتفعون. 17 لانك انت فخر قوتهم وبرضاك ينتصب قرننا. 18 لان الرب مجننا وقدوس اسرائيل ملكنا 19 حينئذ كلمت برؤيا تقيك وقلت جعلت عونا على قوي.رفعت مختارا من بين الشعب. 20 وجدت داود عبدي.بدهن قدسي مسحته. 21 الذي تثبت يدي معه.ايضا ذراعي تشدده. 22 لا يرغمه عدو وابن الاثم لا يذلله. 23 واسحق اعداءه امام وجهه واضرب مبغضيه. 24 اما امانتي ورحمتي فمعه وباسمي ينتصب قرنه. 25 واجعل على البحر يده وعلى الانهار يمينه. 26 هو يدعوني ابي انت.الهي وصخرة خلاصي. 27 انا ايضا اجعله بكرا اعلى من ملوك الارض. 28 الى الدهر احفظ له رحمتي.وعهدي يثبت له. 29 واجعل الى الابد نسله وكرسيه مثل ايام السموات. 30 ان ترك بنوه شريعتي ولم يسلكوا باحكامي 31 ان نقضوا فرائضي ولم يحفظوا وصاياي 32 افتقد بعصا معصيتهم وبضربات اثمهم. 33 اما رحمتي فلا انزعها عنه ولا اكذب من جهة امانتي. 34 لا انقض عهدي ولا اغير ما خرج من شفتي. 35 مرة حلفت بقدسي اني لا اكذب لداود. 36 نسله الى الدهر يكون وكرسيه كالشمس امامي. 37 مثل القمر يثبت الى الدهر.والشاهد في السماء امين.سلاه 38 لكنك رفضت ورذلت.غضبت على مسيحك. 39 نقضت عهد عبدك.نجست تاجه في التراب. 40 هدمت كل جدرانه.جعلت حصونه خرابا. 41 افسده كل عابري الطريق.صار عارا عند جيرانه. 42 رفعت يمين مضايقيه.فرحت جميع اعدائه. 43 ايضا رددت حد سيفه ولم تنصره في القتال. 44 ابطلت بهاءه والقيت كرسيه الى الارض. 45 قصرت ايام شبابه غطيته بالخزي.سلاه 46 حتى متى يا رب تختبئ كل الاختباء.حتى متى يتقد كالنار غضبك 47 اذكر كيف انا زائل.الى اي باطل خلقت جميع بني ادم. 48 اي انسان يحيا ولا يرى الموت اي ينجي نفسه من يد الهاوية.سلاه. 49 اين مراحمك الاول يا رب التي حلفت بها لداود بامانتك. 50 اذكر يا رب عار عبيدك.الذي احتمله في حضني من كثرة الامم كلها 51 الذي به عير اعداؤك يا رب الذين عيروا اثار مسيحك. 52 مبارك الرب الى الدهر.امين فامين`
          );
          location.reload();
        }
        function op90() {
          document.getElementById(`show-ld`).innerText = `90`;
          localStorage.setItem(`count`, `90`);
          document.getElementById(`one`).innerText =
            `1 صلاة لموسى رجل الله.يا رب ملجا كنت لنا في دور فدور. 2 من قبل ان تولد الجبال او ابدات الارض والمسكونة منذ الازل الى الابد انت الله. 3 ترجع الانسان الى الغبار وتقول ارجعوا يا بني ادم. 4 لان الف سنة في عينيك مثل يوم امس بعدما عبر وكهزيع من الليل. 5 جرفتهم.كسنة يكونون.بالغداة كعشب يزول. 6 بالغداة يزهر فيزول.عند المساء يجز فييبس 7 لاننا قد فنينا بسخطك وبغضبك ارتعبنا. 8 قد جعلت اثامنا امامك خفياتنا في ضوء وجهك‏. 9 لان كل ايامنا قد انقضت برجزك.افنينا سنينا كقصة. 10 ايام سنينا هي سبعون سنة.وان كانت مع القوة فثمانون سنة وافخرها تعب وبلية.لانها تقرض سريعا فنطير. 11 من يعرف قوة غضبك.وكخوفك سخطك. 12 احصاء ايامنا هكذا علمنا فنؤتى قلب حكمة 13 ارجع يا رب.حتى متى.وتراف على عبيدك. 14 اشبعنا بالغداة من رحمتك فنبتهج ونفرح كل ايامنا. 15 فرحنا كالايام التي فيها اذللتنا كالسنين التي راينا فيها شرا 16 ليظهر فعلك لعبيدك وجلالك لبنيهم. 17 ولتكن نعمة الرب الهنا علينا وعمل ايدينا ثبت علينا وعمل ايدينا ثبته`;
          localStorage.setItem(
            `words`,
            `1 صلاة لموسى رجل الله.يا رب ملجا كنت لنا في دور فدور. 2 من قبل ان تولد الجبال او ابدات الارض والمسكونة منذ الازل الى الابد انت الله. 3 ترجع الانسان الى الغبار وتقول ارجعوا يا بني ادم. 4 لان الف سنة في عينيك مثل يوم امس بعدما عبر وكهزيع من الليل. 5 جرفتهم.كسنة يكونون.بالغداة كعشب يزول. 6 بالغداة يزهر فيزول.عند المساء يجز فييبس 7 لاننا قد فنينا بسخطك وبغضبك ارتعبنا. 8 قد جعلت اثامنا امامك خفياتنا في ضوء وجهك‏. 9 لان كل ايامنا قد انقضت برجزك.افنينا سنينا كقصة. 10 ايام سنينا هي سبعون سنة.وان كانت مع القوة فثمانون سنة وافخرها تعب وبلية.لانها تقرض سريعا فنطير. 11 من يعرف قوة غضبك.وكخوفك سخطك. 12 احصاء ايامنا هكذا علمنا فنؤتى قلب حكمة 13 ارجع يا رب.حتى متى.وتراف على عبيدك. 14 اشبعنا بالغداة من رحمتك فنبتهج ونفرح كل ايامنا. 15 فرحنا كالايام التي فيها اذللتنا كالسنين التي راينا فيها شرا 16 ليظهر فعلك لعبيدك وجلالك لبنيهم. 17 ولتكن نعمة الرب الهنا علينا وعمل ايدينا ثبت علينا وعمل ايدينا ثبته`
          );
          location.reload();
        }
        function op91() {
          document.getElementById(`show-ld`).innerText = `91`;
          localStorage.setItem(`count`, `91`);
          document.getElementById(`one`).innerText =
            `1 الساكن في ستر العلي في ظل القدير يبيت 2 اقول للرب ملجاي وحصني الهي فاتكل عليه. 3 لانه ينجيك من فخ الصياد ومن الوبا الخطر. 4 بخوافيه يظللك وتحت اجنحته تحتمي.ترس ومجن حقه. 5 لا تخشى من خوف الليل ولا من سهم يطير في النهار. 6 ولا من وبا يسلك في الدجى ولا من هلاك يفسد في الظهيرة. 7 يسقط عن جانبك الف وربوات عن يمينك.اليك لا يقرب. 8 انما بعينيك تنظر وترى مجازاة الاشرار 9 لانك قلت انت يا رب ملجاي.جعلت العلي مسكنك. 10 لا يلاقيك شر ولا تدنو ضربة من خيمتك. 11 لانه يوصي ملائكته بك لكي يحفظوك في كل طرقك. 12 على الايدي يحملونك لئلا تصدم بحجر رجلك. 13 على الاسد والصل تطا.الشبل والثعبان تدوس. 14 لانه تعلق بي انجيه.ارفعه لانه عرف اسمي. 15 يدعوني فاستجيب له.معه انا في الضيق.انقذه وامجده. 16 من طول الايام اشبعه واريه خلاصي`;
          localStorage.setItem(
            `words`,
            `1 الساكن في ستر العلي في ظل القدير يبيت 2 اقول للرب ملجاي وحصني الهي فاتكل عليه. 3 لانه ينجيك من فخ الصياد ومن الوبا الخطر. 4 بخوافيه يظللك وتحت اجنحته تحتمي.ترس ومجن حقه. 5 لا تخشى من خوف الليل ولا من سهم يطير في النهار. 6 ولا من وبا يسلك في الدجى ولا من هلاك يفسد في الظهيرة. 7 يسقط عن جانبك الف وربوات عن يمينك.اليك لا يقرب. 8 انما بعينيك تنظر وترى مجازاة الاشرار 9 لانك قلت انت يا رب ملجاي.جعلت العلي مسكنك. 10 لا يلاقيك شر ولا تدنو ضربة من خيمتك. 11 لانه يوصي ملائكته بك لكي يحفظوك في كل طرقك. 12 على الايدي يحملونك لئلا تصدم بحجر رجلك. 13 على الاسد والصل تطا.الشبل والثعبان تدوس. 14 لانه تعلق بي انجيه.ارفعه لانه عرف اسمي. 15 يدعوني فاستجيب له.معه انا في الضيق.انقذه وامجده. 16 من طول الايام اشبعه واريه خلاصي`
          );
          location.reload();
        }
        function op92() {
          document.getElementById(`show-ld`).innerText = `92`;
          localStorage.setItem(`count`, `92`);
          document.getElementById(`one`).innerText =
            `1 مزمور تسبيحة.ليوم السبت.حسن هو الحمد للرب والترنم لاسمك ايها العلي. 2 ان يخبر برحمتك في الغداة وامانتك كل ليلة 3 على ذات عشرة اوتار وعلى الرباب على عزف العود. 4 لانك فرحتني يا رب بصنائعك.باعمال يديك ابتهج. 5 ما اعظم اعمالك يا رب واعمق جدا افكارك. 6 الرجل البليد لا يعرف والجاهل لا يفهم هذا. 7 اذا زها الاشرار كالعشب وازهر كل فاعلي الاثم فلكي يبادوا الى الدهر. 8 اما انت يا رب فمتعال الى الابد. 9 لانه هوذا اعداؤك يا رب لانه هوذا اعداؤك يبيدون.يتبدد كل فاعلي الاثم. 10 وتنصب مثل البقر الوحشي قرني.تدهنت بزيت طري. 11 وتبصر عيني بمراقبي.وبالقائمين علي بالشر تسمع اذناي 12 الصديق كالنخلة يزهو كالارز في لبنان ينمو. 13 مغروسين في بيت الرب في ديار الهنا يزهرون. 14 ايضا يثمرون في الشيبة.يكونون دساما وخضرا 15 ليخبروا بان الرب مستقيم.صخرتي هو ولا ظلم فيه`;
          localStorage.setItem(
            `words`,
            `1 مزمور تسبيحة.ليوم السبت.حسن هو الحمد للرب والترنم لاسمك ايها العلي. 2 ان يخبر برحمتك في الغداة وامانتك كل ليلة 3 على ذات عشرة اوتار وعلى الرباب على عزف العود. 4 لانك فرحتني يا رب بصنائعك.باعمال يديك ابتهج. 5 ما اعظم اعمالك يا رب واعمق جدا افكارك. 6 الرجل البليد لا يعرف والجاهل لا يفهم هذا. 7 اذا زها الاشرار كالعشب وازهر كل فاعلي الاثم فلكي يبادوا الى الدهر. 8 اما انت يا رب فمتعال الى الابد. 9 لانه هوذا اعداؤك يا رب لانه هوذا اعداؤك يبيدون.يتبدد كل فاعلي الاثم. 10 وتنصب مثل البقر الوحشي قرني.تدهنت بزيت طري. 11 وتبصر عيني بمراقبي.وبالقائمين علي بالشر تسمع اذناي 12 الصديق كالنخلة يزهو كالارز في لبنان ينمو. 13 مغروسين في بيت الرب في ديار الهنا يزهرون. 14 ايضا يثمرون في الشيبة.يكونون دساما وخضرا 15 ليخبروا بان الرب مستقيم.صخرتي هو ولا ظلم فيه`
          );
          location.reload();
        }
        function op93() {
          document.getElementById(`show-ld`).innerText = `93`;
          localStorage.setItem(`count`, `93`);
          document.getElementById(`one`).innerText =
            `1 الرب قد ملك.لبس الجلال.لبس الرب القدرة.ائتزر بها.ايضا تثبتت المسكونة.لا تتزعزع. 2 كرسيك مثبتة منذ القدم.منذ الازل انت. 3 رفعت الانهار يا رب رفعت الانهار صوتها.ترفع الانهار عجيجها. 4 من اصوات مياه كثيرة من غمار امواج البحر الرب في العلى اقدر. 5 شهاداتك ثابتة جدا.ببيتك تليق القداسة يا رب الى طول الايام`;
          localStorage.setItem(
            `words`,
            `1 الرب قد ملك.لبس الجلال.لبس الرب القدرة.ائتزر بها.ايضا تثبتت المسكونة.لا تتزعزع. 2 كرسيك مثبتة منذ القدم.منذ الازل انت. 3 رفعت الانهار يا رب رفعت الانهار صوتها.ترفع الانهار عجيجها. 4 من اصوات مياه كثيرة من غمار امواج البحر الرب في العلى اقدر. 5 شهاداتك ثابتة جدا.ببيتك تليق القداسة يا رب الى طول الايام`
          );
          location.reload();
        }
        function op94() {
          document.getElementById(`show-ld`).innerText = `94`;
          localStorage.setItem(`count`, `94`);
          document.getElementById(`one`).innerText =
            `1 يا اله النقمات يا رب يا اله النقمات اشرق. 2 ارتفع يا ديان الارض.جاز صنيع المستكبرين. 3 حتى متى الخطاة يا رب حتى متى الخطاة يشمتون. 4 يبقون يتكلمون بوقاحة.كل فاعلي الاثم يفتخرون. 5 يسحقون شعبك يا رب ويذلون ميراثك. 6 يقتلون الارملة والغريب ويميتون اليتيم. 7 ويقولون الرب لا يبصر واله يعقوب لا يلاحظ 8 افهموا ايها البلداء في الشعب ويا جهلاء متى تعقلون. 9 الغارس الاذن الا يسمع.الصانع العين الا يبصر. 10 المؤدب الامم الا يبكت.المعلم الانسان معرفة. 11 الرب يعرف افكار الانسان انها باطلة. 12 طوبى للرجل الذي تؤدبه يا رب وتعلمه من شريعتك 13 لتريحه من ايام الشر حتى تحفر للشرير حفرة. 14 لان الرب لا يرفض شعبه ولا يترك ميراثه. 15 لانه الى العدل يرجع القضاء وعلى اثره كل مستقيمي القلوب 16 من يقوم لي على المسيئين.من يقف لي ضد فعلة الاثم. 17 لولا ان الرب معيني لسكنت نفسي سريعا ارض السكوت. 18 اذ قلت قد زلت قدمي فرحمتك يا رب تعضدني. 19 عند كثرة همومي في داخلي تعزياتك تلذذ نفسي. 20 هل يعاهدك كرسي المفاسد المختلق اثما على فريضة. 21 يزدحمون على نفس الصديق ويحكمون على دم زكي. 22 فكان الرب لي صرحا والهي صخرة ملجاي 23 ويرد عليهم اثمهم وبشرهم يفنيهم.يفنيهم الرب الهنا`;
          localStorage.setItem(
            `words`,
            `1 يا اله النقمات يا رب يا اله النقمات اشرق. 2 ارتفع يا ديان الارض.جاز صنيع المستكبرين. 3 حتى متى الخطاة يا رب حتى متى الخطاة يشمتون. 4 يبقون يتكلمون بوقاحة.كل فاعلي الاثم يفتخرون. 5 يسحقون شعبك يا رب ويذلون ميراثك. 6 يقتلون الارملة والغريب ويميتون اليتيم. 7 ويقولون الرب لا يبصر واله يعقوب لا يلاحظ 8 افهموا ايها البلداء في الشعب ويا جهلاء متى تعقلون. 9 الغارس الاذن الا يسمع.الصانع العين الا يبصر. 10 المؤدب الامم الا يبكت.المعلم الانسان معرفة. 11 الرب يعرف افكار الانسان انها باطلة. 12 طوبى للرجل الذي تؤدبه يا رب وتعلمه من شريعتك 13 لتريحه من ايام الشر حتى تحفر للشرير حفرة. 14 لان الرب لا يرفض شعبه ولا يترك ميراثه. 15 لانه الى العدل يرجع القضاء وعلى اثره كل مستقيمي القلوب 16 من يقوم لي على المسيئين.من يقف لي ضد فعلة الاثم. 17 لولا ان الرب معيني لسكنت نفسي سريعا ارض السكوت. 18 اذ قلت قد زلت قدمي فرحمتك يا رب تعضدني. 19 عند كثرة همومي في داخلي تعزياتك تلذذ نفسي. 20 هل يعاهدك كرسي المفاسد المختلق اثما على فريضة. 21 يزدحمون على نفس الصديق ويحكمون على دم زكي. 22 فكان الرب لي صرحا والهي صخرة ملجاي 23 ويرد عليهم اثمهم وبشرهم يفنيهم.يفنيهم الرب الهنا`
          );
          location.reload();
        }
        function op95() {
          document.getElementById(`show-ld`).innerText = `95`;
          localStorage.setItem(`count`, `95`);
          document.getElementById(`one`).innerText =
            `1 هلم نرنم للرب نهتف لصخرة خلاصنا. 2 نتقدم امامه بحمد وبترنيمات نهتف له. 3 لان الرب اله عظيم ملك كبير على كل الالهة. 4 الذي بيده مقاصير الارض وخزائن الجبال له. 5 الذي له البحر وهو صنعه ويداه سبكتا اليابسة 6 هلم نسجد ونركع ونجثو امام الرب خالقنا. 7 لانه هو الهنا ونحن شعب مرعاه وغنم يده.اليوم ان سمعتم صوته 8 فلا تقسوا قلوبكم كما في مريبة مثل يوم مسة في البرية 9 حيث جربني اباؤكم.اختبروني.ابصروا ايضا فعلي 10 اربعين سنة مقت ذلك الجيل وقلت هم شعب ضال قلبهم وهم لم يعرفوا سبلي. 11 فاقسمت في غضبي لا يدخلون راحتي`;
          localStorage.setItem(
            `words`,
            `1 هلم نرنم للرب نهتف لصخرة خلاصنا. 2 نتقدم امامه بحمد وبترنيمات نهتف له. 3 لان الرب اله عظيم ملك كبير على كل الالهة. 4 الذي بيده مقاصير الارض وخزائن الجبال له. 5 الذي له البحر وهو صنعه ويداه سبكتا اليابسة 6 هلم نسجد ونركع ونجثو امام الرب خالقنا. 7 لانه هو الهنا ونحن شعب مرعاه وغنم يده.اليوم ان سمعتم صوته 8 فلا تقسوا قلوبكم كما في مريبة مثل يوم مسة في البرية 9 حيث جربني اباؤكم.اختبروني.ابصروا ايضا فعلي 10 اربعين سنة مقت ذلك الجيل وقلت هم شعب ضال قلبهم وهم لم يعرفوا سبلي. 11 فاقسمت في غضبي لا يدخلون راحتي`
          );
          location.reload();
        }
        function op96() {
          document.getElementById(`show-ld`).innerText = `96`;
          localStorage.setItem(`count`, `96`);
          document.getElementById(`one`).innerText =
            `1 رنموا للرب ترنيمة جديدة رنمي للرب يا كل الارض. 2 رنموا للرب باركوا اسمه بشروا من يوم الى يوم بخلاصه. 3 حدثوا بين الامم بمجده بين جميع الشعوب بعجائبه. 4 لان الرب عظيم وحميد جدا مهوب هو على كل الالهة. 5 لان كل الهة الشعوب اصنام اما الرب فقد صنع السموات. 6 مجد وجلال قدامه.العز والجمال في مقدسه 7 قدموا للرب يا قبائل الشعوب قدموا للرب مجدا وقوة. 8 قدموا للرب مجد اسمه.هاتوا تقدمة وادخلوا دياره. 9 اسجدوا للرب في زينة مقدسة.ارتعدي قدامه يا كل الارض. 10 قولوا بين الامم الرب قد ملك.ايضا تثبتت المسكونة فلا تتزعزع.يدين الشعوب بالاستقامة. 11 لتفرح السموات ولتبتهج الارض ليعج البحر وملؤه 12 ليجذل الحقل وكل ما فيه لتترنم حينئذ كل اشجار الوعر 13 امام الرب لانه جاء.جاء ليدين الارض.يدين المسكونة بالعدل والشعوب بامانته`;
          localStorage.setItem(
            `words`,
            `1 رنموا للرب ترنيمة جديدة رنمي للرب يا كل الارض. 2 رنموا للرب باركوا اسمه بشروا من يوم الى يوم بخلاصه. 3 حدثوا بين الامم بمجده بين جميع الشعوب بعجائبه. 4 لان الرب عظيم وحميد جدا مهوب هو على كل الالهة. 5 لان كل الهة الشعوب اصنام اما الرب فقد صنع السموات. 6 مجد وجلال قدامه.العز والجمال في مقدسه 7 قدموا للرب يا قبائل الشعوب قدموا للرب مجدا وقوة. 8 قدموا للرب مجد اسمه.هاتوا تقدمة وادخلوا دياره. 9 اسجدوا للرب في زينة مقدسة.ارتعدي قدامه يا كل الارض. 10 قولوا بين الامم الرب قد ملك.ايضا تثبتت المسكونة فلا تتزعزع.يدين الشعوب بالاستقامة. 11 لتفرح السموات ولتبتهج الارض ليعج البحر وملؤه 12 ليجذل الحقل وكل ما فيه لتترنم حينئذ كل اشجار الوعر 13 امام الرب لانه جاء.جاء ليدين الارض.يدين المسكونة بالعدل والشعوب بامانته`
          );
          location.reload();
        }
        function op97() {
          document.getElementById(`show-ld`).innerText = `97`;
          localStorage.setItem(`count`, `97`);
          document.getElementById(`one`).innerText =
            `1 الرب قد ملك فلتبتهج الارض ولتفرح الجزائر الكثيرة. 2 السحاب والضباب حوله.العدل والحق قاعدة كرسيه. 3 قدامه تذهب نار وتحرق اعداءه حوله. 4 اضاءت بروقه المسكونة.رات الارض وارتعدت. 5 ذابت الجبال مثل الشمع قدام الرب قدام سيد الارض كلها. 6 اخبرت السموات بعدله وراى جميع الشعوب مجده 7 يخزى كل عابدي تمثال منحوت المفتخرين بالاصنام.اسجدوا له يا جميع الالهة. 8 سمعت صهيون ففرحت وابتهجت بنات يهوذا من اجل احكامك يا رب. 9 لانك انت يا رب علي على كل الارض.علوت جدا على كل الالهة 10 يا محبي الرب ابغضوا الشر.هو حافظ نفوس اتقيائه.من يد الاشرار ينقذهم. 11 نور قد زرع للصديق وفرح للمستقيمي القلب. 12 افرحوا ايها الصديقون بالرب واحمدوا ذكر قدسه`;
          localStorage.setItem(
            `words`,
            `1 الرب قد ملك فلتبتهج الارض ولتفرح الجزائر الكثيرة. 2 السحاب والضباب حوله.العدل والحق قاعدة كرسيه. 3 قدامه تذهب نار وتحرق اعداءه حوله. 4 اضاءت بروقه المسكونة.رات الارض وارتعدت. 5 ذابت الجبال مثل الشمع قدام الرب قدام سيد الارض كلها. 6 اخبرت السموات بعدله وراى جميع الشعوب مجده 7 يخزى كل عابدي تمثال منحوت المفتخرين بالاصنام.اسجدوا له يا جميع الالهة. 8 سمعت صهيون ففرحت وابتهجت بنات يهوذا من اجل احكامك يا رب. 9 لانك انت يا رب علي على كل الارض.علوت جدا على كل الالهة 10 يا محبي الرب ابغضوا الشر.هو حافظ نفوس اتقيائه.من يد الاشرار ينقذهم. 11 نور قد زرع للصديق وفرح للمستقيمي القلب. 12 افرحوا ايها الصديقون بالرب واحمدوا ذكر قدسه`
          );
          location.reload();
        }
        function op98() {
          document.getElementById(`show-ld`).innerText = `98`;
          localStorage.setItem(`count`, `98`);
          document.getElementById(`one`).innerText =
            `1 مزمور.رنموا للرب ترنيمة جديدة لانه صنع عجائب.خلصته يمينه وذراع قدسه. 2 اعلن الرب خلاصه.لعيون الامم كشف بره. 3 ذكر رحمته وامانته لبيت اسرائيل.رات كل اقاصي الارض خلاص الهنا 4 اهتفي للرب يا كل الارض اهتفوا ورنموا وغنوا. 5 رنموا للرب بعود.بعود وصوت نشيد 6 بالابواق وصوت الصور اهتفوا قدام الملك الرب. 7 ليعج البحر وملؤه المسكونة والساكنون فيها. 8 الانهار لتصفق بالايادي الجبال لترنم معا 9 امام الرب لانه جاء ليدين الارض.يدين المسكونة بالعدل والشعوب بالاستقامة`;
          localStorage.setItem(
            `words`,
            `1 مزمور.رنموا للرب ترنيمة جديدة لانه صنع عجائب.خلصته يمينه وذراع قدسه. 2 اعلن الرب خلاصه.لعيون الامم كشف بره. 3 ذكر رحمته وامانته لبيت اسرائيل.رات كل اقاصي الارض خلاص الهنا 4 اهتفي للرب يا كل الارض اهتفوا ورنموا وغنوا. 5 رنموا للرب بعود.بعود وصوت نشيد 6 بالابواق وصوت الصور اهتفوا قدام الملك الرب. 7 ليعج البحر وملؤه المسكونة والساكنون فيها. 8 الانهار لتصفق بالايادي الجبال لترنم معا 9 امام الرب لانه جاء ليدين الارض.يدين المسكونة بالعدل والشعوب بالاستقامة`
          );
          location.reload();
        }
        function op99() {
          document.getElementById(`show-ld`).innerText = `99`;
          localStorage.setItem(`count`, `99`);
          document.getElementById(`one`).innerText =
            `1 الرب قد ملك.ترتعد الشعوب.هو جالس على الكروبيم.تتزلزل الارض. 2 الرب عظيم في صهيون وعال هو على كل الشعوب. 3 يحمدون اسمك العظيم والمهوب.قدوس هو. 4 وعز الملك ان يحب الحق.انت ثبت الاستقامة انت اجريت حقا وعدلا في يعقوب 5 علوا الرب الهنا واسجدوا عند موطئ قدميه.قدوس هو. 6 موسى وهرون بين كهنته وصموئيل بين الذين يدعون باسمه.دعوا الرب‏ وهو استجاب لهم. 7 بعمود السحاب كلمهم.حفظوا شهاداته والفريضة التي اعطاهم. 8 ايها الرب الهنا انت استجبت لهم.الها غفورا كنت لهم ومنتقما على افعالهم. 9 علوا الرب الهنا.واسجدوا في جبل قدسه لان الرب الهنا قدوس`;
          localStorage.setItem(
            `words`,
            `1 الرب قد ملك.ترتعد الشعوب.هو جالس على الكروبيم.تتزلزل الارض. 2 الرب عظيم في صهيون وعال هو على كل الشعوب. 3 يحمدون اسمك العظيم والمهوب.قدوس هو. 4 وعز الملك ان يحب الحق.انت ثبت الاستقامة انت اجريت حقا وعدلا في يعقوب 5 علوا الرب الهنا واسجدوا عند موطئ قدميه.قدوس هو. 6 موسى وهرون بين كهنته وصموئيل بين الذين يدعون باسمه.دعوا الرب‏ وهو استجاب لهم. 7 بعمود السحاب كلمهم.حفظوا شهاداته والفريضة التي اعطاهم. 8 ايها الرب الهنا انت استجبت لهم.الها غفورا كنت لهم ومنتقما على افعالهم. 9 علوا الرب الهنا.واسجدوا في جبل قدسه لان الرب الهنا قدوس`
          );
          location.reload();
        }
        function op100() {
          document.getElementById(`show-ld`).innerText = `100`;
          localStorage.setItem(`count`, `100`);
          document.getElementById(`one`).innerText =
            `1 مزمور حمد.اهتفي للرب يا كل الارض. 2 اعبدوا الرب بفرح.ادخلوا الى حضرته بترنم. 3 اعلموا ان الرب هو الله.هو صنعنا وله نحن شعبه وغنم مرعاه. 4 ادخلوا ابوابه بحمد دياره بالتسبيح احمدوه باركوا اسمه. 5 لان الرب صالح.الى الابد رحمته والى دور فدور امانته`;
          localStorage.setItem(
            `words`,
            `1 مزمور حمد.اهتفي للرب يا كل الارض. 2 اعبدوا الرب بفرح.ادخلوا الى حضرته بترنم. 3 اعلموا ان الرب هو الله.هو صنعنا وله نحن شعبه وغنم مرعاه. 4 ادخلوا ابوابه بحمد دياره بالتسبيح احمدوه باركوا اسمه. 5 لان الرب صالح.الى الابد رحمته والى دور فدور امانته`
          );
          location.reload();
        }
        function op101() {
          document.getElementById(`show-ld`).innerText = `101`;
          localStorage.setItem(`count`, `101`);
          document.getElementById(`one`).innerText =
            `1 لداود.مزمور.رحمة وحكما اغني.لك يا رب ارنم. 2 اتعقل في طريق كامل.متى تاتي الي.اسلك في كمال قلبي في وسط بيتي. 3 لا اضع قدام عيني امرا رديئا عمل الزيغان ابغضت.لا يلصق بي. 4 قلب معوج يبعد عني.الشرير لا اعرفه. 5 الذي يغتاب صاحبه سرا هذا اقطعه.مستكبر العين ومنتفخ القلب لا احتمله. 6 عيناي على امناء الارض لكي اجلسهم معي.السالك طريقا كاملا هو يخدمني. 7 لا يسكن وسط بيتي عامل غش.المتكلم بالكذب لا يثبت امام عيني. 8 باكرا ابيد جميع اشرار الارض لاقطع من مدينة الرب كل فاعلي الاثم`;
          localStorage.setItem(
            `words`,
            `1 لداود.مزمور.رحمة وحكما اغني.لك يا رب ارنم. 2 اتعقل في طريق كامل.متى تاتي الي.اسلك في كمال قلبي في وسط بيتي. 3 لا اضع قدام عيني امرا رديئا عمل الزيغان ابغضت.لا يلصق بي. 4 قلب معوج يبعد عني.الشرير لا اعرفه. 5 الذي يغتاب صاحبه سرا هذا اقطعه.مستكبر العين ومنتفخ القلب لا احتمله. 6 عيناي على امناء الارض لكي اجلسهم معي.السالك طريقا كاملا هو يخدمني. 7 لا يسكن وسط بيتي عامل غش.المتكلم بالكذب لا يثبت امام عيني. 8 باكرا ابيد جميع اشرار الارض لاقطع من مدينة الرب كل فاعلي الاثم`
          );
          location.reload();
        }
        function op102() {
          document.getElementById(`show-ld`).innerText = `102`;
          localStorage.setItem(`count`, `102`);
          document.getElementById(`one`).innerText =
            `1 صلاة لمسكين اذا اعيا وسكب شكواه قدام الله.يا رب استمع صلاتي وليدخل اليك صراخي. 2 لا تحجب وجهك عني في يوم ضيقي.امل الي اذنك في يوم ادعوك.استجب لي سريعا. 3 لان ايامي قد فنيت في دخان وعظامي مثل وقيد قد يبست. 4 ملفوح كالعشب ويابس قلبي حتى سهوت عن اكل خبزي. 5 من صوت تنهدي لصق عظمي بلحمي. 6 اشبهت قوق البرية.صرت مثل بومة الخرب. 7 سهدت وصرت كعصفور منفرد على السطح. 8 اليوم كله عيرني اعدائي.الحنقون علي حلفوا علي. 9 اني قد اكلت الرماد مثل الخبز ومزجت شرابي بدموع 10 بسبب غضبك وسخطك لانك حملتني وطرحتني. 11 ايامي كظل مائل وانا مثل العشب يبست 12 اما انت يا رب فالى الدهر جالس وذكرك الى دور فدور. 13 انت تقوم وترحم صهيون لانه وقت الرافة لانه جاء الميعاد. 14 لان عبيدك قد سروا بحجارتها وحنوا الى ترابها. 15 فتخشى الامم اسم الرب وكل ملوك الارض مجدك. 16 اذا بنى الرب صهيون يرى بمجده. 17 التفت الى صلاة المضطر ولم يرذل دعاءهم. 18 يكتب هذا للدور الاخر وشعب سوف يخلق يسبح الرب. 19 لانه اشرف من علو قدسه الرب من السماء الى الارض نظر 20 ليسمع انين الاسير ليطلق بني الموت 21 لكي يحدث في صهيون باسم الرب وبتسبيحه في اورشليم 22 عند اجتماع الشعوب معا والممالك لعبادة الرب 23 ضعف في الطريق قوتي قصر ايامي. 24 اقول يا الهي لا تقبضني في نصف ايامي.الى دهر الدهور سنوك. 25 من قدم اسست الارض والسموات هي عمل يديك. 26 هي تبيد وانت تبقى وكلها كثوب تبلى كرداء تغيرهن فتتغير. 27 وانت هو وسنوك لن تنتهي. 28 ابناء عبيدك يسكنون وذريتهم تثبت امامك`;
          localStorage.setItem(
            `words`,
            `1 صلاة لمسكين اذا اعيا وسكب شكواه قدام الله.يا رب استمع صلاتي وليدخل اليك صراخي. 2 لا تحجب وجهك عني في يوم ضيقي.امل الي اذنك في يوم ادعوك.استجب لي سريعا. 3 لان ايامي قد فنيت في دخان وعظامي مثل وقيد قد يبست. 4 ملفوح كالعشب ويابس قلبي حتى سهوت عن اكل خبزي. 5 من صوت تنهدي لصق عظمي بلحمي. 6 اشبهت قوق البرية.صرت مثل بومة الخرب. 7 سهدت وصرت كعصفور منفرد على السطح. 8 اليوم كله عيرني اعدائي.الحنقون علي حلفوا علي. 9 اني قد اكلت الرماد مثل الخبز ومزجت شرابي بدموع 10 بسبب غضبك وسخطك لانك حملتني وطرحتني. 11 ايامي كظل مائل وانا مثل العشب يبست 12 اما انت يا رب فالى الدهر جالس وذكرك الى دور فدور. 13 انت تقوم وترحم صهيون لانه وقت الرافة لانه جاء الميعاد. 14 لان عبيدك قد سروا بحجارتها وحنوا الى ترابها. 15 فتخشى الامم اسم الرب وكل ملوك الارض مجدك. 16 اذا بنى الرب صهيون يرى بمجده. 17 التفت الى صلاة المضطر ولم يرذل دعاءهم. 18 يكتب هذا للدور الاخر وشعب سوف يخلق يسبح الرب. 19 لانه اشرف من علو قدسه الرب من السماء الى الارض نظر 20 ليسمع انين الاسير ليطلق بني الموت 21 لكي يحدث في صهيون باسم الرب وبتسبيحه في اورشليم 22 عند اجتماع الشعوب معا والممالك لعبادة الرب 23 ضعف في الطريق قوتي قصر ايامي. 24 اقول يا الهي لا تقبضني في نصف ايامي.الى دهر الدهور سنوك. 25 من قدم اسست الارض والسموات هي عمل يديك. 26 هي تبيد وانت تبقى وكلها كثوب تبلى كرداء تغيرهن فتتغير. 27 وانت هو وسنوك لن تنتهي. 28 ابناء عبيدك يسكنون وذريتهم تثبت امامك`
          );
          location.reload();
        }
        function op103() {
          document.getElementById(`show-ld`).innerText = `103`;
          localStorage.setItem(`count`, `103`);
          document.getElementById(`one`).innerText =
            `1 لداود.باركي يا نفسي الرب وكل ما في باطني ليبارك اسمه القدوس. 2 باركي يا نفسي الرب ولا تنسي كل حسناته. 3 الذي يغفر جميع ذنوبك الذي يشفي كل امراضك 4 الذي يفدي من الحفرة حياتك الذي يكللك بالرحمة والرافة 5 الذي يشبع بالخير عمرك فيتجدد مثل النسر شبابك 6 الرب مجري العدل والقضاء لجميع المظلومين. 7 عرف موسى طرقه وبني اسرائيل افعاله. 8 الرب رحيم ورؤوف طويل الروح وكثير الرحمة. 9 لا يحاكم الى الابد ولا يحقد الى الدهر‏. 10 لم يصنع معنا حسب خطايانا ولم يجازنا حسب اثامنا. 11 لانه مثل ارتفاع السموات فوق الارض قويت رحمته على خائفيه. 12 كبعد المشرق من المغرب ابعد عنا معاصينا 13 كما يتراف الاب على البنين يتراف الرب على خائفيه. 14 لانه يعرف جبلتنا.يذكر اننا تراب نحن. 15 الانسان مثل العشب ايامه.كزهر الحقل كذلك يزهر. 16 لان ريحا تعبر عليه فلا يكون ولا يعرفه موضعه بعد. 17 اما رحمة الرب فالى الدهر والابد على خائفيه وعدله على بني البنين 18 لحافظي عهده وذاكري وصاياه ليعملوها 19 الرب في السموات ثبت كرسيه ومملكته على الكل تسود. 20 باركوا الرب يا ملائكته المقتدرين قوة الفاعلين امره عند سماع صوت كلامه. 21 باركوا الرب يا جميع جنوده خدامه العاملين مرضاته. 22 باركوا الرب يا جميع اعماله في كل مواضع سلطانه باركي يا نفسي الرب`;
          localStorage.setItem(
            `words`,
            `1 لداود.باركي يا نفسي الرب وكل ما في باطني ليبارك اسمه القدوس. 2 باركي يا نفسي الرب ولا تنسي كل حسناته. 3 الذي يغفر جميع ذنوبك الذي يشفي كل امراضك 4 الذي يفدي من الحفرة حياتك الذي يكللك بالرحمة والرافة 5 الذي يشبع بالخير عمرك فيتجدد مثل النسر شبابك 6 الرب مجري العدل والقضاء لجميع المظلومين. 7 عرف موسى طرقه وبني اسرائيل افعاله. 8 الرب رحيم ورؤوف طويل الروح وكثير الرحمة. 9 لا يحاكم الى الابد ولا يحقد الى الدهر‏. 10 لم يصنع معنا حسب خطايانا ولم يجازنا حسب اثامنا. 11 لانه مثل ارتفاع السموات فوق الارض قويت رحمته على خائفيه. 12 كبعد المشرق من المغرب ابعد عنا معاصينا 13 كما يتراف الاب على البنين يتراف الرب على خائفيه. 14 لانه يعرف جبلتنا.يذكر اننا تراب نحن. 15 الانسان مثل العشب ايامه.كزهر الحقل كذلك يزهر. 16 لان ريحا تعبر عليه فلا يكون ولا يعرفه موضعه بعد. 17 اما رحمة الرب فالى الدهر والابد على خائفيه وعدله على بني البنين 18 لحافظي عهده وذاكري وصاياه ليعملوها 19 الرب في السموات ثبت كرسيه ومملكته على الكل تسود. 20 باركوا الرب يا ملائكته المقتدرين قوة الفاعلين امره عند سماع صوت كلامه. 21 باركوا الرب يا جميع جنوده خدامه العاملين مرضاته. 22 باركوا الرب يا جميع اعماله في كل مواضع سلطانه باركي يا نفسي الرب`
          );
          location.reload();
        }
        function op104() {
          document.getElementById(`show-ld`).innerText = `104`;
          localStorage.setItem(`count`, `104`);
          document.getElementById(`one`).innerText =
            `1 باركي يا نفسي الرب.يا رب الهي قد عظمت جدا مجدا وجلالا لبست. 2 اللابس النور كثوب الباسط السموات كشقة. 3 المسقف علاليه بالمياه الجاعل السحاب مركبته الماشي على اجنحة الريح 4 الصانع ملائكته رياحا وخدامه نارا ملتهبة 5 المؤسس الارض على قواعدها فلا تتزعزع الى الدهر والابد. 6 كسوتها الغمر كثوب.فوق الجبال تقف المياه. 7 من انتهارك تهرب من صوت رعدك تفر. 8 تصعد الى الجبال.تنزل الى البقاع الى الموضع الذي اسسته لها. 9 وضعت لها تخما لا تتعداه.لا ترجع لتغطي الارض 10 المفجر عيونا في الاودية.بين الجبال تجري. 11 تسقي كل حيوان البر.تكسر الفراء ظماها. 12 فوقها طيور السماء تسكن.من بين الاغصان تسمع صوتا. 13 الساقي الجبال من علاليه.من ثمر اعمالك تشبع الارض. 14 المنبت عشبا للبهائم وخضرة لخدمة الانسان لاخراج خبز من الارض 15 وخمر تفرح قلب الانسان لالماع وجهه اكثر من الزيت وخبز يسند قلب الانسان. 16 تشبع اشجار الرب ارز لبنان الذي نصبه. 17 حيث تعشش هناك العصافير اما اللقلق فالسرو بيته. 18 الجبال العالية للوعول الصخور ملجا للوبار 19 صنع القمر للمواقيت الشمس تعرف مغربها. 20 تجعل ظلمة فيصير ليل.فيه يدب كل حيوان الوعر. 21 الاشبال تزمجر لتخطف ولتلتمس من الله طعامها. 22 تشرق الشمس فتجتمع وفي ماويها تربض. 23 الانسان يخرج الى عمله والى شغله الى المساء‏ 24 ما اعظم اعمالك يا رب.كلها بحكمة صنعت.ملانة الارض من غناك. 25 هذا البحر الكبير الواسع الاطراف.هناك دبابات بلا عدد.صغار حيوان مع كبار. 26 هناك تجري السفن.لوياثان هذا خلقته ليلعب فيه. 27 كلها اياك تترجى لترزقها قوتها في حينه. 28 تعطيها فتلتقط.تفتح يدك فتشبع خيرا. 29 تحجب وجهك فترتاع.تنزع ارواحها فتموت والى ترابها تعود. 30 ترسل روحك فتخلق.وتجدد وجه الارض 31 يكون مجد الرب الى الدهر.يفرح الرب باعماله. 32 الناظر الى الارض فترتعد.يمس الجبال فتدخن. 33 اغني للرب في حياتي.ارنم لالهي ما دمت موجودا. 34 فيلذ له نشيدي وانا افرح بالرب. 35 لتبد الخطاة من الارض والاشرار لا يكونوا بعد.باركي يا نفسي الرب.هللويا`;
          localStorage.setItem(
            `words`,
            `1 باركي يا نفسي الرب.يا رب الهي قد عظمت جدا مجدا وجلالا لبست. 2 اللابس النور كثوب الباسط السموات كشقة. 3 المسقف علاليه بالمياه الجاعل السحاب مركبته الماشي على اجنحة الريح 4 الصانع ملائكته رياحا وخدامه نارا ملتهبة 5 المؤسس الارض على قواعدها فلا تتزعزع الى الدهر والابد. 6 كسوتها الغمر كثوب.فوق الجبال تقف المياه. 7 من انتهارك تهرب من صوت رعدك تفر. 8 تصعد الى الجبال.تنزل الى البقاع الى الموضع الذي اسسته لها. 9 وضعت لها تخما لا تتعداه.لا ترجع لتغطي الارض 10 المفجر عيونا في الاودية.بين الجبال تجري. 11 تسقي كل حيوان البر.تكسر الفراء ظماها. 12 فوقها طيور السماء تسكن.من بين الاغصان تسمع صوتا. 13 الساقي الجبال من علاليه.من ثمر اعمالك تشبع الارض. 14 المنبت عشبا للبهائم وخضرة لخدمة الانسان لاخراج خبز من الارض 15 وخمر تفرح قلب الانسان لالماع وجهه اكثر من الزيت وخبز يسند قلب الانسان. 16 تشبع اشجار الرب ارز لبنان الذي نصبه. 17 حيث تعشش هناك العصافير اما اللقلق فالسرو بيته. 18 الجبال العالية للوعول الصخور ملجا للوبار 19 صنع القمر للمواقيت الشمس تعرف مغربها. 20 تجعل ظلمة فيصير ليل.فيه يدب كل حيوان الوعر. 21 الاشبال تزمجر لتخطف ولتلتمس من الله طعامها. 22 تشرق الشمس فتجتمع وفي ماويها تربض. 23 الانسان يخرج الى عمله والى شغله الى المساء‏ 24 ما اعظم اعمالك يا رب.كلها بحكمة صنعت.ملانة الارض من غناك. 25 هذا البحر الكبير الواسع الاطراف.هناك دبابات بلا عدد.صغار حيوان مع كبار. 26 هناك تجري السفن.لوياثان هذا خلقته ليلعب فيه. 27 كلها اياك تترجى لترزقها قوتها في حينه. 28 تعطيها فتلتقط.تفتح يدك فتشبع خيرا. 29 تحجب وجهك فترتاع.تنزع ارواحها فتموت والى ترابها تعود. 30 ترسل روحك فتخلق.وتجدد وجه الارض 31 يكون مجد الرب الى الدهر.يفرح الرب باعماله. 32 الناظر الى الارض فترتعد.يمس الجبال فتدخن. 33 اغني للرب في حياتي.ارنم لالهي ما دمت موجودا. 34 فيلذ له نشيدي وانا افرح بالرب. 35 لتبد الخطاة من الارض والاشرار لا يكونوا بعد.باركي يا نفسي الرب.هللويا`
          );
          location.reload();
        }
        function op105() {
          document.getElementById(`show-ld`).innerText = `105`;
          localStorage.setItem(`count`, `105`);
          document.getElementById(`one`).innerText =
            `1 احمدوا الرب ادعوا باسمه.عرفوا بين الامم باعماله. 2 غنوا له رنموا له.انشدوا بكل عجائبه. 3 افتخروا باسمه القدوس.لتفرح قلوب الذين يلتمسون الرب 4 اطلبوا الرب وقدرته.التمسوا وجهه دائما. 5 اذكروا عجائبه التي صنع.اياته واحكام فيه 6 يا ذرية ابراهيم عبده يا بني يعقوب مختاريه. 7 هو الرب الهنا في كل الارض احكامه. 8 ذكر الى الدهر عهده كلاما اوصى به الى الف دور 9 الذي عاهد به ابراهيم وقسمه لاسحق 10 فثبته ليعقوب فريضة ولاسرائيل عهدا ابديا 11 قائلا لك اعطي ارض كنعان حبل ميراثكم. 12 اذ كانوا عددا يحصى قليلين وغرباء فيها. 13 ذهبوا من امة الى امة من مملكة الى شعب اخر. 14 فلم يدع انسانا يظلمهم.بل وبخ ملوكا من اجلهم. 15 قائلا لا تمسوا مسحائي ولا تسيئوا الى انبيائي. 16 دعا بالجوع على الارض كسر قوام الخبز كله. 17 ارسل امامهم رجلا.بيع يوسف عبدا. 18 اذوا بالقيد رجليه.في الحديد دخلت نفسه 19 الى وقت مجيء كلمته.قول الرب امتحنه. 20 ارسل الملك فحله.ارسل سلطان الشعب فاطلقه. 21 اقامه سيدا على بيته ومسلطا على كل ملكه 22 لياسر رؤساءه حسب ارادته ويعلم مشايخه حكمة. 23 فجاء اسرائيل الى مصر ويعقوب تغرب في ارض حام 24 جعل شعبه مثمرا جدا واعزه على اعدائه 25 حول قلوبهم ليبغضوا شعبه ليحتالوا على عبيده. 26 ارسل موسى عبده وهرون الذي اختاره. 27 اقاما بينهم كلام اياته وعجائب في ارض حام. 28 ارسل ظلمة فاظلمت ولم يعصوا كلامه. 29 حول مياههم الى دم وقتل اسماكهم. 30 افاضت ارضهم ضفادع.حتى في مخادع ملوكهم. 31 امر فجاء الذبان والبعوض في كل تخومهم. 32 جعل امطارهم بردا ونارا ملتهبة في ارضهم. 33 ضرب كرومهم وتينهم وكسر كل اشجار تخومهم. 34 امر فجاء الجراد وغوغاء بلا عدد 35 فاكل كل عشب في بلادهم.واكل اثمار ارضهم. 36 قتل كل بكر في ارضهم.اوائل كل قوتهم. 37 فاخرجهم بفضة وذهب ولم يكن في اسباطهم عاثر. 38 فرحت مصر بخروجهم لان رعبهم سقط عليهم 39 بسط سحابا سجفا ونارا لتضيء الليل. 40 سالوا فاتاهم بالسلوى وخبز السماء اشبعهم. 41 شق الصخرة فانفجرت المياه.جرت في اليابسة نهرا. 42 لانه ذكر كلمة قدسه مع ابراهيم عبده 43 فاخرج شعبه بابتهاج ومختاريه بترنم. 44 واعطاهم اراضي الامم.وتعب الشعوب ورثوه. 45 لكي يحفظوا فرائضه ويطيعوا شرائعه.هللويا`;
          localStorage.setItem(
            `words`,
            `1 احمدوا الرب ادعوا باسمه.عرفوا بين الامم باعماله. 2 غنوا له رنموا له.انشدوا بكل عجائبه. 3 افتخروا باسمه القدوس.لتفرح قلوب الذين يلتمسون الرب 4 اطلبوا الرب وقدرته.التمسوا وجهه دائما. 5 اذكروا عجائبه التي صنع.اياته واحكام فيه 6 يا ذرية ابراهيم عبده يا بني يعقوب مختاريه. 7 هو الرب الهنا في كل الارض احكامه. 8 ذكر الى الدهر عهده كلاما اوصى به الى الف دور 9 الذي عاهد به ابراهيم وقسمه لاسحق 10 فثبته ليعقوب فريضة ولاسرائيل عهدا ابديا 11 قائلا لك اعطي ارض كنعان حبل ميراثكم. 12 اذ كانوا عددا يحصى قليلين وغرباء فيها. 13 ذهبوا من امة الى امة من مملكة الى شعب اخر. 14 فلم يدع انسانا يظلمهم.بل وبخ ملوكا من اجلهم. 15 قائلا لا تمسوا مسحائي ولا تسيئوا الى انبيائي. 16 دعا بالجوع على الارض كسر قوام الخبز كله. 17 ارسل امامهم رجلا.بيع يوسف عبدا. 18 اذوا بالقيد رجليه.في الحديد دخلت نفسه 19 الى وقت مجيء كلمته.قول الرب امتحنه. 20 ارسل الملك فحله.ارسل سلطان الشعب فاطلقه. 21 اقامه سيدا على بيته ومسلطا على كل ملكه 22 لياسر رؤساءه حسب ارادته ويعلم مشايخه حكمة. 23 فجاء اسرائيل الى مصر ويعقوب تغرب في ارض حام 24 جعل شعبه مثمرا جدا واعزه على اعدائه 25 حول قلوبهم ليبغضوا شعبه ليحتالوا على عبيده. 26 ارسل موسى عبده وهرون الذي اختاره. 27 اقاما بينهم كلام اياته وعجائب في ارض حام. 28 ارسل ظلمة فاظلمت ولم يعصوا كلامه. 29 حول مياههم الى دم وقتل اسماكهم. 30 افاضت ارضهم ضفادع.حتى في مخادع ملوكهم. 31 امر فجاء الذبان والبعوض في كل تخومهم. 32 جعل امطارهم بردا ونارا ملتهبة في ارضهم. 33 ضرب كرومهم وتينهم وكسر كل اشجار تخومهم. 34 امر فجاء الجراد وغوغاء بلا عدد 35 فاكل كل عشب في بلادهم.واكل اثمار ارضهم. 36 قتل كل بكر في ارضهم.اوائل كل قوتهم. 37 فاخرجهم بفضة وذهب ولم يكن في اسباطهم عاثر. 38 فرحت مصر بخروجهم لان رعبهم سقط عليهم 39 بسط سحابا سجفا ونارا لتضيء الليل. 40 سالوا فاتاهم بالسلوى وخبز السماء اشبعهم. 41 شق الصخرة فانفجرت المياه.جرت في اليابسة نهرا. 42 لانه ذكر كلمة قدسه مع ابراهيم عبده 43 فاخرج شعبه بابتهاج ومختاريه بترنم. 44 واعطاهم اراضي الامم.وتعب الشعوب ورثوه. 45 لكي يحفظوا فرائضه ويطيعوا شرائعه.هللويا`
          );
          location.reload();
        }
        function op106() {
          document.getElementById(`show-ld`).innerText = `106`;
          localStorage.setItem(`count`, `106`);
          document.getElementById(`one`).innerText =
            `1 هللويا.احمدوا الرب لانه صالح لان الى الابد رحمته. 2 من يتكلم بجبروت الرب من يخبر بكل تسابيحه. 3 طوبى للحافظين الحق وللصانع البر في كل حين. 4 اذكرني يا رب برضا شعبك.تعهدني بخلاصك. 5 لارى خير مختاريك.لافرح بفرح امتك.لافتخر مع ميراثك 6 اخطانا مع ابائنا اسانا واذنبنا. 7 اباؤنا في مصر لم يفهموا عجائبك لم يذكروا كثرة مراحمك فتمردوا عند البحر عند بحر سوف. 8 فخلصهم من اجل اسمه ليعرف بجبروته 9 وانتهر بحر سوف فيبس وسيرهم في اللجج كالبرية. 10 وخلصهم من يد المبغض وفداهم من يد العدو. 11 وغطت المياه مضايقيهم واحد منهم لم يبق 12 فامنوا بكلامه.غنوا بتسبيحه. 13 اسرعوا فنسوا اعماله.لم ينتظروا مشورته. 14 بل اشتهوا شهوة في البرية وجربوا الله في القفر. 15 فاعطاهم سؤلهم وارسل هزالا في انفسهم. 16 وحسدوا موسى في المحلة وهرون قدوس الرب. 17 فتحت الارض وابتلعت داثان وطبقت على جماعة ابيرام. 18 واشتعلت نار في جماعتهم.اللهيب احرق الاشرار 19 صنعوا عجلا في حوريب وسجدوا لتمثال مسبوك. 20 وابدلوا مجدهم بمثال ثور اكل عشب. 21 نسوا الله مخلصهم الصانع عظائم في مصر 22 وعجائب في ارض حام ومخاوف على بحر سوف. 23 فقال باهلاكهم لولا موسى مختاره وقف في الثغر قدامه ليصرف غضبه عن اتلافهم. 24 ورذلوا الارض الشهية.لم يؤمنوا بكلمته. 25 بل تمرمروا في خيامهم.لم يسمعوا لصوت الرب. 26 فرفع يده عليهم ليسقطهم في البرية 27 وليسقط نسلهم بين الامم وليبددهم في الاراضي. 28 وتعلقوا ببعل فغور واكلوا ذبائح الموتى. 29 واغاظوه باعمالهم فاقتحمهم الوبا. 30 فوقف فينحاس ودان فامتنع الوبا. 31 فحسب له ذلك برا الى دور فدور الى الابد 32 واسخطوه على ماء مريبة حتى تاذى موسى بسببهم. 33 لانهم امروا روحه حتى فرط بشفتيه. 34 لم يستاصلوا الامم الذين قال لهم الرب عنهم 35 بل اختلطوا بالامم وتعلموا اعمالهم 36 وعبدوا اصنامهم فصارت لهم شركا. 37 وذبحوا بنيهم وبناتهم للاوثان 38 واهرقوا دما زكيا دم بنيهم وبناتهم الذين ذبحوهم لاصنام كنعان وتدنست الارض بالدماء 39 وتنجسوا باعمالهم وزنوا بافعالهم. 40 فحمي غضب الرب على شعبه وكره ميراثه. 41 واسلمهم ليد الامم وتسلط عليهم مبغضوهم. 42 وضغطهم اعداؤهم فذلوا تحت يدهم 43 مرات كثيرة انقذهم.اما هم فعصوه بمشورتهم وانحطوا باثمهم 44 فنظر الى ضيقهم اذ سمع صراخهم‏ 45 وذكر لهم عهده وندم حسب كثرة رحمته. 46 واعطاهم نعمة قدام كل الذين سبوهم. 47 خلصنا ايها الرب الهنا واجمعنا من بين الامم لنحمد اسم قدسك ونتفاخر بتسبيحك. 48 مبارك الرب اله اسرائيل من الازل والى الابد.ويقول كل الشعب امين.هللويا`;
          localStorage.setItem(
            `words`,
            `1 هللويا.احمدوا الرب لانه صالح لان الى الابد رحمته. 2 من يتكلم بجبروت الرب من يخبر بكل تسابيحه. 3 طوبى للحافظين الحق وللصانع البر في كل حين. 4 اذكرني يا رب برضا شعبك.تعهدني بخلاصك. 5 لارى خير مختاريك.لافرح بفرح امتك.لافتخر مع ميراثك 6 اخطانا مع ابائنا اسانا واذنبنا. 7 اباؤنا في مصر لم يفهموا عجائبك لم يذكروا كثرة مراحمك فتمردوا عند البحر عند بحر سوف. 8 فخلصهم من اجل اسمه ليعرف بجبروته 9 وانتهر بحر سوف فيبس وسيرهم في اللجج كالبرية. 10 وخلصهم من يد المبغض وفداهم من يد العدو. 11 وغطت المياه مضايقيهم واحد منهم لم يبق 12 فامنوا بكلامه.غنوا بتسبيحه. 13 اسرعوا فنسوا اعماله.لم ينتظروا مشورته. 14 بل اشتهوا شهوة في البرية وجربوا الله في القفر. 15 فاعطاهم سؤلهم وارسل هزالا في انفسهم. 16 وحسدوا موسى في المحلة وهرون قدوس الرب. 17 فتحت الارض وابتلعت داثان وطبقت على جماعة ابيرام. 18 واشتعلت نار في جماعتهم.اللهيب احرق الاشرار 19 صنعوا عجلا في حوريب وسجدوا لتمثال مسبوك. 20 وابدلوا مجدهم بمثال ثور اكل عشب. 21 نسوا الله مخلصهم الصانع عظائم في مصر 22 وعجائب في ارض حام ومخاوف على بحر سوف. 23 فقال باهلاكهم لولا موسى مختاره وقف في الثغر قدامه ليصرف غضبه عن اتلافهم. 24 ورذلوا الارض الشهية.لم يؤمنوا بكلمته. 25 بل تمرمروا في خيامهم.لم يسمعوا لصوت الرب. 26 فرفع يده عليهم ليسقطهم في البرية 27 وليسقط نسلهم بين الامم وليبددهم في الاراضي. 28 وتعلقوا ببعل فغور واكلوا ذبائح الموتى. 29 واغاظوه باعمالهم فاقتحمهم الوبا. 30 فوقف فينحاس ودان فامتنع الوبا. 31 فحسب له ذلك برا الى دور فدور الى الابد 32 واسخطوه على ماء مريبة حتى تاذى موسى بسببهم. 33 لانهم امروا روحه حتى فرط بشفتيه. 34 لم يستاصلوا الامم الذين قال لهم الرب عنهم 35 بل اختلطوا بالامم وتعلموا اعمالهم 36 وعبدوا اصنامهم فصارت لهم شركا. 37 وذبحوا بنيهم وبناتهم للاوثان 38 واهرقوا دما زكيا دم بنيهم وبناتهم الذين ذبحوهم لاصنام كنعان وتدنست الارض بالدماء 39 وتنجسوا باعمالهم وزنوا بافعالهم. 40 فحمي غضب الرب على شعبه وكره ميراثه. 41 واسلمهم ليد الامم وتسلط عليهم مبغضوهم. 42 وضغطهم اعداؤهم فذلوا تحت يدهم 43 مرات كثيرة انقذهم.اما هم فعصوه بمشورتهم وانحطوا باثمهم 44 فنظر الى ضيقهم اذ سمع صراخهم‏ 45 وذكر لهم عهده وندم حسب كثرة رحمته. 46 واعطاهم نعمة قدام كل الذين سبوهم. 47 خلصنا ايها الرب الهنا واجمعنا من بين الامم لنحمد اسم قدسك ونتفاخر بتسبيحك. 48 مبارك الرب اله اسرائيل من الازل والى الابد.ويقول كل الشعب امين.هللويا`
          );
          location.reload();
        }
        function op107() {
          document.getElementById(`show-ld`).innerText = `107`;
          localStorage.setItem(`count`, `107`);
          document.getElementById(`one`).innerText =
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل مفديو الرب الذين فداهم من يد العدو 3 ومن البلدان جمعهم من المشرق ومن المغرب من الشمال ومن البحر. 4 تاهوا في البرية في قفر بلا طريق.لم يجدوا مدينة سكن. 5 جياع عطاش ايضا اعيت انفسهم فيهم‏. 6 فصرخوا الى الرب في ضيقهم فانقذهم من شدائدهم. 7 وهداهم طريقا مستقيما ليذهبوا الى مدينة سكن. 8 فليحمدوا الرب على رحمته وعجائبه لبني ادم 9 لانه اشبع نفسا مشتهية وملا نفسا جائعة خبزا 10 الجلوس في الظلمة وظلال الموت موثقين بالذل والحديد. 11 لانهم عصوا كلام الله واهانوا مشورة العلي 12 فاذل قلوبهم بتعب.عثروا ولا معين. 13 ثم صرخوا الى الرب في ضيقهم فخلصهم من شدائدهم. 14 اخرجهم من الظلمة وظلال الموت وقطع قيودهم. 15 فليحمدوا الرب على رحمته وعجائبه لبني ادم. 16 لانه كسر مصاريع نحاس وقطع عوارض حديد 17 والجهال من طريق معصيتهم ومن اثامهم يذلون. 18 كرهت انفسهم كل طعام واقتربوا الى ابواب الموت. 19 فصرخوا الى الرب في ضيقهم فخلصهم من شدائدهم. 20 ارسل كلمته فشفاهم ونجاهم من تهلكاتهم. 21 فليحمدوا الرب على رحمته وعجائبه لبني ادم 22 وليذبحوا له ذبائح الحمد وليعدوا اعماله بترنم 23 النازلون الى البحر في السفن العاملون عملا في المياه الكثيرة 24 هم راوا اعمال الرب وعجائبه في العمق. 25 امر فاهاج ريحا عاصفة فرفعت امواجه. 26 يصعدون الى السموات يهبطون الى الاعماق.ذابت انفسهم بالشقاء. 27 يتمايلون ويترنحون مثل السكران وكل حكمتهم ابتلعت. 28 فيصرخون الى الرب في ضيقهم ومن شدائدهم يخلصهم. 29 يهدئ العاصفة فتسكن وتسكت امواجها. 30 فيفرحون لانهم هداوا فيهديهم الى المرفا الذي يريدونه. 31 فليحمدوا الرب على رحمته وعجائبه لبني ادم. 32 وليرفعوه في مجمع الشعب وليسبحوه في مجلس المشايخ 33 يجعل الانهار قفارا ومجاري المياه معطشة 34 والارض المثمرة سبخة من شر الساكنين فيها. 35 يجعل القفر غدير مياه وارضا يبسا ينابيع مياه. 36 ويسكن هناك الجياع فيهيئون مدينة سكن. 37 ويزرعون حقولا ويغرسون كروما فتصنع ثمر غلة. 38 ويباركهم فيكثرون جدا ولا يقلل بهائمهم. 39 ثم يقلون وينحنون من ضغط الشر والحزن. 40 يسكب هوانا على رؤساء ويضلهم في تيه بلا طريق. 41 ويعلي المسكين من الذل ويجعل القبائل مثل قطعان الغنم. 42 يرى ذلك المستقيمون فيفرحون وكل اثم يسد فاه. 43 من كان حكيما يحفظ هذا ويتعقل مراحم الرب`;
          localStorage.setItem(
            `words`,
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل مفديو الرب الذين فداهم من يد العدو 3 ومن البلدان جمعهم من المشرق ومن المغرب من الشمال ومن البحر. 4 تاهوا في البرية في قفر بلا طريق.لم يجدوا مدينة سكن. 5 جياع عطاش ايضا اعيت انفسهم فيهم‏. 6 فصرخوا الى الرب في ضيقهم فانقذهم من شدائدهم. 7 وهداهم طريقا مستقيما ليذهبوا الى مدينة سكن. 8 فليحمدوا الرب على رحمته وعجائبه لبني ادم 9 لانه اشبع نفسا مشتهية وملا نفسا جائعة خبزا 10 الجلوس في الظلمة وظلال الموت موثقين بالذل والحديد. 11 لانهم عصوا كلام الله واهانوا مشورة العلي 12 فاذل قلوبهم بتعب.عثروا ولا معين. 13 ثم صرخوا الى الرب في ضيقهم فخلصهم من شدائدهم. 14 اخرجهم من الظلمة وظلال الموت وقطع قيودهم. 15 فليحمدوا الرب على رحمته وعجائبه لبني ادم. 16 لانه كسر مصاريع نحاس وقطع عوارض حديد 17 والجهال من طريق معصيتهم ومن اثامهم يذلون. 18 كرهت انفسهم كل طعام واقتربوا الى ابواب الموت. 19 فصرخوا الى الرب في ضيقهم فخلصهم من شدائدهم. 20 ارسل كلمته فشفاهم ونجاهم من تهلكاتهم. 21 فليحمدوا الرب على رحمته وعجائبه لبني ادم 22 وليذبحوا له ذبائح الحمد وليعدوا اعماله بترنم 23 النازلون الى البحر في السفن العاملون عملا في المياه الكثيرة 24 هم راوا اعمال الرب وعجائبه في العمق. 25 امر فاهاج ريحا عاصفة فرفعت امواجه. 26 يصعدون الى السموات يهبطون الى الاعماق.ذابت انفسهم بالشقاء. 27 يتمايلون ويترنحون مثل السكران وكل حكمتهم ابتلعت. 28 فيصرخون الى الرب في ضيقهم ومن شدائدهم يخلصهم. 29 يهدئ العاصفة فتسكن وتسكت امواجها. 30 فيفرحون لانهم هداوا فيهديهم الى المرفا الذي يريدونه. 31 فليحمدوا الرب على رحمته وعجائبه لبني ادم. 32 وليرفعوه في مجمع الشعب وليسبحوه في مجلس المشايخ 33 يجعل الانهار قفارا ومجاري المياه معطشة 34 والارض المثمرة سبخة من شر الساكنين فيها. 35 يجعل القفر غدير مياه وارضا يبسا ينابيع مياه. 36 ويسكن هناك الجياع فيهيئون مدينة سكن. 37 ويزرعون حقولا ويغرسون كروما فتصنع ثمر غلة. 38 ويباركهم فيكثرون جدا ولا يقلل بهائمهم. 39 ثم يقلون وينحنون من ضغط الشر والحزن. 40 يسكب هوانا على رؤساء ويضلهم في تيه بلا طريق. 41 ويعلي المسكين من الذل ويجعل القبائل مثل قطعان الغنم. 42 يرى ذلك المستقيمون فيفرحون وكل اثم يسد فاه. 43 من كان حكيما يحفظ هذا ويتعقل مراحم الرب`
          );
          location.reload();
        }
        function op108() {
          document.getElementById(`show-ld`).innerText = `108`;
          localStorage.setItem(`count`, `108`);
          document.getElementById(`one`).innerText =
            `1 تسبيحة.مزمور لداود.ثابت قلبي يا الله اغني وارنم.كذلك مجدي‏. 2 استيقظي ايتها الرباب والعود انا استيقظ سحرا. 3 احمدك بين الشعوب يا رب وارنم لك بين الامم. 4 لان رحمتك قد عظمت فوق السموات والى الغمام حقك. 5 ارتفع اللهم على السموات وليرتفع على كل الارض مجدك. 6 لكي ينجو احباؤك.خلص بيمينك واستجب لي 7 الله قد تكلم بقدسه.ابتهج اقسم شكيم واقيس وادي سكوت. 8 لي جلعاد لي منسى.افرايم خوذة راسي.يهوذا صولجاني. 9 مواب مرحضتي.على ادوم اطرح نعلي.يا فلسطين اهتفي علي 10 من يقودني الى المدينة المحصنة.من يهديني الى ادوم. 11 اليس انت يا الله الذي رفضتنا ولا تخرج يا الله مع جيوشنا. 12 اعطنا عونا في الضيق فباطل هو خلاص الانسان. 13 بالله نصنع بباس وهو يدوس اعداءنا`;
          localStorage.setItem(
            `words`,
            `1 تسبيحة.مزمور لداود.ثابت قلبي يا الله اغني وارنم.كذلك مجدي‏. 2 استيقظي ايتها الرباب والعود انا استيقظ سحرا. 3 احمدك بين الشعوب يا رب وارنم لك بين الامم. 4 لان رحمتك قد عظمت فوق السموات والى الغمام حقك. 5 ارتفع اللهم على السموات وليرتفع على كل الارض مجدك. 6 لكي ينجو احباؤك.خلص بيمينك واستجب لي 7 الله قد تكلم بقدسه.ابتهج اقسم شكيم واقيس وادي سكوت. 8 لي جلعاد لي منسى.افرايم خوذة راسي.يهوذا صولجاني. 9 مواب مرحضتي.على ادوم اطرح نعلي.يا فلسطين اهتفي علي 10 من يقودني الى المدينة المحصنة.من يهديني الى ادوم. 11 اليس انت يا الله الذي رفضتنا ولا تخرج يا الله مع جيوشنا. 12 اعطنا عونا في الضيق فباطل هو خلاص الانسان. 13 بالله نصنع بباس وهو يدوس اعداءنا`
          );
          location.reload();
        }
        function op109() {
          document.getElementById(`show-ld`).innerText = `109`;
          localStorage.setItem(`count`, `109`);
          document.getElementById(`one`).innerText =
            `1 لامام المغنين.لداود.مزمور.يا اله تسبيحي لا تسكت. 2 لانه قد انفتح علي فم الشرير وفم الغش.تكلموا معي بلسان كذب. 3 بكلام بغض احاطوا بي وقاتلوني بلا سبب. 4 بدل محبتي يخاصمونني.اما انا فصلاة. 5 وضعوا علي شرا بدل خير وبغضا بدل حبي 6 فاقم انت عليه شريرا وليقف شيطان عن يمينه‏. 7 اذا حوكم فليخرج مذنبا وصلاته فلتكن خطية. 8 لتكن ايامه قليلة ووظيفته لياخذها اخر. 9 ليكن بنوه ايتاما وامراته ارملة. 10 ليته بنوه تيهانا ويستعطوا.ويلتمسوا خبزا من خربهم. 11 ليصطد المرابي كل ما له ولينهب الغرباء تعبه. 12 لا يكن له باسط رحمة ولا يكن متراف على يتاماه. 13 لتنقرض ذريته.في الجيل القادم ليمح اسمهم. 14 ليذكر اثم ابائه لدى الرب ولا تمح خطية امه. 15 لتكن امام الرب دائما وليقرض من الارض ذكرهم. 16 من اجل انه لم يذكر ان يصنع رحمة بل طرد انسانا مسكينا وفقيرا‏ والمنسحق القلب ليميته. 17 واحب اللعنة فاتته ولم يسر بالبركة فتباعدت عنه. 18 ولبس اللعنة مثل ثوبه فدخلت كمياه في حشاه وكزيت في عظامه. 19 لتكن له كثوب يتعطف به وكمنطقة يتنطق بها دائما. 20 هذه اجرة مبغضي من عند الرب واجرة المتكلمين شرا على نفسي 21 اما انت يا رب السيد فاصنع معي من اجل اسمك.لان رحمتك طيبة نجني. 22 فاني فقير ومسكين انا وقلبي مجروح في داخلي. 23 كظل عند ميله ذهبت.انتفضت كجرادة. 24 ركبتاي ارتعشتا من الصوم ولحمي هزل عن سمن. 25 وانا صرت عارا عندهم.ينظرون الي وينغضون رؤوسهم 26 اعني يا رب الهي.خلصني حسب رحمتك. 27 وليعلموا ان هذه هي يدك.انت يا رب فعلت هذا. 28 اما هم فيلعنون.واما انت فتبارك.قاموا وخزوا.اما عبدك فيفرح. 29 ليلبس خصمائي خجلا وليتعطفوا بخزيهم كالرداء. 30 احمد الرب جدا بفمي وفي وسط كثيرين اسبحه. 31 لانه يقوم عن يمين المسكين ليخلصه من القاضين على نفسه`;
          localStorage.setItem(
            `words`,
            `1 لامام المغنين.لداود.مزمور.يا اله تسبيحي لا تسكت. 2 لانه قد انفتح علي فم الشرير وفم الغش.تكلموا معي بلسان كذب. 3 بكلام بغض احاطوا بي وقاتلوني بلا سبب. 4 بدل محبتي يخاصمونني.اما انا فصلاة. 5 وضعوا علي شرا بدل خير وبغضا بدل حبي 6 فاقم انت عليه شريرا وليقف شيطان عن يمينه‏. 7 اذا حوكم فليخرج مذنبا وصلاته فلتكن خطية. 8 لتكن ايامه قليلة ووظيفته لياخذها اخر. 9 ليكن بنوه ايتاما وامراته ارملة. 10 ليته بنوه تيهانا ويستعطوا.ويلتمسوا خبزا من خربهم. 11 ليصطد المرابي كل ما له ولينهب الغرباء تعبه. 12 لا يكن له باسط رحمة ولا يكن متراف على يتاماه. 13 لتنقرض ذريته.في الجيل القادم ليمح اسمهم. 14 ليذكر اثم ابائه لدى الرب ولا تمح خطية امه. 15 لتكن امام الرب دائما وليقرض من الارض ذكرهم. 16 من اجل انه لم يذكر ان يصنع رحمة بل طرد انسانا مسكينا وفقيرا‏ والمنسحق القلب ليميته. 17 واحب اللعنة فاتته ولم يسر بالبركة فتباعدت عنه. 18 ولبس اللعنة مثل ثوبه فدخلت كمياه في حشاه وكزيت في عظامه. 19 لتكن له كثوب يتعطف به وكمنطقة يتنطق بها دائما. 20 هذه اجرة مبغضي من عند الرب واجرة المتكلمين شرا على نفسي 21 اما انت يا رب السيد فاصنع معي من اجل اسمك.لان رحمتك طيبة نجني. 22 فاني فقير ومسكين انا وقلبي مجروح في داخلي. 23 كظل عند ميله ذهبت.انتفضت كجرادة. 24 ركبتاي ارتعشتا من الصوم ولحمي هزل عن سمن. 25 وانا صرت عارا عندهم.ينظرون الي وينغضون رؤوسهم 26 اعني يا رب الهي.خلصني حسب رحمتك. 27 وليعلموا ان هذه هي يدك.انت يا رب فعلت هذا. 28 اما هم فيلعنون.واما انت فتبارك.قاموا وخزوا.اما عبدك فيفرح. 29 ليلبس خصمائي خجلا وليتعطفوا بخزيهم كالرداء. 30 احمد الرب جدا بفمي وفي وسط كثيرين اسبحه. 31 لانه يقوم عن يمين المسكين ليخلصه من القاضين على نفسه`
          );
          location.reload();
        }
        function op110() {
          document.getElementById(`show-ld`).innerText = `110`;
          localStorage.setItem(`count`, `110`);
          document.getElementById(`one`).innerText =
            `1 لداود.مزمور.قال الرب لربي اجلس عن يميني حتى اضع اعداءك موطئا لقدميك. 2 يرسل الرب قضيب عزك من صهيون.تسلط في وسط اعدائك. 3 شعبك منتدب في يوم قوتك في زينة مقدسة من رحم الفجر لك طل حداثتك 4 اقسم الرب ولن يندم.انت كاهن الى الابد على رتبة ملكي صادق. 5 الرب عن يمينك يحطم في يوم رجزه ملوكا. 6 يدين بين الامم.ملا جثثا ارضا واسعة سحق رؤوسها. 7 من النهر يشرب في الطريق لذلك يرفع الراس`;
          localStorage.setItem(
            `words`,
            `1 لداود.مزمور.قال الرب لربي اجلس عن يميني حتى اضع اعداءك موطئا لقدميك. 2 يرسل الرب قضيب عزك من صهيون.تسلط في وسط اعدائك. 3 شعبك منتدب في يوم قوتك في زينة مقدسة من رحم الفجر لك طل حداثتك 4 اقسم الرب ولن يندم.انت كاهن الى الابد على رتبة ملكي صادق. 5 الرب عن يمينك يحطم في يوم رجزه ملوكا. 6 يدين بين الامم.ملا جثثا ارضا واسعة سحق رؤوسها. 7 من النهر يشرب في الطريق لذلك يرفع الراس`
          );
          location.reload();
        }
        function op111() {
          document.getElementById(`show-ld`).innerText = `111`;
          localStorage.setItem(`count`, `111`);
          document.getElementById(`one`).innerText =
            `1 هللويا.احمد الرب بكل قلبي في مجلس المستقيمين وجماعتهم. 2 عظيمة هي اعمال الرب مطلوبة لكل المسرورين بها. 3 جلال وبهاء عمله وعدله قائم الى الابد. 4 صنع ذكرا لعجائبه.حنان ورحيم هو الرب‏. 5 اعطى خائفيه طعاما.يذكر الى الابد عهده. 6 اخبر شعبه بقوة اعماله ليعطيهم ميراث الامم. 7 اعمال يديه امانة وحق.كل وصاياه امينة 8 ثابتة مدى الدهر والابد مصنوعة بالحق والاستقامة. 9 ارسل فداء لشعبه.اقام الى الابد عهده.قدوس ومهوب اسمه. 10 راس الحكمة مخافة الرب.فطنة جيدة لكل عامليها.تسبيحه قائم الى الابد`;
          localStorage.setItem(
            `words`,
            `1 هللويا.احمد الرب بكل قلبي في مجلس المستقيمين وجماعتهم. 2 عظيمة هي اعمال الرب مطلوبة لكل المسرورين بها. 3 جلال وبهاء عمله وعدله قائم الى الابد. 4 صنع ذكرا لعجائبه.حنان ورحيم هو الرب‏. 5 اعطى خائفيه طعاما.يذكر الى الابد عهده. 6 اخبر شعبه بقوة اعماله ليعطيهم ميراث الامم. 7 اعمال يديه امانة وحق.كل وصاياه امينة 8 ثابتة مدى الدهر والابد مصنوعة بالحق والاستقامة. 9 ارسل فداء لشعبه.اقام الى الابد عهده.قدوس ومهوب اسمه. 10 راس الحكمة مخافة الرب.فطنة جيدة لكل عامليها.تسبيحه قائم الى الابد`
          );
          location.reload();
        }
        function op112() {
          document.getElementById(`show-ld`).innerText = `112`;
          localStorage.setItem(`count`, `112`);
          document.getElementById(`one`).innerText =
            `1 هللويا.طوبى للرجل المتقي الرب المسرور جدا بوصاياه. 2 نسله يكون قويا في الارض.جيل المستقيمين يبارك. 3 رغد وغنى في بيته وبره قائم الى الابد‏. 4 نور اشرق في الظلمة للمستقيمين.هو حنان ورحيم وصديق 5 سعيد هو الرجل الذي يتراف ويقرض.يدبر اموره بالحق. 6 لانه لا يتزعزع الى الدهر.الصديق يكون لذكر ابدي. 7 لا يخشى من خبر سوء.قلبه ثابت متكلا على الرب. 8 قلبه ممكن فلا يخاف حتى يرى بمضايقيه. 9 فرق اعطى المساكين بره قائم الى الابد.قرنه ينتصب بالمجد. 10 الشرير يرى فيغضب.يحرق اسنانه ويذوب.شهوة الشرير تبيد`;
          localStorage.setItem(
            `words`,
            `1 هللويا.طوبى للرجل المتقي الرب المسرور جدا بوصاياه. 2 نسله يكون قويا في الارض.جيل المستقيمين يبارك. 3 رغد وغنى في بيته وبره قائم الى الابد‏. 4 نور اشرق في الظلمة للمستقيمين.هو حنان ورحيم وصديق 5 سعيد هو الرجل الذي يتراف ويقرض.يدبر اموره بالحق. 6 لانه لا يتزعزع الى الدهر.الصديق يكون لذكر ابدي. 7 لا يخشى من خبر سوء.قلبه ثابت متكلا على الرب. 8 قلبه ممكن فلا يخاف حتى يرى بمضايقيه. 9 فرق اعطى المساكين بره قائم الى الابد.قرنه ينتصب بالمجد. 10 الشرير يرى فيغضب.يحرق اسنانه ويذوب.شهوة الشرير تبيد`
          );
          location.reload();
        }
        function op113() {
          document.getElementById(`show-ld`).innerText = `113`;
          localStorage.setItem(`count`, `113`);
          document.getElementById(`one`).innerText =
            `1 هللويا.سبحوا يا عبيد الرب.سبحوا اسم الرب. 2 ليكن اسم الرب مباركا من الان والى الابد. 3 من مشرق الشمس الى مغربها اسم الرب مسبح. 4 الرب عال فوق كل الامم.فوق السموات مجده. 5 من مثل الرب الهنا الساكن في الاعالي 6 الناظر الاسافل في السموات وفي الارض 7 المقيم المسكين من التراب.الرافع البائس من المزبلة 8 ليجلسه مع اشراف مع اشراف شعبه. 9 المسكن العاقر في بيت ام اولاد فرحانة.هللويا`;
          localStorage.setItem(
            `words`,
            `1 هللويا.سبحوا يا عبيد الرب.سبحوا اسم الرب. 2 ليكن اسم الرب مباركا من الان والى الابد. 3 من مشرق الشمس الى مغربها اسم الرب مسبح. 4 الرب عال فوق كل الامم.فوق السموات مجده. 5 من مثل الرب الهنا الساكن في الاعالي 6 الناظر الاسافل في السموات وفي الارض 7 المقيم المسكين من التراب.الرافع البائس من المزبلة 8 ليجلسه مع اشراف مع اشراف شعبه. 9 المسكن العاقر في بيت ام اولاد فرحانة.هللويا`
          );
          location.reload();
        }
        function op114() {
          document.getElementById(`show-ld`).innerText = `114`;
          localStorage.setItem(`count`, `114`);
          document.getElementById(`one`).innerText =
            `1 عند خروج اسرائيل من مصر وبيت يعقوب من شعب اعجم 2 كان يهوذا مقدسه.واسرائيل محل سلطانه. 3 البحر راه فهرب.الاردن رجع الى خلف. 4 الجبال قفزت مثل الكباش والاكام مثل حملان الغنم. 5 ما لك ايها البحر قد هربت وما لك ايها الاردن قد رجعت الى خلف 6 وما لكن ايتها الجبال قد قفزتن مثل الكباش وايتها التلال مثل حملان الغنم. 7 ايتها الارض تزلزلي من قدام الرب من قدام اله يعقوب 8 المحول الصخرة الى غدران مياه الصوان الى ينابيع مياه`;
          localStorage.setItem(
            `words`,
            `1 عند خروج اسرائيل من مصر وبيت يعقوب من شعب اعجم 2 كان يهوذا مقدسه.واسرائيل محل سلطانه. 3 البحر راه فهرب.الاردن رجع الى خلف. 4 الجبال قفزت مثل الكباش والاكام مثل حملان الغنم. 5 ما لك ايها البحر قد هربت وما لك ايها الاردن قد رجعت الى خلف 6 وما لكن ايتها الجبال قد قفزتن مثل الكباش وايتها التلال مثل حملان الغنم. 7 ايتها الارض تزلزلي من قدام الرب من قدام اله يعقوب 8 المحول الصخرة الى غدران مياه الصوان الى ينابيع مياه`
          );
          location.reload();
        }
        function op115() {
          document.getElementById(`show-ld`).innerText = `115`;
          localStorage.setItem(`count`, `115`);
          document.getElementById(`one`).innerText =
            `1 ليس لنا يا رب ليس لنا لكن لاسمك اعط مجدا من اجل رحمتك من اجل امانتك. 2 لماذا يقول الامم اين هو الههم. 3 ان الهنا في السماء.كلما شاء صنع. 4 اصنامهم فضة وذهب عمل ايدي الناس. 5 لها افواه ولا تتكلم.لها اعين ولا تبصر. 6 لها اذان ولا تسمع.لها مناخر ولا تشم. 7 لها ايد ولا تلمس.لها ارجل ولا تمشي ولا تنطق بحناجرها. 8 مثلها يكون صانعوها بل كل من يتكل عليها 9 يا اسرائيل اتكل على الرب.هو معينهم ومجنهم. 10 يا بيت هرون اتكلوا على الرب.هو معينهم ومجنهم. 11 يا متقي الرب اتكلوا على الرب.هو معينهم ومجنهم. 12 الرب قد ذكرنا فيبارك.يبارك بيت اسرائيل يبارك بيت هرون. 13 يبارك متقي الرب الصغار مع الكبار. 14 ليزد الرب عليكم.عليكم وعلى ابنائكم. 15 انتم مباركون للرب الصانع السموات والارض. 16 السموات سموات للرب.اما الارض فاعطاها لبني ادم. 17 ليس الاموات يسبحون الرب ولا من ينحدر الى ارض السكوت. 18 اما نحن فنبارك الرب من الان والى الدهر.هللويا`;
          localStorage.setItem(
            `words`,
            `1 ليس لنا يا رب ليس لنا لكن لاسمك اعط مجدا من اجل رحمتك من اجل امانتك. 2 لماذا يقول الامم اين هو الههم. 3 ان الهنا في السماء.كلما شاء صنع. 4 اصنامهم فضة وذهب عمل ايدي الناس. 5 لها افواه ولا تتكلم.لها اعين ولا تبصر. 6 لها اذان ولا تسمع.لها مناخر ولا تشم. 7 لها ايد ولا تلمس.لها ارجل ولا تمشي ولا تنطق بحناجرها. 8 مثلها يكون صانعوها بل كل من يتكل عليها 9 يا اسرائيل اتكل على الرب.هو معينهم ومجنهم. 10 يا بيت هرون اتكلوا على الرب.هو معينهم ومجنهم. 11 يا متقي الرب اتكلوا على الرب.هو معينهم ومجنهم. 12 الرب قد ذكرنا فيبارك.يبارك بيت اسرائيل يبارك بيت هرون. 13 يبارك متقي الرب الصغار مع الكبار. 14 ليزد الرب عليكم.عليكم وعلى ابنائكم. 15 انتم مباركون للرب الصانع السموات والارض. 16 السموات سموات للرب.اما الارض فاعطاها لبني ادم. 17 ليس الاموات يسبحون الرب ولا من ينحدر الى ارض السكوت. 18 اما نحن فنبارك الرب من الان والى الدهر.هللويا`
          );
          location.reload();
        }
        function op116() {
          document.getElementById(`show-ld`).innerText = `116`;
          localStorage.setItem(`count`, `116`);
          document.getElementById(`one`).innerText =
            `1 احببت لان الرب يسمع صوتي تضرعاتي. 2 لانه امال اذنه الي.فادعوه مدة حياتي. 3 اكتنفتني حبال الموت اصابتني شدائد الهاوية.كابدت ضيقا وحزنا. 4 وباسم الرب دعوت اه يا رب نج نفسي. 5 الرب حنان وصديق والهنا رحيم. 6 الرب حافظ البسطاء.تذللت فخلصني. 7 ارجعي يا نفسي الى راحتك لان الرب قد احسن اليك. 8 لانك انقذت نفسي من الموت وعيني من الدمعة ورجلي من الزلق. 9 اسلك قدام الرب في ارض الاحياء 10 امنت لذلك تكلمت.انا تذللت جدا. 11 انا قلت في حيرتي كل انسان كاذب. 12 ماذا ارد للرب من اجل كل حسناته لي. 13 كاس الخلاص اتناول وباسم الرب ادعو. 14 اوفي نذوري للرب مقابل كل شعبه 15 عزيز في عيني الرب موت اتقيائه. 16 اه يا رب.لاني عبدك.انا عبدك ابن امتك.حللت قيودي. 17 فلك اذبح ذبيحة حمد وباسم الرب ادعو‏. 18 اوفي نذوري للرب مقابل شعبه 19 في ديار بيت الرب في وسطك يا اورشليم.هللويا`;
          localStorage.setItem(
            `words`,
            `1 احببت لان الرب يسمع صوتي تضرعاتي. 2 لانه امال اذنه الي.فادعوه مدة حياتي. 3 اكتنفتني حبال الموت اصابتني شدائد الهاوية.كابدت ضيقا وحزنا. 4 وباسم الرب دعوت اه يا رب نج نفسي. 5 الرب حنان وصديق والهنا رحيم. 6 الرب حافظ البسطاء.تذللت فخلصني. 7 ارجعي يا نفسي الى راحتك لان الرب قد احسن اليك. 8 لانك انقذت نفسي من الموت وعيني من الدمعة ورجلي من الزلق. 9 اسلك قدام الرب في ارض الاحياء 10 امنت لذلك تكلمت.انا تذللت جدا. 11 انا قلت في حيرتي كل انسان كاذب. 12 ماذا ارد للرب من اجل كل حسناته لي. 13 كاس الخلاص اتناول وباسم الرب ادعو. 14 اوفي نذوري للرب مقابل كل شعبه 15 عزيز في عيني الرب موت اتقيائه. 16 اه يا رب.لاني عبدك.انا عبدك ابن امتك.حللت قيودي. 17 فلك اذبح ذبيحة حمد وباسم الرب ادعو‏. 18 اوفي نذوري للرب مقابل شعبه 19 في ديار بيت الرب في وسطك يا اورشليم.هللويا`
          );
          location.reload();
        }
        function op117() {
          document.getElementById(`show-ld`).innerText = `117`;
          localStorage.setItem(`count`, `117`);
          document.getElementById(`one`).innerText =
            `1 سبحوا الرب يا كل الامم حمدوه يا كل الشعوب. 2 لان رحمته قد قويت علينا وامانة الرب الى الدهر.هللويا`;
          localStorage.setItem(
            `words`,
            `1 سبحوا الرب يا كل الامم حمدوه يا كل الشعوب. 2 لان رحمته قد قويت علينا وامانة الرب الى الدهر.هللويا`
          );
          location.reload();
        }
        function op118() {
          document.getElementById(`show-ld`).innerText = `118`;
          localStorage.setItem(`count`, `118`);
          document.getElementById(`one`).innerText =
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل اسرائيل ان الى الابد رحمته. 3 ليقل بيت هرون ان الى الابد رحمته. 4 ليقل متقو الرب ان الى الابد رحمته 5 من الضيق دعوت الرب فاجابني من الرحب. 6 الرب لي فلا اخاف.ماذا يصنع بي الانسان. 7 الرب لي بين معيني وانا سارى باعدائي. 8 الاحتماء بالرب خير من التوكل على انسان 9 الاحتماء بالرب خير من التوكل على الرؤساء. 10 كل الامم احاطوا بي.باسم الرب ابيدهم. 11 احاطوا بي واكتنفوني.باسم الرب ابيدهم. 12 احاطوا بي مثل النحل.انطفاوا كنار الشوك.باسم الرب ابيدهم. 13 دحرتني دحورا لاسقط.اما الرب فعضدني. 14 قوتي وترنمي الرب وقد صار لي خلاصا. 15 صوت ترنم وخلاص في خيام الصديقين.يمين الرب صانعة بباس 16 يمين الرب مرتفعة.يمين الرب صانعة بباس. 17 لا اموت بل احيا واحدث باعمال الرب. 18 تاديبا ادبني الرب والى الموت لم يسلمني 19 افتحوا لي ابواب البر.ادخل فيها واحمد الرب. 20 هذا الباب للرب.الصديقون يدخلون فيه. 21 احمدك لانك استجبت لي وصرت لي خلاصا. 22 الحجر الذي رفضه البناؤون قد صار راس الزاوية. 23 من قبل الرب كان هذا وهو عجيب في اعيننا 24 هذا هو اليوم الذي صنعه الرب.نبتهج ونفرح فيه. 25 اه يا رب خلص.اه يا رب انقذ. 26 مبارك الاتي باسم الرب.باركناكم من بيت الرب. 27 الرب هو الله وقد انار لنا.اوثقوا الذبيحة بربط الى قرون المذبح. 28 الهي انت فاحمدك الهي فارفعك. 29 احمدوا الرب لانه صالح لان الى الابد رحمته`;
          localStorage.setItem(
            `words`,
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل اسرائيل ان الى الابد رحمته. 3 ليقل بيت هرون ان الى الابد رحمته. 4 ليقل متقو الرب ان الى الابد رحمته 5 من الضيق دعوت الرب فاجابني من الرحب. 6 الرب لي فلا اخاف.ماذا يصنع بي الانسان. 7 الرب لي بين معيني وانا سارى باعدائي. 8 الاحتماء بالرب خير من التوكل على انسان 9 الاحتماء بالرب خير من التوكل على الرؤساء. 10 كل الامم احاطوا بي.باسم الرب ابيدهم. 11 احاطوا بي واكتنفوني.باسم الرب ابيدهم. 12 احاطوا بي مثل النحل.انطفاوا كنار الشوك.باسم الرب ابيدهم. 13 دحرتني دحورا لاسقط.اما الرب فعضدني. 14 قوتي وترنمي الرب وقد صار لي خلاصا. 15 صوت ترنم وخلاص في خيام الصديقين.يمين الرب صانعة بباس 16 يمين الرب مرتفعة.يمين الرب صانعة بباس. 17 لا اموت بل احيا واحدث باعمال الرب. 18 تاديبا ادبني الرب والى الموت لم يسلمني 19 افتحوا لي ابواب البر.ادخل فيها واحمد الرب. 20 هذا الباب للرب.الصديقون يدخلون فيه. 21 احمدك لانك استجبت لي وصرت لي خلاصا. 22 الحجر الذي رفضه البناؤون قد صار راس الزاوية. 23 من قبل الرب كان هذا وهو عجيب في اعيننا 24 هذا هو اليوم الذي صنعه الرب.نبتهج ونفرح فيه. 25 اه يا رب خلص.اه يا رب انقذ. 26 مبارك الاتي باسم الرب.باركناكم من بيت الرب. 27 الرب هو الله وقد انار لنا.اوثقوا الذبيحة بربط الى قرون المذبح. 28 الهي انت فاحمدك الهي فارفعك. 29 احمدوا الرب لانه صالح لان الى الابد رحمته`
          );
          location.reload();
        }
        function op119() {
          document.getElementById(`show-ld`).innerText = `119`;
          localStorage.setItem(`count`, `119`);
          document.getElementById(`one`).innerText =
            `1 ا ـ طوبى للكاملين طريقا السالكين في شريعة الرب. 2 طوبى لحافظي شهاداته.من كل قلوبهم يطلبونه. 3 ايضا لا يرتكبون اثما.في طرقه يسلكون. 4 انت اوصيت بوصاياك ان تحفظ تماما 5 ليت طرقي تثبت في حفظ فرائضك. 6 حينئذ لا اخزى اذا نظرت الى كل وصاياك. 7 احمدك باستقامة قلب عند تعلمي احكام عدلك. 8 وصاياك احفظ.لا تتركني الى الغاية 9 ب ـ بم يزكي الشاب طريقه.بحفظه اياه حسب كلامك. 10 بكل قلبي طلبتك.لا تضلني عن وصاياك. 11 خبات كلامك في قلبي لكيلا اخطئ اليك. 12 مبارك انت يا رب.علمني فرائضك. 13 بشفتي حسبت كل احكام فمك. 14 بطريق شهاداتك فرحت كما على كل الغنى. 15 بوصاياك الهج والاحظ سبلك. 16 بفرائضك اتلذذ.لا انسى كلامك 17 ج ـ احسن الى عبدك فاحيا واحفظ امرك. 18 اكشف عن عيني فارى عجائب من شريعتك. 19 غريب انا في الارض.لا تخف عني وصاياك. 20 انسحقت نفسي شوقا الى احكامك في كل حين. 21 انتهرت المتكبرين الملاعين الضالين عن وصاياك. 22 دحرج عني العار والاهانة لاني حفظت شهاداتك. 23 جلس ايضا رؤساء تقاولوا علي.اما عبدك فيناجي بفرائضك. 24 ايضا شهاداتك هي لذتي اهل مشورتي 25 د ـ لصقت بالتراب نفسي فاحيني حسب كلمتك. 26 قد صرحت بطرقي فاستجبت لي.علمني فرائضك. 27 طريق وصاياك فهمني فاناجي بعجائبك. 28 قطرت نفسي من الحزن.اقمني حسب كلامك. 29 طريق الكذب ابعد عني وبشريعتك ارحمني. 30 اخترت طريق الحق.جعلت احكامك قدامي. 31 لصقت بشهاداتك.يا رب لا تخزني. 32 في طريق وصاياك اجري لانك ترحب قلبي 33 ه ـ علمني يا رب طريق فرائضك فاحفظها الى النهاية. 34 فهمني فالاحظ شريعتك واحفظها بكل قلبي. 35 دربني في سبيل وصاياك لاني به سررت. 36 امل قلبي الى شهاداتك لا الى المكسب. 37 حول عيني عن النظر الى الباطل.في طريقك احيني. 38 اقم لعبدك قولك الذي لمتقيك. 39 ازل عاري الذي حذرت منه لان احكامك طيبة. 40 هانذا قد اشتهيت وصاياك.بعدلك احيني 41 و ـ لتاتني رحمتك يا رب خلاصك حسب قولك 42 فاجاوب معيري كلمة.لاني اتكلت على كلامك. 43 ولا تنزع من فمي كلام الحق كل النزع لاني انتظرت احكامك. 44 فاحفظ شريعتك دائما الى الدهر والابد. 45 واتمشى في رحب لاني طلبت وصاياك. 46 واتكلم بشهاداتك قدام ملوك ولا اخزى 47 واتلذذ بوصاياك التي احببت. 48 وارفع يدي الى وصاياك التي وددت واناجي بفرائضك 49 ز ـ اذكر لعبدك القول الذي جعلتني انتظره. 50 هذه هي تعزيتي في مذلتي.لان قولك احياني. 51 المتكبرون استهزاوا بي الى الغاية.عن شريعتك لم امل. 52 تذكرت احكامك منذ الدهر يا رب فتعزيت. 53 الحمية اخذتني بسبب الاشرار تاركي شريعتك. 54 ترنيمات صارت لي فرائضك في بيت غربتي. 55 ذكرت في الليل اسمك يا رب وحفظت شريعتك. 56 هذا صار لي لاني حفظت وصاياك 57 ح ـ نصيبي الرب قلت لحفظ كلامك. 58 ترضيت وجهك بكل قلبي.ارحمني حسب قولك. 59 تفكرت في طرقي ورددت قدمي الى شهاداتك. 60 اسرعت ولم اتوان لحفظ وصاياك. 61 حبال الاشرار التفت علي.اما شريعتك فلم انسها. 62 في منتصف الليل اقوم لاحمدك على احكام برك. 63 رفيق انا لكل الذين يتقونك ولحافظي وصاياك. 64 رحمتك يا رب قد ملات الارض.علمني فرائضك 65 ط ـ خيرا صنعت مع عبدك يا رب حسب كلامك. 66 ذوقا صالحا ومعرفة علمني لاني بوصاياك امنت. 67 قبل ان اذلل انا ضللت.اما الان فحفظت قولك. 68 صالح انت ومحسن علمني فرائضك. 69 المتكبرون قد لفقوا علي كذبا.اما انا فبكل قلبي احفظ وصاياك. 70 سمن مثل الشحم قلبهم.اما انا فبشريعتك اتلذذ. 71 خير لي اني تذللت لكي اتعلم فرائضك. 72 شريعة فمك خير لي من الوف ذهب وفضة 73 ي ـ يداك صنعتاني وانشاتاني.فهمني فاتعلم وصاياك. 74 متقوك يرونني فيفرحون لاني انتظرت كلامك. 75 قد علمت يا رب ان احكامك عدل وبالحق اذللتني. 76 فلتصر رحمتك لتعزيتي حسب قولك لعبدك. 77 لتاتني مراحمك فاحيا لان شريعتك هي لذتي. 78 ليخز المتكبرون لانهم زورا افتروا علي.اما انا فاناجي بوصاياك. 79 ليرجع الي متقوك وعارفو شهاداتك. 80 ليكن قلبي كاملا في فرائضك لكيلا اخزى 81 ك ـ تاقت نفسي الى خلاصك.كلامك انتظرت. 82 كلت عيناي من النظر الى قولك فاقول متى تعزيني. 83 لاني قد صرت كزق في الدخان.اما فرائضك فلم انسها. 84 كم هي ايام عبدك.متى تجري حكما على مضطهدي. 85 المتكبرون قد كروا لي حفائر.ذلك ليس حسب شريعتك. 86 كل وصاياك امانة.زورا يضطهدونني.اعني. 87 لولا قليل لافنوني من الارض.اما انا فلم اترك وصاياك. 88 حسب رحمتك احيني فاحفظ شهادات فمك 89 ل ـ الى الابد يا رب كلمتك مثبتة في السموات. 90 الى دور فدور امانتك.اسست الارض فثبتت. 91 على احكامك ثبتت اليوم لان الكل عبيدك. 92 لو لم تكن شريعتك لذتي لهلكت حينئذ في مذلتي‏. 93 الى الدهر لا انسى وصاياك لانك بها احييتني. 94 لك انا فخلصني لاني طلبت وصاياك. 95 اياي انتظر الاشرار ليهلكوني.بشهاداتك افطن. 96 لكل كمال رايت حدا.اما وصيتك فواسعة جدا 97 م ـ كم احببت شريعتك.اليوم كله هي لهجي. 98 وصيتك جعلتني احكم من اعدائي لانها الى الدهر هي لي. 99 اكثر من كل معلمي تعقلت لان شهاداتك هي لهجي. 100 اكثر من الشيوخ فطنت لاني حفظت وصاياك. 101 من كل طريق شر منعت رجلي لكي احفظ كلامك. 102 عن احكامك لم امل لانك انت علمتني. 103 ما احلى قولك لحنكي احلى من العسل لفمي. 104 من وصاياك اتفطن.لذلك ابغضت كل طريق كذب 105 ن ـ سراج لرجلي كلامك ونور لسبيلي. 106 حلفت فابره ان احفظ احكام برك. 107 تذللت الى الغاية.يا رب احيني حسب كلامك. 108 ارتض بمندوبات فمي يا رب واحكامك علمني. 109 نفسي دائما في كفي.اما شريعتك فلم انسها. 110 الاشرار وضعوا لي فخا.اما وصاياك فلم اضل عنها. 111 ورثت شهاداتك الى الدهر لانها هي بهجة قلبي. 112 عطفت قلبي لاصنع فرائضك الى الدهر الى النهاية 113 س ـ المتقلبين ابغضت وشريعتك احببت. 114 ستري ومجني انت.كلامك انتظرت. 115 انصرفوا عني ايها الاشرار فاحفظ وصايا الهي. 116 اعضدني حسب قولك فاحيا ولا تخزني من رجائي. 117 اسندني فاخلص واراعي فرائضك دائما. 118 احتقرت كل الضالين عن فرائضك لان مكرهم باطل. 119 كزغل عزلت كل اشرار الارض.لذلك احببت شهاداتك. 120 قد اقشعر لحمي من رعبك ومن احكامك جزعت 121 ع ـ اجريت حكما وعدلا.لا تسلمني الى ظالمي. 122 كن ضامن عبدك للخير لكيلا يظلمني المستكبرون. 123 كلت عيناي اشتياقا الى خلاصك والى كلمة برك. 124 اصنع مع عبدك حسب رحمتك وفرائضك علمني. 125 عبدك انا.فهمني فاعرف شهاداتك. 126 انه وقت عمل للرب.قد نقضوا شريعتك. 127 لاجل ذلك احببت وصاياك اكثر من الذهب والابريز. 128 لاجل ذلك حسبت كل وصاياك في كل شيء مستقيمة.كل طريق كذب ابغضت 129 ف ـ عجيبة هي شهاداتك لذلك حفظتها نفسي. 130 فتح كلامك ينير يعقل الجهال. 131 فغرت فمي ولهثت لاني الى وصاياك اشتقت. 132 التفت الي وارحمني كحق محبي اسمك. 133 ثبت خطواتي في كلمتك ولا يتسلط علي اثم. 134 افدني من ظلم الانسان فاحفظ وصاياك. 135 اضئ بوجهك على عبدك وعلمني فرائضك. 136 جداول مياه جرت من عيني لانهم لم يحفظوا شريعتك 137 ص ـ بار انت يا رب واحكامك مستقيمة. 138 عدلا امرت بشهاداتك وحقا الى الغاية. 139 اهلكتني غيرتي لان اعدائي نسوا كلامك. 140 كلمتك ممحصة جدا وعبدك احبها. 141 صغير انا وحقير.اما وصاياك فلم انسها. 142 عدلك عدل الى الدهر وشريعتك حق. 143 ضيق وشدة اصاباني اما وصاياك فهي لذاتي. 144 عادلة شهاداتك الى الدهر فهمني فاحيا 145 ق ـ صرخت من كل قلبي.استجب لي يا رب.فرائضك احفظ. 146 دعوتك.خلصني فاحفظ شهاداتك. 147 تقدمت في الصبح وصرخت.كلامك انتظرت. 148 تقدمت عيناي الهزع لكي الهج باقوالك. 149 صوتي استمع حسب رحمتك.يا رب حسب احكامك احيني. 150 اقترب التابعون الرذيلة.عن شريعتك بعدوا. 151 قريب انت يا رب وكل وصاياك حق. 152 منذ زمان عرفت من شهاداتك انك الى الدهر اسستها 153 ر ـ انظر الى ذلي وانقذني لاني لم انسى شريعتك. 154 احسن دعواي وفكني.حسب كلمتك احيني. 155 الخلاص بعيد عن الاشرار لانهم لم يلتمسوا فرائضك. 156 كثيرة هي مراحمك يا رب.حسب احكامك احيني. 157 كثيرون مضطهدي ومضايقي.اما شهاداتك فلم امل عنها. 158 رايت الغادرين ومقت لانهم لم يحفظوا كلمتك. 159 انظر اني احببت وصاياك.يا رب حسب رحمتك احيني. 160 راس كلامك حق والى الدهر كل احكام عدلك 161 ش ـ رؤساء اضطهدوني بلا سبب.ومن كلامك جزع قلبي. 162 ابتهج انا بكلامك كمن وجد غنيمة وافرة. 163 ابغضت الكذب وكرهته.اما شريعتك فاحببتها. 164 سبع مرات في النهار سبحتك على احكام عدلك. 165 سلامة جزيلة لمحبي شريعتك وليس لهم معثرة. 166 رجوت خلاصك يا رب ووصاياك عملت. 167 حفظت نفسي شهاداتك واحبها جدا. 168 حفظت وصاياك وشهاداتك لان كل طرقي امامك 169 ت ـ ليبلغ صراخي اليك يا رب.حسب كلامك فهمني. 170 لتدخل طلبتي الى حضرتك .ككلمتك نجني. 171 تنبع شفتاي تسبيحا اذا علمتني فرائضك. 172 يغني لساني باقوالك لان كل وصاياك عدل. 173 لتكن يدك لمعونتي لانني اخترت وصاياك. 174 اشتقت الى خلاصك يا رب وشريعتك هي لذتي. 175 لتحي نفسي وتسبحك واحكامك لتعني. 176 ضللت كشاة ضالة.اطلب عبدك لاني لم انس وصاياك`;
          localStorage.setItem(
            `words`,
            `1 ا ـ طوبى للكاملين طريقا السالكين في شريعة الرب. 2 طوبى لحافظي شهاداته.من كل قلوبهم يطلبونه. 3 ايضا لا يرتكبون اثما.في طرقه يسلكون. 4 انت اوصيت بوصاياك ان تحفظ تماما 5 ليت طرقي تثبت في حفظ فرائضك. 6 حينئذ لا اخزى اذا نظرت الى كل وصاياك. 7 احمدك باستقامة قلب عند تعلمي احكام عدلك. 8 وصاياك احفظ.لا تتركني الى الغاية 9 ب ـ بم يزكي الشاب طريقه.بحفظه اياه حسب كلامك. 10 بكل قلبي طلبتك.لا تضلني عن وصاياك. 11 خبات كلامك في قلبي لكيلا اخطئ اليك. 12 مبارك انت يا رب.علمني فرائضك. 13 بشفتي حسبت كل احكام فمك. 14 بطريق شهاداتك فرحت كما على كل الغنى. 15 بوصاياك الهج والاحظ سبلك. 16 بفرائضك اتلذذ.لا انسى كلامك 17 ج ـ احسن الى عبدك فاحيا واحفظ امرك. 18 اكشف عن عيني فارى عجائب من شريعتك. 19 غريب انا في الارض.لا تخف عني وصاياك. 20 انسحقت نفسي شوقا الى احكامك في كل حين. 21 انتهرت المتكبرين الملاعين الضالين عن وصاياك. 22 دحرج عني العار والاهانة لاني حفظت شهاداتك. 23 جلس ايضا رؤساء تقاولوا علي.اما عبدك فيناجي بفرائضك. 24 ايضا شهاداتك هي لذتي اهل مشورتي 25 د ـ لصقت بالتراب نفسي فاحيني حسب كلمتك. 26 قد صرحت بطرقي فاستجبت لي.علمني فرائضك. 27 طريق وصاياك فهمني فاناجي بعجائبك. 28 قطرت نفسي من الحزن.اقمني حسب كلامك. 29 طريق الكذب ابعد عني وبشريعتك ارحمني. 30 اخترت طريق الحق.جعلت احكامك قدامي. 31 لصقت بشهاداتك.يا رب لا تخزني. 32 في طريق وصاياك اجري لانك ترحب قلبي 33 ه ـ علمني يا رب طريق فرائضك فاحفظها الى النهاية. 34 فهمني فالاحظ شريعتك واحفظها بكل قلبي. 35 دربني في سبيل وصاياك لاني به سررت. 36 امل قلبي الى شهاداتك لا الى المكسب. 37 حول عيني عن النظر الى الباطل.في طريقك احيني. 38 اقم لعبدك قولك الذي لمتقيك. 39 ازل عاري الذي حذرت منه لان احكامك طيبة. 40 هانذا قد اشتهيت وصاياك.بعدلك احيني 41 و ـ لتاتني رحمتك يا رب خلاصك حسب قولك 42 فاجاوب معيري كلمة.لاني اتكلت على كلامك. 43 ولا تنزع من فمي كلام الحق كل النزع لاني انتظرت احكامك. 44 فاحفظ شريعتك دائما الى الدهر والابد. 45 واتمشى في رحب لاني طلبت وصاياك. 46 واتكلم بشهاداتك قدام ملوك ولا اخزى 47 واتلذذ بوصاياك التي احببت. 48 وارفع يدي الى وصاياك التي وددت واناجي بفرائضك 49 ز ـ اذكر لعبدك القول الذي جعلتني انتظره. 50 هذه هي تعزيتي في مذلتي.لان قولك احياني. 51 المتكبرون استهزاوا بي الى الغاية.عن شريعتك لم امل. 52 تذكرت احكامك منذ الدهر يا رب فتعزيت. 53 الحمية اخذتني بسبب الاشرار تاركي شريعتك. 54 ترنيمات صارت لي فرائضك في بيت غربتي. 55 ذكرت في الليل اسمك يا رب وحفظت شريعتك. 56 هذا صار لي لاني حفظت وصاياك 57 ح ـ نصيبي الرب قلت لحفظ كلامك. 58 ترضيت وجهك بكل قلبي.ارحمني حسب قولك. 59 تفكرت في طرقي ورددت قدمي الى شهاداتك. 60 اسرعت ولم اتوان لحفظ وصاياك. 61 حبال الاشرار التفت علي.اما شريعتك فلم انسها. 62 في منتصف الليل اقوم لاحمدك على احكام برك. 63 رفيق انا لكل الذين يتقونك ولحافظي وصاياك. 64 رحمتك يا رب قد ملات الارض.علمني فرائضك 65 ط ـ خيرا صنعت مع عبدك يا رب حسب كلامك. 66 ذوقا صالحا ومعرفة علمني لاني بوصاياك امنت. 67 قبل ان اذلل انا ضللت.اما الان فحفظت قولك. 68 صالح انت ومحسن علمني فرائضك. 69 المتكبرون قد لفقوا علي كذبا.اما انا فبكل قلبي احفظ وصاياك. 70 سمن مثل الشحم قلبهم.اما انا فبشريعتك اتلذذ. 71 خير لي اني تذللت لكي اتعلم فرائضك. 72 شريعة فمك خير لي من الوف ذهب وفضة 73 ي ـ يداك صنعتاني وانشاتاني.فهمني فاتعلم وصاياك. 74 متقوك يرونني فيفرحون لاني انتظرت كلامك. 75 قد علمت يا رب ان احكامك عدل وبالحق اذللتني. 76 فلتصر رحمتك لتعزيتي حسب قولك لعبدك. 77 لتاتني مراحمك فاحيا لان شريعتك هي لذتي. 78 ليخز المتكبرون لانهم زورا افتروا علي.اما انا فاناجي بوصاياك. 79 ليرجع الي متقوك وعارفو شهاداتك. 80 ليكن قلبي كاملا في فرائضك لكيلا اخزى 81 ك ـ تاقت نفسي الى خلاصك.كلامك انتظرت. 82 كلت عيناي من النظر الى قولك فاقول متى تعزيني. 83 لاني قد صرت كزق في الدخان.اما فرائضك فلم انسها. 84 كم هي ايام عبدك.متى تجري حكما على مضطهدي. 85 المتكبرون قد كروا لي حفائر.ذلك ليس حسب شريعتك. 86 كل وصاياك امانة.زورا يضطهدونني.اعني. 87 لولا قليل لافنوني من الارض.اما انا فلم اترك وصاياك. 88 حسب رحمتك احيني فاحفظ شهادات فمك 89 ل ـ الى الابد يا رب كلمتك مثبتة في السموات. 90 الى دور فدور امانتك.اسست الارض فثبتت. 91 على احكامك ثبتت اليوم لان الكل عبيدك. 92 لو لم تكن شريعتك لذتي لهلكت حينئذ في مذلتي‏. 93 الى الدهر لا انسى وصاياك لانك بها احييتني. 94 لك انا فخلصني لاني طلبت وصاياك. 95 اياي انتظر الاشرار ليهلكوني.بشهاداتك افطن. 96 لكل كمال رايت حدا.اما وصيتك فواسعة جدا 97 م ـ كم احببت شريعتك.اليوم كله هي لهجي. 98 وصيتك جعلتني احكم من اعدائي لانها الى الدهر هي لي. 99 اكثر من كل معلمي تعقلت لان شهاداتك هي لهجي. 100 اكثر من الشيوخ فطنت لاني حفظت وصاياك. 101 من كل طريق شر منعت رجلي لكي احفظ كلامك. 102 عن احكامك لم امل لانك انت علمتني. 103 ما احلى قولك لحنكي احلى من العسل لفمي. 104 من وصاياك اتفطن.لذلك ابغضت كل طريق كذب 105 ن ـ سراج لرجلي كلامك ونور لسبيلي. 106 حلفت فابره ان احفظ احكام برك. 107 تذللت الى الغاية.يا رب احيني حسب كلامك. 108 ارتض بمندوبات فمي يا رب واحكامك علمني. 109 نفسي دائما في كفي.اما شريعتك فلم انسها. 110 الاشرار وضعوا لي فخا.اما وصاياك فلم اضل عنها. 111 ورثت شهاداتك الى الدهر لانها هي بهجة قلبي. 112 عطفت قلبي لاصنع فرائضك الى الدهر الى النهاية 113 س ـ المتقلبين ابغضت وشريعتك احببت. 114 ستري ومجني انت.كلامك انتظرت. 115 انصرفوا عني ايها الاشرار فاحفظ وصايا الهي. 116 اعضدني حسب قولك فاحيا ولا تخزني من رجائي. 117 اسندني فاخلص واراعي فرائضك دائما. 118 احتقرت كل الضالين عن فرائضك لان مكرهم باطل. 119 كزغل عزلت كل اشرار الارض.لذلك احببت شهاداتك. 120 قد اقشعر لحمي من رعبك ومن احكامك جزعت 121 ع ـ اجريت حكما وعدلا.لا تسلمني الى ظالمي. 122 كن ضامن عبدك للخير لكيلا يظلمني المستكبرون. 123 كلت عيناي اشتياقا الى خلاصك والى كلمة برك. 124 اصنع مع عبدك حسب رحمتك وفرائضك علمني. 125 عبدك انا.فهمني فاعرف شهاداتك. 126 انه وقت عمل للرب.قد نقضوا شريعتك. 127 لاجل ذلك احببت وصاياك اكثر من الذهب والابريز. 128 لاجل ذلك حسبت كل وصاياك في كل شيء مستقيمة.كل طريق كذب ابغضت 129 ف ـ عجيبة هي شهاداتك لذلك حفظتها نفسي. 130 فتح كلامك ينير يعقل الجهال. 131 فغرت فمي ولهثت لاني الى وصاياك اشتقت. 132 التفت الي وارحمني كحق محبي اسمك. 133 ثبت خطواتي في كلمتك ولا يتسلط علي اثم. 134 افدني من ظلم الانسان فاحفظ وصاياك. 135 اضئ بوجهك على عبدك وعلمني فرائضك. 136 جداول مياه جرت من عيني لانهم لم يحفظوا شريعتك 137 ص ـ بار انت يا رب واحكامك مستقيمة. 138 عدلا امرت بشهاداتك وحقا الى الغاية. 139 اهلكتني غيرتي لان اعدائي نسوا كلامك. 140 كلمتك ممحصة جدا وعبدك احبها. 141 صغير انا وحقير.اما وصاياك فلم انسها. 142 عدلك عدل الى الدهر وشريعتك حق. 143 ضيق وشدة اصاباني اما وصاياك فهي لذاتي. 144 عادلة شهاداتك الى الدهر فهمني فاحيا 145 ق ـ صرخت من كل قلبي.استجب لي يا رب.فرائضك احفظ. 146 دعوتك.خلصني فاحفظ شهاداتك. 147 تقدمت في الصبح وصرخت.كلامك انتظرت. 148 تقدمت عيناي الهزع لكي الهج باقوالك. 149 صوتي استمع حسب رحمتك.يا رب حسب احكامك احيني. 150 اقترب التابعون الرذيلة.عن شريعتك بعدوا. 151 قريب انت يا رب وكل وصاياك حق. 152 منذ زمان عرفت من شهاداتك انك الى الدهر اسستها 153 ر ـ انظر الى ذلي وانقذني لاني لم انسى شريعتك. 154 احسن دعواي وفكني.حسب كلمتك احيني. 155 الخلاص بعيد عن الاشرار لانهم لم يلتمسوا فرائضك. 156 كثيرة هي مراحمك يا رب.حسب احكامك احيني. 157 كثيرون مضطهدي ومضايقي.اما شهاداتك فلم امل عنها. 158 رايت الغادرين ومقت لانهم لم يحفظوا كلمتك. 159 انظر اني احببت وصاياك.يا رب حسب رحمتك احيني. 160 راس كلامك حق والى الدهر كل احكام عدلك 161 ش ـ رؤساء اضطهدوني بلا سبب.ومن كلامك جزع قلبي. 162 ابتهج انا بكلامك كمن وجد غنيمة وافرة. 163 ابغضت الكذب وكرهته.اما شريعتك فاحببتها. 164 سبع مرات في النهار سبحتك على احكام عدلك. 165 سلامة جزيلة لمحبي شريعتك وليس لهم معثرة. 166 رجوت خلاصك يا رب ووصاياك عملت. 167 حفظت نفسي شهاداتك واحبها جدا. 168 حفظت وصاياك وشهاداتك لان كل طرقي امامك 169 ت ـ ليبلغ صراخي اليك يا رب.حسب كلامك فهمني. 170 لتدخل طلبتي الى حضرتك .ككلمتك نجني. 171 تنبع شفتاي تسبيحا اذا علمتني فرائضك. 172 يغني لساني باقوالك لان كل وصاياك عدل. 173 لتكن يدك لمعونتي لانني اخترت وصاياك. 174 اشتقت الى خلاصك يا رب وشريعتك هي لذتي. 175 لتحي نفسي وتسبحك واحكامك لتعني. 176 ضللت كشاة ضالة.اطلب عبدك لاني لم انس وصاياك`
          );
          location.reload();
        }
        function op120() {
          document.getElementById(`show-ld`).innerText = `120`;
          localStorage.setItem(`count`, `120`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.الى الرب في ضيقي صرخت فاستجاب لي. 2 يا رب نج نفسي من شفاه الكذب من لسان غش. 3 ماذا يعطيك وماذا يزيد لك لسان الغش. 4 سهام جبار مسنونة مع جمر الرتم. 5 ويلي لغربتي في ماشك لسكني في خيام قيدار. 6 طال على نفسي سكنها مع مبغض السلام. 7 انا سلام وحينما اتكلم فهم للحرب`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.الى الرب في ضيقي صرخت فاستجاب لي. 2 يا رب نج نفسي من شفاه الكذب من لسان غش. 3 ماذا يعطيك وماذا يزيد لك لسان الغش. 4 سهام جبار مسنونة مع جمر الرتم. 5 ويلي لغربتي في ماشك لسكني في خيام قيدار. 6 طال على نفسي سكنها مع مبغض السلام. 7 انا سلام وحينما اتكلم فهم للحرب`
          );
          location.reload();
        }
        function op121() {
          document.getElementById(`show-ld`).innerText = `121`;
          localStorage.setItem(`count`, `121`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.ارفع عيني الى الجبال من حيث ياتي عوني. 2 معونتي من عند الرب صانع السموات والارض. 3 لا يدع رجلك تزل.لا ينعس حافظك. 4 انه لا ينعس ولا ينام حافظ اسرائيل. 5 الرب حافظك.الرب ظل لك عن يدك اليمنى. 6 لا تضربك الشمس في النهار ولا القمر في الليل. 7 الرب يحفظك من كل شر يحفظ نفسك. 8 الرب يحفظ خروجك ودخولك من الان والى الدهر`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.ارفع عيني الى الجبال من حيث ياتي عوني. 2 معونتي من عند الرب صانع السموات والارض. 3 لا يدع رجلك تزل.لا ينعس حافظك. 4 انه لا ينعس ولا ينام حافظ اسرائيل. 5 الرب حافظك.الرب ظل لك عن يدك اليمنى. 6 لا تضربك الشمس في النهار ولا القمر في الليل. 7 الرب يحفظك من كل شر يحفظ نفسك. 8 الرب يحفظ خروجك ودخولك من الان والى الدهر`
          );
          location.reload();
        }
        function op122() {
          document.getElementById(`show-ld`).innerText = `122`;
          localStorage.setItem(`count`, `122`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.لداود.فرحت بالقائلين لي الى بيت الرب نذهب. 2 تقف ارجلنا في ابوابك يا اورشليم. 3 اورشليم المبنية كمدينة متصلة كلها 4 حيث صعدت الاسباط اسباط الرب شهادة لاسرائيل ليحمدوا اسم الرب. 5 لانه هناك استوت الكراسي للقضاء كراسي بيت داود. 6 اسالوا سلامة اورشليم.ليسترح محبوك. 7 ليكن سلام في ابراجك راحة في قصورك. 8 من اجل اخوتي واصحابي لاقولن سلام بك. 9 من اجل بيت الرب الهنا التمس لك خيرا`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.لداود.فرحت بالقائلين لي الى بيت الرب نذهب. 2 تقف ارجلنا في ابوابك يا اورشليم. 3 اورشليم المبنية كمدينة متصلة كلها 4 حيث صعدت الاسباط اسباط الرب شهادة لاسرائيل ليحمدوا اسم الرب. 5 لانه هناك استوت الكراسي للقضاء كراسي بيت داود. 6 اسالوا سلامة اورشليم.ليسترح محبوك. 7 ليكن سلام في ابراجك راحة في قصورك. 8 من اجل اخوتي واصحابي لاقولن سلام بك. 9 من اجل بيت الرب الهنا التمس لك خيرا`
          );
          location.reload();
        }
        function op123() {
          document.getElementById(`show-ld`).innerText = `123`;
          localStorage.setItem(`count`, `123`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.اليك رفعت عيني يا ساكنا في السموات. 2 هوذا كما ان عيون العبيد نحو ايادي ساداتهم كما ان عيني الجارية نحو يد سيدتها هكذا عيوننا نحو الرب الهنا حتى يتراف علينا. 3 ارحمنا يا رب ارحمنا لاننا كثيرا ما امتلانا هوانا. 4 كثيرا ما شبعت انفسنا من هزء المستريحين واهانة المستكبرين`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.اليك رفعت عيني يا ساكنا في السموات. 2 هوذا كما ان عيون العبيد نحو ايادي ساداتهم كما ان عيني الجارية نحو يد سيدتها هكذا عيوننا نحو الرب الهنا حتى يتراف علينا. 3 ارحمنا يا رب ارحمنا لاننا كثيرا ما امتلانا هوانا. 4 كثيرا ما شبعت انفسنا من هزء المستريحين واهانة المستكبرين`
          );
          location.reload();
        }
        function op124() {
          document.getElementById(`show-ld`).innerText = `124`;
          localStorage.setItem(`count`, `124`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.لداود.لولا الرب الذي كان لنا ليقل اسرائيل 2 لولا الرب الذي كان لنا عندما قام الناس علينا 3 اذا لابتلعونا احياء عند احتماء غضبهم علينا 4 اذا لجرفتنا المياه لعبر السيل على انفسنا 5 اذا لعبرت على انفسنا المياه الطامية. 6 مبارك الرب الذي لم يسلمنا فريسة لاسنانهم. 7 انفلتت انفسنا مثل العصفور من فخ الصيادين الفخ انكسر ونحن انفلتنا. 8 عوننا باسم الرب الصانع السموات والارض`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.لداود.لولا الرب الذي كان لنا ليقل اسرائيل 2 لولا الرب الذي كان لنا عندما قام الناس علينا 3 اذا لابتلعونا احياء عند احتماء غضبهم علينا 4 اذا لجرفتنا المياه لعبر السيل على انفسنا 5 اذا لعبرت على انفسنا المياه الطامية. 6 مبارك الرب الذي لم يسلمنا فريسة لاسنانهم. 7 انفلتت انفسنا مثل العصفور من فخ الصيادين الفخ انكسر ونحن انفلتنا. 8 عوننا باسم الرب الصانع السموات والارض`
          );
          location.reload();
        }
        function op125() {
          document.getElementById(`show-ld`).innerText = `125`;
          localStorage.setItem(`count`, `125`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.المتوكلون على الرب مثل جبل صهيون الذي لا يتزعزع بل يسكن الى الدهر. 2 اورشليم الجبال حولها والرب حول شعبه من الان والى الدهر. 3 لانه لا تستقر عصا الاشرار على نصيب الصديقين لكيلا يمد الصديقون ايديهم الى الاثم. 4 احسن يا رب الى الصالحين والى المستقيمي القلوب. 5 اما العادلون الى طرق معوجة فيذهبهم الرب مع فعلة الاثم.سلام على اسرائيل`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.المتوكلون على الرب مثل جبل صهيون الذي لا يتزعزع بل يسكن الى الدهر. 2 اورشليم الجبال حولها والرب حول شعبه من الان والى الدهر. 3 لانه لا تستقر عصا الاشرار على نصيب الصديقين لكيلا يمد الصديقون ايديهم الى الاثم. 4 احسن يا رب الى الصالحين والى المستقيمي القلوب. 5 اما العادلون الى طرق معوجة فيذهبهم الرب مع فعلة الاثم.سلام على اسرائيل`
          );
          location.reload();
        }
        function op126() {
          document.getElementById(`show-ld`).innerText = `126`;
          localStorage.setItem(`count`, `126`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.عندما رد الرب سبي صهيون صرنا مثل الحالمين. 2 حينئذ امتلات افواهنا ضحكا والسنتنا ترنما.حينئذ قالوا بين الامم ان الرب قد عظم العمل مع هؤلاء‏. 3 عظم الرب العمل معنا وصرنا فرحين. 4 اردد يا رب سبينا مثل السواقي في الجنوب. 5 الذين يزرعون بالدموع يحصدون بالابتهاج. 6 الذاهب ذهابا بالبكاء حاملا مبذر الزرع مجيئا يجيء بالترنم حاملا حزمه`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.عندما رد الرب سبي صهيون صرنا مثل الحالمين. 2 حينئذ امتلات افواهنا ضحكا والسنتنا ترنما.حينئذ قالوا بين الامم ان الرب قد عظم العمل مع هؤلاء‏. 3 عظم الرب العمل معنا وصرنا فرحين. 4 اردد يا رب سبينا مثل السواقي في الجنوب. 5 الذين يزرعون بالدموع يحصدون بالابتهاج. 6 الذاهب ذهابا بالبكاء حاملا مبذر الزرع مجيئا يجيء بالترنم حاملا حزمه`
          );
          location.reload();
        }
        function op127() {
          document.getElementById(`show-ld`).innerText = `127`;
          localStorage.setItem(`count`, `127`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.لسليمان.ان لم يبن الرب البيت فباطلا يتعب البناؤون.ان لم يحفظ الرب المدينة فباطلا يسهر الحارس. 2 باطل هو لكم ان تبكروا الى القيام مؤخرين الجلوس اكلين خبز الاتعاب.لكنه يعطي حبيبه نوما. 3 هوذا البنون ميراث من عند الرب ثمرة البطن اجرة. 4 كسهام بيد جبار هكذا ابناء الشبيبة. 5 طوبى للذي ملا جعبته منهم.لا يخزون بل يكلمون الاعداء في الباب`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.لسليمان.ان لم يبن الرب البيت فباطلا يتعب البناؤون.ان لم يحفظ الرب المدينة فباطلا يسهر الحارس. 2 باطل هو لكم ان تبكروا الى القيام مؤخرين الجلوس اكلين خبز الاتعاب.لكنه يعطي حبيبه نوما. 3 هوذا البنون ميراث من عند الرب ثمرة البطن اجرة. 4 كسهام بيد جبار هكذا ابناء الشبيبة. 5 طوبى للذي ملا جعبته منهم.لا يخزون بل يكلمون الاعداء في الباب`
          );
          location.reload();
        }
        function op128() {
          document.getElementById(`show-ld`).innerText = `128`;
          localStorage.setItem(`count`, `128`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.طوبى لكل من يتقي الرب ويسلك في طرقه. 2 لانك تاكل تعب يديك.طوباك وخير لك. 3 امراتك مثل كرمة مثمرة في جوانب بيتك.بنوك مثل غروس الزيتون حول مائدتك. 4 هكذا يبارك الرجل المتقي الرب. 5 يباركك الرب من صهيون وتبصر خير اورشليم كل ايام حياتك. 6 وترى بني بنيك.سلام على اسرائيل`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.طوبى لكل من يتقي الرب ويسلك في طرقه. 2 لانك تاكل تعب يديك.طوباك وخير لك. 3 امراتك مثل كرمة مثمرة في جوانب بيتك.بنوك مثل غروس الزيتون حول مائدتك. 4 هكذا يبارك الرجل المتقي الرب. 5 يباركك الرب من صهيون وتبصر خير اورشليم كل ايام حياتك. 6 وترى بني بنيك.سلام على اسرائيل`
          );
          location.reload();
        }
        function op129() {
          document.getElementById(`show-ld`).innerText = `129`;
          localStorage.setItem(`count`, `129`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.كثيرا ما ضايقوني منذ شبابي ليقل اسرائيل 2 كثيرا ما ضايقوني منذ شبابي.لكن لم يقدروا علي. 3 على ظهري حرث الحراث.طولوا اتلامهم. 4 الرب صديق.قطع ربط الاشرار. 5 فليخز وليرتد الى الوراء كل مبغضي صهيون. 6 ليكونوا كعشب السطوح الذي ييبس قبل ان يقلع. 7 الذي لا يملا الحاصد كفه منه ولا المحزم حضنه. 8 ولا يقول العابرون بركة الرب عليكم.باركناكم باسم الرب`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.كثيرا ما ضايقوني منذ شبابي ليقل اسرائيل 2 كثيرا ما ضايقوني منذ شبابي.لكن لم يقدروا علي. 3 على ظهري حرث الحراث.طولوا اتلامهم. 4 الرب صديق.قطع ربط الاشرار. 5 فليخز وليرتد الى الوراء كل مبغضي صهيون. 6 ليكونوا كعشب السطوح الذي ييبس قبل ان يقلع. 7 الذي لا يملا الحاصد كفه منه ولا المحزم حضنه. 8 ولا يقول العابرون بركة الرب عليكم.باركناكم باسم الرب`
          );
          location.reload();
        }
        function op130() {
          document.getElementById(`show-ld`).innerText = `130`;
          localStorage.setItem(`count`, `130`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.من الاعماق صرخت اليك يا رب. 2 يا رب اسمع صوتي لتكن اذناك مصغيتين الى صوت تضرعاتي. 3 ان كنت تراقب الاثام يا رب يا سيد فمن يقف‏. 4 لان عندك المغفرة لكي يخاف منك. 5 انتظرتك يا رب انتظرت نفسي وبكلامه رجوت. 6 نفسي تنتظر الرب اكثر من المراقبين الصبح اكثر من المراقبين الصبح. 7 ليرج اسرائيل الرب لان عند الرب الرحمة وعنده فدى كثير. 8 وهو يفدي اسرائيل من كل اثامه`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.من الاعماق صرخت اليك يا رب. 2 يا رب اسمع صوتي لتكن اذناك مصغيتين الى صوت تضرعاتي. 3 ان كنت تراقب الاثام يا رب يا سيد فمن يقف‏. 4 لان عندك المغفرة لكي يخاف منك. 5 انتظرتك يا رب انتظرت نفسي وبكلامه رجوت. 6 نفسي تنتظر الرب اكثر من المراقبين الصبح اكثر من المراقبين الصبح. 7 ليرج اسرائيل الرب لان عند الرب الرحمة وعنده فدى كثير. 8 وهو يفدي اسرائيل من كل اثامه`
          );
          location.reload();
        }
        function op131() {
          document.getElementById(`show-ld`).innerText = `131`;
          localStorage.setItem(`count`, `131`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.لداود.يا رب لم يرتفع قلبي ولم تستعل عيناي ولم اسلك في العظائم ولا في عجائب فوقي. 2 بل هدات وسكت نفسي كفطيم نحو امه نفسي نحوي كفطيم. 3 ليرج اسرائيل الرب من الان والى الدهر`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.لداود.يا رب لم يرتفع قلبي ولم تستعل عيناي ولم اسلك في العظائم ولا في عجائب فوقي. 2 بل هدات وسكت نفسي كفطيم نحو امه نفسي نحوي كفطيم. 3 ليرج اسرائيل الرب من الان والى الدهر`
          );
          location.reload();
        }
        function op132() {
          document.getElementById(`show-ld`).innerText = `132`;
          localStorage.setItem(`count`, `132`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.اذكر يا رب داود كل ذله. 2 كيف حلف للرب نذر لعزيز يعقوب 3 لا ادخل خيمة بيتي لا اصعد على سرير فراشي 4 لا اعطي وسنا لعيني ولا نوما لاجفاني 5 او اجد مقاما للرب مسكنا لعزيز يعقوب. 6 هوذا قد سمعنا به في افراتة.وجدناه في حقول الوعر. 7 لندخل الى مساكنه.لنسجد عند موطئ قدميه 8 قم يا رب الى راحتك انت وتابوت عزك. 9 كهنتك يلبسون البر واتقياؤك يهتفون. 10 من اجل داود عبدك لا ترد وجه مسيحك. 11 اقسم الرب لداود بالحق لا يرجع عنه.من ثمرة بطنك اجعل على كرسيك. 12 ان حفظ بنوك عهدي وشهاداتي التي اعلمهم اياها فبنوهم ايضا الى الابد يجلسون على كرسيك. 13 لان الرب قد اختار صهيون اشتهاها مسكنا له. 14 هذه هي راحتي الى الابد ههنا اسكن لاني اشتهيتها. 15 طعامها ابارك بركة مساكينها اشبع خبزا. 16 كهنتها البس خلاصا واتقياؤها يهتفون هتافا. 17 هناك انبت قرنا لداود.رتبت سراجا لمسيحي. 18 اعداءه البس خزيا وعليه يزهر اكليله`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.اذكر يا رب داود كل ذله. 2 كيف حلف للرب نذر لعزيز يعقوب 3 لا ادخل خيمة بيتي لا اصعد على سرير فراشي 4 لا اعطي وسنا لعيني ولا نوما لاجفاني 5 او اجد مقاما للرب مسكنا لعزيز يعقوب. 6 هوذا قد سمعنا به في افراتة.وجدناه في حقول الوعر. 7 لندخل الى مساكنه.لنسجد عند موطئ قدميه 8 قم يا رب الى راحتك انت وتابوت عزك. 9 كهنتك يلبسون البر واتقياؤك يهتفون. 10 من اجل داود عبدك لا ترد وجه مسيحك. 11 اقسم الرب لداود بالحق لا يرجع عنه.من ثمرة بطنك اجعل على كرسيك. 12 ان حفظ بنوك عهدي وشهاداتي التي اعلمهم اياها فبنوهم ايضا الى الابد يجلسون على كرسيك. 13 لان الرب قد اختار صهيون اشتهاها مسكنا له. 14 هذه هي راحتي الى الابد ههنا اسكن لاني اشتهيتها. 15 طعامها ابارك بركة مساكينها اشبع خبزا. 16 كهنتها البس خلاصا واتقياؤها يهتفون هتافا. 17 هناك انبت قرنا لداود.رتبت سراجا لمسيحي. 18 اعداءه البس خزيا وعليه يزهر اكليله`
          );
          location.reload();
        }
        function op133() {
          document.getElementById(`show-ld`).innerText = `133`;
          localStorage.setItem(`count`, `133`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.لداود.هوذا ما احسن وما اجمل ان يسكن الاخوة معا. 2 مثل الدهن الطيب على الراس النازل على اللحية لحية هرون النازل الى طرف ثيابه. 3 مثل ندى حرمون النازل على جبل صهيون.لانه هناك امر الرب بالبركة حياة الى الابد`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.لداود.هوذا ما احسن وما اجمل ان يسكن الاخوة معا. 2 مثل الدهن الطيب على الراس النازل على اللحية لحية هرون النازل الى طرف ثيابه. 3 مثل ندى حرمون النازل على جبل صهيون.لانه هناك امر الرب بالبركة حياة الى الابد`
          );
          location.reload();
        }
        function op134() {
          document.getElementById(`show-ld`).innerText = `134`;
          localStorage.setItem(`count`, `134`);
          document.getElementById(`one`).innerText =
            `1 ترنيمة المصاعد.هوذا باركوا الرب يا جميع عبيد الرب الواقفين في بيت الرب بالليالي. 2 ارفعوا ايديكم نحو القدس وباركوا الرب. 3 يباركك الرب من صهيون الصانع السموات والارض`;
          localStorage.setItem(
            `words`,
            `1 ترنيمة المصاعد.هوذا باركوا الرب يا جميع عبيد الرب الواقفين في بيت الرب بالليالي. 2 ارفعوا ايديكم نحو القدس وباركوا الرب. 3 يباركك الرب من صهيون الصانع السموات والارض`
          );
          location.reload();
        }
        function op135() {
          document.getElementById(`show-ld`).innerText = `135`;
          localStorage.setItem(`count`, `135`);
          document.getElementById(`one`).innerText =
            `1 هللويا.سبحوا اسم الرب.سبحوا يا عبيد الرب 2 الواقفين في بيت الرب في ديار بيت الهنا 3 سبحوا الرب لان الرب صالح.رنموا لاسمه لان ذاك حلو. 4 لان الرب قد اختار يعقوب لذاته واسرائيل لخاصته. 5 لاني انا قد عرفت ان الرب عظيم وربنا فوق جميع الالهة. 6 كل ما شاء الرب صنع في السموات وفي الارض في البحار وفي كل اللجج. 7 المصعد السحاب من اقاصي الارض.الصانع بروقا للمطر.المخرج الريح من خزائنه. 8 الذي ضرب ابكار مصر من الناس الى البهائم. 9 ارسل ايات وعجائب في وسطك يا مصر على فرعون وعلى كل عبيده. 10 الذي ضرب امما كثيرة وقتل ملوكا اعزاء 11 سيحون ملك الاموريين وعوج ملك باشان وكل ممالك كنعان. 12 واعطى ارضهم ميراثا.ميراثا لاسرائيل شعبه 13 يا رب اسمك الى الدهر.يا رب ذكرك الى دور فدور. 14 لان الرب يدين شعبه وعلى عبيده يشفق. 15 اصنام الامم فضة وذهب عمل ايدي الناس. 16 لها افواه ولا تتكلم.لها اعين ولا تبصر. 17 لها اذان ولا تسمع.كذلك ليس في افواهها نفس. 18 مثلها يكون صانعوها وكل من يتكل عليها. 19 يا بيت اسرائيل باركوا الرب.يا بيت هرون باركوا الرب. 20 يا بيت لاوي باركوا الرب.يا خائفي الرب باركوا الرب. 21 مبارك الرب من صهيون الساكن في اورشليم.هللويا`;
          localStorage.setItem(
            `words`,
            `1 هللويا.سبحوا اسم الرب.سبحوا يا عبيد الرب 2 الواقفين في بيت الرب في ديار بيت الهنا 3 سبحوا الرب لان الرب صالح.رنموا لاسمه لان ذاك حلو. 4 لان الرب قد اختار يعقوب لذاته واسرائيل لخاصته. 5 لاني انا قد عرفت ان الرب عظيم وربنا فوق جميع الالهة. 6 كل ما شاء الرب صنع في السموات وفي الارض في البحار وفي كل اللجج. 7 المصعد السحاب من اقاصي الارض.الصانع بروقا للمطر.المخرج الريح من خزائنه. 8 الذي ضرب ابكار مصر من الناس الى البهائم. 9 ارسل ايات وعجائب في وسطك يا مصر على فرعون وعلى كل عبيده. 10 الذي ضرب امما كثيرة وقتل ملوكا اعزاء 11 سيحون ملك الاموريين وعوج ملك باشان وكل ممالك كنعان. 12 واعطى ارضهم ميراثا.ميراثا لاسرائيل شعبه 13 يا رب اسمك الى الدهر.يا رب ذكرك الى دور فدور. 14 لان الرب يدين شعبه وعلى عبيده يشفق. 15 اصنام الامم فضة وذهب عمل ايدي الناس. 16 لها افواه ولا تتكلم.لها اعين ولا تبصر. 17 لها اذان ولا تسمع.كذلك ليس في افواهها نفس. 18 مثلها يكون صانعوها وكل من يتكل عليها. 19 يا بيت اسرائيل باركوا الرب.يا بيت هرون باركوا الرب. 20 يا بيت لاوي باركوا الرب.يا خائفي الرب باركوا الرب. 21 مبارك الرب من صهيون الساكن في اورشليم.هللويا`
          );
          location.reload();
        }
        function op136() {
          document.getElementById(`show-ld`).innerText = `136`;
          localStorage.setItem(`count`, `136`);
          document.getElementById(`one`).innerText =
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته‏. 2 احمدوا اله الالهة لان الى الابد رحمته. 3 احمدوا رب الارباب لان الى الابد رحمته. 4 الصانع العجائب العظام وحده لان الى الابد رحمته. 5 الصانع السموات بفهم لان الى الابد رحمته. 6 الباسط الارض على المياه لان الى الابد رحمته. 7 الصانع انوارا عظيمة لان الى الابد رحمته. 8 الشمس لحكم النهار لان الى الابد رحمته. 9 القمر والكواكب لحكم الليل لان الى الابد رحمته. 10 الذي ضرب مصر مع ابكارها لان الى الابد رحمته. 11 واخرج اسرائيل من وسطهم لان الى الابد رحمته. 12 بيد شديدة وذراع ممدودة لان الى الابد رحمته. 13 الذي شق بحر سوف الى شقق لان الى الابد رحمته. 14 وعبر اسرائيل في وسطه لان الى الابد رحمته. 15 ودفع فرعون وقوته في بحر سوف لان الى الابد رحمته. 16 الذي سار بشعبه في البرية لان الى الابد رحمته. 17 الذي ضرب ملوكا عظماء لان الى الابد رحمته. 18 وقتل ملوكا اعزاء لان الى الابد رحمته. 19 سيحون ملك الاموريين لان الى الابد رحمته 20 وعوج ملك باشان لان الى الابد رحمته. 21 واعطى ارضهم ميراثا لان الى الابد رحمته‏ 22 ميراثا لاسرائيل عبده لان الى الابد رحمته. 23 الذي في مذلتنا ذكرنا لان الى الابد رحمته. 24 ونجانا من اعدائنا لان الى الابد رحمته. 25 الذي يعطي خبزا لكل بشر لان الى الابد رحمته. 26 احمدوا اله السموات لان الى الابد رحمته`;
          localStorage.setItem(
            `words`,
            `1 احمدوا الرب لانه صالح لان الى الابد رحمته‏. 2 احمدوا اله الالهة لان الى الابد رحمته. 3 احمدوا رب الارباب لان الى الابد رحمته. 4 الصانع العجائب العظام وحده لان الى الابد رحمته. 5 الصانع السموات بفهم لان الى الابد رحمته. 6 الباسط الارض على المياه لان الى الابد رحمته. 7 الصانع انوارا عظيمة لان الى الابد رحمته. 8 الشمس لحكم النهار لان الى الابد رحمته. 9 القمر والكواكب لحكم الليل لان الى الابد رحمته. 10 الذي ضرب مصر مع ابكارها لان الى الابد رحمته. 11 واخرج اسرائيل من وسطهم لان الى الابد رحمته. 12 بيد شديدة وذراع ممدودة لان الى الابد رحمته. 13 الذي شق بحر سوف الى شقق لان الى الابد رحمته. 14 وعبر اسرائيل في وسطه لان الى الابد رحمته. 15 ودفع فرعون وقوته في بحر سوف لان الى الابد رحمته. 16 الذي سار بشعبه في البرية لان الى الابد رحمته. 17 الذي ضرب ملوكا عظماء لان الى الابد رحمته. 18 وقتل ملوكا اعزاء لان الى الابد رحمته. 19 سيحون ملك الاموريين لان الى الابد رحمته 20 وعوج ملك باشان لان الى الابد رحمته. 21 واعطى ارضهم ميراثا لان الى الابد رحمته‏ 22 ميراثا لاسرائيل عبده لان الى الابد رحمته. 23 الذي في مذلتنا ذكرنا لان الى الابد رحمته. 24 ونجانا من اعدائنا لان الى الابد رحمته. 25 الذي يعطي خبزا لكل بشر لان الى الابد رحمته. 26 احمدوا اله السموات لان الى الابد رحمته`
          );
          location.reload();
        }
        function op137() {
          document.getElementById("show-ld").innerText = "137";
          localStorage.setItem("count", "137");
          document.getElementById("one").innerText =
            "1 على انهار بابل هناك جلسنا.بكينا ايضا عندما تذكرنا صهيون. 2 على الصفصاف في وسطها علقنا اعوادنا. 3 لانه هناك سالنا الذين سبونا كلام ترنيمة ومعذبونا سالونا فرحا قائلين رنموا لنا من ترنيمات صهيون 4 كيف نرنم ترنيمة الرب في ارض غريبة. 5 ان نسيتك يا اورشليم تنسى يميني**** 6 ليلتصق لساني بحنكي ان لم اذكرك ان لم افضل اورشليم على اعظم فرحي 7 اذكر يا رب لبني ادوم يوم اورشليم القائلين هدوا هدوا حتى الى اساسها. 8 يا بنت بابل المخربة طوبى لمن يجازيك جزاءك الذي جازيتنا. 9 طوبى لمن يمسك اطفالك ويضرب بهم الصخرة";
          localStorage.setItem(
            "words",
            "1 على انهار بابل هناك جلسنا.بكينا ايضا عندما تذكرنا صهيون. 2 على الصفصاف في وسطها علقنا اعوادنا. 3 لانه هناك سالنا الذين سبونا كلام ترنيمة ومعذبونا سالونا فرحا قائلين رنموا لنا من ترنيمات صهيون 4 كيف نرنم ترنيمة الرب في ارض غريبة. 5 ان نسيتك يا اورشليم تنسى يميني**** 6 ليلتصق لساني بحنكي ان لم اذكرك ان لم افضل اورشليم على اعظم فرحي 7 اذكر يا رب لبني ادوم يوم اورشليم القائلين هدوا هدوا حتى الى اساسها. 8 يا بنت بابل المخربة طوبى لمن يجازيك جزاءك الذي جازيتنا. 9 طوبى لمن يمسك اطفالك ويضرب بهم الصخرة"
          );
          location.reload();
        }
        function op138() {
          document.getElementById("show-ld").innerText = "138";
          localStorage.setItem("count", "138");
          document.getElementById("one").innerText =
            "1 لداود.احمدك من كل قلبي.قدام الالهة ارنم لك. 2 اسجد في هيكل قدسك واحمد اسمك على رحمتك وحقك لانك قد عظمت كلمتك على كل اسمك. 3 في يوم دعوتك اجبتني.شجعتني قوة في نفسي 4 يحمدك يا رب كل ملوك الارض اذا سمعوا كلمات فمك. 5 ويرنمون في طرق الرب لان مجد الرب عظيم. 6 لان الرب عال ويرى المتواضع.اما المتكبر فيعرفه من بعيد. 7 ان سلكت في وسط الضيق تحيني.على غضب اعدائي تمد يدك وتخلصني يمينك. 8 الرب يحامي عني.يا رب رحمتك الى الابد.عن اعمال يديك لا تتخل";
          localStorage.setItem(
            "words",
            "1 لداود.احمدك من كل قلبي.قدام الالهة ارنم لك. 2 اسجد في هيكل قدسك واحمد اسمك على رحمتك وحقك لانك قد عظمت كلمتك على كل اسمك. 3 في يوم دعوتك اجبتني.شجعتني قوة في نفسي 4 يحمدك يا رب كل ملوك الارض اذا سمعوا كلمات فمك. 5 ويرنمون في طرق الرب لان مجد الرب عظيم. 6 لان الرب عال ويرى المتواضع.اما المتكبر فيعرفه من بعيد. 7 ان سلكت في وسط الضيق تحيني.على غضب اعدائي تمد يدك وتخلصني يمينك. 8 الرب يحامي عني.يا رب رحمتك الى الابد.عن اعمال يديك لا تتخل"
          );
          location.reload();
        }
        function op139() {
          document.getElementById("show-ld").innerText = "139";
          localStorage.setItem("count", "139");
          document.getElementById("one").innerText =
            "1 لامام المغنين.لداود.مزمور.يا رب قد اختبرتني وعرفتني. 2 انت عرفت جلوسي وقيامي.فهمت فكري من بعيد 3 مسلكي ومربضي ذريت وكل طرقي عرفت. 4 لانه ليس كلمة في لساني الا وانت يا رب عرفتها كلها. 5 من خلف ومن قدام حاصرتني وجعلت علي يدك. 6 عجيبة هذه المعرفة فوقي ارتفعت لا استطيعها. 7 اين اذهب من روحك ومن وجهك اين اهرب. 8 ان صعدت الى السموات فانت هناك.وان فرشت في الهاوية فها انت. 9 ان اخذت جناحي الصبح وسكنت في اقاصي البحر 10 فهناك ايضا تهديني يدك وتمسكني يمينك. 11 فقلت انما الظلمة تغشاني.فالليل يضيء حولي. 12 الظلمة ايضا لا تظلم لديك والليل مثل النهار يضيء.كالظلمة هكذا النور 13 لانك انت اقتنيت كليتي.نسجتني في بطن امي. 14 احمدك من اجل اني قد امتزت عجبا.عجيبة هي اعمالك ونفسي تعرف ذلك يقينا. 15 لم تختف عنك عظامي حينما صنعت في الخفاء ورقمت في اعماق الارض. 16 رات عيناك اعضائي وفي سفرك كلها كتبت يوم تصورت اذ لم يكن واحد منها. 17 ما اكرم افكارك يا الله عندي ما اكثر جملتها. 18 ان احصها فهي اكثر من الرمل.استيقظت وانا بعد معك. 19 ليتك تقتل الاشرار يا الله.فيا رجال الدماء ابعدوا عني. 20 الذين يكلمونك بالمكر ناطقين بالكذب هم اعداؤك. 21 الا ابغض مبغضيك يا رب وامقت مقاوميك. 22 بغضا تاما ابغضتهم.صاروا لي اعداء 23 اختبرني يا الله واعرف قلبي امتحني واعرف افكاري. 24 وانظر ان كان في طريق باطل واهدني طريقا ابديا";
          localStorage.setItem(
            "words",
            "1 لامام المغنين.لداود.مزمور.يا رب قد اختبرتني وعرفتني. 2 انت عرفت جلوسي وقيامي.فهمت فكري من بعيد 3 مسلكي ومربضي ذريت وكل طرقي عرفت. 4 لانه ليس كلمة في لساني الا وانت يا رب عرفتها كلها. 5 من خلف ومن قدام حاصرتني وجعلت علي يدك. 6 عجيبة هذه المعرفة فوقي ارتفعت لا استطيعها. 7 اين اذهب من روحك ومن وجهك اين اهرب. 8 ان صعدت الى السموات فانت هناك.وان فرشت في الهاوية فها انت. 9 ان اخذت جناحي الصبح وسكنت في اقاصي البحر 10 فهناك ايضا تهديني يدك وتمسكني يمينك. 11 فقلت انما الظلمة تغشاني.فالليل يضيء حولي. 12 الظلمة ايضا لا تظلم لديك والليل مثل النهار يضيء.كالظلمة هكذا النور 13 لانك انت اقتنيت كليتي.نسجتني في بطن امي. 14 احمدك من اجل اني قد امتزت عجبا.عجيبة هي اعمالك ونفسي تعرف ذلك يقينا. 15 لم تختف عنك عظامي حينما صنعت في الخفاء ورقمت في اعماق الارض. 16 رات عيناك اعضائي وفي سفرك كلها كتبت يوم تصورت اذ لم يكن واحد منها. 17 ما اكرم افكارك يا الله عندي ما اكثر جملتها. 18 ان احصها فهي اكثر من الرمل.استيقظت وانا بعد معك. 19 ليتك تقتل الاشرار يا الله.فيا رجال الدماء ابعدوا عني. 20 الذين يكلمونك بالمكر ناطقين بالكذب هم اعداؤك. 21 الا ابغض مبغضيك يا رب وامقت مقاوميك. 22 بغضا تاما ابغضتهم.صاروا لي اعداء 23 اختبرني يا الله واعرف قلبي امتحني واعرف افكاري. 24 وانظر ان كان في طريق باطل واهدني طريقا ابديا"
          );
          location.reload();
        }
        function op140() {
          document.getElementById("show-ld").innerText = "140";
          localStorage.setItem("count", "140");
          document.getElementById("one").innerText =
            "1 لامام المغنين.مزمور لداود.انقذني يا رب من اهل الشر.من رجل الظلم احفظني. 2 الذين يتفكرون بشرور في قلوبهم.اليوم كله يجتمعون للقتال. 3 سنوا السنتهم كحية حمة الافعوان تحت شفاههم.سلاه. 4 احفظني يا رب من يدي الشرير.من رجل الظلم انقذني.الذين تفكروا في تعثير خطواتي. 5 اخفى لي المستكبرون فخا وحبالا.مدوا شبكة بجانب الطريق.وضعوا لي اشراكا.سلاه 6 قلت للرب انت الهي.اصغ يا رب الى صوت تضرعاتي. 7 يا رب السيد قوة خلاصي ظللت راسي في يوم القتال. 8 لا تعط يا رب شهوات الشرير.لا تنجح مقاصده.يترفعون.سلاه. 9 اما رؤوس المحيطين بي فشقاء شفاههم يغطيهم. 10 ليسقط عليهم جمر.ليسقطوا في النار وفي غمرات فلا يقوموا. 11 رجل لسان لا يثبت في الارض.رجل الظلم يصيده الشر الى هلاكه. 12 قد علمت ان الرب يجري حكما للمساكين وحقا للبائسين. 13 انما الصديقون يحمدون اسمك.المستقيمون يجلسون في حضرتك‏";
          localStorage.setItem(
            "words",
            "1 لامام المغنين.مزمور لداود.انقذني يا رب من اهل الشر.من رجل الظلم احفظني. 2 الذين يتفكرون بشرور في قلوبهم.اليوم كله يجتمعون للقتال. 3 سنوا السنتهم كحية حمة الافعوان تحت شفاههم.سلاه. 4 احفظني يا رب من يدي الشرير.من رجل الظلم انقذني.الذين تفكروا في تعثير خطواتي. 5 اخفى لي المستكبرون فخا وحبالا.مدوا شبكة بجانب الطريق.وضعوا لي اشراكا.سلاه 6 قلت للرب انت الهي.اصغ يا رب الى صوت تضرعاتي. 7 يا رب السيد قوة خلاصي ظللت راسي في يوم القتال. 8 لا تعط يا رب شهوات الشرير.لا تنجح مقاصده.يترفعون.سلاه. 9 اما رؤوس المحيطين بي فشقاء شفاههم يغطيهم. 10 ليسقط عليهم جمر.ليسقطوا في النار وفي غمرات فلا يقوموا. 11 رجل لسان لا يثبت في الارض.رجل الظلم يصيده الشر الى هلاكه. 12 قد علمت ان الرب يجري حكما للمساكين وحقا للبائسين. 13 انما الصديقون يحمدون اسمك.المستقيمون يجلسون في حضرتك‏"
          );
          location.reload();
        }
        function op141() {
          document.getElementById("show-ld").innerText = "141";
          localStorage.setItem("count", "141");
          document.getElementById("one").innerText =
            "1 مزمور لداود.يا رب اليك صرخت.اسرع الي.اصغ الى صوتي عندما اصرخ اليك. 2 لتستقم صلاتي كالبخور قدامك ليكن رفع يدي كذبيحة مسائية. 3 اجعل يا رب حارسا لفمي.احفظ باب شفتي. 4 لا تمل قلبي الى امر رديء لاتعلل بعلل الشر مع اناس فاعلي اثم ولا اكل من نفائسهم 5 ليضربني الصديق فرحمة وليوبخني فزيت للراس.لا يابى راسي.لان صلاتي بعد في مصائبهم. 6 قد انطرح قضاتهم من على الصخرة.وسمعوا كلماتي لانها لذيذة. 7 كمن يفلح ويشق الارض تبددت عظامنا عند فم الهاوية. 8 لانه اليك يا سيد يا رب عيناي.بك احتميت.لا تفرغ نفسي. 9 احفظني من الفخ الذي قد نصبوه لي ومن اشراك فاعلي الاثم 10 ليسقط الاشرار في شباكهم حتى انجو انا بالكلية";
          localStorage.setItem(
            "words",
            "1 مزمور لداود.يا رب اليك صرخت.اسرع الي.اصغ الى صوتي عندما اصرخ اليك. 2 لتستقم صلاتي كالبخور قدامك ليكن رفع يدي كذبيحة مسائية. 3 اجعل يا رب حارسا لفمي.احفظ باب شفتي. 4 لا تمل قلبي الى امر رديء لاتعلل بعلل الشر مع اناس فاعلي اثم ولا اكل من نفائسهم 5 ليضربني الصديق فرحمة وليوبخني فزيت للراس.لا يابى راسي.لان صلاتي بعد في مصائبهم. 6 قد انطرح قضاتهم من على الصخرة.وسمعوا كلماتي لانها لذيذة. 7 كمن يفلح ويشق الارض تبددت عظامنا عند فم الهاوية. 8 لانه اليك يا سيد يا رب عيناي.بك احتميت.لا تفرغ نفسي. 9 احفظني من الفخ الذي قد نصبوه لي ومن اشراك فاعلي الاثم 10 ليسقط الاشرار في شباكهم حتى انجو انا بالكلية"
          );
          location.reload();
        }
        function op142() {
          document.getElementById("show-ld").innerText = "142";
          localStorage.setItem("count", "142");
          document.getElementById("one").innerText =
            "1 قصيدة لداود لما كان في المغارة.صلاة بصوتي الى الرب اصرخ بصوتي الى الرب اتضرع. 2 اسكب امامه شكواي.بضيقي قدامه اخبر 3 عندما اعيت روحي في وانت عرفت مسلكي.في الطريق التي اسلك اخفوا لي فخا. 4 انظر الى اليمين وابصر.فليس لي عارف.باد عني المناص.ليس من يسال عن نفسي. 5 صرخت اليك يا رب.قلت انت ملجاي نصيبي في ارض الاحياء. 6 اصغ الى صراخي لاني قد تذللت جدا.نجني من مضطهدي لانهم اشد مني. 7 اخرج من الحبس نفسي لتحميد اسمك.الصديقون يكتنفونني لانك تحسن الي";
          localStorage.setItem(
            "words",
            "1 قصيدة لداود لما كان في المغارة.صلاة بصوتي الى الرب اصرخ بصوتي الى الرب اتضرع. 2 اسكب امامه شكواي.بضيقي قدامه اخبر 3 عندما اعيت روحي في وانت عرفت مسلكي.في الطريق التي اسلك اخفوا لي فخا. 4 انظر الى اليمين وابصر.فليس لي عارف.باد عني المناص.ليس من يسال عن نفسي. 5 صرخت اليك يا رب.قلت انت ملجاي نصيبي في ارض الاحياء. 6 اصغ الى صراخي لاني قد تذللت جدا.نجني من مضطهدي لانهم اشد مني. 7 اخرج من الحبس نفسي لتحميد اسمك.الصديقون يكتنفونني لانك تحسن الي"
          );
          location.reload();
        }
        function op143() {
          document.getElementById("show-ld").innerText = "143";
          localStorage.setItem("count", "143");
          document.getElementById("one").innerText =
            "1 مزمور لداود.يا رب اسمع صلاتي واصغ الى تضرعاتي.بامانتك استجب لي بعدلك. 2 ولا تدخل في المحاكمة مع عبدك فانه لن يتبرر قدامك حي. 3 لان العدو قد اضطهد نفسي سحق الى الارض حياتي.اجلسني في الظلمات مثل الموتى منذ الدهر. 4 اعيت في روحي.تحير في داخلي قلبي. 5 تذكرت ايام القدم لهجت بكل اعمالك بصنائع يديك اتامل. 6 بسطت اليك يدي نفسي نحوك كارض يابسة.سلاه 7 اسرع اجبني يا رب.فنيت روحي لا تحجب وجهك عني فاشبه الهابطين في الجب. 8 اسمعني رحمتك في الغداة لاني عليك توكلت.عرفني الطريق التي اسلك فيها لاني اليك رفعت نفسي. 9 انقذني من اعدائي يا رب اليك التجات. 10 علمني ان اعمل رضاك لانك انت الهي.روحك الصالح يهديني في ارض مستوية. 11 من اجل اسمك يا رب تحييني.بعدلك تخرج من الضيق نفسي. 12 وبرحمتك تستاصل اعدائي وتبيد كل مضايقي نفسي لاني انا عبدك";
          localStorage.setItem(
            "words",
            "1 مزمور لداود.يا رب اسمع صلاتي واصغ الى تضرعاتي.بامانتك استجب لي بعدلك. 2 ولا تدخل في المحاكمة مع عبدك فانه لن يتبرر قدامك حي. 3 لان العدو قد اضطهد نفسي سحق الى الارض حياتي.اجلسني في الظلمات مثل الموتى منذ الدهر. 4 اعيت في روحي.تحير في داخلي قلبي. 5 تذكرت ايام القدم لهجت بكل اعمالك بصنائع يديك اتامل. 6 بسطت اليك يدي نفسي نحوك كارض يابسة.سلاه 7 اسرع اجبني يا رب.فنيت روحي لا تحجب وجهك عني فاشبه الهابطين في الجب. 8 اسمعني رحمتك في الغداة لاني عليك توكلت.عرفني الطريق التي اسلك فيها لاني اليك رفعت نفسي. 9 انقذني من اعدائي يا رب اليك التجات. 10 علمني ان اعمل رضاك لانك انت الهي.روحك الصالح يهديني في ارض مستوية. 11 من اجل اسمك يا رب تحييني.بعدلك تخرج من الضيق نفسي. 12 وبرحمتك تستاصل اعدائي وتبيد كل مضايقي نفسي لاني انا عبدك"
          );
          location.reload();
        }
        function op144() {
          document.getElementById("show-ld").innerText = "144";
          localStorage.setItem("count", "144");
          document.getElementById("one").innerText =
            "1 لداود.مبارك الرب صخرتي الذي يعلم يدي القتال واصابعي الحرب. 2 رحمتي وملجاي صرحي ومنقذي مجني والذي عليه توكلت المخضع شعبي تحتي. 3 يا رب اي شيء هو الانسان حتى تعرفه او ابن الانسان حتى تفتكر به. 4 الانسان اشبه نفخة.ايامه مثل ظل عابر 5 يا رب طاطئ سمواتك وانزل المس الجبال فتدخن. 6 ابرق بروقا وبددهم.ارسل سهامك وازعجهم. 7 ارسل يدك من العلاء.انقذني ونجني من المياه الكثيرة من ايدي الغرباء 8 الذين تكلمت افواههم بالباطل ويمينهم يمين كذب. 9 يا الله ارنم لك ترنيمة جديدة برباب ذات عشرة اوتار ارنم لك. 10 المعطي خلاصا للملوك المنقذ داود عبده من السيف السوء 11 انقذني ونجني من ايدي الغرباء الذين تكلمت افواههم بالباطل ويمينهم يمين كذب 12 لكي يكون بنونا مثل الغروس النامية في شبيبتها.بناتنا كاعمدة الزوايا منحوتات حسب بناء هيكل. 13 اهراؤنا ملانة تفيض من صنف فصنف.اغنامنا تنتج الوفا وربوات في شوارعنا. 14 بقرنا محملة.لا اقتحام ولا هجوم ولا شكوى في شوارعنا. 15 طوبى للشعب الذي له كهذا.طوبى للشعب الذي الرب الهه";
          localStorage.setItem(
            "words",
            "1 لداود.مبارك الرب صخرتي الذي يعلم يدي القتال واصابعي الحرب. 2 رحمتي وملجاي صرحي ومنقذي مجني والذي عليه توكلت المخضع شعبي تحتي. 3 يا رب اي شيء هو الانسان حتى تعرفه او ابن الانسان حتى تفتكر به. 4 الانسان اشبه نفخة.ايامه مثل ظل عابر 5 يا رب طاطئ سمواتك وانزل المس الجبال فتدخن. 6 ابرق بروقا وبددهم.ارسل سهامك وازعجهم. 7 ارسل يدك من العلاء.انقذني ونجني من المياه الكثيرة من ايدي الغرباء 8 الذين تكلمت افواههم بالباطل ويمينهم يمين كذب. 9 يا الله ارنم لك ترنيمة جديدة برباب ذات عشرة اوتار ارنم لك. 10 المعطي خلاصا للملوك المنقذ داود عبده من السيف السوء 11 انقذني ونجني من ايدي الغرباء الذين تكلمت افواههم بالباطل ويمينهم يمين كذب 12 لكي يكون بنونا مثل الغروس النامية في شبيبتها.بناتنا كاعمدة الزوايا منحوتات حسب بناء هيكل. 13 اهراؤنا ملانة تفيض من صنف فصنف.اغنامنا تنتج الوفا وربوات في شوارعنا. 14 بقرنا محملة.لا اقتحام ولا هجوم ولا شكوى في شوارعنا. 15 طوبى للشعب الذي له كهذا.طوبى للشعب الذي الرب الهه"
          );
          location.reload();
        }
        function op145() {
          document.getElementById("show-ld").innerText = "145";
          localStorage.setItem("count", "145");
          document.getElementById("one").innerText =
            "1 تسبيحة لداود.ارفعك يا الهي الملك وابارك اسمك الى الدهر والابد. 2 في كل يوم اباركك واسبح اسمك الى الدهر والابد. 3 عظيم هو الرب وحميد جدا وليس لعظمته استقصاء. 4 دور الى دور يسبح اعمالك وبجبروتك يخبرون. 5 بجلال مجد حمدك وامور عجائبك الهج. 6 بقوة مخاوفك ينطقون وبعظمتك احدث 7 ذكر كثرة صلاحك يبدون وبعدلك يرنمون 8 الرب حنان ورحيم طويل الروح وكثير الرحمة. 9 الرب صالح للكل ومراحمه على كل اعماله. 10 يحمدك يا رب كل اعمالك ويباركك اتقياؤك. 11 بمجد ملكك ينطقون وبجبروتك يتكلمون 12 ليعرفوا بني ادم قدرتك ومجد جلال ملكك. 13 ملكك ملك كل الدهور وسلطانك في كل دور فدور 14 الرب عاضد كل الساقطين ومقوم كل المنحنين. 15 اعين الكل اياك تترجى وانت تعطيهم طعامهم في حينه. 16 تفتح يدك فتشبع كل حي رضى. 17 الرب بار في كل طرقه ورحيم في كل اعماله. 18 الرب قريب لكل الذين يدعونه الذين يدعونه بالحق. 19 يعمل رضى خائفيه ويسمع تضرعهم فيخلصهم. 20 يحفظ الرب كل محبيه ويهلك جميع الاشرار. 21 بتسبيح الرب ينطق فمي.وليبارك كل بشر اسمه القدوس الى الدهر والابد";
          localStorage.setItem(
            "words",
            "1 تسبيحة لداود.ارفعك يا الهي الملك وابارك اسمك الى الدهر والابد. 2 في كل يوم اباركك واسبح اسمك الى الدهر والابد. 3 عظيم هو الرب وحميد جدا وليس لعظمته استقصاء. 4 دور الى دور يسبح اعمالك وبجبروتك يخبرون. 5 بجلال مجد حمدك وامور عجائبك الهج. 6 بقوة مخاوفك ينطقون وبعظمتك احدث 7 ذكر كثرة صلاحك يبدون وبعدلك يرنمون 8 الرب حنان ورحيم طويل الروح وكثير الرحمة. 9 الرب صالح للكل ومراحمه على كل اعماله. 10 يحمدك يا رب كل اعمالك ويباركك اتقياؤك. 11 بمجد ملكك ينطقون وبجبروتك يتكلمون 12 ليعرفوا بني ادم قدرتك ومجد جلال ملكك. 13 ملكك ملك كل الدهور وسلطانك في كل دور فدور 14 الرب عاضد كل الساقطين ومقوم كل المنحنين. 15 اعين الكل اياك تترجى وانت تعطيهم طعامهم في حينه. 16 تفتح يدك فتشبع كل حي رضى. 17 الرب بار في كل طرقه ورحيم في كل اعماله. 18 الرب قريب لكل الذين يدعونه الذين يدعونه بالحق. 19 يعمل رضى خائفيه ويسمع تضرعهم فيخلصهم. 20 يحفظ الرب كل محبيه ويهلك جميع الاشرار. 21 بتسبيح الرب ينطق فمي.وليبارك كل بشر اسمه القدوس الى الدهر والابد"
          );
          location.reload();
        }
        function op146() {
          document.getElementById("show-ld").innerText = "146";
          localStorage.setItem("count", "146");
          document.getElementById("one").innerText =
            "1 هللويا.سبحي يا نفسي الرب. 2 اسبح الرب في حياتي.وارنم لالهي ما دمت موجودا 3 لا تتكلوا على الرؤساء ولا على ابن ادم حيث لا خلاص عنده. 4 تخرج روحه فيعود الى ترابه.في ذلك اليوم نفسه تهلك افكاره 5 طوبى لمن اله يعقوب معينه ورجاؤه على الرب الهه 6 الصانع السموات والارض البحر وكل ما فيها.الحافظ الامانة الى الابد. 7 المجري حكما للمظلومين المعطي خبزا للجياع.الرب يطلق الاسرى. 8 الرب يفتح اعين العمي.الرب يقوم المنحنين.الرب يحب الصديقين. 9 الرب يحفظ الغرباء.يعضد اليتيم والارملة.اما طريق الاشرار‏ فيعوجه. 10 يملك الرب الى الابد الهك يا صهيون الى دور فدور.هللويا";
          localStorage.setItem(
            "words",
            "1 هللويا.سبحي يا نفسي الرب. 2 اسبح الرب في حياتي.وارنم لالهي ما دمت موجودا 3 لا تتكلوا على الرؤساء ولا على ابن ادم حيث لا خلاص عنده. 4 تخرج روحه فيعود الى ترابه.في ذلك اليوم نفسه تهلك افكاره 5 طوبى لمن اله يعقوب معينه ورجاؤه على الرب الهه 6 الصانع السموات والارض البحر وكل ما فيها.الحافظ الامانة الى الابد. 7 المجري حكما للمظلومين المعطي خبزا للجياع.الرب يطلق الاسرى. 8 الرب يفتح اعين العمي.الرب يقوم المنحنين.الرب يحب الصديقين. 9 الرب يحفظ الغرباء.يعضد اليتيم والارملة.اما طريق الاشرار‏ فيعوجه. 10 يملك الرب الى الابد الهك يا صهيون الى دور فدور.هللويا"
          );
          location.reload();
        }
        function op147() {
          document.getElementById("show-ld").innerText = "147";
          localStorage.setItem("count", "147");
          document.getElementById("one").innerText =
            "1 سبحوا الرب لان الترنم لالهنا صالح لانه ملذ.التسبيح لائق. 2 الرب يبني اورشليم.يجمع منفيي اسرائيل. 3 يشفي المنكسري القلوب ويجبر كسرهم. 4 يحصي عدد الكواكب.يدعو كلها باسماء. 5 عظيم هو ربنا وعظيم القوة.لفهمه لا احصاء. 6 الرب يرفع الودعاء ويضع الاشرار الى الارض 7 اجيبوا الرب بحمد.رنموا لالهنا بعود. 8 الكاسي السموات سحابا المهيئ للارض مطرا المنبت الجبال عشبا 9 المعطي للبهائم طعامها لفراخ الغربان التي تصرخ. 10 لا يسر بقوة الخيل.لا يرضى بساقي الرجل. 11 يرضى الرب باتقيائه بالراجين رحمته 12 سبحي يا اورشليم الرب سبحي الهك يا صهيون. 13 لانه قد شدد عوارض ابوابك.بارك ابناءك داخلك. 14 الذي يجعل تخومك سلاما ويشبعك من شحم الحنطة. 15 يرسل كلمته في الارض سريعا جدا يجري قوله. 16 الذي يعطي الثلج كالصوف ويذري الصقيع كالرماد 17 يلقي جمده كفتات.قدام برده من يقف. 18 يرسل كلمته فيذيبها.يهب بريحه فتسيل المياه. 19 يخبر يعقوب بكلمته واسرائيل بفرائضه واحكامه. 20 لم يصنع هكذا باحدى الامم.واحكامه لم يعرفوها.هللويا";
          localStorage.setItem(
            "words",
            "1 سبحوا الرب لان الترنم لالهنا صالح لانه ملذ.التسبيح لائق. 2 الرب يبني اورشليم.يجمع منفيي اسرائيل. 3 يشفي المنكسري القلوب ويجبر كسرهم. 4 يحصي عدد الكواكب.يدعو كلها باسماء. 5 عظيم هو ربنا وعظيم القوة.لفهمه لا احصاء. 6 الرب يرفع الودعاء ويضع الاشرار الى الارض 7 اجيبوا الرب بحمد.رنموا لالهنا بعود. 8 الكاسي السموات سحابا المهيئ للارض مطرا المنبت الجبال عشبا 9 المعطي للبهائم طعامها لفراخ الغربان التي تصرخ. 10 لا يسر بقوة الخيل.لا يرضى بساقي الرجل. 11 يرضى الرب باتقيائه بالراجين رحمته 12 سبحي يا اورشليم الرب سبحي الهك يا صهيون. 13 لانه قد شدد عوارض ابوابك.بارك ابناءك داخلك. 14 الذي يجعل تخومك سلاما ويشبعك من شحم الحنطة. 15 يرسل كلمته في الارض سريعا جدا يجري قوله. 16 الذي يعطي الثلج كالصوف ويذري الصقيع كالرماد 17 يلقي جمده كفتات.قدام برده من يقف. 18 يرسل كلمته فيذيبها.يهب بريحه فتسيل المياه. 19 يخبر يعقوب بكلمته واسرائيل بفرائضه واحكامه. 20 لم يصنع هكذا باحدى الامم.واحكامه لم يعرفوها.هللويا"
          );
          location.reload();
        }
        function op148() {
          document.getElementById("show-ld").innerText = "148";
          localStorage.setItem("count", "148");
          document.getElementById("one").innerText =
            "1 هللويا.سبحوا الرب من السموات سبحوه في الاعالي. 2 سبحوه يا جميع ملائكته سبحوه يا كل جنوده. 3 سبحيه يا ايتها الشمس والقمر سبحيه يا جميع كواكب النور. 4 سبحيه يا سماء السموات ويا ايتها المياه التي فوق السموات. 5 لتسبح اسم الرب لانه امر فخلقت. 6 وثبتها الى الدهر والابد.وضع لها حدا فلن تتعداه 7 سبحي الرب من الارض يا ايتها التنانين وكل اللجج. 8 النار والبرد الثلج والضباب الريح العاصفة الصانعة كلمته 9 الجبال وكل الاكام الشجر المثمر وكل الارز 10 الوحوش وكل البهائم الدبابات والطيور ذوات الاجنحة 11 ملوك الارض وكل الشعوب الرؤساء وكل قضاة الارض 12 الاحداث والعذارى ايضا الشيوخ مع الفتيان 13 ليسبحوا اسم الرب لانه قد تعالى اسمه وحده.مجده فوق الارض والسموات. 14 وينصب قرنا لشعبه فخرا لجميع اتقيائه لبني اسرائيل الشعب القريب اليه.هللويا";
          localStorage.setItem(
            "words",
            "1 هللويا.سبحوا الرب من السموات سبحوه في الاعالي. 2 سبحوه يا جميع ملائكته سبحوه يا كل جنوده. 3 سبحيه يا ايتها الشمس والقمر سبحيه يا جميع كواكب النور. 4 سبحيه يا سماء السموات ويا ايتها المياه التي فوق السموات. 5 لتسبح اسم الرب لانه امر فخلقت. 6 وثبتها الى الدهر والابد.وضع لها حدا فلن تتعداه 7 سبحي الرب من الارض يا ايتها التنانين وكل اللجج. 8 النار والبرد الثلج والضباب الريح العاصفة الصانعة كلمته 9 الجبال وكل الاكام الشجر المثمر وكل الارز 10 الوحوش وكل البهائم الدبابات والطيور ذوات الاجنحة 11 ملوك الارض وكل الشعوب الرؤساء وكل قضاة الارض 12 الاحداث والعذارى ايضا الشيوخ مع الفتيان 13 ليسبحوا اسم الرب لانه قد تعالى اسمه وحده.مجده فوق الارض والسموات. 14 وينصب قرنا لشعبه فخرا لجميع اتقيائه لبني اسرائيل الشعب القريب اليه.هللويا"
          );
          location.reload();
        }
        function op149() {
          document.getElementById("show-ld").innerText = "149";
          localStorage.setItem("count", "149");
          document.getElementById("one").innerText =
            "1 هللويا.غنوا للرب ترنيمة جديدة تسبيحته في جماعة الاتقياء. 2 ليفرح اسرائيل بخالقه.ليبتهج بنو صهيون بملكهم 3 ليسبحوا اسمه برقص.بدف وعود ليرنموا له. 4 لان الرب راض عن شعبه.يجمل الودعاء بالخلاص. 5 ليبتهج الاتقياء بمجد ليرنموا على مضاجعهم. 6 تنويهات الله في افواههم وسيف ذو حدين في يدهم. 7 ليصنعوا نقمة في الامم وتاديبات في الشعوب. 8 لاسر ملوكهم بقيود وشرفائهم بكبول من حديد. 9 ليجروا بهم الحكم المكتوب.كرامة هذا لجميع اتقيائه.هللويا";
          localStorage.setItem(
            "words",
            "1 هللويا.غنوا للرب ترنيمة جديدة تسبيحته في جماعة الاتقياء. 2 ليفرح اسرائيل بخالقه.ليبتهج بنو صهيون بملكهم 3 ليسبحوا اسمه برقص.بدف وعود ليرنموا له. 4 لان الرب راض عن شعبه.يجمل الودعاء بالخلاص. 5 ليبتهج الاتقياء بمجد ليرنموا على مضاجعهم. 6 تنويهات الله في افواههم وسيف ذو حدين في يدهم. 7 ليصنعوا نقمة في الامم وتاديبات في الشعوب. 8 لاسر ملوكهم بقيود وشرفائهم بكبول من حديد. 9 ليجروا بهم الحكم المكتوب.كرامة هذا لجميع اتقيائه.هللويا"
          );
          location.reload();
        }
        function op150() {
          document.getElementById("show-ld").innerText = "150";
          localStorage.setItem("count", "150");
          document.getElementById("one").innerText =
            "1 هللويا.سبحوا الله في قدسه.سبحوه في فلك قوته. 2 سبحوه على قواته سبحوه حسب كثرة عظمته. 3 سبحوه بصوت الصور سبحوه برباب وعود. 4 سبحوه بدف ورقص.سبحوه باوتار ومزمار. 5 سبحوه بصنوج التصويت سبحوه بصنوج الهتاف. 6 كل نسمة فلتسبح الرب.هللويا";
          localStorage.setItem(
            "words",
            "1 هللويا.سبحوا الله في قدسه.سبحوه في فلك قوته. 2 سبحوه على قواته سبحوه حسب كثرة عظمته. 3 سبحوه بصوت الصور سبحوه برباب وعود. 4 سبحوه بدف ورقص.سبحوه باوتار ومزمار. 5 سبحوه بصنوج التصويت سبحوه بصنوج الهتاف. 6 كل نسمة فلتسبح الرب.هللويا"
          );
          location.reload();
        }
        function op151() {
          document.getElementById("show-ld").innerText = "151";
          localStorage.setItem("count", "151");
          document.getElementById("one").innerText =
            "أَنَا صَغِيرًا كُنْتُ فِي إِخْوَتِي، وَحَدَثًا فِي بَيْتِ أَبِي، كُنْتُ رَاعِيًا غَنَمَ أَبِي. يَدَايَ صَنَعَتَا الْأًرْغُنَ، وَأَصَابِعِي أَلِفَتْ الْمِزْمَارَ. هَلِّلُويَا. مَنْ هُوَ الَّذِي يُخَبِّرُ سَيِّدِي، هُوَ الرَّبُّ الَّذِي يَسْتَجِيبُ لِلَّذِينَ يَصْرُخُونَ إِلَيْهِ. هُوَ أَرْسَلَ مَلاَكَهُ، وَحَمَلَنِي مِنْ غَنَمِ أَبِي وَمَسَحَنِي بِدُهْنِ مَسْحَتِهِ. هَلِّلُويَا. إِخْوَتِي حِسَانٌ وَهُمْ أَكْبَرُ مِنِّي وَالرَّبُّ لَمْ يُسَرُّ بِهِمْ. خَرَجْتُ لِلِقَاءِ الْفِلِسْطِينِيُّ فَلَعَنَنِي بِأَوْثَانِهِ. وَلكِنْ أَنَا سَلَلْتُ سَيْفَهُ الَّذِي كَانَ بِيَدِهِ، وَقَطَعْتُ رَأْسَهُ. وَنَزَعْتُ الْعَارَ عَنْ بَنِي إِسْرَائِيلَ. هَلِّلُويَا.";
          localStorage.setItem(
            "words",
            "أَنَا صَغِيرًا كُنْتُ فِي إِخْوَتِي، وَحَدَثًا فِي بَيْتِ أَبِي، كُنْتُ رَاعِيًا غَنَمَ أَبِي. يَدَايَ صَنَعَتَا الْأًرْغُنَ، وَأَصَابِعِي أَلِفَتْ الْمِزْمَارَ. هَلِّلُويَا. مَنْ هُوَ الَّذِي يُخَبِّرُ سَيِّدِي، هُوَ الرَّبُّ الَّذِي يَسْتَجِيبُ لِلَّذِينَ يَصْرُخُونَ إِلَيْهِ. هُوَ أَرْسَلَ مَلاَكَهُ، وَحَمَلَنِي مِنْ غَنَمِ أَبِي وَمَسَحَنِي بِدُهْنِ مَسْحَتِهِ. هَلِّلُويَا. إِخْوَتِي حِسَانٌ وَهُمْ أَكْبَرُ مِنِّي وَالرَّبُّ لَمْ يُسَرُّ بِهِمْ. خَرَجْتُ لِلِقَاءِ الْفِلِسْطِينِيُّ فَلَعَنَنِي بِأَوْثَانِهِ. وَلكِنْ أَنَا سَلَلْتُ سَيْفَهُ الَّذِي كَانَ بِيَدِهِ، وَقَطَعْتُ رَأْسَهُ. وَنَزَعْتُ الْعَارَ عَنْ بَنِي إِسْرَائِيلَ. هَلِّلُويَا."
          );
          location.reload();
        }
        
    </script>
    <script>
        function download() {
            var textToSave = `
            المزمور الأول
            1 :1 طوبى للرجل الذي لم يسلك في مشورة الاشرار و في طريق الخطاة لم يقف و في مجلس المستهزئين لم يجلس
            
            1 :2 لكن في ناموس الرب مسرته و في ناموسه يلهج نهارا و ليلا
            
            1 :3 فيكون كشجرة مغروسة عند مجاري المياه التي تعطي ثمرها في اوانه و ورقها لا يذبل و كل ما يصنعه ينجح
            
            1 :4 ليس كذلك الاشرار لكنهم كالعصافة التي تذريها الريح
            
            1 :5 لذلك لا تقوم الاشرار في الدين و لا الخطاة في جماعة الابرار
            
            1 :6 لان الرب يعلم طريق الابرار اما طريق الاشرار فتهلك
            
            
            
            
            
            المزمور الثاني
            2 :1 لماذا ارتجت الامم و تفكر الشعوب في الباطل
            
            2 :2 قام ملوك الأرض و تامر الرؤساء معا على الرب و على مسيحه قائلين
            
            2 :3 لنقطع قيودهما و لنطرح عنا ربطهما
            
            2 :4 الساكن في السماوات يضحك الرب يستهزئ بهم
            
            2 :5 حينئذ يتكلم عليهم بغضبه و يرجفهم بغيظه
            
            2 :6 اما أنا فقد مسحت ملكي على صهيون جبل قدسي
            
            2 :7 اني اخبر من جهة قضاء الرب قال لي أنت ابني أنا اليوم ولدتك
            
            2 :8 اسالني فاعطيك الامم ميراثا لك و اقاصي الأرض ملكا لك
            
            2 :9 تحطمهم بقضيب من حديد مثل اناء خزاف تكسرهم
            
            2 :10 فالآن يا ايها الملوك تعقلوا تادبوا يا قضاة الأرض
            
            2 :11 اعبدوا الرب بخوف و اهتفوا برعدة
            
            2 :12 قبلوا الابن لئلا يغضب فتبيدوا من الطريق لانه عن قليل يتقد غضبه طوبى لجميع المتكلين عليه
            
            
            
            
            
            المزمور الثالث
            3 :0 مزمور لداود حينما هرب من وجه ابشالوم ابنه
            
            3 :1 يا رب ما أكثر مضايقي كثيرون قائمون علي
            
            3 :2 كثيرون يقولون لنفسي ليس له خلاص بالهه سلاه
            
            3 :3 اما أنت يا رب فترس لي مجدي و رافع راسي
            
            3 :4 بصوتي إلى الرب اصرخ فيجيبني من جبل قدسه سلاه
            
            3 :5 أنا اضطجعت و نمت استيقظت لان الرب يعضدني
            
            3 :6 لا اخاف من ربوات الشعوب المصطفين علي من حولي
            
            3 :7 قم يا رب خلصني يا الهي لانك ضربت كل اعدائي على الفك هشمت اسنان الاشرار
            
            3 :8 للرب الخلاص على شعبك بركتك سلاه
            
            
            
            
            
            المزمور الرابع
            4 :0 لامام المغنين على ذوات الاوتار مزمور لداود
            
            4 :1 عند دعائي استجب لي يا اله بري في الضيق رحبت لي تراءف علي و اسمع صلاتي
            
            4 :2 يا بني البشر حتى متى يكون مجدي عارا حتى متى تحبون الباطل و تبتغون الكذب سلاه
            
            4 :3 فاعلموا ان الرب قد ميز تقيه الرب يسمع عندما ادعوه
            
            4 :4 ارتعدوا و لا تخطئوا تكلموا في قلوبكم على مضاجعكم و اسكتوا سلاه
            
            4 :5 اذبحوا ذبائح البر و توكلوا على الرب
            
            4 :6 كثيرون يقولون من يرينا خيرا ارفع علينا نور وجهك يا رب
            
            4 :7 جعلت سرورا في قلبي أعظم من سرورهم إذ كثرت حنطتهم و خمرهم
            
            4 :8 بسلامة اضطجع بل أيضا انام لانك أنت يا رب منفردا في طمانينة تسكنني
            
            
            
            
            
            المزمور الخامس
            5 :0 لامام المغنين على ذوات النفخ مزمور لداود
            
            5 :1 لكلماتي اصغ يا رب تامل صراخي
            
            5 :2 استمع لصوت دعائي يا ملكي و الهي لأني إليك أصلي
            
            5 :3 يا رب بالغداة تسمع صوتي بالغداة اوجه صلاتي نحوك و انتظر
            
            5 :4 لانك أنت لست الها يسر بالشر لا يساكنك الشرير
            
            5 :5 لا يقف المفتخرون قدام عينيك ابغضت كل فاعلي الإثم
            
            5 :6 تهلك المتكلمين بالكذب رجل الدماء و الغش يكرهه الرب
            
            5 :7 اما أنا فبكثرة رحمتك ادخل بيتك أسجد في هيكل قدسك بخوفك
            
            5 :8 يا رب اهدني إلى برك بسبب اعدائي سهل قدامي طريقك
            
            5 :9 لانه ليس في أفواههم صدق جوفهم هوة حلقهم قبر مفتوح ألسنتهم صقلوها
            
            5 :10 دنهم يا الله ليسقطوا من مؤامراتهم بكثرة ذنوبهم طوح بهم لانهم تمردوا عليك
            
            5 :11 و يفرح جميع المتكلين عليك إلى الابد يهتفون و تظللهم و يبتهج بك محبو اسمك
            
            5 :12 لانك أنت تبارك الصديق يا رب كانه بترس تحيطه بالرضا
            
            
            
            
            
            المزمور السادس
            6 :0 لامام المغنين على ذوات الاوتار على القرار مزمور لداود
            
            6 :1 يا رب لا توبخني بغضبك و لا تؤدبني بغيظك
            
            6 :2 ارحمني يا رب لأني ضعيف اشفني يا رب لان عظامي قد رجفت
            
            6 :3 و نفسي قد ارتاعت جدا و أنت يا رب فحتى متى
            
            6 :4 عد يا رب نج نفسي خلصني من اجل رحمتك
            
            6 :5 لانه ليس في الموت ذكرك في الهاوية من يحمدك
            
            6 :6 تعبت في تنهدي اعوم في كل ليلة سريري بدموعي اذوب فراشي
            
            6 :7 ساخت من الغم عيني شاخت من كل مضايقي
            
            6 :8 ابعدوا عني يا جميع فاعلي الإثم لان الرب قد سمع صوت بكائي
            
            6 :9 سمع الرب تضرعي الرب يقبل صلاتي
            
            6 :10 جميع اعدائي يخزون و يرتاعون جدا يعودون و يخزون بغتة
            
            
            
            
            
            المزمور السابع
            7 :0 شجوية لداود غناها للرب بسبب كلام كوش البنياميني
            
            7 :1 يا رب الهي عليك توكلت خلصني من كل الذين يطردونني و نجني
            
            7 :2 لئلا يفترس كاسد نفسي هاشما اياها و لا منقذ
            
            7 :3 يا رب الهي ان كنت قد فعلت هذا ان وجد ظلم في يدي
            
            7 :4 ان كافات مسالمي شرا و سلبت مضايقي بلا سبب
            
            7 :5 فليطارد عدو نفسي و ليدركها و ليدس إلى الأرض حياتي و ليحط إلى التراب مجدي سلاه
            
            7 :6 قم يا رب بغضبك ارتفع على سخط مضايقي و انتبه لي بالحق اوصيت
            
            7 :7 و مجمع القبائل يحيط بك فعد فوقها إلى العلى
            
            7 :8 الرب يدين الشعوب اقض لي يا رب كحقي و مثل كمالي الذي في
            
            7 :9 لينته شر الاشرار و ثبت الصديق فان فاحص القلوب و الكلى الله البار
            
            7 :10 ترسي عند الله مخلص مستقيمي القلوب
            
            7 :11 الله قاض عادل و اله يسخط في كل يوم
            
            7 :12 ان لم يرجع يحدد سيفه مد قوسه و هيأها
            
            7 :13 و سدد نحوه الة الموت يجعل سهامه ملتهبة
            
            7 :14 هوذا يمخض بالاثم حمل تعبا و ولد كذبا
            
            7 :15 كرا جبا حفره فسقط في الهوة التي صنع
            
            7 :16 يرجع تعبه على رأسه و على هامته يهبط ظلمه
            
            7 :17 احمد الرب حسب بره و ارنم لاسم الرب العلي
            
            
            
            
            
            المزمور الثامن
            8 :0 لامام المغنين على الجتية مزمور لداود
            
            8 :1 ايها الرب سيدنا ما امجد اسمك في كل الأرض حيث جعلت جلالك فوق السماوات
            
            8 :2 من افواه الاطفال و الرضع اسست حمدا بسبب اضدادك لتسكيت عدو و منتقم
            
            8 :3 إذا ارى سماواتك عمل اصابعك القمر و النجوم التي كونتها
            
            8 :4 فمن هو الانسان حتى تذكره و ابن ادم حتى تفتقده
            
            8 :5 و تنقصه قليلا عن الملائكة و بمجد و بهاء تكلله
            
            8 :6 تسلطه على أعمال يديك جعلت كل شيء تحت قدميه
            
            8 :7 الغنم و البقر جميعا و بهائم البر أيضا
            
            8 :8 و طيور السماء و سمك البحر السالك في سبل المياه
            
            8 :9 ايها الرب سيدنا ما امجد اسمك في كل الأرض
            
            
            
            
            
            المزمور التاسع
            9 :0 لامام المغنين على موت الابن مزمور لداود
            
            9 :1 احمد الرب بكل قلبي احدث بجميع عجائبك
            
            9 :2 افرح و ابتهج بك ارنم لاسمك ايها العلي
            
            9 :3 عند رجوع اعدائي إلى خلف يسقطون و يهلكون من قدام وجهك
            
            9 :4 لانك اقمت حقي و دعواي جلست على الكرسي قاضيا عادلا
            
            9 :5 انتهرت الامم اهلكت الشرير محوت اسمهم إلى الدهر و الابد
            
            9 :6 العدو تم خرابه إلى الابد و هدمت مدنا باد ذكره نفسه
            
            9 :7 اما الرب فالى الدهر يجلس ثبت للقضاء كرسيه
            
            9 :8 و هو يقضي للمسكونة بالعدل يدين الشعوب بالاستقامة
            
            9 :9 و يكون الرب ملجا للمنسحق ملجا في ازمنة الضيق
            
            9 :10 و يتكل عليك العارفون اسمك لانك لم تترك طالبيك يا رب
            
            9 :11 رنموا للرب الساكن في صهيون اخبروا بين الشعوب بافعاله
            
            9 :12 لانه مطالب بالدماء ذكرهم لم ينس صراخ المساكين
            
            9 :13 ارحمني يا رب انظر مذلتي من مبغضي يا رافعي من ابواب الموت
            
            9 :14 لكي احدث بكل تسابيحك في ابواب ابنة صهيون مبتهجا بخلاصك
            
            9 :15 تورطت الامم في الحفرة التي عملوها في الشبكة التي اخفوها انتشبت ارجلهم
            
            9 :16 معروف هو الرب قضاء امضى الشرير يعلق بعمل يديه ضرب الاوتار سلاه
            
            9 :17 الاشرار يرجعون إلى الهاوية كل الامم الناسين الله
            
            9 :18 لانه لا ينسى المسكين إلى الابد رجاء البائسين لا يخيب إلى الدهر
            
            9 :19 قم يا رب لا يعتز الانسان لتحاكم الامم قدامك
            
            9 :20 يا رب اجعل عليهم رعبا ليعلم الامم انهم بشر سلاه
            
            
            
            
            
            المزمور العاشر
            10 :1 يا رب لماذا تقف بعيدا لماذا تختفي في ازمنة الضيق
            
            10 :2 في كبرياء الشرير يحترق المسكين يؤخذون بالمؤامرة التي فكروا بها
            
            10 :3 لان الشرير يفتخر بشهوات نفسه و الخاطف يجدف يهين الرب
            
            10 :4 الشرير حسب تشامخ انفه يقول لا يطالب كل افكاره انه لا اله
            
            10 :5 تثبت سبله في كل حين عالية احكامك فوقه كل اعدائه ينفث فيهم
            
            10 :6 قال في قلبه لا اتزعزع من دور إلى دور بلا سوء
            
            10 :7 فمه مملوء لعنة و غشا و ظلما تحت لسانه مشقة و إثم
            
            10 :8 يجلس في مكمن الديار في المختفيات يقتل البريء عيناه تراقبان المسكين
            
            10 :9 يكمن في المختفى كاسد في عريسه يكمن ليخطف المسكين يخطف المسكين بجذبه في شبكته
            
            10 :10 فتنسحق و تنحني و تسقط المساكين ببراثنه
            
            10 :11 قال في قلبه ان الله قد نسي حجب وجهه لا يرى إلى الابد
            
            10 :12 قم يا رب يا الله ارفع يدك لا تنس المساكين
            
            10 :13 لماذا اهان الشرير الله لماذا قال في قلبه لا تطالب
            
            10 :14 قد رايت لانك تبصر المشقة و الغم لتجازي بيدك إليك يسلم المسكين امره أنت صرت معين اليتيم
            
            10 :15 احطم ذراع الفاجر و الشرير تطلب شره و لا تجده
            
            10 :16 الرب ملك إلى الدهر و الابد بادت الامم من ارضه
            
            10 :17 تاوه الودعاء قد سمعت يا رب تثبت قلوبهم تميل اذنك
            
            10 :18 لحق اليتيم و المنسحق لكي لا يعود أيضا يرعبهم انسان من الأرض
            
            
            
            
            
            المزمور الحادي عشر
            11 :0 لامام المغنين لداود
            
            11 :1 على الرب توكلت كيف تقولون لنفسي اهربوا إلى جبالكم كعصفور
            
            11 :2 لانه هوذا الاشرار يمدون القوس فوقوا السهم في الوتر ليرموا في الدجى مستقيمي القلوب
            
            11 :3 إذا انقلبت الاعمدة فالصديق ماذا يفعل
            
            11 :4 الرب في هيكل قدسه الرب في السماء كرسيه عيناه تنظران اجفانه تمتحن بني ادم
            
            11 :5 الرب يمتحن الصديق اما الشرير و محب الظلم فتبغضه نفسه
            
            11 :6 يمطر على الاشرار فخاخا نارا و كبريتا و ريح السموم نصيب كاسهم
            
            11 :7 لان الرب عادل و يحب العدل المستقيم يبصر وجهه
            
            
            
            
            
            المزمور الثاني عشر
            12 :0 لامام المغنين على القرار مزمور لداود
            
            12 :1 خلص يا رب لانه قد انقرض التقي لانه قد انقطع الامناء من بني البشر
            
            12 :2 يتكلمون بالكذب كل واحد مع صاحبه بشفاه ملقة بقلب فقلب يتكلمون
            
            12 :3 يقطع الرب جميع الشفاه الملقة و اللسان المتكلم بالعظائم
            
            12 :4 الذين قالوا بالسنتنا نتجبر شفاهنا معنا من هو سيد علينا
            
            12 :5 من اغتصاب المساكين من صرخة البائسين الآن أقوم يقول الرب اجعل في وسع الذي ينفث فيه
            
            12 :6 كلام الرب كلام نقي كفضة مصفاه في بوطة في الأرض ممحوصة سبع مرات
            
            12 :7 أنت يا رب تحفظهم تحرسهم من هذا الجيل إلى الدهر
            
            12 :8 الاشرار يتمشون من كل ناحية عند ارتفاع الارذال بين الناس
            
            
            
            
            
            المزمور الثالث عشر
            13 :0 لامام المغنين مزمور لداود
            
            13 :1 إلى متى يا رب تنساني كل النسيان إلى متى تحجب وجهك عني
            
            13 :2 إلى متى اجعل هموما في نفسي و حزنا في قلبي كل يوم إلى متى يرتفع عدوي علي
            
            13 :3 انظر و استجب لي يا رب الهي انر عيني لئلا انام نوم الموت
            
            13 :4 لئلا يقول عدوي قد قويت عليه لئلا يهتف مضايقي باني تزعزعت
            
            13 :5 اما أنا فعلى رحمتك توكلت يبتهج قلبي بخلاصك
            
            13 :6 اغني للرب لانه احسن إلي
            
            
            
            
            
            المزمور الرابع عشر
            14 :0 لامام المغنين لداود
            
            14 :1 قال الجاهل في قلبه ليس اله فسدوا و رجسوا بافعالهم ليس من يعمل صلاحا
            
            14 :2 الرب من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله
            
            14 :3 الكل قد زاغوا معا فسدوا ليس من يعمل صلاحا ليس و لا واحد
            
            14 :4 ألم يعلم كل فاعلي الإثم الذين ياكلون شعبي كما ياكلون الخبز و الرب لم يدعوا
            
            14 :5 هناك خافوا خوفا لان الله في الجيل البار
            
            14 :6 راي المسكين ناقضتم لان الرب ملجاه
            
            14 :7 ليت من صهيون خلاص إسرائيل عند رد الرب سبي شعبه يهتف يعقوب و يفرح إسرائيل
            
            
            
            
            
            المزمور الخامس عشر
            15 :0 مزمور لداود
            
            15 :1 يا رب من ينزل في مسكنك من يسكن في جبل قدسك
            
            15 :2 السالك بالكمال و العامل الحق و المتكلم بالصدق في قلبه
            
            15 :3 الذي لا يشي بلسانه و لا يصنع شرا بصاحبه و لا يحمل تعييرا على قريبه
            
            15 :4 و الرذيل محتقر في عينيه و يكرم خائفي الرب يحلف للضرر و لا يغير
            
            15 :5 فضته لا يعطيها بالربا و لا ياخذ الرشوة على البريء الذي يصنع هذا لا يتزعزع إلى الدهر
            
            
            
            
            
            المزمور السادس عشر
            16 :0 مذهبة لداود
            
            16 :1 احفظني يا الله لأني عليك توكلت
            
            16 :2 قلت للرب أنت سيدي خيري لا شيء غيرك
            
            16 :3 القديسون الذين في الأرض و الافاضل كل مسرتي بهم
            
            16 :4 تكثر اوجاعهم الذين اسرعوا وراء آخر لا اسكب سكائبهم من دم و لا اذكر اسماءهم بشفتي
            
            16 :5 الرب نصيب قسمتي و كاسي أنت قابض قرعتي
            
            16 :6 حبال وقعت لي في النعماء فالميراث حسن عندي
            
            16 :7 ابارك الرب الذي نصحني و أيضا بالليل تنذرني كليتاي
            
            16 :8 جعلت الرب امامي في كل حين لانه عن يميني فلا اتزعزع
            
            16 :9 لذلك فرح قلبي و ابتهجت روحي جسدي أيضا يسكن مطمئنا
            
            16 :10 لانك لن تترك نفسي في الهاوية لن تدع تقيك يرى فسادا
            
            16 :11 تعرفني سبيل الحياة امامك شبع سرور في يمينك نعم إلى الابد
            
            
            
            
            المزمور السابع عشر
            17 :0 صلاة لداود
            
            17 :1 اسمع يا رب للحق انصت إلى صراخي اصغ إلى صلاتي من شفتين بلا غش
            
            17 :2 من قدامك يخرج قضائي عيناك تنظران المستقيمات
            
            17 :3 جربت قلبي تعهدته ليلا محصتني لا تجد في ذموما لا يتعدى فمي
            
            17 :4 من جهة أعمال الناس فبكلام شفتيك أنا تحفظت من طرق المعتنف
            
            17 :5 تمسكت خطواتي باثارك فما زلت قدماي
            
            17 :6 أنا دعوتك لانك تستجيب لي يا الله امل اذنك إلي اسمع كلامي
            
            17 :7 ميز مراحمك يا مخلص المتكلين عليك بيمينك من المقاومين
            
            17 :8 احفظني مثل حدقة العين بظل جناحيك استرني
            
            17 :9 من وجه الاشرار الذين يخربونني اعدائي بالنفس الذين يكتنفونني
            
            17 :10 قلبهم السمين قد اغلقوا بافواههم قد تكلموا بالكبرياء
            
            17 :11 في خطواتنا الآن قد احاطوا بنا نصبوا اعينهم ليزلقونا إلى الأرض
            
            17 :12 مثله مثل الاسد القرم إلى الافتراس و كالشبل الكامن في عريسه
            
            17 :13 قم يا رب تقدمه اصرعه نج نفسي من الشرير بسيفك
            
            17 :14 من الناس بيدك يا رب من اهل الدنيا نصيبهم في حياتهم بذخائرك تملا بطونهم يشبعون اولادا و يتركون فضالتهم لاطفالهم
            
            17 :15 اما أنا فبالبر انظر وجهك اشبع إذا استيقظت بشبهك
            
            
            
            
            
            المزمور الثامن عشر
            18 :0 لامام المغنين لعبد الرب داود الذي كلم الرب بكلام هذا النشيد في اليوم الذي انقذه فيه الرب من ايدي كل اعدائه و من يد شاول فقال
            
            18 :1 احبك يا رب يا قوتي
            
            18 :2 الرب صخرتي و حصني و منقذي الهي صخرتي به احتمي ترسي و قرن خلاصي و ملجاي
            
            18 :3 ادعوا الرب الحميد فاتخلص من اعدائي
            
            18 :4 اكتنفتني حبال الموت و سيول الهلاك افزعتني
            
            18 :5 حبال الهاوية حاقت بي اشراك الموت انتشبت بي
            
            18 :6 في ضيقي دعوت الرب و إلى الهي صرخت فسمع من هيكله صوتي و صراخي قدامه دخل اذنيه
            
            18 :7 فارتجت الأرض و ارتعشت اسس الجبال ارتعدت و ارتجت لانه غضب
            
            18 :8 صعد دخان من انفه و نار من فمه اكلت جمر اشتعلت منه
            
            18 :9 طاطا السماوات و نزل و ضباب تحت رجليه
            
            18 :10 ركب على كروب و طار و هف على اجنحة الرياح
            
            18 :11 جعل الظلمة ستره حوله مظلته ضباب المياه و ظلام الغمام
            
            18 :12 من الشعاع قدامه عبرت سحبه برد و جمر نار
            
            18 :13 ارعد الرب من السماوات و العلي اعطى صوته بردا و جمر نار
            
            18 :14 أرسل سهامه فشتتهم و بروقا كثيرة فازعجهم
            
            18 :15 فظهرت اعماق المياه و انكشفت اسس المسكونة من زجرك يا رب من نسمة ريح انفك
            
            18 :16 أرسل من العلى فاخذني نشلني من مياه كثيرة
            
            18 :17 انقذني من عدوي القوي و من مبغضي لانهم اقوى مني
            
            18 :18 اصابوني في يوم بليتي و كان الرب سندي
            
            18 :19 اخرجني إلى الرحب خلصني لانه سر بي
            
            18 :20 يكافئني الرب حسب بري حسب طهارة يدي يرد لي
            
            18 :21 لأني حفظت طرق الرب و لم اعص الهي
            
            18 :22 لان جميع احكامه امامي و فرائضه لم ابعدها عن نفسي
            
            18 :23 و اكون كاملا معه و اتحفظ من اثمي
            
            18 :24 فيرد الرب لي كبري و كطهارة يدي أمام عينيه
            
            18 :25 مع الرحيم تكون رحيما مع الرجل الكامل تكون كاملا
            
            18 :26 مع الطاهر تكون طاهرا و مع الاعوج تكون ملتويا
            
            18 :27 لانك أنت تخلص الشعب البائس و الاعين المرتفعة تضعها
            
            18 :28 لانك أنت تضيء سراجي الرب الهي ينير ظلمتي
            
            18 :29 لأني بك اقتحمت جيشا و بالهي تسورت اسوارا
            
            18 :30 الله طريقه كامل قول الرب نقي ترس هو لجميع المحتمين به
            
            18 :31 لانه من هو اله غير الرب و من هو صخرة سوى الهنا
            
            18 :32 الاله الذي ينطقني بالقوة و يصير طريقي كاملا
            
            18 :33 الذي يجعل رجلي كالايل و على مرتفعاتي يقيمني
            
            18 :34 الذي يعلم يدي القتال فتحنى بذراعي قوس من نحاس
            
            18 :35 و تجعل لي ترس خلاصك و يمينك تعضدني و لطفك يعظمني
            
            18 :36 توسع خطواتي تحتي فلم تتقلقل عقباي
            
            18 :37 اتبع اعدائي فادركهم و لا ارجع حتى افنيهم
            
            18 :38 اسحقهم فلا يستطيعون القيام يسقطون تحت رجلي
            
            18 :39 تنطقني بقوة للقتال تصرع تحتي القائمين علي
            
            18 :40 و تعطيني اقفية اعدائي و مبغضي افنيهم
            
            18 :41 يصرخون و لا مخلص إلى الرب فلا يستجيب لهم
            
            18 :42 فاسحقهم كالغبار قدام الريح مثل طين الاسواق اطرحهم
            
            18 :43 تنقذني من مخاصمات الشعب تجعلني رأسا للامم شعب لم اعرفه يتعبد لي
            
            18 :44 من سماع الاذن يسمعون لي بنو الغرباء يتذللون لي
            
            18 :45 بنو الغرباء يبلون و يزحفون من حصونهم
            
            18 :46 حي هو الرب و مبارك صخرتي و مرتفع اله خلاصي
            
            18 :47 الاله المنتقم لي و الذي يخضع الشعوب تحتي
            
            18 :48 منجي من اعدائي رافعي أيضا فوق القائمين علي من الرجل الظالم تنقذني
            
            18 :49 لذلك احمدك يا رب في الامم و ارنم لاسمك
            
            18 :50 برج خلاص لملكه و الصانع رحمة لمسيحه لداود و نسله إلى الابد
            
            
            
            
            
            المزمور التاسع عشر
            19 :0 لامام المغنين مزمور لداود
            
            19 :1 السماوات تحدث بمجد الله و الفلك يخبر بعمل يديه
            
            19 :2 يوم إلى يوم يذيع كلاما و ليل إلى ليل يبدي علما
            
            19 :3 لا قول و لا كلام لا يسمع صوتهم
            
            19 :4 في كل الأرض خرج منطقهم و إلى اقصى المسكونة كلماتهم جعل للشمس مسكنا فيها
            
            19 :5 و هي مثل العروس الخارج من حجلته يبتهج مثل الجبار للسباق في الطريق
            
            19 :6 من اقصى السماوات خروجها و مدارها إلى اقاصيها و لا شيء يختفي من حرها
            
            19 :7 ناموس الرب كامل يرد النفس شهادات الرب صادقة تصير الجاهل حكيما
            
            19 :8 وصايا الرب مستقيمة تفرح القلب امر الرب طاهر ينير العينين
            
            19 :9 خوف الرب نقي ثابت إلى الابد احكام الرب حق عادلة كلها
            
            19 :10 اشهى من الذهب و الابريز الكثير و احلى من العسل و قطر الشهاد
            
            19 :11 أيضا عبدك يحذر بها و في حفظها ثواب عظيم
            
            19 :12 السهوات من يشعر بها من الخطايا المستترة ابرئني
            
            19 :13 أيضا من المتكبرين احفظ عبدك فلا يتسلطوا علي حينئذ اكون كاملا و اتبرا من ذنب عظيم
            
            19 :14 لتكن اقوال فمي و فكر قلبي مرضية امامك يا رب صخرتي و وليي
            
            
            
            
            
            المزمور العشرون
            20 :0 لامام المغنين مزمور لداود
            
            20 :1 ليستجب لك الرب في يوم الضيق ليرفعك اسم اله يعقوب
            
            20 :2 ليرسل لك عونا من قدسه و من صهيون ليعضدك
            
            20 :3 ليذكر كل تقدماتك و يستسمن محرقاتك سلاه
            
            20 :4 ليعطك حسب قلبك و يتمم كل رايك
            
            20 :5 نترنم بخلاصك و باسم الهنا نرفع رايتنا ليكمل الرب كل سؤلك
            
            20 :6 الآن عرفت ان الرب مخلص مسيحه يستجيبه من سماء قدسه بجبروت خلاص يمينه
            
            20 :7 هؤلاء بالمركبات و هؤلاء بالخيل اما نحن فاسم الرب الهنا نذكر
            
            20 :8 هم جثوا و سقطوا اما نحن فقمنا و انتصبنا
            
            20 :9 يا رب خلص ليستجب لنا الملك في يوم دعائنا
            
            
            
            
            
            المزمور الحادى والعشرون
            21 :0 لامام المغنين مزمور لداود
            
            21 :1 يا رب بقوتك يفرح الملك و بخلاصك كيف لا يبتهج جدا
            
            21 :2 شهوة قلبه اعطيته و ملتمس شفتيه لم تمنعه سلاه
            
            21 :3 لانك تتقدمه ببركات خير وضعت على رأسه تاجا من ابريز
            
            21 :4 حياة سالك فاعطيته طول الأيام إلى الدهر و الابد
            
            21 :5 عظيم مجده بخلاصك جلالا و بهاء تضع عليه
            
            21 :6 لانك جعلته بركات إلى الابد تفرحه ابتهاجا امامك
            
            21 :7 لان الملك يتوكل على الرب و بنعمة العلي لا يتزعزع
            
            21 :8 تصيب يدك جميع اعدائك يمينك تصيب كل مبغضيك
            
            21 :9 تجعلهم مثل تنور نار في زمان حضورك الرب بسخطه يبتلعهم و تاكلهم النار
            
            21 :10 تبيد ثمرهم من الأرض و ذريتهم من بين بني ادم
            
            21 :11 لانهم نصبوا عليك شرا تفكروا بمكيدة لم يستطيعوها
            
            21 :12 لانك تجعلهم يتولون تفوق السهام على اوتارك تلقاء وجوههم
            
            21 :13 ارتفع يا رب بقوتك نرنم و ننغم بجبروتك
            
            
            
            
            
            المزمور الثاني والعشرون
            22 :0 لامام المغنين على ايلة الصبح مزمور لداود
            
            22 :1 الهي الهي لماذا تركتني بعيدا عن خلاصي عن كلام زفيري
            
            22 :2 الهي في النهار أدعو فلا تستجيب في الليل أدعو فلا هدو لي
            
            22 :3 و أنت القدوس الجالس بين تسبيحات إسرائيل
            
            22 :4 عليك اتكل اباؤنا اتكلوا فنجيتهم
            
            22 :5 إليك صرخوا فنجوا عليك اتكلوا فلم يخزوا
            
            22 :6 اما أنا فدودة لا انسان عار عند البشر و محتقر الشعب
            
            22 :7 كل الذين يرونني يستهزئون بي يفغرون الشفاه و ينغضون الراس قائلين
            
            22 :8 اتكل على الرب فلينجه لينقذه لانه سر به
            
            22 :9 لانك أنت جذبتني من البطن جعلتني مطمئنا على ثديي أمي
            
            22 :10 عليك القيت من الرحم من بطن أمي أنت الهي
            
            22 :11 لا تتباعد عني لان الضيق قريب لانه لا معين
            
            22 :12 احاطت بي ثيران كثيرة اقوياء باشان اكتنفتني
            
            22 :13 فغروا علي أفواههم كاسد مفترس مزمجر
            
            22 :14 كالماء انسكبت انفصلت كل عظامي صار قلبي كالشمع قد ذاب في وسط أمعائي
            
            22 :15 يبست مثل شقفة قوتي و لصق لساني بحنكي و إلى تراب الموت تضعني
            
            22 :16 لانه قد احاطت بي كلاب جماعة من الاشرار اكتنفتني ثقبوا يدي و رجلي
            
            22 :17 احصي كل عظامي و هم ينظرون و يتفرسون في
            
            22 :18 يقسمون ثيابي بينهم و على لباسي يقترعون
            
            22 :19 اما أنت يا رب فلا تبعد يا قوتي اسرع إلى نصرتي
            
            22 :20 انقذ من السيف نفسي من يد الكلب وحيدتي
            
            22 :21 خلصني من فم الاسد و من قرون بقر الوحش استجب لي
            
            22 :22 اخبر باسمك اخوتي في وسط الجماعة اسبحك
            
            22 :23 يا خائفي الرب سبحوه مجدوه يا معشر ذرية يعقوب و اخشوه يا زرع إسرائيل جميعا
            
            22 :24 لانه لم يحتقر و لم يرذل مسكنة المسكين و لم يحجب وجهه عنه بل عند صراخه إليه استمع
            
            22 :25 من قبلك تسبيحي في الجماعة العظيمة اوفي بنذوري قدام خائفيه
            
            22 :26 يأكل الودعاء و يشبعون يسبح الرب طالبوه تحيا قلوبكم إلى الابد
            
            22 :27 تذكر و ترجع إلى الرب كل اقاصي الأرض و تسجد قدامك كل قبائل الامم
            
            22 :28 لان للرب الملك و هو المتسلط على الامم
            
            22 :29 اكل و سجد كل سميني الأرض قدامه يجثو كل من ينحدر إلى التراب و من لم يحي نفسه
            
            22 :30 الذرية تتعبد له يخبر عن الرب الجيل الاتي
            
            22 :31 ياتون و يخبرون ببره شعبا سيولد بانه قد فعل
            
            
            
            
            
            المزمور الثالث والعشرون
            23 :0 مزمور لداود
            
            23 :1 الرب راعي فلا يعوزني شيء
            
            23 :2 في مراع خضر يربضني إلى مياه الراحة يوردني
            
            23 :3 يرد نفسي يهديني إلى سبل البر من اجل اسمه
            
            23 :4 أيضا إذا سرت في وادي ظل الموت لا اخاف شرا لانك أنت معي عصاك و عكازك هما يعزيانني
            
            23 :5 ترتب قدامي مائدة تجاه مضايقي مسحت بالدهن راسي كاسي ريا
            
            23 :6 إنما خير و رحمة يتبعانني كل أيام حياتي و اسكن في بيت الرب إلى مدى الأيام
            
            
            
            
            
            المزمور الرابع والعشرون
            24 :0 لداود مزمور
            
            24 :1 للرب الأرض و ملؤها المسكونة و كل الساكنين فيها
            
            24 :2 لانه على البحار اسسها و على الانهار ثبتها
            
            24 :3 من يصعد إلى جبل الرب و من يقوم في موضع قدسه
            
            24 :4 الطاهر اليدين و النقي القلب الذي لم يحمل نفسه إلى الباطل و لا حلف كذبا
            
            24 :5 يحمل بركة من عند الرب و برا من اله خلاصه
            
            24 :6 هذا هو الجيل الطالبه الملتمسون وجهك يا يعقوب سلاه
            
            24 :7 ارفعن ايتها الارتاج رؤوسكن و ارتفعن ايتها الابواب الدهريات فيدخل ملك المجد
            
            24 :8 من هو هذا ملك المجد الرب القدير الجبار الرب الجبار في القتال
            
            24 :9 ارفعن ايتها الارتاج رؤوسكن و ارفعنها ايتها الابواب الدهريات فيدخل ملك المجد
            
            24 :10 من هو هذا ملك المجد رب الجنود هو ملك المجد سلاه
            
            
            
            
            
            المزمور الخامس والعشرون
            25 :0 لداود
            
            25 :1 إليك يا رب ارفع نفسي
            
            25 :2 يا الهي عليك توكلت فلا تدعني اخزى لا تشمت بي اعدائي
            
            25 :3 أيضا كل منتظريك لا يخزوا ليخز الغادرون بلا سبب
            
            25 :4 طرقك يا رب عرفني سبلك علمني
            
            25 :5 دربني في حقك و علمني لانك أنت اله خلاصي اياك انتظرت اليوم كله
            
            25 :6 اذكر مراحمك يا رب و احساناتك لانها منذ الازل هي
            
            25 :7 لا تذكر خطايا صباي و لا معاصي كرحمتك اذكرني أنت من اجل جودك يا رب
            
            25 :8 الرب صالح و مستقيم لذلك يعلم الخطاة الطريق
            
            25 :9 يدرب الودعاء في الحق و يعلم الودعاء طرقه
            
            25 :10 كل سبل الرب رحمة و حق لحافظي عهده و شهاداته
            
            25 :11 من اجل اسمك يا رب اغفر اثمي لانه عظيم
            
            25 :12 من هو الانسان الخائف الرب يعلمه طريقا يختاره
            
            25 :13 نفسه في الخير تبيت و نسله يرث الأرض
            
            25 :14 سر الرب لخائفيه و عهده لتعليمهم
            
            25 :15 عيناي دائما إلى الرب لانه هو يخرج رجلي من الشبكة
            
            25 :16 التفت إلي و ارحمني لأني وحد و مسكين أنا
            
            25 :17 افرج ضيقات قلبي من شدائدي اخرجني
            
            25 :18 انظر إلى ذلي و تعبي و اغفر جميع خطاياي
            
            25 :19 انظر إلى اعدائي لانهم قد كثروا و بغضا ظلما ابغضوني
            
            25 :20 احفظ نفسي و انقذني لا اخزى لأني عليك توكلت
            
            25 :21 يحفظني الكمال و الاستقامة لأني انتظرتك
            
            25 :22 يا الله افدي إسرائيل من كل ضيقاته
            
            
            
            
            
            المزمور السادس والعشرون
            26 :0 لداود
            
            26 :1 اقض لي يا رب لأني بكمالي سلكت و على الرب توكلت بلا تقلقل
            
            26 :2 جربني يا رب و امتحني صف كليتي و قلبي
            
            26 :3 لان رحمتك أمام عيني و قد سلكت بحقك
            
            26 :4 لم اجلس مع اناس السوء و مع الماكرين لا ادخل
            
            26 :5 ابغضت جماعة الاثمة و مع الاشرار لا اجلس
            
            26 :6 اغسل يدي في النقاوة فاطوف بمذبحك يا رب
            
            26 :7 لاسمع بصوت الحمد و احدث بجميع عجائبك
            
            26 :8 يا رب احببت محل بيتك و موضع مسكن مجدك
            
            26 :9 لا تجمع مع الخطاة نفسي و لا مع رجال الدماء حياتي
            
            26 :10 الذين في أيديهم رذيلة و يمينهم ملانة رشوة
            
            26 :11 اما أنا فبكمالي اسلك افدني و ارحمني
            
            26 :12 رجلي واقفة على سهل في الجماعات ابارك الرب
            
            
            
            
            
            المزمور السابع والعشرون
            27 :0 لداود
            
            27 :1 الرب نوري و خلاصي ممن اخاف الرب حصن حياتي ممن ارتعب
            
            27 :2 عندما اقترب إلي الاشرار لياكلوا لحمي مضايقي و اعدائي عثروا و سقطوا
            
            27 :3 ان نزل علي جيش لا يخاف قلبي ان قامت علي حرب ففي ذلك أنا مطمئن
            
            27 :4 واحدة سالت من الرب و اياها التمس ان اسكن في بيت الرب كل أيام حياتي لكي انظر إلى جمال الرب و اتفرس في هيكله
            
            27 :5 لانه يخبئني في مظلته في يوم الشر يسترني بستر خيمته على صخرة يرفعني
            
            27 :6 و الآن يرتفع راسي على اعدائي حولي فاذبح في خيمته ذبائح الهتاف اغني و ارنم للرب
            
            27 :7 استمع يا رب بصوتي أدعو فارحمني و استجب لي
            
            27 :8 لك قال قلبي قلت اطلبوا وجهي وجهك يا رب اطلب
            
            27 :9 لا تحجب وجهك عني لا تخيب بسخط عبدك قد كنت عوني فلا ترفضني و لا تتركني يا اله خلاصي
            
            27 :10 ان ابي و أمي قد تركاني و الرب يضمني
            
            27 :11 علمني يا رب طريقك و اهدني في سبيل مستقيم بسبب اعدائي
            
            27 :12 لا تسلمني إلى مرام مضايقي لانه قد قام علي شهود زور و نافث ظلم
            
            27 :13 لولا انني امنت بان ارى جود الرب في ارض الاحياء
            
            27 :14 انتظر الرب ليتشدد و ليتشجع قلبك و انتظر الرب
            
            
            
            
            
            المزمور الثامن والعشرون
            28 :0 لداود
            
            28 :1 إليك يا رب اصرخ يا صخرتي لا تتصامم من جهتي لئلا تسكت عني فاشبه الهابطين في الجب
            
            28 :2 استمع صوت تضرعي إذ استغيث بك و ارفع يدي إلى محراب قدسك
            
            28 :3 لا تجذبني مع الاشرار و مع فعلة الإثم المخاطبين اصحابهم بالسلام و الشر في قلوبهم
            
            28 :4 اعطهم حسب فعلهم و حسب شر اعمالهم حسب صنع أيديهم اعطهم رد عليهم معاملتهم
            
            28 :5 لانهم لم ينتبهوا إلى افعال الرب و لا إلى أعمال يديه يهدمهم و لا يبنيهم
            
            28 :6 مبارك الرب لانه سمع صوت تضرعي
            
            28 :7 الرب عزي و ترسي عليه اتكل قلبي فانتصرت و يبتهج قلبي و باغنيتي احمده
            
            28 :8 الرب عز لهم و حصن خلاص مسيحه هو
            
            28 :9 خلص شعبك و بارك ميراثك و ارعهم و احملهم إلى الابد
            
            
            
            
            
            المزمور التاسع والعشرون
            29 :0 مزمور لداود
            
            29 :1 قدموا للرب يا ابناء الله قدموا للرب مجدا و عزا
            
            29 :2 قدموا للرب مجد اسمه اسجدوا للرب في زينة مقدسة
            
            29 :3 صوت الرب على المياه اله المجد ارعد الرب فوق المياه الكثيرة
            
            29 :4 صوت الرب بالقوة صوت الرب بالجلال
            
            29 :5 صوت الرب مكسر الارز و يكسر الرب ارز لبنان
            
            29 :6 و يمرحها مثل عجل لبنان و سريون مثل فرير البقر الوحشي
            
            29 :7 صوت الرب يقدح لهب نار
            
            29 :8 صوت الرب يزلزل البرية يزلزل الرب برية قادش
            
            29 :9 صوت الرب يولد الايل و يكشف الوعور و في هيكله الكل قائل مجد
            
            29 :10 الرب بالطوفان جلس و يجلس الرب ملكا إلى الابد
            
            29 :11 الرب يعطي عزا لشعبه الرب يبارك شعبه بالسلام
            
            
            
            
            المزمور الثلاثون
            30 :0 مزمور اغنية تدشين البيت لداود
            
            30 :1 اعظمك يا رب لانك نشلتني و لم تشمت بي اعدائي
            
            30 :2 يا رب الهي استغثت بك فشفيتني
            
            30 :3 يا رب اصعدت من الهاوية نفسي احييتني من بين الهابطين في الجب
            
            30 :4 رنموا للرب يا اتقياءه و احمدوا ذكر قدسه
            
            30 :5 لان للحظة غضبه حياة في رضاه عند المساء يبيت البكاء و في الصباح ترنم
            
            30 :6 و أنا قلت في طمانينتي لا اتزعزع إلى الابد
            
            30 :7 يا رب برضاك ثبت لجبلي عزا حجبت وجهك فصرت مرتاعا
            
            30 :8 إليك يا رب اصرخ و إلى السيد اتضرع
            
            30 :9 ما الفائدة من دمي إذا نزلت إلى الحفرة هل يحمدك التراب هل يخبر بحقك
            
            30 :10 استمع يا رب و ارحمني يا رب كن معينا لي
            
            30 :11 حولت نوحي إلى رقص لي حللت مسحي و منطقتني فرحا
            
            30 :12 لكي تترنم لك روحي و لا تسكت يا رب الهي إلى الابد احمدك
            
            
            
            
            
            المزمور الحادي والثلاثون
            31 :0 لامام المغنين مزمور لداود
            
            31 :1 عليك يا رب توكلت لا تدعني اخزى مدى الدهر بعدلك نجني
            
            31 :2 امل إلي اذنك سريعا انقذني كن لي صخرة حصن بيت ملجا لتخليصي
            
            31 :3 لان صخرتي و معقلي أنت من اجل اسمك تهديني و تقودني
            
            31 :4 اخرجني من الشبكة التي خباوها لي لانك أنت حصني
            
            31 :5 في يدك استودع روحي فديتني يا رب اله الحق
            
            31 :6 ابغضت الذين يراعون اباطيل كاذبة اما أنا فعلى الرب توكلت
            
            31 :7 ابتهج و افرح برحمتك لانك نظرت إلى مذلتي و عرفت في الشدائد نفسي
            
            31 :8 و لم تحبسني في يد العدو بل اقمت في الرحب رجلي
            
            31 :9 ارحمني يا رب لأني في ضيق خسفت من الغم عيني نفسي و بطني
            
            31 :10 لان حياتي قد فنيت بالحزن و سنيني بالتنهد ضعفت بشقاوتي قوتي و بليت عظامي
            
            31 :11 عند كل اعدائي صرت عارا و عند جيراني بالكلية و رعبا لمعارفي الذين راوني خارجا هربوا عني
            
            31 :12 نسيت من القلب مثل الميت صرت مثل اناء متلف
            
            31 :13 لأني سمعت مذمة من كثيرين الخوف مستدير بي بمؤامرتهم معا علي تفكروا في اخذ نفسي
            
            31 :14 اما أنا فعليك توكلت يا رب قلت الهي أنت
            
            31 :15 في يدك اجالي نجني من يد اعدائي و من الذين يطردونني
            
            31 :16 اضئ بوجهك على عبدك خلصني برحمتك
            
            31 :17 يا رب لا تدعني اخزى لأني دعوتك ليخز الاشرار ليسكتوا في الهاوية
            
            31 :18 لتبكم شفاه الكذب المتكلمة على الصديق بوقاحة بكبرياء و استهانة
            
            31 :19 ما أعظم جودك الذي ذخرته لخائفيك و فعلته للمتكلين عليك تجاه بني البشر
            
            31 :20 تسترهم بستر وجهك من مكايد الناس تخفيهم في مظلة من مخاصمة الالسن
            
            31 :21 مبارك الرب لانه قد جعل عجبا رحمته لي في مدينة محصنة
            
            31 :22 و أنا قلت في حيرتي اني قد انقطعت من قدام عينيك و لكنك سمعت صوت تضرعي إذ صرخت إليك
            
            31 :23 احبوا الرب يا جميع اتقيائه الرب حافظ الامانة و مجاز بكثرة العامل بالكبرياء
            
            31 :24 لتتشدد و لتتشجع قلوبكم يا جميع المنتظرين الرب
            
            
            
            
            
            المزمور الثانى والثلاثون
            32 :0 لداود قصيدة
            
            32 :1 طوبى للذي غفر اثمه و سترت خطيته
            
            32 :2 طوبى لرجل لا يحسب له الرب خطية و لا في روحه غش
            
            32 :3 لما سكت بليت عظامي من زفيري اليوم كله
            
            32 :4 لان يدك ثقلت علي نهارا و ليلا تحولت رطوبتي إلى يبوسة القيظ سلاه
            
            32 :5 اعترف لك بخطيتي و لا اكتم اثمي قلت اعترف للرب بذنبي و أنت رفعت اثام خطيتي سلاه
            
            32 :6 لهذا يصلي لك كل تقي في وقت يجدك فيه عند غمارة المياه الكثيرة اياه لا تصيب
            
            32 :7 أنت ستر لي من الضيق تحفظني بترنم النجاة تكتنفني سلاه
            
            32 :8 اعلمك و ارشدك الطريق التي تسلكها انصحك عيني عليك
            
            32 :9 لا تكونوا كفرس أو بغل بلا فهم بلجام و زمام زينته يكم لئلا يدنو إليك
            
            32 :10 كثيرة هي نكبات الشرير اما المتوكل على الرب فالرحمة تحيط به
            
            32 :11 افرحوا بالرب و ابتهجوا يا ايها الصديقون و اهتفوا يا جميع المستقيمي القلوب
            
            
            
            
            المزمور الثالث والثلاثون
            33 :1 اهتفوا ايها الصديقون بالرب بالمستقيمين يليق التسبيح
            
            33 :2 احمدوا الرب بالعود بربابة ذات عشرة اوتار رنموا له
            
            33 :3 غنوا له اغنية جديدة احسنوا العزف بهتاف
            
            33 :4 لان كلمة الرب مستقيمة و كل صنعه بالامانة
            
            33 :5 يحب البر و العدل امتلات الأرض من رحمة الرب
            
            33 :6 بكلمة الرب صنعت السماوات و بنسمة فيه كل جنودها
            
            33 :7 يجمع كند امواه اليم يجعل اللجج في اهراء
            
            33 :8 لتخش الرب كل الأرض و منه ليخف كل سكان المسكونة
            
            33 :9 لانه قال فكان هو امر فصار
            
            33 :10 الرب ابطل مؤامرة الامم لاشى افكار الشعوب
            
            33 :11 اما مؤامرة الرب فالى الابد تثبت افكار قلبه إلى دور فدور
            
            33 :12 طوبى للامة التي الرب الهها الشعب الذي اختاره ميراثا لنفسه
            
            33 :13 من السماوات نظر الرب راى جميع بني البشر
            
            33 :14 من مكان سكناه تطلع إلى جميع سكان الأرض
            
            33 :15 المصور قلوبهم جميعا المنتبه إلى كل اعمالهم
            
            33 :16 لن يخلص الملك بكثرة الجيش الجبار لا ينقذ بعظم القوة
            
            33 :17 باطل هو الفرس لاجل الخلاص و بشدة قوته لا ينجي
            
            33 :18 هوذا عين الرب على خائفيه الراجين رحمته
            
            33 :19 لينجي من الموت انفسهم و ليستحييهم في الجوع
            
            33 :20 انفسنا انتظرت الرب معونتنا و ترسنا هو
            
            33 :21 لانه به تفرح قلوبنا لاننا على اسمه القدوس اتكلنا
            
            33 :22 لتكن يا رب رحمتك علينا حسبما انتظرناك
            
            
            
            
            المزمور الرابع والثلاثون
            34 :0 لداود عندما غير عقله قدام ابيمالك فطرده فانطلق
            
            34 :1 ابارك الرب في كل حين دائما تسبيحه في فمي
            
            34 :2 بالرب تفتخر نفسي يسمع الودعاء فيفرحون
            
            34 :3 عظموا الرب معي و لنعل اسمه معا
            
            34 :4 طلبت إلى الرب فاستجاب لي و من كل مخاوفي انقذني
            
            34 :5 نظروا إليه و استناروا و وجوههم لم تخجل
            
            34 :6 هذا المسكين صرخ و الرب استمعه و من كل ضيقاته خلصه
            
            34 :7 ملاك الرب حال حول خائفيه و ينجيهم
            
            34 :8 ذوقوا و انظروا ما اطيب الرب طوبى للرجل المتوكل عليه
            
            34 :9 اتقوا الرب يا قديسيه لانه ليس عوز لمتقيه
            
            34 :10 الاشبال احتاجت و جاعت و اما طالبو الرب فلا يعوزهم شيء من الخير
            
            34 :11 هلم ايها البنون استمعوا إلي فاعلمكم مخافة الرب
            
            34 :12 من هو الانسان الذي يهوى الحياة و يحب كثرة الأيام ليرى خيرا
            
            34 :13 صن لسانك عن الشر و شفتيك عن التكلم بالغش
            
            34 :14 حد عن الشر و اصنع الخير اطلب السلامة و اسع وراءها
            
            34 :15 عينا الرب نحو الصديقين و اذناه إلى صراخهم
            
            34 :16 وجه الرب ضد عاملي الشر ليقطع من الأرض ذكرهم
            
            34 :17 اولئك صرخوا و الرب سمع و من كل شدائدهم انقذهم
            
            34 :18 قريب هو الرب من المنكسري القلوب و يخلص المنسحقي الروح
            
            34 :19 كثيرة هي بلايا الصديق و من جميعها ينجيه الرب
            
            34 :20 يحفظ جميع عظامه واحد منها لا ينكسر
            
            34 :21 الشر يميت الشرير و مبغضو الصديق يعاقبون
            
            34 :22 الرب فادي نفوس عبيده و كل من اتكل عليه لا يعاقب
            
            
            
            
            
            المزمور الخامس والثلاثون
            35 :0 لداود
            
            35 :1 خاصم يا رب مخاصمي قاتل مقاتلي
            
            35 :2 امسك مجنا و ترسا و انهض إلى معونتي
            
            35 :3 و اشرع رمحا و صد تلقاء مطاردي قل لنفسي خلاصك أنا
            
            35 :4 ليخز و ليخجل الذين يطلبون نفسي ليرتد إلى الوراء و يخجل المتفكرون باساءتي
            
            35 :5 ليكونوا مثل العصافة قدام الريح و ملاك الرب داحرهم
            
            35 :6 ليكن طريقهم ظلاما و زلقا و ملاك الرب طاردهم
            
            35 :7 لانهم بلا سبب اخفوا لي هوة شبكتهم بلا سبب حفروا لنفسي
            
            35 :8 لتاته التهلكة و هو لا يعلم و لتنشب به الشبكة التي اخفاها و في التهلكة نفسها ليقع
            
            35 :9 اما نفسي فتفرح بالرب و تبتهج بخلاصه
            
            35 :10 جميع عظامي تقول يا رب من مثلك المنقذ المسكين ممن هو اقوى منه و الفقير و البائس من سالبه
            
            35 :11 شهود زور يقومون و عما لم اعلم يسالونني
            
            35 :12 يجازونني عن الخير شرا ثكلا لنفسي
            
            35 :13 اما أنا ففي مرضهم كان لباسي مسحا اذللت بالصوم نفسي و صلاتي إلى حضني ترجع
            
            35 :14 كانه قريب كانه اخي كنت اتمشى كمن ينوح على امه انحنيت حزينا
            
            35 :15 و لكنهم في ظلعي فرحوا و اجتمعوا اجتمعوا علي شاتمين و لم اعلم مزقوا و لم يكفوا
            
            35 :16 بين الفجار المجان لاجل كعكة حرقوا علي اسنانهم
            
            35 :17 يا رب إلى متى تنظر استرد نفسي من تهلكاتهم وحيدتي من الاشبال
            
            35 :18 احمدك في الجماعة الكثيرة في شعب عظيم اسبحك
            
            35 :19 لا يشمت بي الذين هم اعدائي باطلا و لا يتغامز بالعين الذين يبغضونني بلا سبب
            
            35 :20 لانهم لا يتكلمون بالسلام و على الهادئين في الأرض يفتكرون بكلام مكر
            
            35 :21 فغروا علي أفواههم قالوا هه هه قد رأت اعيننا
            
            35 :22 قد رايت يا رب لا تسكت يا سيد لا تبتعد عني
            
            35 :23 استيقظ و انتبه إلى حكمي يا الهي و سيدي إلى دعواي
            
            35 :24 اقض لي حسب عدلك يا رب الهي فلا يشمتوا بي
            
            35 :25 لا يقولوا في قلوبهم هه شهوتنا لا يقولوا قد ابتلعناه
            
            35 :26 ليخز و ليخجل معا الفرحون بمصيبتي ليلبس الخزي و الخجل المتعظمون علي
            
            35 :27 ليهتف و يفرح المبتغون حقي و ليقولوا دائما ليتعظم الرب المسرور بسلامة عبده
            
            35 :28 و لساني يلهج بعدلك اليوم كله بحمدك
            
            
            
            
            
            المزمور السادس والثلاثون
            36 :0 لامام المغنين لعبد الرب داود
            
            36 :1 نامة معصية الشرير في داخل قلبي ان ليس خوف الله أمام عينيه
            
            36 :2 لانه ملق نفسه لنفسه من جهة وجدان اثمه و بغضه
            
            36 :3 كلام فمه إثم و غش كف عن التعقل عن عمل الخير
            
            36 :4 يتفكر بالاثم على مضجعه يقف في طريق غير صالح لا يرفض الشر
            
            36 :5 يا رب في السماوات رحمتك امانتك إلى الغمام
            
            36 :6 عدلك مثل جبال الله و احكامك لجة عظيمة الناس و البهائم تخلص يا رب
            
            36 :7 ما اكرم رحمتك يا الله فبنو البشر في ظل جناحيك يحتمون
            
            36 :8 يروون من دسم بيتك و من نهر نعمك تسقيهم
            
            36 :9 لان عندك ينبوع الحياة بنورك نرى نورا
            
            36 :10 ادم رحمتك للذين يعرفونك و عدلك للمستقيمي القلب
            
            36 :11 لا تاتني رجل الكبرياء و يد الاشرار لا تزحزحني
            
            36 :12 هناك سقط فاعلو الإثم دحروا فلم يستطيعوا القيام
            
            
            
            
            
            المزمور السابع والثلاثون
            37 :0 لداود
            
            37 :1 لا تغر من الاشرار و لا تحسد عمال الإثم
            
            37 :2 فانهم مثل الحشيش سريعا يقطعون و مثل العشب الاخضر يذبلون
            
            37 :3 اتكل على الرب و افعل الخير اسكن الأرض و ارع الامانة
            
            37 :4 و تلذذ بالرب فيعطيك سؤل قلبك
            
            37 :5 سلم للرب طريقك و اتكل عليه و هو يجري
            
            37 :6 و يخرج مثل النور برك و حقك مثل الظهيرة
            
            37 :7 انتظر الرب و اصبر له و لا تغر من الذي ينجح في طريقه من الرجل المجري مكايد
            
            37 :8 كف عن الغضب و اترك السخط و لا تغر لفعل الشر
            
            37 :9 لان عاملي الشر يقطعون و الذين ينتظرون الرب هم يرثون الارض
            
            37 :10 بعد قليل لا يكون الشرير تطلع في مكانه فلا يكون
            
            37 :11 اما الودعاء فيرثون الأرض و يتلذذون في كثرة السلامة
            
            37 :12 الشرير يتفكر ضد الصديق و يحرق عليه أسنانه
            
            37 :13 الرب يضحك به لانه راى ان يومه ات
            
            37 :14 الاشرار قد سلوا السيف و مدوا قوسهم لرمي المسكين و الفقير لقتل المستقيم طريقهم
            
            37 :15 سيفهم يدخل في قلبهم و قسيهم تنكسر
            
            37 :16 القليل الذي للصديق خير من ثروة اشرار كثيرين
            
            37 :17 لان سواعد الاشرار تنكسر و عاضد الصديقين الرب
            
            37 :18 الرب عارف أيام الكملة و ميراثهم إلى الابد يكون
            
            37 :19 لا يخزون في زمن السوء و في أيام الجوع يشبعون
            
            37 :20 لان الاشرار يهلكون و اعداء الرب كبهاء المراعي فنوا كالدخان فنوا
            
            37 :21 الشرير يستقرض و لا يفي و اما الصديق فيتراف و يعطي
            
            37 :22 لان المباركين منه يرثون الأرض و الملعونين منه يقطعون
            
            37 :23 من قبل الرب تتثبت خطوات الانسان و في طريقه يسر
            
            37 :24 إذا سقط لا ينطرح لان الرب مسند يده
            
            37 :25 أيضا كنت فتى و قد شخت و لم ار صديقا تخلي عنه و لا ذرية له تلتمس خبزا
            
            37 :26 اليوم كله يتراف و يقرض و نسله للبركة
            
            37 :27 حد عن الشر و افعل الخير و اسكن إلى الابد
            
            37 :28 لان الرب يحب الحق و لا يتخلى عن اتقيائه إلى الابد يحفظون اما نسل الاشرار فينقطع
            
            37 :29 الصديقون يرثون الأرض و يسكنونها إلى الابد
            
            37 :30 فم الصديق يلهج بالحكمة و لسانه ينطق بالحق
            
            37 :31 شريعة الهه في قلبه لا تتقلقل خطواته
            
            37 :32 الشرير يراقب الصديق محاولا ان يميته
            
            37 :33 الرب لا يتركه في يده و لا يحكم عليه عند محاكمته
            
            37 :34 انتظر الرب و احفظ طريقه فيرفعك لترث الأرض إلى انقراض الاشرار تنظر
            
            37 :35 قد رايت الشرير عاتيا وارفا مثل شجرة شارقة ناضرة
            
            37 :36 عبر فاذا هو ليس بموجود و التمسته فلم يوجد
            
            37 :37 لاحظ الكامل و انظر المستقيم فان العقب لانسان السلامة
            
            37 :38 اما الاشرار فيبادون جميعا عقب الاشرار ينقطع
            
            37 :39 اما خلاص الصديقين فمن قبل الرب حصنهم في زمان الضيق
            
            37 :40 و يعينهم الرب و ينجيهم ينقذهم من الاشرار و يخلصهم لانهم احتموا به
            
            
            
            
            المزمور الثامن والثلاثون
            38 :0 مزمور لداود للتذكير
            
            38 :1 يا رب لا توبخني بسخطك و لا تؤدبني بغيظك
            
            38 :2 لان سهامك قد انتشبت في و نزلت علي يدك
            
            38 :3 ليست في جسدي صحة من جهة غضبك ليست في عظامي سلامة من جهة خطيتي
            
            38 :4 لان اثامي قد طمت فوق راسي كحمل ثقيل اثقل مما احتمل
            
            38 :5 قد انتنت قاحت حبر ضربي من جهة حماقتي
            
            38 :6 لويت انحنيت إلى الغاية اليوم كله ذهبت حزينا
            
            38 :7 لان خاصرتي قد امتلاتا احتراقا و ليست في جسدي صحة
            
            38 :8 خدرت و انسحقت إلى الغاية كنت ائن من زفير قلبي
            
            38 :9 يا رب امامك كل تاوهي و تنهدي ليس بمستور عنك
            
            38 :10 قلبي خافق قوتي فارقتني و نور عيني أيضا ليس معي
            
            38 :11 احبائي و اصحابي يقفون تجاه ضربتي و اقاربي وقفوا بعيدا
            
            38 :12 و طالبو نفسي نصبوا شركا و الملتمسون لي الشر تكلموا بالمفاسد و اليوم كله يلهجون بالغش
            
            38 :13 و اما أنا فكاصم لا اسمع و كابكم لا يفتح فاه
            
            38 :14 و اكون مثل انسان لا يسمع و ليس في فمه حجة
            
            38 :15 لأني لك يا رب صبرت أنت تستجيب يا رب الهي
            
            38 :16 لأني قلت لئلا يشمتوا بي عندما زلت قدمي تعظموا علي
            
            38 :17 لانني موشك ان اظلع و وجعي مقابلي دائما
            
            38 :18 لانني اخبر باثمي و اغتم من خطيتي
            
            38 :19 و اما اعدائي فاحياء عظموا و الذين يبغضونني ظلما كثروا
            
            38 :20 و المجازون عن الخير بشر يقاومونني لاجل اتباعي الصلاح
            
            38 :21 لا تتركني يا رب يا الهي لا تبعد عني
            
            38 :22 اسرع إلى معونتي يا رب يا خلاصي
            
            
            
            
            
            المزمور التاسع والثلاثون
            39 :0 لامام المغنين ليدوثون مزمور لداود
            
            39 :1 قلت اتحفظ لسبيلي من الخطا بلساني احفظ لفمي كمامة فيما الشرير مقابلي
            
            39 :2 صمت صمتا سكت عن الخير فتحرك وجعي
            
            39 :3 حمي قلبي في جوفي عند لهجي اشتعلت النار تكلمت بلساني
            
            39 :4 عرفني يا رب نهايتي و مقدار ايامي كم هي فاعلم كيف أنا زائل
            
            39 :5 هوذا جعلت ايامي اشبارا و عمري كلا شيء قدامك إنما نفخة كل انسان قد جعل سلاه
            
            39 :6 إنما كخيال يتمشى الانسان إنما باطلا يضجون يذخر ذخائر و لا يدري من يضمها
            
            39 :7 و الآن ماذا انتظرت يا رب رجائي فيك هو
            
            39 :8 من كل معاصي نجني لا تجعلني عارا عند الجاهل
            
            39 :9 صمت لا افتح فمي لانك أنت فعلت
            
            39 :10 ارفع عني ضربك من مهاجمة يدك أنا قد فنيت
            
            39 :11 بتاديبات ان ادبت الانسان من اجل اثمه افنيت مثل العث مشتهاه إنما كل انسان نفخة سلاه
            
            39 :12 استمع صلاتي يا رب و اصغ إلى صراخي لا تسكت عن دموعي لأني أنا غريب عندك نزيل مثل جميع ابائي
            
            39 :13 اقتصر عني فاتبلج قبل ان اذهب فلا اوجد
            
            
            
            
            
            المزمور الأربعون
            40 :0 لامام المغنين مزمور لداود
            
            40 :1 انتظارا انتظرت الرب فمال إلي و سمع صراخي
            
            40 :2 و اصعدني من جب الهلاك من طين الحماة و اقام على صخرة رجلي ثبت خطواتي
            
            40 :3 و جعل في فمي ترنيمة جديدة تسبيحة لالهنا كثيرون يرون و يخافون و يتوكلون على الرب
            
            40 :4 طوبى للرجل الذي جعل الرب متكله و لم يلتفت إلى الغطاريس و المنحرفين إلى الكذب
            
            40 :5 كثيرا ما جعلت أنت ايها الرب الهي عجائبك و افكارك من جهتنا لا تقوم لديك لاخبرن و اتكلمن بها زادت عن ان تعد
            
            40 :6 بذبيحة و تقدمة لم تسر اذني فتحت محرقة و ذبيحة خطية لم تطلب
            
            40 :7 حينئذ قلت هانذا جئت بدرج الكتاب مكتوب عني
            
            40 :8 ان افعل مشيئتك يا الهي سررت و شريعتك في وسط احشائي
            
            40 :9 بشرت ببر في جماعة عظيمة هوذا شفتاي لم امنعهما أنت يا رب علمت
            
            40 :10 لم اكتم عدلك في وسط قلبي تكلمت بامانتك و خلاصك لم اخف رحمتك و حقك عن الجماعة العظيمة
            
            40 :11 اما أنت يا رب فلا تمنع رافتك عني تنصرني رحمتك و حقك دائما
            
            40 :12 لان شرورا لا تحصى قد اكتنفتني حاقت بي اثامي و لا استطيع ان ابصر كثرت أكثر من شعر راسي و قلبي قد تركني
            
            40 :13 ارتض يا رب بان تنجيني يا رب إلى معونتي اسرع
            
            40 :14 ليخز و ليخجل معا الذين يطلبون نفسي لاهلاكها ليرتد إلى الوراء و ليخز المسرورون باذيتي
            
            40 :15 ليستوحش من اجل خزيهم القائلون لي هه هه
            
            40 :16 ليبتهج و يفرح بك جميع طالبيك ليقل ابدا محبو خلاصك يتعظم الرب
            
            40 :17 اما أنا فمسكين و بائس الرب يهتم بي عوني و منقذي أنت يا الهي لا تبطئ
            
            
            
            
            المزمور الحادي والأربعون
            41 :0 لامام المغنين مزمور لداود
            
            41 :1 طوبى للذي ينظر إلى المسكين في يوم الشر ينجيه الرب
            
            41 :2 الرب يحفظه و يحييه يغتبط في الأرض و لا يسلمه إلى مرام اعدائه
            
            41 :3 الرب يعضده و هو على فراش الضعف مهدت مضجعه كله في مرضه
            
            41 :4 أنا قلت يا رب ارحمني اشف نفسي لأني قد اخطات إليك
            
            41 :5 اعدائي يتقاولون علي بشر متى يموت و يبيد اسمه
            
            41 :6 و ان دخل ليراني يتكلم بالكذب قلبه يجمع لنفسه اثما يخرج في الخارج يتكلم
            
            41 :7 كل مبغضي يتناجون معا علي علي تفكروا باذيتي
            
            41 :8 يقولون امر رديء قد انسكب عليه حيث اضطجع لا يعود يقوم
            
            41 :9 أيضا رجل سلامتي الذي وثقت به اكل خبزي رفع علي عقبه
            
            41 :10 اما أنت يا رب فارحمني و اقمني فاجازيهم
            
            41 :11 بهذا علمت انك سررت بي انه لم يهتف علي عدوي
            
            41 :12 اما أنا فبكمالي دعمتني و اقمتني قدامك إلى الابد
            
            41 :13 مبارك الرب اله إسرائيل من الازل و إلى الابد امين فامين
            
            
            
            
            
            المزمور الثاني والأربعون
            42 :0 لامام المغنين قصيدة لبني قورح
            
            42 :1 كما يشتاق الايل إلى جداول المياه هكذا تشتاق نفسي إليك يا الله
            
            42 :2 عطشت نفسي إلى الله إلى الاله الحي متى اجيء و اتراءى قدام الله
            
            42 :3 صارت لي دموعي خبزا نهارا و ليلا إذ قيل لي كل يوم أين الهك
            
            42 :4 هذه اذكرها فاسكب نفسي علي لأني كنت امر مع الجماع اتدرج معهم إلى بيت الله بصوت ترنم و حمد جمهور معيد
            
            42 :5 لماذا أنت منحنية يا نفسي و لماذا تئنين في ارتجي الله لأني بعد احمده لاجل خلاص وجهه
            
            42 :6 يا الهي نفسي منحنية في لذلك اذكرك من ارض الأردن و جبال حرمون من جبل مصعر
            
            42 :7 غمر ينادي غمرا عند صوت ميازيبك كل تياراتك و لججك طمت علي
            
            42 :8 بالنهار يوصي الرب رحمته و بالليل تسبيحه عندي صلاة لاله حياتي
            
            42 :9 أقول لله صخرتي لماذا نسيتني لماذا اذهب حزينا من مضايقة العدو
            
            42 :10 بسحق في عظامي عيرني مضايقي بقولهم لي كل يوم أين الهك
            
            42 :11 لماذا أنت منحنية يا نفسي و لماذا تئنين في ترجي الله لأني بعد احمده خلاص وجهي و الهي
            
            
            
            
            
            المزمور الثالث والأربعون
            43 :1 اقض لي يا الله و خاصم مخاصمتي مع امة غير راحمة و من انسان غش و ظلم نجني
            
            43 :2 لانك أنت اله حصني لماذا رفضتني لماذا اتمشى حزينا من مضايقة العدو
            
            43 :3 أرسل نورك و حقك هما يهديانني و ياتيان بي إلى جبل قدسك و إلى مساكنك
            
            43 :4 فاتي إلى مذبح الله إلى الله بهجة فرحي و احمدك بالعود يا الله الهي
            
            43 :5 لماذا أنت منحنية يا نفسي و لماذا تئنين في ترجي الله لأني بعد احمده خلاص وجهي و الهي
            
            
            
            
            
            المزمور الرابع والأربعون
            44 :0 لامام المغنين لبني قورح قصيدة
            
            44 :1 اللهم باذاننا قد سمعنا اباؤنا اخبرونا بعمل عملته في ايامهم في أيام القدم
            
            44 :2 أنت بيدك استاصلت الامم و غرستهم حطمت شعوبا و مددتهم
            
            44 :3 لانه ليس بسيفهم امتلكوا الأرض و لا ذراعهم خلصتهم لكن يمينك و ذراعك و نور وجهك لانك رضيت عنهم
            
            44 :4 أنت هو ملكي يا الله فامر بخلاص يعقوب
            
            44 :5 بك ننطح مضايقينا باسمك ندوس القائمين علينا
            
            44 :6 لأني على قوسي لا اتكل و سيفي لا يخلصني
            
            44 :7 لانك أنت خلصتنا من مضايقينا و اخزيت مبغضينا
            
            44 :8 بالله نفتخر اليوم كله و اسمك نحمد إلى الدهر سلاه
            
            44 :9 لكنك قد رفضتنا و اخجلتنا و لا تخرج مع جنودنا
            
            44 :10 ترجعنا إلى الوراء عن العدو و مبغضونا نهبوا لانفسهم
            
            44 :11 جعلتنا كالضان اكلا ذريتنا بين الامم
            
            44 :12 بعت شعبك بغير مال و ما ربحت بثمنهم
            
            44 :13 تجعلنا عارا عند جيراننا هزاة و سخرة للذين حولنا
            
            44 :14 تجعلنا مثلا بين الشعوب لانغاض الراس بين الامم
            
            44 :15 اليوم كله خجلي امامي و خزي وجهي قد غطاني
            
            44 :16 من صوت المعير و الشاتم من وجه عدو و منتقم
            
            44 :17 هذا كله جاء علينا و ما نسيناك و لا خنا في عهدك
            
            44 :18 لم يرتد قلبنا إلى وراء و لا مالت خطواتنا عن طريقك
            
            44 :19 حتى سحقتنا في مكان التنانين و غطيتنا بظل الموت
            
            44 :20 ان نسينا اسم الهنا أو بسطنا ايدينا إلى اله غريب
            
            44 :21 افلا يفحص الله عن هذا لانه هو يعرف خفيات القلب
            
            44 :22 لاننا من اجلك نمات اليوم كله قد حسبنا مثل غنم للذبح
            
            44 :23 استيقظ لماذا تتغافى يا رب انتبه لا ترفض إلى الابد
            
            44 :24 لماذا تحجب وجهك و تنسى مذلتنا و ضيقنا
            
            44 :25 لان انفسنا منحنية إلى التراب لصقت في الأرض بطوننا
            
            44 :26 قم عونا لنا و افدنا من اجل رحمتك
            
            
            
            
            
            المزمور الخامس والأربعون
            45 :0 لامام المغنين على السوسن لبني قورح قصيدة ترنيمة محبة
            
            45 :1 فاض قلبي بكلام صالح متكلم أنا بانشائي للملك لساني قلم كاتب ماهر
            
            45 :2 أنت ابرع جمالا من بني البشر انسكبت النعمة على شفتيك لذلك باركك الله إلى الابد
            
            45 :3 تقلد سيفك على فخذك ايها الجبار جلالك و بهاءك
            
            45 :4 و بجلالك اقتحم اركب من اجل الحق و الدعة و البر فتريك يمينك مخاوف
            
            45 :5 نبلك المسنونة في قلب اعداء الملك شعوب تحتك يسقطون
            
            45 :6 كرسيك يا الله إلى دهر الدهور قضيب استقامة قضيب ملكك
            
            45 :7 احببت البر و ابغضت الإثم من اجل ذلك مسحك الله الهك بدهن الابتهاج أكثر من رفقائك
            
            45 :8 كل ثيابك مر و عود و سليخة من قصور العاج سرتك الاوتار
            
            45 :9 بنات ملوك بين حظياتك جعلت الملكة عن يمينك بذهب اوفير
            
            45 :10 اسمعي يا بنت و انظري و اميلي اذنك و انسي شعبك و بيت ابيك
            
            45 :11 فيشتهي الملك حسنك لانه هو سيدك فاسجدي له
            
            45 :12 و بنت صور اغنى الشعوب تترضى وجهك بهدية
            
            45 :13 كلها مجد ابنة الملك في خدرها منسوجة بذهب ملابسها
            
            45 :14 بملابس مطرزة تحضر إلى الملك في اثرها عذارى صاحباتها مقدمات إليك
            
            45 :15 يحضرن بفرح و ابتهاج يدخلن إلى قصر الملك
            
            45 :16 عوض عن ابائك يكون بنوك تقيمهم رؤساء في كل الأرض
            
            45 :17 اذكر اسمك في كل دور فدور من اجل ذلك تحمدك الشعوب إلى الدهر و الابد
            
            
            
            
            
            المزمور السادس والأربعون
            46 :0 لامام المغنين لبني قورح على الجواب ترنيمة
            
            46 :1 الله لنا ملجا و قوة عونا في الضيقات وجد شديدا
            
            46 :2 لذلك لا نخشى و لو تزحزحت الأرض و لو انقلبت الجبال إلى قلب البحار
            
            46 :3 تعج و تجيش مياهها تتزعزع الجبال بطموها سلاه
            
            46 :4 نهر سواقيه تفرح مدينة الله مقدس مساكن العلي
            
            46 :5 الله في وسطها فلن تتزعزع يعينها الله عند اقبال الصبح
            
            46 :6 عجت الامم تزعزعت الممالك اعطى صوته ذابت الأرض
            
            46 :7 رب الجنود معنا ملجانا اله يعقوب سلاه
            
            46 :8 هلموا انظروا أعمال الله كيف جعل خربا في الأرض
            
            46 :9 مسكن الحروب إلى اقصى الأرض يكسر القوس و يقطع الرمح المركبات يحرقها بالنار
            
            46 :10 كفوا و اعلموا اني أنا الله اتعالى بين الامم اتعالى في الأرض
            
            46 :11 رب الجنود معنا ملجانا اله يعقوب سلاه
            
            
            
            
            
            المزمور السابع والأربعون
            47 :0 لامام المغنين لبني قورح مزمور
            
            47 :1 يا جميع الامم صفقوا بالايادي اهتفوا لله بصوت الابتهاج
            
            47 :2 لان الرب علي مخوف ملك كبير على كل الأرض
            
            47 :3 يخضع الشعوب تحتنا و الامم تحت اقدامنا
            
            47 :4 يختار لنا نصيبنا فخر يعقوب الذي احبه سلاه
            
            47 :5 صعد الله بهتاف الرب بصوت الصور
            
            47 :6 رنموا لله رنموا رنموا لملكنا رنموا
            
            47 :7 لان الله ملك الأرض كلها رنموا قصيدة
            
            47 :8 ملك الله على الامم الله جلس على كرسي قدسه
            
            47 :9 شرفاء الشعوب اجتمعوا شعب اله إبراهيم لان لله مجان الأرض هو متعال جدا
            
            
            
            
            
            المزمور الثامن والأربعون
            48 :0 تسبيحة مزمور لبني قورح
            
            48 :1 عظيم هو الرب و حميد جدا في مدينة الهنا جبل قدسه
            
            48 :2 جميل الارتفاع فرح كل الأرض جبل صهيون فرح اقاصي الشمال مدينة الملك العظيم
            
            48 :3 الله في قصورها يعرف ملجا
            
            48 :4 لانه هوذا الملوك اجتمعوا مضوا جميعا
            
            48 :5 لما راوا بهتوا ارتاعوا فروا
            
            48 :6 اخذتهم الرعدة هناك و المخاض كوالدة
            
            48 :7 بريح شرقية تكسر سفن ترشيش
            
            48 :8 كما سمعنا هكذا رأينا في مدينة رب الجنود في مدينة الهنا الله يثبتها إلى الابد سلاه
            
            48 :9 ذكرنا يا الله رحمتك في وسط هيكلك
            
            48 :10 نظير اسمك يا الله تسبيحك إلى اقاصي الأرض يمينك ملانة برا
            
            48 :11 يفرح جبل صهيون تبتهج بنات يهوذا من اجل احكامك
            
            48 :12 طوفوا بصهيون و دوروا حولها عدوا ابراجها
            
            48 :13 ضعوا قلوبكم على متارسها تاملوا قصورها لكي تحدثوا بها جيلا آخر
            
            48 :14 لان الله هذا هو الهنا إلى الدهر و الابد هو يهدينا حتى إلى الموت
            
            
            
            
            
            المزمور التاسع والأربعون
            49 :0 لامام المغنين لبني قورح مزمور
            
            49 :1 اسمعوا هذا يا جميع الشعوب اصغوا يا جميع سكان الدنيا
            
            49 :2 عال و دون اغنياء و فقراء سواء
            
            49 :3 فمي يتكلم بالحكم و لهج قلبي فهم
            
            49 :4 اميل اذني إلى مثل و اوضح بعود لغزي
            
            49 :5 لماذا اخاف في أيام الشر عندما يحيط بي إثم متعقبي
            
            49 :6 الذين يتكلون على ثروتهم و بكثرة غناهم يفتخرون
            
            49 :7 الاخ لن يفدي الانسان فداء و لا يعطي الله كفارة عنه
            
            49 :8 و كريمة هي فدية نفوسهم فغلقت إلى الدهر
            
            49 :9 حتى يحيا إلى الابد فلا يرى القبر
            
            49 :10 بل يراه الحكماء يموتون كذلك الجاهل و البليد يهلكان و يتركان ثروتهما لاخرين
            
            49 :11 باطنهم ان بيوتهم إلى الابد مساكنهم إلى دور فدور ينادون باسمائهم في الاراضي
            
            49 :12 و الانسان في كرامة لا يبيت يشبه البهائم التي تباد
            
            49 :13 هذا طريقهم اعتمادهم و خلفاؤهم يرتضون باقوالهم سلاه
            
            49 :14 مثل الغنم للهاوية يساقون الموت يرعاهم و يسودهم المستقيمون غداة و صورتهم تبلى الهاوية مسكن لهم
            
            49 :15 إنما الله يفدي نفسي من يد الهاوية لانه ياخذني سلاه
            
            49 :16 لا تخش إذا استغنى انسان إذا زاد مجد بيته
            
            49 :17 لانه عند موته كله لا ياخذ لا ينزل وراءه مجده
            
            49 :18 لانه في حياته يبارك نفسه و يحمدونك إذا احسنت إلى نفسك
            
            49 :19 تدخل إلى جيل ابائه الذين لا يعاينون النور إلى الابد
            
            49 :20 انسان في كرامة و لا يفهم يشبه البهائم التي تباد
            
            
            
            
            المزمور الخمسون
            50 :0 مزمور لاساف
            
            50 :1 اله الالهة الرب تكلم و دعا الأرض من مشرق الشمس إلى مغربها
            
            50 :2 من صهيون كمال الجمال الله اشرق
            
            50 :3 يأتي الهنا و لا يصمت نار قدامه تاكل و حوله عاصف جدا
            
            50 :4 يدعو السماوات من فوق و الأرض إلى مداينة شعبه
            
            50 :5 اجمعوا إلي اتقيائي القاطعين عهدي على ذبيحة
            
            50 :6 و تخبر السماوات بعدله لان الله هو الديان سلاه
            
            50 :7 اسمع يا شعبي فاتكلم يا إسرائيل فاشهد عليك الله الهك انا
            
            50 :8 لا على ذبائحك اوبخك فان محرقاتك هي دائما قدامي
            
            50 :9 لا اخذ من بيتك ثورا و لا من حظائرك اعتدة
            
            50 :10 لان لي حيوان الوعر و البهائم على الجبال الالوف
            
            50 :11 قد علمت كل طيور الجبال و وحوش البرية عندي
            
            50 :12 ان جعت فلا أقول لك لان لي المسكونة و ملاها
            
            50 :13 هل اكل لحم الثيران أو اشرب دم التيوس
            
            50 :14 اذبح لله حمدا و اوف العلي نذورك
            
            50 :15 و ادعني في يوم الضيق انقذك فتمجدني
            
            50 :16 و للشرير قال الله ما لك تحدث بفرائضي و تحمل عهدي على فمك
            
            50 :17 و أنت قد ابغضت التاديب و القيت كلامي خلفك
            
            50 :18 إذا رايت سارقا وافقته و مع الزناة نصيبك
            
            50 :19 اطلقت فمك بالشر و لسانك يخترع غشا
            
            50 :20 تجلس تتكلم على اخيك لابن امك تضع معثرة
            
            50 :21 هذه صنعت و سكت ظننت اني مثلك اوبخك و اصف خطاياك أمام عينيك
            
            50 :22 افهموا هذا يا ايها الناسون الله لئلا افترسكم و لا منقذ
            
            50 :23 ذابح الحمد يمجدني و المقوم طريقه اريه خلاص الله
            
            
            
            
            
            المزمور الحادي والخمسون
            51 :0 لامام المغنين مزمور لداود عند ما جاء إليه ناثان النبي بعد ما دخل إلى بثشبع
            
            51 :1 ارحمني يا الله حسب رحمتك حسب كثرة رافتك امح معاصي
            
            51 :2 اغسلني كثيرا من اثمي و من خطيتي طهرني
            
            51 :3 لأني عارف بمعاصي و خطيتي امامي دائما
            
            51 :4 إليك وحدك اخطات و الشر قدام عينيك صنعت لكي تتبرر في اقوالك و تزكو في قضائك
            
            51 :5 هانذا بالاثم صورت و بالخطية حبلت بي أمي
            
            51 :6 ها قد سررت بالحق في الباطن ففي السريرة تعرفني حكمة
            
            51 :7 طهرني بالزوفا فاطهر اغسلني فابيض أكثر من الثلج
            
            51 :8 اسمعني سرورا و فرحا فتبتهج عظام سحقتها
            
            51 :9 استر وجهك عن خطاياي و امح كل اثامي
            
            51 :10 قلبا نقيا اخلق في يا الله و روحا مستقيما جدد في داخلي
            
            51 :11 لا تطرحني من قدام وجهك و روحك القدوس لا تنزعه مني
            
            51 :12 رد لي بهجة خلاصك و بروح منتدبة اعضدني
            
            51 :13 فاعلم الاثمة طرقك و الخطاة إليك يرجعون
            
            51 :14 نجني من الدماء يا الله اله خلاصي فيسبح لساني برك
            
            51 :15 يا رب افتح شفتي فيخبر فمي بتسبيحك
            
            51 :16 لانك لا تسر بذبيحة و الا فكنت اقدمها بمحرقة لا ترضى
            
            51 :17 ذبائح الله هي روح منكسرة القلب المنكسر و المنسحق يا الله لا تحتقره
            
            51 :18 احسن برضاك إلى صهيون ابن اسوار أورشليم
            
            51 :19 حينئذ تسر بذبائح البر محرقة و تقدمة تامة حينئذ يصعدون على مذبحك عجولا
            
            
            
            
            
            المزمور الثاني والخمسون
            52 :0 لامام المغنين قصيدة لداود عند ما جاء دواغ الادومي و اخبر شاول و قال له جاء داود إلى بيت اخيمالك
            
            52 :1 لماذا تفتخر بالشر ايها الجبار رحمة الله هي كل يوم
            
            52 :2 لسانك يخترع مفاسد كموسى مسنونة يعمل بالغش
            
            52 :3 احببت الشر أكثر من الخير الكذب أكثر من التكلم بالصدق سلاه
            
            52 :4 احببت كل كلام مهلك و لسان غش
            
            52 :5 أيضا يهدمك الله إلى الابد يخطفك و يقلعك من مسكنك و يستاصلك من ارض الاحياء سلاه
            
            52 :6 فيرى الصديقون و يخافون و عليه يضحكون
            
            52 :7 هوذا الانسان الذي لم يجعل الله حصنه بل اتكل على كثرة غناه و اعتز بفساده
            
            52 :8 اما أنا فمثل زيتونة خضراء في بيت الله توكلت على رحمة الله إلى الدهر و الابد
            
            52 :9 احمدك إلى الدهر لانك فعلت و انتظر اسمك فانه صالح قدام اتقيائك
            
            
            
            
            المزمور الثالث والخمسون
            53 :0 لامام المغنين على العود قصيدة لداود
            
            53 :1 قال الجاهل في قلبه ليس اله فسدوا و رجسوا رجاسة ليس من يعمل صلاحا
            
            53 :2 الله من السماء اشرف على بني البشر لينظر هل من فاهم طالب الله
            
            53 :3 كلهم قد ارتدوا معا فسدوا ليس من يعمل صلاحا ليس و لا واحد
            
            53 :4 ألم يعلم فاعلو الإثم الذين ياكلون شعبي كما ياكلون الخبز و الله لم يدعوا
            
            53 :5 هناك خافوا خوفا و لم يكن خوف لان الله قد بدد عظام محاصرك اخزيتهم لان الله قد رفضهم
            
            53 :6 ليت من صهيون خلاص إسرائيل عند رد الله سبي شعبه يهتف يعقوب و يفرح إسرائيل
            
            
            
            
            
            المزمور الرابع والخمسون
            54 :0 لامام المغنين على ذوات الاوتار قصيدة لداود عند ما اتى الزيفيون و قالوا لشاول أليس داود مختبئا عندنا
            
            54 :1 اللهم باسمك خلصني و بقوتك احكم لي
            
            54 :2 اسمع يا الله صلاتي اصغ إلى كلام فمي
            
            54 :3 لان غرباء قد قاموا علي و عتاة طلبوا نفسي لم يجعلوا الله امامهم سلاه
            
            54 :4 هوذا الله معين لي الرب بين عاضدي نفسي
            
            54 :5 يرجع الشر على اعدائي بحقك افنهم
            
            54 :6 اذبح لك منتدبا احمد اسمك يا رب لانه صالح
            
            54 :7 لانه من كل ضيق نجاني و باعدائي رأت عيني
            
            
            
            
            
            المزمور الخامس والخمسون
            55 :0 لامام المغنين على ذوات الاوتار قصيدة لداود
            
            55 :1 اصغ يا الله إلى صلاتي و لا تتغاض عن تضرعي
            
            55 :2 استمع لي و استجب لي اتحير في كربتي و اضطرب
            
            55 :3 من صوت العدو من قبل ظلم الشرير لانهم يحيلون علي اثما و بغضب يضطهدونني
            
            55 :4 يمخض قلبي في داخلي و اهوال الموت سقطت علي
            
            55 :5 خوف و رعدة اتيا علي و غشيني رعب
            
            55 :6 فقلت ليت لي جناحا كالحمامة فاطير و استريح
            
            55 :7 هانذا كنت ابعد هاربا و ابيت في البرية سلاه
            
            55 :8 كنت اسرع في نجاتي من الريح العاصفة و من النوء
            
            55 :9 اهلك يا رب فرق ألسنتهم لأني قد رايت ظلما و خصاما في المدينة
            
            55 :10 نهارا و ليلا يحيطون بها على اسوارها و إثم و مشقة في وسطها
            
            55 :11 مفاسد في وسطها و لا يبرح من ساحتها ظلم و غش
            
            55 :12 لانه ليس عدو يعيرني فاحتمل ليس مبغضي تعظم علي فاختبئ منه
            
            55 :13 بل أنت انسان عديلي الفي و صديقي
            
            55 :14 الذي معه كانت تحلو لنا العشرة إلى بيت الله كنا نذهب في الجمهور
            
            55 :15 ليبغتهم الموت لينحدروا إلى الهاوية احياء لان في مساكنهم في وسطهم شرورا
            
            55 :16 اما أنا فالى الله اصرخ و الرب يخلصني
            
            55 :17 مساء و صباحا و ظهرا اشكو و انوح فيسمع صوتي
            
            55 :18 فدى بسلام نفسي من قتال علي لانهم بكثرة كانوا حولي
            
            55 :19 يسمع الله فيذلهم و الجالس منذ القدم سلاه الذين ليس لهم تغير و لا يخافون الله
            
            55 :20 القى يديه على مسالميه نقض عهده
            
            55 :21 انعم من الزبدة فمه و قلبه قتال الين من الزيت كلماته و هي سيوف مسلولة
            
            55 :22 الق على الرب همك فهو يعولك لا يدع الصديق يتزعزع إلى الابد
            
            55 :23 و أنت يا الله تحدرهم إلى جب الهلاك رجال الدماء و الغش لا ينصفون ايامهم اما أنا فاتكل عليك
            
            
            
            
            
            المزمور السادس والخمسون
            56 :0 لامام المغنين على الحمامة البكماء بين الغرباء مذهبة لداود عندما اخذه الفلسطينيون في جت
            
            56 :1 ارحمني يا الله لان الانسان يتهممني و اليوم كله محاربا يضايقني
            
            56 :2 تهممني اعدائي اليوم كله لان كثيرين يقاومونني بكبرياء
            
            56 :3 في يوم خوفي أنا عليك اتكل
            
            56 :4 الله افتخر بكلامه على الله توكلت فلا اخاف ماذا يصنعه بي البشر
            
            56 :5 اليوم كله يحرفون كلامي علي كل افكارهم بالشر
            
            56 :6 يجتمعون يختفون يلاحظون خطواتي عند ما ترصدوا نفسي
            
            56 :7 على اثمهم جازهم بغضب اخضع الشعوب يا الله
            
            56 :8 تيهاني راقبت اجعل أنت دموعي في زقك اما هي في سفرك
            
            56 :9 حينئذ ترتد اعدائي إلى الوراء في يوم ادعوك فيه هذا قد علمته لان الله لي
            
            56 :10 الله افتخر بكلامه الرب افتخر بكلامه
            
            56 :11 على الله توكلت فلا اخاف ماذا يصنعه بي الانسان
            
            56 :12 اللهم علي نذورك اوفي ذبائح شكر لك
            
            56 :13 لانك نجيت نفسي من الموت نعم و رجلي من الزلق لكي اسير قدام الله في نور الاحياء
            
            
            
            
            
            المزمور السابع والخمسون
            57 :0 لامام المغنين على لا تهلك مذهبة لداود عند ما هرب من قدام شاول في المغارة
            
            57 :1 ارحمني يا الله ارحمني لانه بك احتمت نفسي و بظل جناحيك احتمي إلى ان تعبر المصائب
            
            57 :2 اصرخ إلى الله العلي إلى الله المحامي عني
            
            57 :3 يرسل من السماء و يخلصني عير الذي يتهممني سلاه يرسل الله رحمته و حقه
            
            57 :4 نفسي بين الاشبال اضطجع بين المتقدين بني ادم اسنانهم اسنة و سهام و لسانهم سيف ماض
            
            57 :5 ارتفع اللهم على السماوات ليرتفع على كل الأرض مجدك
            
            57 :6 هياوا شبكة لخطواتي انحنت نفسي حفروا قدامي حفرة سقطوا في وسطها سلاه
            
            57 :7 ثابت قلبي يا الله ثابت قلبي اغني و ارنم
            
            57 :8 استيقظ يا مجدي استيقظي يا رباب و يا عود أنا استيقظ سحرا
            
            57 :9 احمدك بين الشعوب يا رب ارنم لك بين الامم
            
            57 :10 لان رحمتك قد عظمت إلى السماوات و إلى الغمام حقك
            
            57 :11 ارتفع اللهم على السماوات ليرتفع على كل الأرض مجدك
            
            
            
            
            
            المزمور الثامن والخمسون
            58 :0 لامام المغنين على لا تهلك لداود مذهبة
            
            58 :1 احقا بالحق الاخرس تتكلمون بالمستقيمات تقضون يا بني ادم
            
            58 :2 بل بالقلب تعملون شرورا في الأرض ظلم ايديكم تزنون
            
            58 :3 زاغ الاشرار من الرحم ضلوا من البطن متكلمين كذبا
            
            58 :4 لهم حمة مثل حمة الحية مثل الصل الاصم يسد اذنه
            
            58 :5 الذي لا يستمع إلى صوت الحواة الراقين رقى حكيم
            
            58 :6 اللهم كسر اسنانهم في أفواههم اهشم اضراس الاشبال يا رب
            
            58 :7 ليذوبوا كالماء ليذهبوا إذا فوق سهامه فلتنب
            
            58 :8 كما يذوب الحلزون ماشيا مثل سقط المراة لا يعاينوا الشمس
            
            58 :9 قبل ان تشعر قدوركم بالشوك نيئا أو محروقا يجرفهم
            
            58 :10 يفرح الصديق إذا راى النقمة يغسل خطواته بدم الشرير
            
            58 :11 و يقول الانسان ان للصديق ثمرا انه يوجد اله قاض في الارض
            
            
            
            
            
            المزمور التاسع والخمسون
            59 :0 لامام المغنين على لا تهلك مذهبة لداود لما أرسل شاول و راقبوا البيت ليقتلوه
            
            59 :1 انقذني من اعدائي يا الهي من مقاومي احمني
            
            59 :2 نجني من فاعلي الإثم و من رجال الدماء خلصني
            
            59 :3 لانهم يكمنون لنفسي الاقوياء يجتمعون علي لا لاثمي و لا لخطيتي يا رب
            
            59 :4 بلا إثم مني يجرون و يعدون انفسهم استيقظ إلى لقائي و انظر
            
            59 :5 و أنت يا رب اله الجنود اله إسرائيل انتبه لتطالب كل الامم كل غادر اثيم لا ترحم سلاه
            
            59 :6 يعودون عند المساء يهرون مثل الكلب و يدورون في المدينة
            
            59 :7 هوذا يبقون بافواههم سيوف في شفاههم لانهم يقولون من سامع
            
            59 :8 اما أنت يا رب فتضحك بهم تستهزئ بجميع الامم
            
            59 :9 من قوته إليك التجئ لان الله ملجاي
            
            59 :10 الهي رحمته تتقدمني الله يريني باعدائي
            
            59 :11 لا تقتلهم لئلا ينسى شعبي تيههم بقوتك و اهبطهم يا رب ترسنا
            
            59 :12 خطية أفواههم هي كلام شفاههم و ليؤخذوا بكبريائهم و من اللعنة و من الكذب الذي يحدثون به
            
            59 :13 افن بحنق افن و لا يكونوا و ليعلموا ان الله متسلط في يعقوب إلى اقاصي الأرض سلاه
            
            59 :14 و يعودون عند المساء يهرون مثل الكلب و يدورون في المدينة
            
            59 :15 هم يتيهون للاكل ان لم يشبعوا و يبيتوا
            
            59 :16 اما أنا فاغني بقوتك و ارنم بالغداة برحمتك لانك كنت ملجا لي و مناصا في يوم ضيقي
            
            59 :17 يا قوتي لك ارنم لان الله ملجاي اله رحمتي
            
            
            
            
            
            المزمور الستون
            60 :0 لامام المغنين على السوسن شهادة مذهبة لداود للتعليم عند محاربته ارام النهرين و ارام صوبة فرجع يواب و ضرب من ادوم في وادي الملح اثني عشر الفا
            
            60 :1 يا الله رفضتنا اقتحمتنا سخطت ارجعنا
            
            60 :2 زلزلت الأرض فصمتها اجبر كسرها لانها متزعزعة
            
            60 :3 اريت شعبك عسرا سقيتنا خمر الترنح
            
            60 :4 اعطيت خائفيك راية ترفع لاجل الحق سلاه
            
            60 :5 لكي ينجو احباؤك خلص بيمينك و استجب لي
            
            60 :6 الله قد تكلم بقدسه ابتهج اقسم شكيم و اقيس وادي سكوت
            
            60 :7 لي جلعاد و لي منسى و افرايم خوذة راسي يهوذا صولجاني
            
            60 :8 مواب مرحضتي على ادوم اطرح نعلي يا فلسطين اهتفي علي
            
            60 :9 من يقودني إلى المدينة المحصنة من يهديني إلى ادوم
            
            60 :10 أليس أنت يا الله الذي رفضتنا و لا تخرج يا الله مع جيوشنا
            
            60 :11 اعطنا عونا في الضيق فباطل هو خلاص الانسان
            
            60 :12 بالله نصنع بباس و هو يدوس اعداءنا
            
            
            
            
            
            المزمور الحادي والستون
            61 :0 لامام المغنين على ذوات الاوتار لداود
            
            61 :1 اسمع يا الله صراخي و اصغ إلى صلاتي
            
            61 :2 من اقصى الأرض ادعوك إذا غشي على قلبي إلى صخرة ارفع مني تهديني
            
            61 :3 لانك كنت ملجا لي برج قوة من وجه العدو
            
            61 :4 لاسكنن في مسكنك إلى الدهور احتمي بستر جناحيك سلاه
            
            61 :5 لانك أنت يا الله استمعت نذوري اعطيت ميراث خائفي اسمك
            
            61 :6 إلى أيام الملك تضيف أياما سنينه كدور فدور
            
            61 :7 يجلس قدام الله إلى الدهر اجعل رحمة و حقا يحفظانه
            
            61 :8 هكذا ارنم لاسمك إلى الابد لوفاء نذوري يوما فيوما
            
            
            
            
            
            المزمور الثاني والستون
            62 :0 لامام المغنين على يدوثون مزمور لداود
            
            62 :1 إنما لله انتظرت نفسي من قبله خلاصي
            
            62 :2 إنما هو صخرتي و خلاصي ملجاي لا اتزعزع كثيرا
            
            62 :3 إلى متى تهجمون على الانسان تهدمونه كلكم كحائط منقض كجدار واقع
            
            62 :4 إنما يتامرون ليدفعوه عن شرفه يرضون بالكذب بافواههم يباركون و بقلوبهم يلعنون سلاه
            
            62 :5 إنما لله انتظري يا نفسي لان من قبله رجائي
            
            62 :6 إنما هو صخرتي و خلاصي ملجاي فلا اتزعزع
            
            62 :7 على الله خلاصي و مجدي صخرة قوتي محتماي في الله
            
            62 :8 توكلوا عليه في كل حين يا قوم اسكبوا قدامه قلوبكم الله ملجا لنا سلاه
            
            62 :9 إنما باطل بنو ادم كذب بنو البشر في الموازين هم إلى فوق هم من باطل اجمعون
            
            62 :10 لا تتكلوا على الظلم و لا تصيروا باطلا في الخطف ان زاد الغنى فلا تضعوا عليه قلبا
            
            62 :11 مرة واحدة تكلم الرب و هاتين الاثنتين سمعت ان العزة لله
            
            62 :12 و لك يا رب الرحمة لانك أنت تجازي الانسان كعمله
            
            
            
            
            
            المزمور الثالث والستون
            63 :0 مزمور لداود لما كان في برية يهوذا
            
            63 :1 يا الله الهي أنت إليك ابكر عطشت إليك نفسي يشتاق إليك جسدي في ارض ناشفة و يابسة بلا ماء
            
            63 :2 لكي ابصر قوتك و مجدك كما قد رايتك في قدسك
            
            63 :3 لان رحمتك افضل من الحياة شفتاي تسبحانك
            
            63 :4 هكذا اباركك في حياتي باسمك ارفع يدي
            
            63 :5 كما من شحم و دسم تشبع نفسي و بشفتي الابتهاج يسبحك فمي
            
            63 :6 إذا ذكرتك على فراشي في السهد الهج بك
            
            63 :7 لانك كنت عونا لي و بظل جناحيك ابتهج
            
            63 :8 التصقت نفسي بك يمينك تعضدني
            
            63 :9 اما الذين هم للتهلكة يطلبون نفسي فيدخلون في اسافل الارض
            
            63 :10 يدفعون إلى يدي السيف يكونون نصيبا لبنات اوى
            
            63 :11 اما الملك فيفرح بالله يفتخر كل من يحلف به لان افواه المتكلمين بالكذب تسد
            
            
            
            
            
            المزمور الرابع والستون
            64 :0 لامام المغنين مزمور لداود
            
            64 :1 استمع يا الله صوتي في شكواي من خوف العدو احفظ حياتي
            
            64 :2 استرني من مؤامرة الاشرار من جمهور فاعلي الإثم
            
            64 :3 الذين صقلوا ألسنتهم كالسيف فوقوا سهمهم كلاما مرا
            
            64 :4 ليرموا الكامل في المختفى بغتة يرمونه و لا يخشون
            
            64 :5 يشددون انفسهم لامر رديء يتحادثون بطمر فخاخ قالوا من يراهم
            
            64 :6 يخترعون اثما تمموا اختراعا محكما و داخل الانسان و قلبه عميق
            
            64 :7 فيرميهم الله بسهم بغتة كانت ضربتهم
            
            64 :8 و يوقعون ألسنتهم على انفسهم ينغض الراس كل من ينظر اليهم
            
            64 :9 و يخشى كل انسان و يخبر بفعل الله و بعمله يفطنون
            
            64 :10 يفرح الصديق بالرب و يحتمي به و يبتهج كل المستقيمي القلوب
            
            
            
            
            
            المزمور الخامس والستون
            65 :0 لامام المغنين مزمور لداود تسبيحة
            
            65 :1 لك ينبغي التسبيح يا الله في صهيون و لك يوفى النذر
            
            65 :2 يا سامع الصلاة إليك يأتي كل بشر
            
            65 :3 اثام قد قويت علي معاصينا أنت تكفر عنها
            
            65 :4 طوبى للذي تختاره و تقربه ليسكن في ديارك لنشبعن من خير بيتك قدس هيكلك
            
            65 :5 بمخاوف في العدل تستجيبنا يا اله خلاصنا يا متكل جميع اقاصي الأرض و البحر البعيدة
            
            65 :6 المثبت الجبال بقوته المتنطق بالقدرة
            
            65 :7 المهدئ عجيج البحار عجيج امواجها و ضجيج الامم
            
            65 :8 و تخاف سكان الاقاصي من اياتك تجعل مطالع الصباح و المساء تبتهج
            
            65 :9 تعهدت الأرض و جعلتها تفيض تغنيها جدا سواقي الله ملانة ماء تهيء طعامهم لانك هكذا تعدها
            
            65 :10 ارو اتلامها مهد اخاديدها بالغيوث تحللها تبارك غلتها
            
            65 :11 كللت السنة بجودك و اثارك تقطر دسما
            
            65 :12 تقطر مراع البرية و تتنطق الاكام بالبهجة
            
            65 :13 اكتست المروج غنما و الاودية تتعطف برا تهتف و أيضا تغني
            
            
            
            
            
            المزمور السادس والستون
            66 :0 لامام المغنين تسبيحة مزمور
            
            66 :1 اهتفي لله يا كل الأرض
            
            66 :2 رنموا بمجد اسمه اجعلوا تسبيحه ممجدا
            
            66 :3 قولوا لله ما اهيب اعمالك من عظم قوتك تتملق لك اعداؤك
            
            66 :4 كل الأرض تسجد لك و ترنم لك ترنم لاسمك سلاه
            
            66 :5 هلم انظروا أعمال الله فعله المرهب نحو بني ادم
            
            66 :6 حول البحر إلى يبس و في النهر عبروا بالرجل هناك فرحنا به
            
            66 :7 متسلط بقوته إلى الدهر عيناه تراقبان الامم المتمردون لا يرفعن انفسهم سلاه
            
            66 :8 باركوا الهنا يا ايها الشعوب و سمعوا صوت تسبيحه
            
            66 :9 الجاعل انفسنا في الحياة و لم يسلم ارجلنا إلى الزلل
            
            66 :10 لانك جربتنا يا الله محصتنا كمحص الفضة
            
            66 :11 ادخلتنا إلى الشبكة جعلت ضغطا على متوننا
            
            66 :12 ركبت اناسا على رؤوسنا دخلنا في النار و الماء ثم اخرجتنا إلى الخصب
            
            66 :13 ادخل إلى بيتك بمحرقات اوفيك نذوري
            
            66 :14 التي نطقت بها شفتاي و تكلم بها فمي في ضيقي
            
            66 :15 اصعد لك محرقات سمينة مع بخور كباش اقدم بقرا مع تيوس سلاه
            
            66 :16 هلم اسمعوا فاخبركم يا كل الخائفين الله بما صنع لنفسي
            
            66 :17 صرخت إليه بفمي و تبجيل على لساني
            
            66 :18 ان راعيت اثما في قلبي لا يستمع لي الرب
            
            66 :19 لكن قد سمع الله اصغى إلى صوت صلاتي
            
            66 :20 مبارك الله الذي لم يبعد صلاتي و لا رحمته عني
            
            
            
            
            
            المزمور السابع والستون
            67 :0 لامام المغنين على ذوات الاوتار مزمور تسبيحة
            
            67 :1 ليتحنن الله علينا و ليباركنا لينر بوجهه علينا سلاه
            
            67 :2 لكي يعرف في الأرض طريقك و في كل الامم خلاصك
            
            67 :3 يحمدك الشعوب يا الله يحمدك الشعوب كلهم
            
            67 :4 تفرح و تبتهج الامم لانك تدين الشعوب بالاستقامة و امم الأرض تهديهم سلاه
            
            67 :5 يحمدك الشعوب يا الله يحمدك الشعوب كلهم
            
            67 :6 الأرض اعطت غلتها يباركنا الله الهنا
            
            67 :7 يباركنا الله و تخشاه كل اقاصي الأرض
            
            
            
            
            
            المزمور الثامن والستون
            68 :0 لامام المغنين لداود مزمور تسبيحة
            
            68 :1 يقوم الله يتبدد اعداؤه و يهرب مبغضوه من أمام وجهه
            
            68 :2 كما يذرى الدخان تذريهم كما يذوب الشمع قدام النار يبيد الاشرار قدام الله
            
            68 :3 و الصديقون يفرحون يبتهجون أمام الله و يطفرون فرحا
            
            68 :4 غنوا لله رنموا لاسمه اعدوا طريقا للراكب في القفار باسمه ياه و اهتفوا امامه
            
            68 :5 ابو اليتامى و قاضي الارامل الله في مسكن قدسه
            
            68 :6 الله مسكن المتوحدين في بيت مخرج الاسرى إلى فلاح إنما المتمردون يسكنون الرمضاء
            
            68 :7 اللهم عند خروجك أمام شعبك عند صعودك في القفر سلاه
            
            68 :8 الأرض ارتعدت السماوات أيضا قطرت أمام وجه الله سينا نفسه من وجه الله اله إسرائيل
            
            68 :9 مطرا غزيرا نضحت يا الله ميراثك و هو معي أنت اصلحته
            
            68 :10 قطيعك سكن فيه هيات بجودك للمساكين يا الله
            
            68 :11 الرب يعطي كلمة المبشرات بها جند كثير
            
            68 :12 ملوك جيوش يهربون يهربون الملازمة البيت تقسم الغنائم
            
            68 :13 إذا اضطجعتم بين الحظائر فاجنحة حمامة مغشاة بفضة و ريشها بصفرة الذهب
            
            68 :14 عندما شتت القدير ملوكا فيها اثلجت في صلمون
            
            68 :15 جبل الله جبل باشان جبل اسنمة جبل باشان
            
            68 :16 لماذا ايتها الجبال المسنمة ترصدن الجبل الذي اشتهاه الله لسكنه بل الرب يسكن فيه إلى الابد
            
            68 :17 مركبات الله ربوات الوف مكررة الرب فيها سينا في القدس
            
            68 :18 صعدت إلى العلاء سبيت سبيا قبلت عطايا بين الناس و أيضا المتمردين للسكن ايها الرب الاله
            
            68 :19 مبارك الرب يوما فيوما يحملنا اله خلاصنا سلاه
            
            68 :20 الله لنا اله خلاص و عند الرب السيد للموت مخارج
            
            68 :21 و لكن الله يسحق رؤوس اعدائه الهامة الشعراء للسالك في ذنوبه
            
            68 :22 قال الرب من باشان ارجع ارجع من اعماق البحر
            
            68 :23 لكي تصبغ رجلك بالدم السن كلابك من الاعداء نصيبهم
            
            68 :24 راوا طرقك يا الله طرق الهي ملكي في القدس
            
            68 :25 من قدام المغنون و من وراء ضاربو الاوتار في الوسط فتيات ضاربات الدفوف
            
            68 :26 في الجماعات باركوا الله الرب ايها الخارجون من عين إسرائيل
            
            68 :27 هناك بنيامين الصغير متسلطهم رؤساء يهوذا جلهم رؤساء زبولون رؤساء نفتالي
            
            68 :28 قد امر الهك بعزك ايد يا الله هذا الذي فعلته لنا
            
            68 :29 من هيكلك فوق أورشليم لك تقدم ملوك هدايا
            
            68 :30 انتهر وحش القصب صوار الثيران مع عجول الشعوب المترامين بقطع فضة شتت الشعوب الذين يسرون بالقتال
            
            68 :31 يأتي شرفاء من مصر كوش تسرع بيديها إلى الله
            
            68 :32 يا ممالك الأرض غنوا لله رنموا للسيد سلاه
            
            68 :33 للراكب على سماء السماوات القديمة هوذا يعطي صوته صوت قوة
            
            68 :34 اعطوا عزا لله على إسرائيل جلاله و قوته في الغمام
            
            68 :35 مخوف أنت يا الله من مقادسك اله إسرائيل هو المعطي قوة و شدة للشعب مبارك الله
            
            
            
            
            
            المزمور التاسع والستون
            69 :0 لامام المغنين على السوسن لداود
            
            69 :1 خلصني يا الله لان المياه قد دخلت إلى نفسي
            
            69 :2 غرقت في حماة عميقة و ليس مقر دخلت إلى اعماق المياه و السيل غمرني
            
            69 :3 تعبت من صراخي يبس حلقي كلت عيناي من انتظار الهي
            
            69 :4 أكثر من شعر راسي الذين يبغضونني بلا سبب اعتز مستهلكي اعدائي ظلما حينئذ رددت الذي لم اخطفه
            
            69 :5 يا الله أنت عرفت حماقتي و ذنوبي عنك لم تخف
            
            69 :6 لا يخز بي منتظروك يا سيد رب الجنود لا يخجل بي ملتمسوك يا اله إسرائيل
            
            69 :7 لأني من اجلك احتملت العار غطى الخجل وجهي
            
            69 :8 صرت اجنبيا عند اخوتي و غريبا عند بني أمي
            
            69 :9 لان غيرة بيتك اكلتني و تعييرات معيريك وقعت علي
            
            69 :10 و ابكيت بصوم نفسي فصار ذلك عارا علي
            
            69 :11 جعلت لباسي مسحا و صرت لهم مثلا
            
            69 :12 يتكلم في الجالسون في الباب و اغاني شرابي المسكر
            
            69 :13 اما أنا فلك صلاتي يا رب في وقت رضى يا الله بكثرة رحمتك استجب لي بحق خلاصك
            
            69 :14 نجني من الطين فلا اغرق نجني من مبغضي و من اعماق المياه
            
            69 :15 لا يغمرني سيل المياه و لا يبتلعني العمق و لا تطبق الهاوية علي فاها
            
            69 :16 استجب لي يا رب لان رحمتك صالحة ككثرة مراحمك التفت الي
            
            69 :17 و لا تحجب وجهك عن عبدك لان لي ضيقا استجب لي سريعا
            
            69 :18 اقترب إلى نفسي فكها بسبب اعدائي افدني
            
            69 :19 أنت عرفت عاري و خزيي و خجلي قدامك جميع مضايقي
            
            69 :20 العار قد كسر قلبي فمرضت انتظرت رقة فلم تكن و معزين فلم اجد
            
            69 :21 و يجعلون في طعامي علقما و في عطشي يسقونني خلا
            
            69 :22 لتصر مائدتهم قدامهم فخا و للامنين شركا
            
            69 :23 لتظلم عيونهم عن البصر و قلقل متونهم دائما
            
            69 :24 صب عليهم سخطك و ليدركهم حمو غضبك
            
            69 :25 لتصر دارهم خرابا و في خيامهم لا يكن ساكن
            
            69 :26 لان الذي ضربته أنت هم طردوه و بوجع الذين جرحتهم يتحدثون
            
            69 :27 اجعل اثما على اثمهم و لا يدخلوا في برك
            
            69 :28 ليمحوا من سفر الاحياء و مع الصديقين لا يكتبوا
            
            69 :29 اما أنا فمسكين و كئيب خلاصك يا الله فليرفعني
            
            69 :30 اسبح اسم الله بتسبيح و اعظمه بحمد
            
            69 :31 فيستطاب عند الرب أكثر من ثور بقر ذي قرون و اظلاف
            
            69 :32 يرى ذلك الودعاء فيفرحون و تحيا قلوبكم يا طالبي الله
            
            69 :33 لان الرب سامع للمساكين و لا يحتقر اسراه
            
            69 :34 تسبحه السماوات و الأرض البحار و كل ما يدب فيها
            
            69 :35 لان الله يخلص صهيون و يبني مدن يهوذا فيسكنون هناك و يرثونها
            
            69 :36 و نسل عبيده يملكونها و محبو اسمه يسكنون فيها
            
            
            
            
            
            المزمور السبعون
            70 :0 لامام المغنين لداود للتذكير
            
            70 :1 اللهم إلى تنجيتي يا رب إلى معونتي اسرع
            
            70 :2 ليخز و يخجل طالبو نفسي ليرتد إلى خلف و يخجل المشتهون لي شرا
            
            70 :3 ليرجع من اجل خزيهم القائلون هه هه
            
            70 :4 و ليبتهج و يفرح بك كل طالبيك و ليقل دائما محبو خلاصك ليتعظم الرب
            
            70 :5 اما أنا فمسكين و فقير اللهم اسرع إلي معيني و منقذي أنت يا رب لا تبطؤ
            
            
            
            
            
            المزمور الحادي والسبعون
            71 :1 بك يا رب احتميت فلا اخزى إلى الدهر
            
            71 :2 بعدلك نجني و انقذني امل إلي اذنك و خلصني
            
            71 :3 كن لي صخرة ملجا ادخله دائما امرت بخلاصي لانك صخرتي و حصني
            
            71 :4 يا الهي نجني من يد الشرير من كف فاعل الشر و الظالم
            
            71 :5 لانك أنت رجائي يا سيدي الرب متكلي منذ صباي
            
            71 :6 عليك استندت من البطن و أنت مخرجي من احشاء أمي بك تسبيحي دائما
            
            71 :7 صرت كاية لكثيرين اما أنت فملجاي القوي
            
            71 :8 يمتلئ فمي من تسبيحك اليوم كله من مجدك
            
            71 :9 لا ترفضني في زمن الشيخوخة لا تتركني عند فناء قوتي
            
            71 :10 لان اعدائي تقاولوا علي و الذين يرصدون نفسي تامروا معا
            
            71 :11 قائلين ان الله قد تركه الحقوه و امسكوه لانه لا منقذ له
            
            71 :12 يا الله لا تبعد عني يا الهي إلى معونتي اسرع
            
            71 :13 ليخز و يفن مخاصمو نفسي ليلبس العار و الخجل الملتمسون لي شرا
            
            71 :14 اما أنا فارجو دائما و ازيد على كل تسبيحك
            
            71 :15 فمي يحدث بعدلك اليوم كله بخلاصك لأني لا اعرف لها اعدادا
            
            71 :16 اتي بجبروت السيد الرب اذكر برك وحدك
            
            71 :17 اللهم قد علمتني منذ صباي و إلى الآن اخبر بعجائبك
            
            71 :18 و أيضا إلى الشيخوخة و الشيب يا الله لا تتركني حتى اخبر بذراعك الجيل المقبل و بقوتك كل ات
            
            71 :19 و برك إلى العلياء يا الله الذي صنعت العظائم يا الله من مثلك
            
            71 :20 أنت الذي اريتنا ضيقات كثيرة و ردية تعود فتحيينا و من اعماق الأرض تعود فتصعدنا
            
            71 :21 تزيد عظمتي و ترجع فتعزيني
            
            71 :22 فانا أيضا احمدك برباب حقك يا الهي ارنم لك بالعود يا قدوس إسرائيل
            
            71 :23 تبتهج شفتاي إذ ارنم لك و نفسي التي فديتها
            
            71 :24 و لساني أيضا اليوم كله يلهج ببرك لانه قد خزي لانه قد خجل الملتمسون لي شرا
            
            
            
            
            
            المزمور الثاني والسبعون
            72 :0 لسليمان
            
            72 :1 اللهم اعطي احكامك للملك و برك لابن الملك
            
            72 :2 يدين شعبك بالعدل و مساكينك بالحق
            
            72 :3 تحمل الجبال سلاما للشعب و الاكام بالبر
            
            72 :4 يقضي لمساكين الشعب يخلص بني البائسين و يسحق الظالم
            
            72 :5 يخشونك ما دامت الشمس و قدام القمر إلى دور فدور
            
            72 :6 ينزل مثل المطر على الجزاز و مثل الغيوث الذارفة على الارض
            
            72 :7 يشرق في ايامه الصديق و كثرة السلام إلى ان يضمحل القمر
            
            72 :8 و يملك من البحر إلى البحر و من النهر إلى اقاصي الارض
            
            72 :9 امامه تجثو اهل البرية و اعداؤه يلحسون التراب
            
            72 :10 ملوك ترشيش و الجزائر يرسلون تقدمة ملوك شبا و سبا يقدمون هدية
            
            72 :11 و يسجد له كل الملوك كل الامم تتعبد له
            
            72 :12 لانه ينجي الفقير المستغيث و المسكين إذ لا معين له
            
            72 :13 يشفق على المسكين و البائس و يخلص انفس الفقراء
            
            72 :14 من الظلم و الخطف يفدي انفسهم و يكرم دمهم في عينيه
            
            72 :15 و يعيش و يعطيه من ذهب شبا و يصلي لاجله دائما اليوم كله يباركه
            
            72 :16 تكون حفنة بر في الأرض في رؤوس الجبال تتمايل مثل لبنان ثمرتها و يزهرون من المدينة مثل عشب الأرض
            
            72 :17 يكون اسمه إلى الدهر قدام الشمس يمتد اسمه و يتباركون به كل امم الأرض يطوبونه
            
            72 :18 مبارك الرب الله اله إسرائيل الصانع العجائب وحده
            
            72 :19 و مبارك اسم مجده إلى الدهر و لتمتلئ الأرض كلها من مجده امين ثم امين تمت صلوات داود بن يسى
            
            
            
            
            
            المزمور الثالث والسبعون
            73 :0 مزمور لاساف
            
            73 :1 إنما صالح الله لإسرائيل لانقياء القلب
            
            73 :2 اما أنا فكادت تزل قدماي لولا قليل لزلقت خطواتي
            
            73 :3 لأني غرت من المتكبرين إذ رايت سلامة الاشرار
            
            73 :4 لانه ليست في موتهم شدائد و جسمهم سمين
            
            73 :5 ليسوا في تعب الناس و مع البشر لا يصابون
            
            73 :6 لذلك تقلدوا الكبرياء لبسوا كثوب ظلمهم
            
            73 :7 جحظت عيونهم من الشحم جاوزوا تصورات القلب
            
            73 :8 يستهزئون و يتكلمون بالشر ظلما من العلاء يتكلمون
            
            73 :9 جعلوا أفواههم في السماء و ألسنتهم تتمشى في الأرض
            
            73 :10 لذلك يرجع شعبه إلى هنا و كمياه مروية يمتصون منهم
            
            73 :11 و قالوا كيف يعلم الله و هل عند العلي معرفة
            
            73 :12 هوذا هؤلاء هم الاشرار و مستريحين إلى الدهر يكثرون ثروة
            
            73 :13 حقا قد زكيت قلبي باطلا و غسلت بالنقاوة يدي
            
            73 :14 و كنت مصابا اليوم كله و تادبت كل صباح
            
            73 :15 لو قلت احدث هكذا لغدرت بجيل بنيك
            
            73 :16 فلما قصدت معرفة هذا إذا هو تعب في عيني
            
            73 :17 حتى دخلت مقادس الله و انتبهت إلى اخرتهم
            
            73 :18 حقا في مزالق جعلتهم اسقطتهم إلى البوار
            
            73 :19 كيف صاروا للخراب بغتة اضمحلوا فنوا من الدواهي
            
            73 :20 كحلم عند التيقظ يا رب عند التيقظ تحتقر خيالهم
            
            73 :21 لانه تمرمر قلبي و انتخست في كليتي
            
            73 :22 و أنا بليد و لا اعرف صرت كبهيم عندك
            
            73 :23 و لكني دائما معك امسكت بيدي اليمنى
            
            73 :24 برايك تهديني و بعد إلى مجد تاخذني
            
            73 :25 من لي في السماء و معك لا اريد شيئا في الأرض
            
            73 :26 قد فني لحمي و قلبي صخرة قلبي و نصيبي الله إلى الدهر
            
            73 :27 لانه هوذا البعداء عنك يبيدون تهلك كل من يزني عنك
            
            73 :28 اما أنا فالاقتراب إلى الله حسن لي جعلت بالسيد الرب ملجاي لاخبر بكل صنائعك
            
            
            
            
            
            المزمور الرابع والسبعون
            74 :0 قصيدة لاساف
            
            74 :1 لماذا رفضتنا يا الله إلى الابد لماذا يدخن غضبك على غنم مرعاك
            
            74 :2 اذكر جماعتك التي اقتنيتها منذ القدم و فديتها سبط ميراثك جبل صهيون هذا الذي سكنت فيه
            
            74 :3 ارفع خطواتك إلى الخرب الابدية الكل قد حطم العدو في المقدس
            
            74 :4 قد زمجر مقاوموك في وسط معهدك جعلوا اياتهم ايات
            
            74 :5 يبان كانه رافع فؤوس على الاشجار المشتبكة
            
            74 :6 و الآن منقوشاته معا بالفؤوس و المعاول يكسرون
            
            74 :7 اطلقوا النار في مقدسك دنسوا للارض مسكن اسمك
            
            74 :8 قالوا في قلوبهم لنفنيهم معا احرقوا كل معاهد الله في الارض
            
            74 :9 اياتنا لا نرى لا نبي بعد و لا بيننا من يعرف حتى متى
            
            74 :10 حتى متى يا الله يعير المقاوم و يهين العدو اسمك إلى الغاية
            
            74 :11 لماذا ترد يدك و يمينك اخرجها من وسط حضنك افن
            
            74 :12 و الله ملكي منذ القدم فاعل الخلاص في وسط الأرض
            
            74 :13 أنت شققت البحر بقوتك كسرت رؤوس التنانين على المياه
            
            74 :14 أنت رضضت رؤوس لوياثان جعلته طعاما للشعب لاهل البرية
            
            74 :15 أنت فجرت عينا و سيلا أنت يبست انهارا دائمة الجريان
            
            74 :16 لك النهار و لك أيضا الليل أنت هيات النور و الشمس
            
            74 :17 أنت نصبت كل تخوم الأرض الصيف و الشتاء أنت خلقتهما
            
            74 :18 اذكر هذا ان العدو قد عير الرب و شعبا جاهلا قد اهان اسمك
            
            74 :19 لا تسلم للوحش نفس يمامتك قطيع بائسيك لا تنس إلى الابد
            
            74 :20 انظر إلى العهد لان مظلمات الأرض امتلات من مساكن الظلم
            
            74 :21 لا يرجعن المنسحق خازيا الفقير و البائس ليسبحا اسمك
            
            74 :22 قم يا الله اقم دعواك اذكر تعيير الجاهل اياك اليوم كله
            
            74 :23 لا تنس صوت اضدادك ضجيج مقاوميك الصاعد دائما
            
            
            
            
            
            المزمور الخامس والسبعون
            75 :0 لامام المغنين على لا تهلك مزمور لاساف تسبيحة
            
            75 :1 نحمدك يا الله نحمدك و اسمك قريب يحدثون بعجائبك
            
            75 :2 لأني اعين ميعادا أنا بالمستقيمات اقضي
            
            75 :3 ذابت الأرض و كل سكانها أنا وزنت اعمدتها سلاه
            
            75 :4 قلت للمفتخرين لا تفتخروا و للاشرار لا ترفعوا قرنا
            
            75 :5 لا ترفعوا إلى العلى قرنكم لا تتكلموا بعنق متصلب
            
            75 :6 لانه لا من المشرق و لا من المغرب و لا من برية الجبال
            
            75 :7 و لكن الله هو القاضي هذا يضعه و هذا يرفعه
            
            75 :8 لان في يد الرب كاسا و خمرها مختمرة ملانة شرابا ممزوجا و هو يسكب منها لكن عكرها يمصه يشربه كل اشرار الأرض
            
            75 :9 اما أنا فاخبر إلى الدهر ارنم لاله يعقوب
            
            75 :10 و كل قرون الاشرار اعضب قرون الصديق تنتصب
            
            
            
            
            
            المزمور السادس والسبعون
            76 :0 لامام المغنين على ذوات الاوتار مزمور لاساف تسبيحة
            
            76 :1 الله معروف في يهوذا اسمه عظيم في إسرائيل
            
            76 :2 كانت في ساليم مظلته و مسكنه في صهيون
            
            76 :3 هناك سحق القسي البارقة المجن و السيف و القتال سلاه
            
            76 :4 ابهى أنت امجد من جبال السلب
            
            76 :5 سلب اشداء القلب ناموا سنتهم كل رجال الباس لم يجدوا ايديهم
            
            76 :6 من انتهارك يا اله يعقوب يسبخ فارس و خيل
            
            76 :7 أنت مهوب أنت فمن يقف قدامك حال غضبك
            
            76 :8 من السماء اسمعت حكما الأرض فزعت و سكتت
            
            76 :9 عند قيام الله للقضاء لتخليص كل ودعاء الأرض سلاه
            
            76 :10 لان غضب الانسان يحمدك بقية الغضب تتمنطق بها
            
            76 :11 انذروا و اوفوا للرب الهكم يا جميع الذين حوله ليقدموا هدية للمهوب
            
            76 :12 يقطف روح الرؤساء هو مهوب لملوك الأرض
            
            
            
            
            
            المزمور السابع والسبعون
            77 :0 لامام المغنين على يدوثون لاساف مزمور
            
            77 :1 صوتي إلى الله فاصرخ صوتي إلى الله فاصغى إلي
            
            77 :2 في يوم ضيقي التمست الرب يدي في الليل انبسطت و لم تخدر ابت نفسي التعزية
            
            77 :3 اذكر الله فائن اناجي نفسي فيغشى على روحي سلاه
            
            77 :4 امسكت اجفان عيني انزعجت فلم اتكلم
            
            77 :5 تفكرت في أيام القدم السنين الدهرية
            
            77 :6 اذكر ترنمي في الليل مع قلبي اناجي و روحي تبحث
            
            77 :7 هل إلى الدهور يرفض الرب و لا يعود للرضا بعد
            
            77 :8 هل انتهت إلى الابد رحمته انقطعت كلمته إلى دور فدور
            
            77 :9 هل نسي الله رأفة أو قفص برجزه مراحمه سلاه
            
            77 :10 فقلت هذا ما يعلني تغير يمين العلي
            
            77 :11 اذكر أعمال الرب إذ اتذكر عجائبك منذ القدم
            
            77 :12 و الهج بجميع افعالك و بصنائعك اناجي
            
            77 :13 اللهم في القدس طريقك اي اله عظيم مثل الله
            
            77 :14 أنت الاله الصانع العجائب عرفت بين الشعوب قوتك
            
            77 :15 فككت بذراعك شعبك بني يعقوب و يوسف سلاه
            
            77 :16 ابصرتك المياه يا الله ابصرتك المياه ففزعت ارتعدت أيضا اللجج
            
            77 :17 سكبت الغيوم مياها اعطت السحب صوتا أيضا سهامك طارت
            
            77 :18 صوت رعدك في الزوبعة البروق اضاءت المسكونة ارتعدت و رجفت الأرض
            
            77 :19 في البحر طريقك و سبلك في المياه الكثيرة و اثارك لم تعرف
            
            77 :20 هديت شعبك كالغنم بيد موسى و هرون
            
            
            
            
            
            المزمور الثامن والسبعون
            78 :0 قصيدة لاساف
            
            78 :1 اصغ يا شعبي إلى شريعتي اميلوا اذانكم إلى كلام فمي
            
            78 :2 افتح بمثل فمي اذيع الغازا منذ القدم
            
            78 :3 التي سمعناها و عرفناها و اباؤنا اخبرونا
            
            78 :4 لا نخفي عن بنيهم إلى الجيل الاخر مخبرين بتسابيح الرب و قوته و عجائبه التي صنع
            
            78 :5 اقام شهادة في يعقوب و وضع شريعة في إسرائيل التي اوصى اباءنا ان يعرفوا بها ابناءهم
            
            78 :6 لكي يعلم الجيل الاخر بنون يولدون فيقومون و يخبرون ابناءهم
            
            78 :7 فيجعلون على الله اعتمادهم و لا ينسون أعمال الله بل يحفظون وصاياه
            
            78 :8 و لا يكونون مثل ابائهم جيلا زائغا و ماردا جيلا لم يثبت قلبه و لم تكن روحه امينة لله
            
            78 :9 بنو افرايم النازعون في القوس الرامون انقلبوا في يوم الحرب
            
            78 :10 لم يحفظوا عهد الله و ابوا السلوك في شريعته
            
            78 :11 و نسوا افعاله و عجائبه التي اراهم
            
            78 :12 قدام ابائهم صنع اعجوبة في ارض مصر بلاد صوعن
            
            78 :13 شق البحر فعبرهم و نصب المياه كند
            
            78 :14 و هداهم بالسحاب نهارا و الليل كله بنور نار
            
            78 :15 شق صخورا في البرية و سقاهم كانه من لجج عظيمة
            
            78 :16 اخرج مجاري من صخرة و اجرى مياها كالانهار
            
            78 :17 ثم عادوا أيضا ليخطئوا إليه لعصيان العلي في الأرض الناشفة
            
            78 :18 و جربوا الله في قلوبهم بسؤالهم طعاما لشهوتهم
            
            78 :19 فوقعوا في الله قالوا هل يقدر الله ان يرتب مائدة في البرية
            
            78 :20 هوذا ضرب الصخرة فجرت المياه و فاضت الاودية هل يقدر أيضا ان يعطي خبزا و يهيئ لحما لشعبه
            
            78 :21 لذلك سمع الرب فغضب و اشتعلت نار في يعقوب و سخط أيضا صعد على إسرائيل
            
            78 :22 لانهم لم يؤمنوا بالله و لم يتكلوا على خلاصه
            
            78 :23 فامر السحاب من فوق و فتح مصاريع السماوات
            
            78 :24 و امطر عليهم منا للاكل و بر السماء اعطاهم
            
            78 :25 اكل الانسان خبز الملائكة أرسل عليهم زادا للشبع
            
            78 :26 اهاج شرقية في السماء و ساق بقوته جنوبية
            
            78 :27 و امطر عليهم لحما مثل التراب و كرمل البحر طيورا ذوات اجنحة
            
            78 :28 و اسقطها في وسط محلتهم حوالي مساكنهم
            
            78 :29 فاكلوا و شبعوا جدا و اتاهم بشهوتهم
            
            78 :30 لم يزوغوا عن شهوتهم طعامهم بعد في أفواههم
            
            78 :31 فصعد عليهم غضب الله و قتل من اسمنهم و صرع مختاري إسرائيل
            
            78 :32 في هذا كله اخطاوا بعد و لم يؤمنوا بعجائبه
            
            78 :33 فافنى ايامهم بالباطل و سنيهم بالرعب
            
            78 :34 إذ قتلهم طلبوه و رجعوا و بكروا إلى الله
            
            78 :35 و ذكروا ان الله صخرتهم و الله العلي وليهم
            
            78 :36 فخادعوه بافواههم و كذبوا عليه بالسنتهم
            
            78 :37 اما قلوبهم فلم تثبت معه و لم يكونوا امناء في عهده
            
            78 :38 اما هو فرؤوف يغفر الإثم و لا يهلك و كثيرا ما رد غضبه و لم يشعل كل سخطه
            
            78 :39 ذكر انهم بشر ريح تذهب و لا تعود
            
            78 :40 كم عصوه في البرية و احزنوه في القفر
            
            78 :41 رجعوا و جربوا الله و عنوا قدوس إسرائيل
            
            78 :42 لم يذكروا يده يوم فداهم من العدو
            
            78 :43 حيث جعل في مصر اياته و عجائبه في بلاد صوعن
            
            78 :44 إذ حول خلجانهم إلى دم و مجاريهم لكي لا يشربوا
            
            78 :45 أرسل عليهم بعوضا فاكلهم و ضفادع فافسدتهم
            
            78 :46 اسلم للجردم غلتهم و تعبهم للجراد
            
            78 :47 اهلك بالبرد كرومهم و جميزهم بالصقيع
            
            78 :48 و دفع إلى البرد بهائمهم و مواشيهم للبروق
            
            78 :49 أرسل عليهم حمو غضبه سخطا و رجزا و ضيقا جيش ملائكة اشرار
            
            78 :50 مهد سبيلا لغضبه لم يمنع من الموت انفسهم بل دفع حياتهم للوبا
            
            78 :51 و ضرب كل بكر في مصر اوائل القدرة في خيام حام
            
            78 :52 و ساق مثل الغنم شعبه و قادهم مثل قطيع في البرية
            
            78 :53 و هداهم امنين فلم يجزعوا اما اعداؤهم فغمرهم البحر
            
            78 :54 و ادخلهم في تخوم قدسه هذا الجبل الذي اقتنته يمينه
            
            78 :55 و طرد الامم من قدامهم و قسمهم بالحبل ميراثا و اسكن في خيامهم اسباط إسرائيل
            
            78 :56 فجربوا و عصوا الله العلي و شهاداته لم يحفظوا
            
            78 :57 بل ارتدوا و غدروا مثل ابائهم انحرفوا كقوس مخطئة
            
            78 :58 اغاظوه بمرتفعاتهم و اغاروه بتماثيلهم
            
            78 :59 سمع الله فغضب و رذل إسرائيل جدا
            
            78 :60 و رفض مسكن شيلو الخيمة التي نصبها بين الناس
            
            78 :61 و سلم للسبي عزه و جلاله ليد العدو
            
            78 :62 و دفع إلى السيف شعبه و غضب على ميراثه
            
            78 :63 مختاروه أكلتهم النار و عذاراه لم يحمدن
            
            78 :64 كهنته سقطوا بالسيف و ارامله لم يبكين
            
            78 :65 فاستيقظ الرب كنائم كجبار معيط من الخمر
            
            78 :66 فضرب اعداءه إلى الوراء جعلهم عارا ابديا
            
            78 :67 و رفض خيمة يوسف و لم يختر سبط افرايم
            
            78 :68 بل اختار سبط يهوذا جبل صهيون الذي احبه
            
            78 :69 و بنى مثل مرتفعات مقدسه كالارض التي اسسها إلى الابد
            
            78 :70 و اختار داود عبده و اخذه من حظائر الغنم
            
            78 :71 من خلف المرضعات اتى به ليرعى يعقوب شعبه و إسرائيل ميراثه
            
            78 :72 فرعاهم حسب كمال قلبه و بمهارة يديه هداهم
            
            
            
            
            
            المزمور التاسع والسبعون
            79 :0 مزمور لاساف
            
            79 :1 اللهم ان الامم قد دخلوا ميراثك نجسوا هيكل قدسك جعلوا أورشليم اكواما
            
            79 :2 دفعوا جثث عبيدك طعاما لطيور السماء لحم اتقيائك لوحوش الارض
            
            79 :3 سفكوا دمهم كالماء حول أورشليم و ليس من يدفن
            
            79 :4 صرنا عارا عند جيراننا هزءا و سخرة للذين حولنا
            
            79 :5 إلى متى يا رب تغضب كل الغضب و تتقد كالنار غيرتك
            
            79 :6 افض رجزك على الامم الذين لا يعرفونك و على الممالك التي لم تدع باسمك
            
            79 :7 لانهم قد اكلوا يعقوب و اخربوا مسكنه
            
            79 :8 لا تذكر علينا ذنوب الاولين لتتقدمنا مراحمك سريعا لاننا قد تذللنا جدا
            
            79 :9 اعنا يا اله خلاصنا من اجل مجد اسمك و نجنا و اغفر خطايانا من اجل اسمك
            
            79 :10 لماذا يقول الامم أين هو الههم لتعرف عند الامم قدام اعيننا نقمة دم عبيدك المهراق
            
            79 :11 ليدخل قدامك انين الاسير كعظمة ذراعك استبق بني الموت
            
            79 :12 و رد على جيراننا سبعة اضعاف في احضانهم العار الذي عيروك به يا رب
            
            79 :13 اما نحن شعبك و غنم رعايتك نحمدك إلى الدهر إلى دور فدور نحدث بتسبيحك
            
            
            
            
            
            المزمور الثمانون
            80 :0 لامام المغنين على السوسن شهادة لاساف مزمور
            
            80 :1 يا راعي إسرائيل اصغ يا قائد يوسف كالضان يا جالسا على الكروبيم اشرق
            
            80 :2 قدام افرايم و بنيامين و منسى ايقظ جبروتك و هلم لخلاصنا
            
            80 :3 يا الله ارجعنا و انر بوجهك فنخلص
            
            80 :4 يا رب اله الجنود إلى متى تدخن على صلاة شعبك
            
            80 :5 قد اطعمتهم خبز الدموع و سقيتهم الدموع بالكيل
            
            80 :6 جعلتنا نزاعا عند جيراننا و اعداؤنا يستهزئون بين انفسهم
            
            80 :7 يا اله الجنود ارجعنا و انر بوجهك فنخلص
            
            80 :8 كرمة من مصر نقلت طردت امما و غرستها
            
            80 :9 هيات قدامها فاصلت اصولها فملات الأرض
            
            80 :10 غطى الجبال ظلها و اغصانها ارز الله
            
            80 :11 مدت قضبانها إلى البحر و إلى النهر فروعها
            
            80 :12 فلماذا هدمت جدرانها فيقطفها كل عابري الطريق
            
            80 :13 يفسدها الخنزير من الوعر و يرعاها وحش البرية
            
            80 :14 يا اله الجنود ارجعن اطلع من السماء و انظر و تعهد هذه الكرمة
            
            80 :15 و الغرس الذي غرسته يمينك و الابن الذي اخترته لنفسك
            
            80 :16 هي محروقة بنار مقطوعة من انتهار وجهك يبيدون
            
            80 :17 لتكن يدك على رجل يمينك و على ابن ادم الذي اخترته لنفسك
            
            80 :18 فلا نرتد عنك احينا فندعو باسمك
            
            80 :19 يا رب اله الجنود ارجعنا انر بوجهك فنخلص
            
            
            
            
            
            المزمور الحادي والثمانون
            81 :0 لامام المغنين على الجتية لاساف
            
            81 :1 رنموا لله قوتنا اهتفوا لاله يعقوب
            
            81 :2 ارفعوا نغمة و هاتوا دفا عودا حلوا مع رباب
            
            81 :3 انفخوا في راس الشهر بالبوق عند الهلال ليوم عيدنا
            
            81 :4 لان هذا فريضة لإسرائيل حكم لاله يعقوب
            
            81 :5 جعله شهادة في يوسف عند خروجه على ارض مصر سمعت لسانا لم اعرفه
            
            81 :6 ابعدت من الحمل كتفه يداه تحولتا عن السل
            
            81 :7 في الضيق دعوت فنجيتك استجبتك في ستر الرعد جربتك على ماء مريبة سلاه
            
            81 :8 اسمع يا شعبي فاحذرك يا إسرائيل ان سمعت لي
            
            81 :9 لا يكن فيك اله غريب و لا تسجد لاله اجنبي
            
            81 :10 أنا الرب الهك الذي اصعدك من ارض مصر افغر فاك فاملاه
            
            81 :11 فلم يسمع شعبي لصوتي و إسرائيل لم يرض بي
            
            81 :12 فسلمتهم إلى قساوة قلوبهم ليسلكوا في مؤامرات انفسهم
            
            81 :13 لو سمع لي شعبي و سلك إسرائيل في طرقي
            
            81 :14 سريعا كنت اخضع اعداءهم و على مضايقيهم كنت ارد يدي
            
            81 :15 مبغضو الرب يتذللون له و يكون وقتهم إلى الدهر
            
            81 :16 و كان اطعمه من شحم الحنطة و من الصخرة كنت اشبعك عسلا
            
            
            
            
            المزمور الثاني والثمانون
            82 :0 مزمور لاساف
            
            82 :1 الله قائم في مجمع الله في وسط الالهة يقضي
            
            82 :2 حتى متى تقضون جورا و ترفعون وجوه الاشرار سلاه
            
            82 :3 اقضوا للذليل و لليتيم انصفوا المسكين و البائس
            
            82 :4 نجوا المسكين و الفقير من يد الاشرار انقذوا
            
            82 :5 لا يعلمون و لا يفهمون في الظلمة يتمشون تتزعزع كل اسس الارض
            
            82 :6 أنا قلت انكم الهة و بنو العلي كلكم
            
            82 :7 لكن مثل الناس تموتون و كاحد الرؤساء تسقطون
            
            82 :8 قم يا الله دن الأرض لانك أنت تمتلك كل الامم
            
            
            
            
            
            المزمور الثالث والثمانون
            83 :0 تسبيحة مزمور لاساف
            
            83 :1 اللهم لا تصمت لا تسكت و لا تهدا يا الله
            
            83 :2 فهوذا اعداؤك يعجون و مبغضوك قد رفعوا الراس
            
            83 :3 على شعبك مكروا مؤامرة و تشاوروا على احميائك
            
            83 :4 قالوا هلم نبدهم من بين الشعوب و لا يذكر اسم إسرائيل بعد
            
            83 :5 لانهم تامروا بالقلب معا عليك تعاهدوا عهدا
            
            83 :6 خيام ادوم و الاسمعيليين مواب و الهاجريون
            
            83 :7 جبال و عمون و عماليق فلسطين مع سكان صور
            
            83 :8 اشور أيضا اتفق معهم صاروا ذراعا لبني لوط سلاه
            
            83 :9 افعل بهم كما بمديان كما بسيسرا كما بيابين في وادي قيشون
            
            83 :10 بادوا في عين دور صاروا دمنا للارض
            
            83 :11 اجعلهم شرفاءهم مثل غراب و مثل ذئب و مثل زبح و مثل صلمناع كل امرائهم
            
            83 :12 الذين قالوا لنمتلك لانفسنا مساكن الله
            
            83 :13 يا الهي اجعلهم مثل الجل مثل القش أمام الريح
            
            83 :14 كنار تحرق الوعر كلهيب يشعل الجبال
            
            83 :15 هكذا اطردهم بعاصفتك و بزوبعتك روعهم
            
            83 :16 املا وجوههم خزيا فيطلبوا اسمك يا رب
            
            83 :17 ليخزوا و يرتاعوا إلى الابد و ليخجلوا و يبيدوا
            
            83 :18 و يعلموا انك اسمك يهوه وحدك العلي على كل الأرض
            
            
            
            
            
            المزمور الرابع والثمانون
            84 :0 لامام المغنين على الجتية لبني قورح مزمور
            
            84 :1 ما احلى مساكنك يا رب الجنود
            
            84 :2 تشتاق بل تتوق نفسي إلى ديار الرب قلبي و لحمي يهتفان بالاله الحي
            
            84 :3 العصفور أيضا وجد بيتا و السنونة عشا لنفسها حيث تضع افراخها مذابحك يا رب الجنود ملكي و الهي
            
            84 :4 طوبى للساكنين في بيتك ابدا يسبحونك سلاه
            
            84 :5 طوبى لاناس عزهم بك طرق بيتك في قلوبهم
            
            84 :6 عابرين في وادي البكاء يصيرونه ينبوعا أيضا ببركات يغطون مورة
            
            84 :7 يذهبون من قوة إلى قوة يرون قدام الله في صهيون
            
            84 :8 يا رب اله الجنود اسمع صلاتي و اصغ يا اله يعقوب سلاه
            
            84 :9 يا مجننا انظر يا الله و التفت إلى وجه مسيحك
            
            84 :10 لان يوما واحدا في ديارك خير من الف اخترت الوقوف على العتبة في بيت الهي على السكن في خيام الاشرار
            
            84 :11 لان الرب الله شمس و مجن الرب يعطي رحمة و مجدا لا يمنع خيرا عن السالكين بالكمال
            
            84 :12 يا رب الجنود طوبى للانسان المتكل عليك
            
            
            
            
            
            المزمور الخامس والثمانون
            85 :0 لامام المغنين لبني قورح مزمور
            
            85 :1 رضيت يا رب على ارضك ارجعت سبي يعقوب
            
            85 :2 غفرت إثم شعبك سترت كل خطيتهم سلاه
            
            85 :3 حجزت كل رجزك رجعت عن حمو غضبك
            
            85 :4 ارجعنا يا اله خلاصنا و انف غضبك عنا
            
            85 :5 هل إلى الدهر تسخط علينا هل تطيل غضبك إلى دور فدور
            
            85 :6 الا تعود أنت فتحيينا فيفرح بك شعبك
            
            85 :7 ارنا يا رب رحمتك و اعطنا خلاصك
            
            85 :8 اني اسمع ما يتكلم به الله الرب لانه يتكلم بالسلام لشعبه و لاتقيائه فلا يرجعن إلى الحماقة
            
            85 :9 لان خلاصه قريب من خائفيه ليسكن المجد في ارضنا
            
            85 :10 الرحمة و الحق التقيا البر و السلام تلاثما
            
            85 :11 الحق من الأرض ينبت و البر من السماء يطلع
            
            85 :12 أيضا الرب يعطي الخير و ارضنا تعطي غلتها
            
            85 :13 البر قدامه يسلك و يطا في طريق خطواته
            
            
            
            
            
            المزمور السادس والثمانون
            86 :0 صلاة لداود
            
            86 :1 امل يا رب اذنك استجب لي لأني مسكين و بائس أنا
            
            86 :2 احفظ نفسي لأني تقي يا الهي خلص أنت عبدك المتكل عليك
            
            86 :3 ارحمني يا رب لانني إليك اصرخ اليوم كله
            
            86 :4 فرح نفس عبدك لانني إليك يا رب ارفع نفسي
            
            86 :5 لانك أنت يا رب صالح و غفور و كثير الرحمة لكل الداعين اليك
            
            86 :6 اصغ يا رب إلى صلاتي و انصت إلى صوت تضرعاتي
            
            86 :7 في يوم ضيقي ادعوك لانك تستجيب لي
            
            86 :8 لا مثل لك بين الالهة يا رب و لا مثل اعمالك
            
            86 :9 كل الامم الذين صنعتهم ياتون و يسجدون امامك يا رب و يمجدون اسمك
            
            86 :10 لانك عظيم أنت و صانع عجائب أنت الله وحدك
            
            86 :11 علمني يا رب طريقك اسلك في حقك وحد قلبي لخوف اسمك
            
            86 :12 احمدك يا رب الهي من كل قلبي و امجد اسمك إلى الدهر
            
            86 :13 لان رحمتك عظيمة نحوي و قد نجيت نفسي من الهاوية السفلى
            
            86 :14 اللهم المتكبرون قد قاموا علي و جماعة العتاة طلبوا نفسي و لم يجعلوك امامهم
            
            86 :15 اما أنت يا رب فاله رحيم و رؤوف طويل الروح و كثير الرحمة و الحق
            
            86 :16 التفت إلي و ارحمني اعط عبدك قوتك و خلص ابن امتك
            
            86 :17 اصنع معي اية للخير فيرى ذلك مبغضي فيخزوا لانك أنت يا رب اعنتني و عزيتني
            
            
            
            
            
            المزمور السابع والثمانون
            87 :0 لبني قورح مزمور تسبيحة
            
            87 :1 اساسه في الجبال المقدسة
            
            87 :2 الرب احب ابواب صهيون أكثر من جميع مساكن يعقوب
            
            87 :3 قد قيل بك امجاد يا مدينة الله سلاه
            
            87 :4 اذكر رهب و بابل عارفتي هوذا فلسطين و صور مع كوش هذا ولد هناك
            
            87 :5 و لصهيون يقال هذا الانسان و هذا الانسان ولد فيها و هي العلي يثبتها
            
            87 :6 الرب يعد في كتابة الشعوب ان هذا ولد هناك سلاه
            
            87 :7 و مغنون كعازفين كل السكان فيك
            
            
            
            
            
            المزمور الثامن والثمانون
            88 :0 تسبيحة مزمور لبني قورح لامام المغنين على العود للغناء قصيدة لهيمان الازراحي
            
            88 :1 يا رب اله خلاصي بالنهار و الليل صرخت امامك
            
            88 :2 فلتات قدامك صلاتي امل اذنك إلى صراخي
            
            88 :3 لانه قد شبعت من المصائب نفسي و حياتي إلى الهاوية دنت
            
            88 :4 حسبت مثل المنحدرين إلى الجب صرت كرجل لا قوة له
            
            88 :5 بين الاموات فراشي مثل القتلى المضطجعين في القبر الذين لا تذكرهم بعد و هم من يدك انقطعوا
            
            88 :6 وضعتني في الجب الاسفل في ظلمات في اعماق
            
            88 :7 علي استقر غضبك و بكل تياراتك ذللتني سلاه
            
            88 :8 ابعدت عني معارفي جعلتني رجسا لهم اغلق علي فما اخرج
            
            88 :9 عيني ذابت من الذل دعوتك يا رب كل يوم بسطت إليك يدي
            
            88 :10 افلعلك للاموات تصنع عجائب ام الاخيلة تقوم تمجدك سلاه
            
            88 :11 هل يحدث في القبر برحمتك أو بحقك في الهلاك
            
            88 :12 هل تعرف في الظلمة عجائبك و برك في ارض النسيان
            
            88 :13 اما أنا فاليك يا رب صرخت و في الغداة صلاتي تتقدمك
            
            88 :14 لماذا يا رب ترفض نفسي لماذا تحجب وجهك عني
            
            88 :15 أنا مسكين و مسلم الروح منذ صباي احتملت اهوالك تحيرت
            
            88 :16 علي عبر سخطك اهوالك اهلكتني
            
            88 :17 احاطت بي كالمياه اليوم كله اكتنفتني معا
            
            88 :18 ابعدت عني محبا و صاحبا معارفي في الظلمة
            
            
            
            
            
            المزمور التاسع والثمانون
            89 :0 قصيدة لايثان الازراحي
            
            89 :1 بمراحم الرب اغني إلى الدهر لدور فدور اخبر عن حقك بفمي
            
            89 :2 لأني قلت ان الرحمة إلى الدهر تبنى السماوات تثبت فيها حقك
            
            89 :3 قطعت عهدا مع مختاري حلفت لداود عبدي
            
            89 :4 إلى الدهر اثبت نسلك و ابني إلى دور فدور كرسيك سلاه
            
            89 :5 و السماوات تحمد عجائبك يا رب و حقك أيضا في جماعة القديسين
            
            89 :6 لانه من في السماء يعادل الرب من يشبه الرب بين ابناء الله
            
            89 :7 اله مهوب جدا في مؤامرة القديسين و مخوف عند جميع الذين حوله
            
            89 :8 يا رب اله الجنود من مثلك قوي رب و حقك من حولك
            
            89 :9 أنت متسلط على كبرياء البحر عند ارتفاع لججه أنت تسكنها
            
            89 :10 أنت سحقت رهب مثل القتيل بذراع قوتك بددت اعداءك
            
            89 :11 لك السماوات لك أيضا الأرض المسكونة و ملؤها أنت اسستهما
            
            89 :12 الشمال و الجنوب أنت خلقتهما تابور و حرمون باسمك يهتفان
            
            89 :13 لك ذراع القدرة قوية يدك مرتفعة يمينك
            
            89 :14 العدل و الحق قاعدة كرسيك الرحمة و الامانة تتقدمان أمام وجهك
            
            89 :15 طوبى للشعب العارفين الهتاف يا رب بنور وجهك يسلكون
            
            89 :16 باسمك يبتهجون اليوم كله و بعدلك يرتفعون
            
            89 :17 لانك أنت فخر قوتهم و برضاك ينتصب قرننا
            
            89 :18 لان الرب مجننا و قدوس إسرائيل ملكنا
            
            89 :19 حينئذ كلمت برؤيا تقيك و قلت جعلت عونا على قوي رفعت مختارا من بين الشعب
            
            89 :20 وجدت داود عبدي بدهن قدسي مسحته
            
            89 :21 الذي تثبت يدي معه أيضا ذراعي تشدده
            
            89 :22 لا يرغمه عدو و ابن الإثم لا يذلله
            
            89 :23 و اسحق اعداءه أمام وجهه و اضرب مبغضيه
            
            89 :24 اما امانتي و رحمتي فمعه و باسمي ينتصب قرنه
            
            89 :25 و اجعل على البحر يده و على الانهار يمينه
            
            89 :26 هو يدعوني ابي أنت الهي و صخرة خلاصي
            
            89 :27 أنا أيضا اجعله بكرا اعلى من ملوك الأرض
            
            89 :28 إلى الدهر احفظ له رحمتي و عهدي يثبت له
            
            89 :29 و اجعل إلى الابد نسله و كرسيه مثل أيام السماوات
            
            89 :30 ان ترك بنوه شريعتي و لم يسلكوا باحكامي
            
            89 :31 ان نقضوا فرائضي و لم يحفظوا وصاياي
            
            89 :32 افتقد بعصا معصيتهم و بضربات اثمهم
            
            89 :33 اما رحمتي فلا انزعها عنه و لا اكذب من جهة امانتي
            
            89 :34 لا انقض عهدي و لا اغير ما خرج من شفتي
            
            89 :35 مرة حلفت بقدسي اني لا اكذب لداود
            
            89 :36 نسله إلى الدهر يكون و كرسيه كالشمس امامي
            
            89 :37 مثل القمر يثبت إلى الدهر و الشاهد في السماء امين سلاه
            
            89 :38 لكنك رفضت و رذلت غضبت على مسيحك
            
            89 :39 نقضت عهد عبدك نجست تاجه في التراب
            
            89 :40 هدمت كل جدرانه جعلت حصونه خرابا
            
            89 :41 افسده كل عابري الطريق صار عارا عند جيرانه
            
            89 :42 رفعت يمين مضايقيه فرحت جميع اعدائه
            
            89 :43 أيضا رددت حد سيفه و لم تنصره في القتال
            
            89 :44 ابطلت بهاءه و القيت كرسيه إلى الأرض
            
            89 :45 قصرت أيام شبابه غطيته بالخزي سلاه
            
            89 :46 حتى متى يا رب تختبئ كل الاختباء حتى متى يتقد كالنار غضبك
            
            89 :47 اذكر كيف أنا زائل إلى اي باطل خلقت جميع بني ادم
            
            89 :48 اي انسان يحيا و لا يرى الموت اي ينجي نفسه من يد الهاوية سلاه
            
            89 :49 أين مراحمك الاول يا رب التي حلفت بها لداود بامانتك
            
            89 :50 اذكر يا رب عار عبيدك الذي احتمله في حضني من كثرة الامم كلها
            
            89 :51 الذي به عير اعداؤك يا رب الذين عيروا اثار مسيحك
            
            89 :52 مبارك الرب إلى الدهر امين فامين
            
            
            
            
            
            المزمور التسعون
            90 :0 صلاة لموسى رجل الله
            
            90 :1 يا رب ملجا كنت لنا في دور فدور
            
            90 :2 من قبل ان تولد الجبال أو ابدات الأرض و المسكونة منذ الازل إلى الابد أنت الله
            
            90 :3 ترجع الانسان إلى الغبار و تقول ارجعوا يا بني ادم
            
            90 :4 لان الف سنة في عينيك مثل يوم امس بعدما عبر و كهزيع من الليل
            
            90 :5 جرفتهم كسنة يكونون بالغداة كعشب يزول
            
            90 :6 بالغداة يزهر فيزول عند المساء يجز فييبس
            
            90 :7 لاننا قد فنينا بسخطك و بغضبك ارتعبنا
            
            90 :8 قد جعلت اثامنا امامك خفياتنا في ضوء وجهك
            
            90 :9 لان كل ايامنا قد انقضت برجزك افنينا سنينا كقصة
            
            90 :10 أيام سنينا هي سبعون سنة و ان كانت مع القوة فثمانون سنة و افخرها تعب و بلية لانها تقرض سريعا فنطير
            
            90 :11 من يعرف قوة غضبك و كخوفك سخطك
            
            90 :12 احصاء ايامنا هكذا علمنا فنؤتى قلب حكمة
            
            90 :13 ارجع يا رب حتى متى و تراف على عبيدك
            
            90 :14 اشبعنا بالغداة من رحمتك فنبتهج و نفرح كل ايامنا
            
            90 :15 فرحنا كالأيام التي فيها اذللتنا كالسنين التي رأينا فيها شرا
            
            90 :16 ليظهر فعلك لعبيدك و جلالك لبنيهم
            
            90 :17 و لتكن نعمة الرب الهنا علينا و عمل ايدينا ثبت علينا و عمل ايدينا ثبته
            
            
            
            
            المزمور الحادي والتسعون
            91 :1 الساكن في ستر العلي في ضل القدير يبيت
            
            91 :2 أقول للرب ملجاي و حصني الهي فاتكل عليه
            
            91 :3 لانه ينجيك من فخ الصياد و من الوبا الخطر
            
            91 :4 بخوافيه يظللك و تحت اجنحته تحتمي ترس و مجن حقه
            
            91 :5 لا تخشى من خوف الليل و لا من سهم يطير في النهار
            
            91 :6 و لا من وبا يسلك في الدجى و لا من هلاك يفسد في الظهيرة
            
            91 :7 يسقط عن جانبك الف و ربوات عن يمينك إليك لا يقرب
            
            91 :8 إنما بعينيك تنظر و ترى مجازاة الاشرار
            
            91 :9 لانك قلت أنت يا رب ملجاي جعلت العلي مسكنك
            
            91 :10 لا يلاقيك شر و لا تدنو ضربة من خيمتك
            
            91 :11 لانه يوصي ملائكته بك لكي يحفظوك في كل طرقك
            
            91 :12 على الايدي يحملونك لئلا تصدم بحجر رجلك
            
            91 :13 على الاسد و الصل تطا الشبل و الثعبان تدوس
            
            91 :14 لانه تعلق بي انجيه ارفعه لانه عرف اسمي
            
            91 :15 يدعوني فاستجيب له معه أنا في الضيق انقذه و امجده
            
            91 :16 من طول الأيام اشبعه و اريه خلاصي
            
            
            
            
            
            المزمور الثاني والتسعون
            92 :0 مزمور تسبيحة ليوم السبت
            
            92 :1 حسن هو الحمد للرب و الترنم لاسمك ايها العلي
            
            92 :2 ان يخبر برحمتك في الغداة و امانتك كل ليلة
            
            92 :3 على ذات عشرة اوتار و على الرباب على عزف العود
            
            92 :4 لانك فرحتني يا رب بصنائعك باعمال يديك ابتهج
            
            92 :5 ما أعظم اعمالك يا رب و اعمق جدا افكارك
            
            92 :6 الرجل البليد لا يعرف و الجاهل لا يفهم هذا
            
            92 :7 إذا زها الاشرار كالعشب و ازهر كل فاعلي الإثم فلكي يبادوا إلى الدهر
            
            92 :8 اما أنت يا رب فمتعال إلى الابد
            
            92 :9 لانه هوذا اعداؤك يا رب لانه هوذا اعداؤك يبيدون يتبدد كل فاعلي الإثم
            
            92 :10 و تنصب مثل البقر الوحشي قرني تدهنت بزيت طري
            
            92 :11 و تبصر عيني بمراقبي و بالقائمين علي بالشر تسمع اذناي
            
            92 :12 الصديق كالنخلة يزهو كالارز في لبنان ينمو
            
            92 :13 مغروسين في بيت الرب في ديار الهنا يزهرون
            
            92 :14 أيضا يثمرون في الشيبة يكونون دساما و خضرا
            
            92 :15 ليخبروا بان الرب مستقيم صخرتي هو و لا ظلم فيه
            
            
            
            
            
            المزمور الثالث والتسعون
            93 :1 الرب قد ملك لبس الجلال لبس الرب القدرة ائتزر بها أيضا تثبتت المسكونة لا تتزعزع
            
            93 :2 كرسيك مثبتة منذ القدم منذ الازل أنت
            
            93 :3 رفعت الانهار يا رب رفعت الانهار صوتها ترفع الانهار عجيجها
            
            93 :4 من اصوات مياه كثيرة من غمار امواج البحر الرب في العلى اقدر
            
            93 :5 شهاداتك ثابتة جدا ببيتك تليق القداسة يا رب إلى طول الايام
            
            
            
            
            
            المزمور الرابع والتسعون
            94 :1 يا اله النقمات يا رب يا اله النقمات اشرق
            
            94 :2 ارتفع يا ديان الأرض جاز صنيع المستكبرين
            
            94 :3 حتى متى الخطاة يا رب حتى متى الخطاة يشمتون
            
            94 :4 يبقون يتكلمون بوقاحة كل فاعلي الإثم يفتخرون
            
            94 :5 يسحقون شعبك يا رب و يذلون ميراثك
            
            94 :6 يقتلون الأرملة و الغريب و يميتون اليتيم
            
            94 :7 و يقولون الرب لا يبصر و اله يعقوب لا يلاحظ
            
            94 :8 افهموا ايها البلداء في الشعب و يا جهلاء متى تعقلون
            
            94 :9 الغارس الاذن الا يسمع الصانع العين الا يبصر
            
            94 :10 المؤدب الامم الا يبكت المعلم الانسان معرفة
            
            94 :11 الرب يعرف افكار الانسان انها باطلة
            
            94 :12 طوبى للرجل الذي تؤدبه يا رب و تعلمه من شريعتك
            
            94 :13 لتريحه من أيام الشر حتى تحفر للشرير حفرة
            
            94 :14 لان الرب لا يرفض شعبه و لا يترك ميراثه
            
            94 :15 لانه إلى العدل يرجع القضاء و على اثره كل مستقيمي القلوب
            
            94 :16 من يقوم لي على المسيئين من يقف لي ضد فعلة الإثم
            
            94 :17 لولا ان الرب معيني لسكنت نفسي سريعا ارض السكوت
            
            94 :18 إذ قلت قد زلت قدمي فرحمتك يا رب تعضدني
            
            94 :19 عند كثرة همومي في داخلي تعزياتك تلذذ نفسي
            
            94 :20 هل يعاهدك كرسي المفاسد المختلق اثما على فريضة
            
            94 :21 يزدحمون على نفس الصديق و يحكمون على دم زكي
            
            94 :22 فكان الرب لي صرحا و الهي صخرة ملجاي
            
            94 :23 و يرد عليهم اثمهم و بشرهم يفنيهم يفنيهم الرب الهنا
            
            
            
            
            
            المزمور الخامس والتسعون
            95 :1 هلم نرنم للرب نهتف لصخرة خلاصنا
            
            95 :2 نتقدم امامه بحمد و بترنيمات نهتف له
            
            95 :3 لان الرب اله عظيم ملك كبير على كل الالهة
            
            95 :4 الذي بيده مقاصير الأرض و خزائن الجبال له
            
            95 :5 الذي له البحر و هو صنعه و يداه سبكتا اليابسة
            
            95 :6 هلم نسجد و نركع و نجثو أمام الرب خالقنا
            
            95 :7 لانه هو الهنا و نحن شعب مرعاه و غنم يده اليوم ان سمعتم صوته
            
            95 :8 فلا تقسوا قلوبكم كما في مريبة مثل يوم مسة في البرية
            
            95 :9 حيث جربني اباؤكم اختبروني ابصروا أيضا فعلي
            
            95 :10 اربعين سنة مقت ذلك الجيل و قلت هم شعب ضال قلبهم و هم لم يعرفوا سبلي
            
            95 :11 فاقسمت في غضبي لا يدخلون راحتي
            
            
            
            
            
            المزمور السادس والتسعون
            96 :1 رنموا للرب ترنيمة جديدة رنمي للرب يا كل الأرض
            
            96 :2 رنموا للرب باركوا اسمه بشروا من يوم إلى يوم بخلاصه
            
            96 :3 حدثوا بين الامم بمجده بين جميع الشعوب بعجائبه
            
            96 :4 لان الرب عظيم و حميد جدا مهوب هو على كل الالهة
            
            96 :5 لان كل الهة الشعوب اصنام اما الرب فقد صنع السماوات
            
            96 :6 مجد و جلال قدامه العز و الجمال في مقدسه
            
            96 :7 قدموا للرب يا قبائل الشعوب قدموا للرب مجدا و قوة
            
            96 :8 قدموا للرب مجد اسمه هاتوا تقدمة و ادخلوا دياره
            
            96 :9 اسجدوا للرب في زينة مقدسة ارتعدي قدامه يا كل الأرض
            
            96 :10 قولوا بين الامم الرب قد ملك أيضا تثبتت المسكونة فلا تتزعزع يدين الشعوب بالاستقامة
            
            96 :11 لتفرح السماوات و لتبتهج الأرض ليعج البحر و ملؤه
            
            96 :12 ليجذل الحقل و كل ما فيه لتترنم حينئذ كل اشجار الوعر
            
            96 :13 أمام الرب لانه جاء جاء ليدين الأرض يدين المسكونة بالعدل و الشعوب بامانته
            
            
            
            
            
            المزمور السابع والتسعون
            97 :1 الرب قد ملك فلتبتهج الأرض و لتفرح الجزائر الكثيرة
            
            97 :2 السحاب و الضباب حوله العدل و الحق قاعدة كرسيه
            
            97 :3 قدامه تذهب نار و تحرق اعداءه حوله
            
            97 :4 اضاءت بروقه المسكونة رأت الأرض و ارتعدت
            
            97 :5 ذابت الجبال مثل الشمع قدام الرب قدام سيد الأرض كلها
            
            97 :6 اخبرت السماوات بعدله و راى جميع الشعوب مجده
            
            97 :7 يخزى كل عابدي تمثال منحوت المفتخرين بالاصنام اسجدوا له يا جميع الالهة
            
            97 :8 سمعت صهيون ففرحت و ابتهجت بنات يهوذا من اجل احكامك يا رب
            
            97 :9 لانك أنت يا رب علي على كل الأرض علوت جدا على كل الالهة
            
            97 :10 يا محبي الرب ابغضوا الشر هو حافظ نفوس اتقيائه من يد الاشرار ينقذهم
            
            97 :11 نور قد زرع للصديق و فرح للمستقيمي القلب
            
            97 :12 افرحوا ايها الصديقون بالرب و احمدوا ذكر قدسه
            
            
            
            
            
            المزمور الثامن والتسعون
            98 :0 مزمور
            
            98 :1 رنموا للرب ترنيمة جديدة لانه صنع عجائب خلصته يمينه و ذراع قدسه
            
            98 :2 اعلن الرب خلاصه لعيون الامم كشف بره
            
            98 :3 ذكر رحمته و امانته لبيت إسرائيل رأت كل اقاصي الأرض خلاص الهنا
            
            98 :4 اهتفي للرب يا كل الأرض اهتفوا و رنموا و غنوا
            
            98 :5 رنموا للرب بعود بعود و صوت نشيد
            
            98 :6 بالابواق و صوت الصور اهتفوا قدام الملك الرب
            
            98 :7 ليعج البحر و ملؤه المسكونة و الساكنون فيها
            
            98 :8 الانهار لتصفق بالايادي الجبال لترنم معا
            
            98 :9 أمام الرب لانه جاء ليدين الأرض يدين المسكونة بالعدل و الشعوب بالاستقامة
            
            
            
            
            
            المزمور التاسع والتسعون
            99 :1 الرب قد ملك ترتعد الشعوب هو جالس على الكروبيم تتزلزل الارض
            
            99 :2 الرب عظيم في صهيون و عال هو على كل الشعوب
            
            99 :3 يحمدون اسمك العظيم و المهوب قدوس هو
            
            99 :4 و عز الملك ان يحب الحق أنت ثبت الاستقامة أنت اجريت حقا و عدلا في يعقوب
            
            99 :5 علوا الرب الهنا و اسجدوا عند موطئ قدميه قدوس هو
            
            99 :6 موسى و هرون بين كهنته و صموئيل بين الذين يدعون باسمه دعوا الرب و هو استجاب لهم
            
            99 :7 بعمود السحاب كلمهم حفظوا شهاداته و الفريضة التي اعطاهم
            
            99 :8 ايها الرب الهنا أنت استجبت لهم الها غفورا كنت لهم و منتقما على افعالهم
            
            99 :9 علوا الرب الهنا و اسجدوا في جبل قدسه لان الرب الهنا قدوس
            
            
            
            
            
            المزمور المئة
            100 :0 مزمور حمد
            
            100 :1 اهتفي للرب يا كل الأرض
            
            100 :2 اعبدوا الرب بفرح ادخلوا إلى حضرته بترنم
            
            100 :3 اعلموا ان الرب هو الله هو صنعنا و له نحن شعبه و غنم مرعاه
            
            100 :4 ادخلوا ابوابه بحمد دياره بالتسبيح احمدوه باركوا اسمه
            
            100 :5 لان الرب صالح إلى الابد رحمته و إلى دور فدور امانته
            
            
            
            
            
            المزمور المئة والواحد
            101 :0 لداود مزمور
            
            101 :1 رحمة و حكما اغني لك يا رب ارنم
            
            101 :2 اتعقل في طريق كامل متى تأتي إلي اسلك في كمال قلبي في وسط بيتي
            
            101 :3 لا اضع قدام عيني امرا رديئا عمل الزيغان ابغضت لا يلصق بي
            
            101 :4 قلب معوج يبعد عني الشرير لا اعرفه
            
            101 :5 الذي يغتاب صاحبه سرا هذا اقطعه مستكبر العين و منتفخ القلب لا احتمله
            
            101 :6 عيناي على امناء الأرض لكي اجلسهم معي السالك طريقا كاملا هو يخدمني
            
            101 :7 لا يسكن وسط بيتي عامل غش المتكلم بالكذب لا يثبت أمام عيني
            
            101 :8 باكرا ابيد جميع اشرار الأرض لاقطع من مدينة الرب كل فاعلي الإثم
            
            
            
            
            
            المزمور المئة والثاني
            102 :0 صلاة لمسكين إذا اعيا و سكب شكواه قدام الله
            
            102 :1 يا رب استمع صلاتي و ليدخل إليك صراخي
            
            102 :2 لا تحجب وجهك عني في يوم ضيقي امل إلي اذنك في يوم ادعوك استجب لي سريعا
            
            102 :3 لان ايامي قد فنيت في دخان و عظامي مثل وقيد قد يبست
            
            102 :4 ملفوح كالعشب و يابس قلبي حتى سهوت عن اكل خبزي
            
            102 :5 من صوت تنهدي لصق عظمي بلحمي
            
            102 :6 اشبهت قوق البرية صرت مثل بومة الخرب
            
            102 :7 سهدت و صرت كعصفور منفرد على السطح
            
            102 :8 اليوم كله عيرني اعدائي الحنقون علي حلفوا علي
            
            102 :9 اني قد اكلت الرماد مثل الخبز و مزجت شرابي بدموع
            
            102 :10 بسبب غضبك و سخطك لانك حملتني و طرحتني
            
            102 :11 ايامي كظل مائل و أنا مثل العشب يبست
            
            102 :12 اما أنت يا رب فالى الدهر جالس و ذكرك إلى دور فدور
            
            102 :13 أنت تقوم و ترحم صهيون لانه وقت الرأفة لانه جاء الميعاد
            
            102 :14 لان عبيدك قد سروا بحجارتها و حنوا إلى ترابها
            
            102 :15 فتخشى الامم اسم الرب و كل ملوك الأرض مجدك
            
            102 :16 إذا بنى الرب صهيون يرى بمجده
            
            102 :17 التفت إلى صلاة المضطر و لم يرذل دعاءهم
            
            102 :18 يكتب هذا للدور الاخر و شعب سوف يخلق يسبح الرب
            
            102 :19 لانه اشرف من علو قدسه الرب من السماء إلى الأرض نظر
            
            102 :20 ليسمع انين الاسير ليطلق بني الموت
            
            102 :21 لكي يحدث في صهيون باسم الرب و بتسبيحه في أورشليم
            
            102 :22 عند اجتماع الشعوب معا و الممالك لعبادة الرب
            
            102 :23 ضعف في الطريق قوتي قصر ايامي
            
            102 :24 أقول يا الهي لا تقبضني في نصف ايامي إلى دهر الدهور سنوك
            
            102 :25 من قدم اسست الأرض و السماوات هي عمل يديك
            
            102 :26 هي تبيد و أنت تبقى و كلها كثوب تبلى كرداء تغيرهن فتتغير
            
            102 :27 و أنت هو و سنوك لن تنتهي
            
            102 :28 ابناء عبيدك يسكنون و ذريتهم تثبت امامك
            
            
            
            
            
            المزمور المئة والثالث
            103 :0 لداود
            
            103 :1 باركي يا نفسي الرب و كل ما في باطني ليبارك اسمه القدوس
            
            103 :2 باركي يا نفسي الرب و لا تنسي كل حسناته
            
            103 :3 الذي يغفر جميع ذنوبك الذي يشفي كل امراضك
            
            103 :4 الذي يفدي من الحفرة حياتك الذي يكللك بالرحمة و الرافة
            
            103 :5 الذي يشبع بالخير عمرك فيتجدد مثل النسر شبابك
            
            103 :6 الرب مجري العدل و القضاء لجميع المظلومين
            
            103 :7 عرف موسى طرقه و بني إسرائيل افعاله
            
            103 :8 الرب رحيم و رؤوف طويل الروح و كثير الرحمة
            
            103 :9 لا يحاكم إلى الابد و لا يحقد إلى الدهر
            
            103 :10 لم يصنع معنا حسب خطايانا و لم يجازنا حسب اثامنا
            
            103 :11 لانه مثل ارتفاع السماوات فوق الأرض قويت رحمته على خائفيه
            
            103 :12 كبعد المشرق من المغرب ابعد عنا معاصينا
            
            103 :13 كما يتراف الاب على البنين يتراف الرب على خائفيه
            
            103 :14 لانه يعرف جبلتنا يذكر اننا تراب نحن
            
            103 :15 الانسان مثل العشب ايامه كزهر الحقل كذلك يزهر
            
            103 :16 لان ريحا تعبر عليه فلا يكون و لا يعرفه موضعه بعد
            
            103 :17 اما رحمة الرب فالى الدهر و الابد على خائفيه و عدله على بني البنين
            
            103 :18 لحافظي عهده و ذاكري وصاياه ليعملوها
            
            103 :19 الرب في السماوات ثبت كرسيه و مملكته على الكل تسود
            
            103 :20 باركوا الرب يا ملائكته المقتدرين قوة الفاعلين امره عند سماع صوت كلامه
            
            103 :21 باركوا الرب يا جميع جنوده خدامه العاملين مرضاته
            
            103 :22 باركوا الرب يا جميع اعماله في كل مواضع سلطانه باركي يا نفسي الرب
            
            
            
            
            
            المزمور المئة والرابع
            104 :1 باركي يا نفسي الرب يا رب الهي قد عظمت جدا مجدا و جلالا لبست
            
            104 :2 اللابس النور كثوب الباسط السماوات كشقة
            
            104 :3 المسقف علاليه بالمياه الجاعل السحاب مركبته الماشي على اجنحة الريح
            
            104 :4 الصانع ملائكته رياحا و خدامه نارا ملتهبة
            
            104 :5 المؤسس الأرض على قواعدها فلا تتزعزع إلى الدهر و الابد
            
            104 :6 كسوتها الغمر كثوب فوق الجبال تقف المياه
            
            104 :7 من انتهارك تهرب من صوت رعدك تفر
            
            104 :8 تصعد إلى الجبال تنزل إلى البقاع إلى الموضع الذي اسسته لها
            
            104 :9 وضعت لها تخما لا تتعداه لا ترجع لتغطي الأرض
            
            104 :10 المفجر عيونا في الاودية بين الجبال تجري
            
            104 :11 تسقي كل حيوان البر تكسر الفراء ظماها
            
            104 :12 فوقها طيور السماء تسكن من بين الاغصان تسمع صوتا
            
            104 :13 الساقي الجبال من علاليه من ثمر اعمالك تشبع الأرض
            
            104 :14 المنبت عشبا للبهائم و خضرة لخدمة الانسان لاخراج خبز من الأرض
            
            104 :15 و خمر تفرح قلب الانسان لالماع وجهه أكثر من الزيت و خبز يسند قلب الانسان
            
            104 :16 تشبع اشجار الرب ارز لبنان الذي نصبه
            
            104 :17 حيث تعشش هناك العصافير اما اللقلق فالسرو بيته
            
            104 :18 الجبال العالية للوعول الصخور ملجا للوبار
            
            104 :19 صنع القمر للمواقيت الشمس تعرف مغربها
            
            104 :20 تجعل ظلمة فيصير ليل فيه يدب كل حيوان الوعر
            
            104 :21 الاشبال تزمجر لتخطف و لتلتمس من الله طعامها
            
            104 :22 تشرق الشمس فتجتمع و في ماويها تربض
            
            104 :23 الانسان يخرج إلى عمله و إلى شغله إلى المساء
            
            104 :24 ما أعظم اعمالك يا رب كلها بحكمة صنعت ملانة الأرض من غناك
            
            104 :25 هذا البحر الكبير الواسع الاطراف هناك دبابات بلا عدد صغار حيوان مع كبار
            
            104 :26 هناك تجري السفن لوياثان هذا خلقته ليلعب فيه
            
            104 :27 كلها اياك تترجى لترزقها قوتها في حينه
            
            104 :28 تعطيها فتلتقط تفتح يدك فتشبع خيرا
            
            104 :29 تحجب وجهك فترتاع تنزع ارواحها فتموت و إلى ترابها تعود
            
            104 :30 ترسل روحك فتخلق و تجدد وجه الأرض
            
            104 :31 يكون مجد الرب إلى الدهر يفرح الرب باعماله
            
            104 :32 الناظر إلى الأرض فترتعد يمس الجبال فتدخن
            
            104 :33 اغني للرب في حياتي ارنم لالهي ما دمت موجودا
            
            104 :34 فيلذ له نشيدي و أنا افرح بالرب
            
            104 :35 لتبد الخطاة من الأرض و الاشرار لا يكونوا بعد باركي يا نفسي الرب هللويا
            
            
            
            
            
            المزمور المئة والخامس
            105 :1 احمدوا الرب ادعوا باسمه عرفوا بين الامم باعماله
            
            105 :2 غنوا له رنموا له انشدوا بكل عجائبه
            
            105 :3 افتخروا باسمه القدوس لتفرح قلوب الذين يلتمسون الرب
            
            105 :4 اطلبوا الرب و قدرته التمسوا وجهه دائما
            
            105 :5 اذكروا عجائبه التي صنع اياته و احكام فيه
            
            105 :6 يا ذرية إبراهيم عبده يا بني يعقوب مختاريه
            
            105 :7 هو الرب الهنا في كل الأرض احكامه
            
            105 :8 ذكر إلى الدهر عهده كلاما اوصى به إلى الف دور
            
            105 :9 الذي عاهد به إبراهيم و قسمه لاسحق
            
            105 :10 فثبته ليعقوب فريضة و لإسرائيل عهدا ابديا
            
            105 :11 قائلا لك اعطي ارض كنعان حبل ميراثكم
            
            105 :12 إذ كانوا عددا يحصى قليلين و غرباء فيها
            
            105 :13 ذهبوا من امة إلى امة من مملكة إلى شعب آخر
            
            105 :14 فلم يدع انسانا يظلمهم بل وبخ ملوكا من اجلهم
            
            105 :15 قائلا لا تمسوا مسحائي و لا تسيئوا إلى انبيائي
            
            105 :16 دعا بالجوع على الأرض كسر قوام الخبز كله
            
            105 :17 أرسل امامهم رجلا بيع يوسف عبدا
            
            105 :18 اذوا بالقيد رجليه في الحديد دخلت نفسه
            
            105 :19 إلى وقت مجيء كلمته قول الرب امتحنه
            
            105 :20 أرسل الملك فحله أرسل سلطان الشعب فاطلقه
            
            105 :21 اقامه سيدا على بيته و مسلطا على كل ملكه
            
            105 :22 لياسر رؤساءه حسب ارادته و يعلم مشايخه حكمة
            
            105 :23 فجاء إسرائيل إلى مصر و يعقوب تغرب في ارض حام
            
            105 :24 جعل شعبه مثمرا جدا و اعزه على اعدائه
            
            105 :25 حول قلوبهم ليبغضوا شعبه ليحتالوا على عبيده
            
            105 :26 أرسل موسى عبده و هرون الذي اختاره
            
            105 :27 اقاما بينهم كلام اياته و عجائب في ارض حام
            
            105 :28 أرسل ظلمة فاظلمت و لم يعصوا كلامه
            
            105 :29 حول مياههم إلى دم و قتل اسماكهم
            
            105 :30 افاضت ارضهم ضفادع حتى في مخادع ملوكهم
            
            105 :31 امر فجاء الذبان و البعوض في كل تخومهم
            
            105 :32 جعل امطارهم بردا و نارا ملتهبة في ارضهم
            
            105 :33 ضرب كرومهم و تينهم و كسر كل اشجار تخومهم
            
            105 :34 امر فجاء الجراد و غوغاء بلا عدد
            
            105 :35 فاكل كل عشب في بلادهم و اكل اثمار ارضهم
            
            105 :36 قتل كل بكر في ارضهم اوائل كل قوتهم
            
            105 :37 فاخرجهم بفضة و ذهب و لم يكن في اسباطهم عاثر
            
            105 :38 فرحت مصر بخروجهم لان رعبهم سقط عليهم
            
            105 :39 بسط سحابا سجفا و نارا لتضيء الليل
            
            105 :40 سالوا فاتاهم بالسلوى و خبز السماء اشبعهم
            
            105 :41 شق الصخرة فانفجرت المياه جرت في اليابسة نهرا
            
            105 :42 لانه ذكر كلمة قدسه مع إبراهيم عبده
            
            105 :43 فاخرج شعبه بابتهاج و مختاريه بترنم
            
            105 :44 و اعطاهم اراضي الامم و تعب الشعوب ورثوه
            
            105 :45 لكي يحفظوا فرائضه و يطيعوا شرائعه هللويا
            
            
            
            
            
            المزمور المئة والسادس
            106 :1 هللويا احمدوا الرب لانه صالح لان إلى الابد رحمته
            
            106 :2 من يتكلم بجبروت الرب من يخبر بكل تسابيحه
            
            106 :3 طوبى للحافظين الحق و للصانع البر في كل حين
            
            106 :4 اذكرني يا رب برضا شعبك تعهدني بخلاصك
            
            106 :5 لارى خير مختاريك لافرح بفرح امتك لافتخر مع ميراثك
            
            106 :6 اخطانا مع ابائنا اسانا و اذنبنا
            
            106 :7 اباؤنا في مصر لم يفهموا عجائبك لم يذكروا كثرة مراحمك فتمردوا عند البحر عند بحر سوف
            
            106 :8 فخلصهم من اجل اسمه ليعرف بجبروته
            
            106 :9 و انتهر بحر سوف فيبس و سيرهم في اللجج كالبرية
            
            106 :10 و خلصهم من يد المبغض و فداهم من يد العدو
            
            106 :11 و غطت المياه مضايقيهم واحد منهم لم يبق
            
            106 :12 فامنوا بكلامه غنوا بتسبيحه
            
            106 :13 اسرعوا فنسوا اعماله لم ينتظروا مشورته
            
            106 :14 بل اشتهوا شهوة في البرية و جربوا الله في القفر
            
            106 :15 فاعطاهم سؤلهم و أرسل هزالا في انفسهم
            
            106 :16 و حسدوا موسى في المحلة و هرون قدوس الرب
            
            106 :17 فتحت الأرض و ابتلعت داثان و طبقت على جماعة ابيرام
            
            106 :18 و اشتعلت نار في جماعتهم اللهيب احرق الاشرار
            
            106 :19 صنعوا عجلا في حوريب و سجدوا لتمثال مسبوك
            
            106 :20 و ابدلوا مجدهم بمثال ثور اكل عشب
            
            106 :21 نسوا الله مخلصهم الصانع عظائم في مصر
            
            106 :22 و عجائب في ارض حام و مخاوف على بحر سوف
            
            106 :23 فقال باهلاكهم لولا موسى مختاره وقف في الثغر قدامه ليصرف غضبه عن اتلافهم
            
            106 :24 و رذلوا الأرض الشهية لم يؤمنوا بكلمته
            
            106 :25 بل تمرمروا في خيامهم لم يسمعوا لصوت الرب
            
            106 :26 فرفع يده عليهم ليسقطهم في البرية
            
            106 :27 و ليسقط نسلهم بين الامم و ليبددهم في الاراضي
            
            106 :28 و تعلقوا ببعل فغور و اكلوا ذبائح الموتى
            
            106 :29 و اغاظوه باعمالهم فاقتحمهم الوبا
            
            106 :30 فوقف فينحاس و دان فامتنع الوبا
            
            106 :31 فحسب له ذلك برا إلى دور فدور إلى الابد
            
            106 :32 و اسخطوه على ماء مريبة حتى تاذى موسى بسببهم
            
            106 :33 لانهم امروا روحه حتى فرط بشفتيه
            
            106 :34 لم يستاصلوا الامم الذين قال لهم الرب عنهم
            
            106 :35 بل اختلطوا بالامم و تعلموا اعمالهم
            
            106 :36 و عبدوا اصنامهم فصارت لهم شركا
            
            106 :37 و ذبحوا بنيهم و بناتهم للاوثان
            
            106 :38 و اهرقوا دما زكيا دم بنيهم و بناتهم الذين ذبحوهم لاصنام كنعان و تدنست الأرض بالدماء
            
            106 :39 و تنجسوا باعمالهم و زنوا بافعالهم
            
            106 :40 فحمي غضب الرب على شعبه و كره ميراثه
            
            106 :41 و اسلمهم ليد الامم و تسلط عليهم مبغضوهم
            
            106 :42 و ضغطهم اعداؤهم فذلوا تحت يدهم
            
            106 :43 مرات كثيرة انقذهم اما هم فعصوه بمشورتهم و انحطوا باثمهم
            
            106 :44 فنظر إلى ضيقهم إذ سمع صراخهم
            
            106 :45 و ذكر لهم عهده و ندم حسب كثرة رحمته
            
            106 :46 و اعطاهم نعمة قدام كل الذين سبوهم
            
            106 :47 خلصنا ايها الرب الهنا و اجمعنا من بين الامم لنحمد اسم قدسك و نتفاخر بتسبيحك
            
            106 :48 مبارك الرب اله إسرائيل من الازل و إلى الابد و يقول كل الشعب امين هللويا
            
            
            
            
            
            المزمور المئة والسابع
            107 :1 احمدوا الرب لانه صالح لان إلى الابد رحمته
            
            107 :2 ليقل مفديو الرب الذين فداهم من يد العدو
            
            107 :3 و من البلدان جمعهم من المشرق و من المغرب من الشمال و من البحر
            
            107 :4 تاهوا في البرية في قفر بلا طريق لم يجدوا مدينة سكن
            
            107 :5 جياع عطاش أيضا اعيت انفسهم فيهم
            
            107 :6 فصرخوا إلى الرب في ضيقهم فانقذهم من شدائدهم
            
            107 :7 و هداهم طريقا مستقيما ليذهبوا إلى مدينة سكن
            
            107 :8 فليحمدوا الرب على رحمته و عجائبه لبني ادم
            
            107 :9 لانه اشبع نفسا مشتهية و ملا نفسا جائعة خيرا
            
            107 :10 الجلوس في الظلمة و ظلال الموت موثقين بالذل و الحديد
            
            107 :11 لانهم عصوا كلام الله و اهانوا مشورة العلي
            
            107 :12 فاذل قلوبهم بتعب عثروا و لا معين
            
            107 :13 ثم صرخوا إلى الرب في ضيقهم فخلصهم من شدائدهم
            
            107 :14 اخرجهم من الظلمة و ظلال الموت و قطع قيودهم
            
            107 :15 فليحمدوا الرب على رحمته و عجائبه لبني ادم
            
            107 :16 لانه كسر مصاريع نحاس و قطع عوارض حديد
            
            107 :17 و الجهال من طريق معصيتهم و من اثامهم يذلون
            
            107 :18 كرهت انفسهم كل طعام و اقتربوا إلى ابواب الموت
            
            107 :19 فصرخوا إلى الرب في ضيقهم فخلصهم من شدائدهم
            
            107 :20 أرسل كلمته فشفاهم و نجاهم من تهلكاتهم
            
            107 :21 فليحمدوا الرب على رحمته و عجائبه لبني ادم
            
            107 :22 و ليذبحوا له ذبائح الحمد و ليعدوا اعماله بترنم
            
            107 :23 النازلون إلى البحر في السفن العاملون عملا في المياه الكثيرة
            
            107 :24 هم راوا أعمال الرب و عجائبه في العمق
            
            107 :25 امر فاهاج ريحا عاصفة فرفعت امواجه
            
            107 :26 يصعدون إلى السماوات يهبطون إلى الاعماق ذابت انفسهم بالشقاء
            
            107 :27 يتمايلون و يترنحون مثل السكران و كل حكمتهم ابتلعت
            
            107 :28 فيصرخون إلى الرب في ضيقهم و من شدائدهم يخلصهم
            
            107 :29 يهدئ العاصفة فتسكن و تسكت امواجها
            
            107 :30 فيفرحون لانهم هداوا فيهديهم إلى المرفا الذي يريدونه
            
            107 :31 فليحمدوا الرب على رحمته و عجائبه لبني ادم
            
            107 :32 و ليرفعوه في مجمع الشعب و ليسبحوه في مجلس المشايخ
            
            107 :33 يجعل الانهار قفارا و مجاري المياه معطشة
            
            107 :34 و الأرض المثمرة سبخة من شر الساكنين فيها
            
            107 :35 يجعل القفر غدير مياه و ارضا يبسا ينابيع مياه
            
            107 :36 و يسكن هناك الجياع فيهيئون مدينة سكن
            
            107 :37 و يزرعون حقولا و يغرسون كروما فتصنع ثمر غلة
            
            107 :38 و يباركهم فيكثرون جدا و لا يقلل بهائمهم
            
            107 :39 ثم يقلون و ينحنون من ضغط الشر و الحزن
            
            107 :40 يسكب هوانا على رؤساء و يضلهم في تيه بلا طريق
            
            107 :41 و يعلي المسكين من الذل و يجعل القبائل مثل قطعان الغنم
            
            107 :42 يرى ذلك المستقيمون فيفرحون و كل إثم يسد فاه
            
            107 :43 من كان حكيما يحفظ هذا و يتعقل مراحم الرب
            
            
            
            
            
            المزمور المئة والثامن
            108 :0 تسبيحة مزمور لداود
            
            108 :1 ثابت قلبي يا الله اغني و ارنم كذلك مجدي
            
            108 :2 استيقظي ايتها الرباب و العود أنا استيقظ سحرا
            
            108 :3 احمدك بين الشعوب يا رب و ارنم لك بين الامم
            
            108 :4 لان رحمتك قد عظمت فوق السماوات و إلى الغمام حقك
            
            108 :5 ارتفع اللهم على السماوات و ليرتفع على كل الأرض مجدك
            
            108 :6 لكي ينجو احباؤك خلص بيمينك و استجب لي
            
            108 :7 الله قد تكلم بقدسه ابتهج اقسم شكيم و اقيس وادي سكوت
            
            108 :8 لي جلعاد لي منسى افرايم خوذة راسي يهوذا صولجاني
            
            108 :9 مواب مرحضتي على ادوم اطرح نعلي يا فلسطين اهتفي علي
            
            108 :10 من يقودني إلى المدينة المحصنة من يهديني إلى ادوم
            
            108 :11 أليس أنت يا الله الذي رفضتنا و لا تخرج يا الله مع جيوشنا
            
            108 :12 اعطنا عونا في الضيق فباطل هو خلاص الانسان
            
            108 :13 بالله نصنع بباس و هو يدوس اعداءنا
            
            
            
            
            
            المزمور المئة والتاسع
            109 :0 لامام المغنين لداود مزمور
            
            109 :1 يا اله تسبيحي لا تسكت
            
            109 :2 لانه قد انفتح علي فم الشرير و فم الغش تكلموا معي بلسان كذب
            
            109 :3 بكلام بغض احاطوا بي و قاتلوني بلا سبب
            
            109 :4 بدل محبتي يخاصمونني اما أنا فصلاة
            
            109 :5 وضعوا علي شرا بدل خير و بغضا بدل حبي
            
            109 :6 فاقم أنت عليه شريرا و ليقف شيطان عن يمينه
            
            109 :7 إذا حوكم فليخرج مذنبا و صلاته فلتكن خطية
            
            109 :8 لتكن ايامه قليلة و وظيفته لياخذها آخر
            
            109 :9 ليكن بنوه ايتاما و امراته أرملة
            
            109 :10 ليته بنوه تيهانا و يستعطوا و يلتمسوا خبزا من خربهم
            
            109 :11 ليصطد المرابي كل ما له و لينهب الغرباء تعبه
            
            109 :12 لا يكن له باسط رحمة و لا يكن متراف على يتاماه
            
            109 :13 لتنقرض ذريته في الجيل القادم ليمح اسمهم
            
            109 :14 ليذكر إثم ابائه لدى الرب و لا تمح خطية امه
            
            109 :15 لتكن أمام الرب دائما و ليقرض من الأرض ذكرهم
            
            109 :16 من اجل انه لم يذكر ان يصنع رحمة بل طرد انسانا مسكينا و فقيرا و المنسحق القلب ليميته
            
            109 :17 و احب اللعنة فاتته و لم يسر بالبركة فتباعدت عنه
            
            109 :18 و لبس اللعنة مثل ثوبه فدخلت كمياه في حشاه و كزيت في عظامه
            
            109 :19 لتكن له كثوب يتعطف به و كمنطقة يتنطق بها دائما
            
            109 :20 هذه اجرة مبغضي من عند الرب و اجرة المتكلمين شرا على نفسي
            
            109 :21 اما أنت يا رب السيد فاصنع معي من اجل اسمك لان رحمتك طيبة نجني
            
            109 :22 فاني فقير و مسكين أنا و قلبي مجروح في داخلي
            
            109 :23 كظل عند ميله ذهبت انتفضت كجرادة
            
            109 :24 ركبتاي ارتعشتا من الصوم و لحمي هزل عن سمن
            
            109 :25 و أنا صرت عارا عندهم ينظرون إلي و ينغضون رؤوسهم
            
            109 :26 اعني يا رب الهي خلصني حسب رحمتك
            
            109 :27 و ليعلموا ان هذه هي يدك أنت يا رب فعلت هذا
            
            109 :28 اما هم فيلعنون و اما أنت فتبارك قاموا و خزوا اما عبدك فيفرح
            
            109 :29 ليلبس خصمائي خجلا و ليتعطفوا بخزيهم كالرداء
            
            109 :30 احمد الرب جدا بفمي و في وسط كثيرين اسبحه
            
            109 :31 لانه يقوم عن يمين المسكين ليخلصه من القاضين على نفسه
            
            
            
            
            
            المزمور المئة والعاشر
            110 :0 لداود مزمور
            
            110 :1 قال الرب لربي اجلس عن يميني حتى اضع اعداءك موطئا لقدميك
            
            110 :2 يرسل الرب قضيب عزك من صهيون تسلط في وسط اعدائك
            
            110 :3 شعبك منتدب في يوم قوتك في زينة مقدسة من رحم الفجر لك طل حداثتك
            
            110 :4 اقسم الرب و لن يندم أنت كاهن إلى الابد على رتبة ملكي صادق
            
            110 :5 الرب عن يمينك يحطم في يوم رجزه ملوكا
            
            110 :6 يدين بين الامم ملا جثثا ارضا واسعة سحق رؤوسها
            
            110 :7 من النهر يشرب في الطريق لذلك يرفع الراس
            
            
            
            
            
            المزمور المئة والحادي عشر
            111 :1 هللويا احمد الرب بكل قلبي في مجلس المستقيمين و جماعتهم
            
            111 :2 عظيمة هي أعمال الرب مطلوبة لكل المسرورين بها
            
            111 :3 جلال و بهاء عمله و عدله قائم إلى الابد
            
            111 :4 صنع ذكرا لعجائبه حنان و رحيم هو الرب
            
            111 :5 اعطى خائفيه طعاما يذكر إلى الابد عهده
            
            111 :6 اخبر شعبه بقوة اعماله ليعطيهم ميراث الامم
            
            111 :7 أعمال يديه امانة و حق كل وصاياه امينة
            
            111 :8 ثابتة مدى الدهر و الابد مصنوعة بالحق و الاستقامة
            
            111 :9 أرسل فداء لشعبه اقام إلى الابد عهده قدوس و مهوب اسمه
            
            111 :10 راس الحكمة مخافة الرب فطنة جيدة لكل عامليها تسبيحه قائم إلى الابد
            
            
            
            
            
            المزمور المئة والثاني عشر
            112 :1 هللويا طوبى للرجل المتقي الرب المسرور جدا بوصاياه
            
            112 :2 نسله يكون قويا في الأرض جيل المستقيمين يبارك
            
            112 :3 رغد و غنى في بيته و بره قائم إلى الابد
            
            112 :4 نور اشرق في الظلمة للمستقيمين هو حنان و رحيم و صديق
            
            112 :5 سعيد هو الرجل الذي يتراف و يقرض يدبر اموره بالحق
            
            112 :6 لانه لا يتزعزع إلى الدهر الصديق يكون لذكر ابدي
            
            112 :7 لا يخشى من خبر سوء قلبه ثابت متكلا على الرب
            
            112 :8 قلبه ممكن فلا يخاف حتى يرى بمضايقيه
            
            112 :9 فرق اعطى المساكين بره قائم إلى الابد قرنه ينتصب بالمجد
            
            112 :10 الشرير يرى فيغضب يحرق أسنانه و يذوب شهوة الشرير تبيد
            
            
            
            
            
            المزمور المئة والثالث عشر
            113 :1 هللويا سبحوا يا عبيد الرب سبحوا اسم الرب
            
            113 :2 ليكن اسم الرب مباركا من الآن و إلى الابد
            
            113 :3 من مشرق الشمس إلى مغربها اسم الرب مسبح
            
            113 :4 الرب عال فوق كل الامم فوق السماوات مجده
            
            113 :5 من مثل الرب الهنا الساكن في الأعالي
            
            113 :6 الناظر الاسافل في السماوات و في الأرض
            
            113 :7 المقيم المسكين من التراب الرافع البائس من المزبلة
            
            113 :8 ليجلسه مع اشراف مع اشراف شعبه
            
            113 :9 المسكن العاقر في بيت ام أولاد فرحانة هللويا
            
            
            
            
            
            المزمور المئة والرابع عشر
            114 :1 عند خروج إسرائيل من مصر و بيت يعقوب من شعب اعجم
            
            114 :2 كان يهوذا مقدسه و إسرائيل محل سلطانه
            
            114 :3 البحر راه فهرب الأردن رجع إلى خلف
            
            114 :4 الجبال قفزت مثل الكباش و الاكام مثل حملان الغنم
            
            114 :5 ما لك ايها البحر قد هربت و ما لك ايها الأردن قد رجعت إلى خلف
            
            114 :6 و ما لكن ايتها الجبال قد قفزتن مثل الكباش و ايتها التلال مثل حملان الغنم
            
            114 :7 ايتها الأرض تزلزلي من قدام الرب من قدام اله يعقوب
            
            114 :8 المحول الصخرة إلى غدران مياه الصوان إلى ينابيع مياه
            
            
            
            
            
            المزمور المئة والخامس عشر
            115 :1 ليس لنا يا رب ليس لنا لكن لاسمك اعط مجدا من اجل رحمتك من اجل امانتك
            
            115 :2 لماذا يقول الامم أين هو الههم
            
            115 :3 ان الهنا في السماء كلما شاء صنع
            
            115 :4 اصنامهم فضة و ذهب عمل ايدي الناس
            
            115 :5 لها افواه و لا تتكلم لها اعين و لا تبصر
            
            115 :6 لها اذان و لا تسمع لها مناخر و لا تشم
            
            115 :7 لها ايد و لا تلمس لها ارجل و لا تمشي و لا تنطق بحناجرها
            
            115 :8 مثلها يكون صانعوها بل كل من يتكل عليها
            
            115 :9 يا إسرائيل اتكل على الرب هو معينهم و مجنهم
            
            115 :10 يا بيت هرون اتكلوا على الرب هو معينهم و مجنهم
            
            115 :11 يا متقي الرب اتكلوا على الرب هو معينهم و مجنهم
            
            115 :12 الرب قد ذكرنا فيبارك يبارك بيت إسرائيل يبارك بيت هرون
            
            115 :13 يبارك متقي الرب الصغار مع الكبار
            
            115 :14 ليزد الرب عليكم عليكم و على ابنائكم
            
            115 :15 انتم مباركون للرب الصانع السماوات و الأرض
            
            115 :16 السماوات سماوات للرب اما الأرض فاعطاها لبني ادم
            
            115 :17 ليس الاموات يسبحون الرب و لا من ينحدر إلى ارض السكوت
            
            115 :18 اما نحن فنبارك الرب من الآن و إلى الدهر هللويا
            
            
            
            
            
            المزمور المئة والسادس عشر
            116 :1 احببت لان الرب يسمع صوتي تضرعاتي
            
            116 :2 لانه امال اذنه إلي فادعوه مدة حياتي
            
            116 :3 اكتنفتني حبال الموت اصابتني شدائد الهاوية كابدت ضيقا و حزنا
            
            116 :4 و باسم الرب دعوت اه يا رب نج نفسي
            
            116 :5 الرب حنان و صديق و الهنا رحيم
            
            116 :6 الرب حافظ البسطاء تذللت فخلصني
            
            116 :7 ارجعي يا نفسي إلى راحتك لان الرب قد احسن إليك
            
            116 :8 لانك انقذت نفسي من الموت و عيني من الدمعة و رجلي من الزلق
            
            116 :9 اسلك قدام الرب في ارض الاحياء
            
            116 :10 امنت لذلك تكلمت أنا تذللت جدا
            
            116 :11 أنا قلت في حيرتي كل انسان كاذب
            
            116 :12 ماذا ارد للرب من اجل كل حسناته لي
            
            116 :13 كاس الخلاص اتناول و باسم الرب أدعو
            
            116 :14 اوفي نذوري للرب مقابل كل شعبه
            
            116 :15 عزيز في عيني الرب موت اتقيائه
            
            116 :16 اه يا رب لأني عبدك أنا عبدك ابن امتك حللت قيودي
            
            116 :17 فلك اذبح ذبيحة حمد و باسم الرب أدعو
            
            116 :18 اوفي نذوري للرب مقابل شعبه
            
            116 :19 في ديار بيت الرب في وسطك يا أورشليم هللويا
            
            
            
            
            
            المزمور المئة والسابع عشر
            117 :1 سبحوا الرب يا كل الامم حمدوه يا كل الشعوب
            
            117 :2 لان رحمته قد قويت علينا و امانة الرب إلى الدهر هللويا
            
            
            
            
            
            المزمور المئة والثامن عشر
            118 :1 احمدوا الرب لانه صالح لان إلى الابد رحمته
            
            118 :2 ليقل إسرائيل ان إلى الابد رحمته
            
            118 :3 ليقل بيت هرون ان إلى الابد رحمته
            
            118 :4 ليقل متقو الرب ان إلى الابد رحمته
            
            118 :5 من الضيق دعوت الرب فاجابني من الرحب
            
            118 :6 الرب لي فلا اخاف ماذا يصنع بي الانسان
            
            118 :7 الرب لي بين معيني و أنا سارى باعدائي
            
            118 :8 الاحتماء بالرب خير من التوكل على انسان
            
            118 :9 الاحتماء بالرب خير من التوكل على الرؤساء
            
            118 :10 كل الامم احاطوا بي باسم الرب ابيدهم
            
            118 :11 احاطوا بي و اكتنفوني باسم الرب ابيدهم
            
            118 :12 احاطوا بي مثل النحل انطفاوا كنار الشوك باسم الرب ابيدهم
            
            118 :13 دحرتني دحورا لاسقط اما الرب فعضدني
            
            118 :14 قوتي و ترنمي الرب و قد صار لي خلاصا
            
            118 :15 صوت ترنم و خلاص في خيام الصديقين يمين الرب صانعة بباس
            
            118 :16 يمين الرب مرتفعة يمين الرب صانعة بباس
            
            118 :17 لا اموت بل احيا و احدث باعمال الرب
            
            118 :18 تاديبا ادبني الرب و إلى الموت لم يسلمني
            
            118 :19 افتحوا لي ابواب البر ادخل فيها و احمد الرب
            
            118 :20 هذا الباب للرب الصديقون يدخلون فيه
            
            118 :21 احمدك لانك استجبت لي و صرت لي خلاصا
            
            118 :22 الحجر الذي رفضه البناؤون قد صار راس الزاوية
            
            118 :23 من قبل الرب كان هذا و هو عجيب في اعيننا
            
            118 :24 هذا هو اليوم الذي صنعه الرب نبتهج و نفرح فيه
            
            118 :25 اه يا رب خلص اه يا رب انقذ
            
            118 :26 مبارك الاتي باسم الرب باركناكم من بيت الرب
            
            118 :27 الرب هو الله و قد انار لنا اوثقوا الذبيحة بربط إلى قرون المذبح
            
            118 :28 الهي أنت فاحمدك الهي فارفعك
            
            118 :29 احمدوا الرب لانه صالح لان إلى الابد رحمته
            
            
            
            
            
            المزمور المئة والتاسع عشر
            119 :1 طوبى للكاملين طريقا السالكين في شريعة الرب
            
            119 :2 طوبى لحافظي شهاداته من كل قلوبهم يطلبونه
            
            119 :3 أيضا لا يرتكبون اثما في طرقه يسلكون
            
            119 :4 أنت اوصيت بوصاياك ان تحفظ تماما
            
            119 :5 ليت طرقي تثبت في حفظ فرائضك
            
            119 :6 حينئذ لا اخزى إذا نظرت إلى كل وصاياك
            
            119 :7 احمدك باستقامة قلب عند تعلمي احكام عدلك
            
            119 :8 وصاياك احفظ لا تتركني إلى الغاية
            
            119 :9 بم يزكي الشاب طريقه بحفظه اياه حسب كلامك
            
            119 :10 بكل قلبي طلبتك لا تضلني عن وصاياك
            
            119 :11 خبات كلامك في قلبي لكيلا اخطئ إليك
            
            119 :12 مبارك أنت يا رب علمني فرائضك
            
            119 :13 بشفتي حسبت كل احكام فمك
            
            119 :14 بطريق شهاداتك فرحت كما على كل الغنى
            
            119 :15 بوصاياك الهج و الاحظ سبلك
            
            119 :16 بفرائضك اتلذذ لا انسى كلامك
            
            119 :17 احسن إلى عبدك فاحيا و احفظ امرك
            
            119 :18 اكشف عن عيني فارى عجائب من شريعتك
            
            119 :19 غريب أنا في الأرض لا تخف عني وصاياك
            
            119 :20 انسحقت نفسي شوقا إلى احكامك في كل حين
            
            119 :21 انتهرت المتكبرين الملاعين الضالين عن وصاياك
            
            119 :22 دحرج عني العار و الاهانة لأني حفظت شهاداتك
            
            119 :23 جلس أيضا رؤساء تقاولوا علي اما عبدك فيناجي بفرائضك
            
            119 :24 أيضا شهاداتك هي لذتي اهل مشورتي
            
            119 :25 لصقت بالتراب نفسي فاحيني حسب كلمتك
            
            119 :26 قد صرحت بطرقي فاستجبت لي علمني فرائضك
            
            119 :27 طريق وصاياك فهمني فاناجي بعجائبك
            
            119 :28 قطرت نفسي من الحزن اقمني حسب كلامك
            
            119 :29 طريق الكذب ابعد عني و بشريعتك ارحمني
            
            119 :30 اخترت طريق الحق جعلت احكامك قدامي
            
            119 :31 لصقت بشهاداتك يا رب لا تخزني
            
            119 :32 في طريق وصاياك اجري لانك ترحب قلبي
            
            119 :33 علمني يا رب طريق فرائضك فاحفظها إلى النهاية
            
            119 :34 فهمني فالاحظ شريعتك و احفظها بكل قلبي
            
            119 :35 دربني في سبيل وصاياك لأني به سررت
            
            119 :36 امل قلبي إلى شهاداتك لا إلى المكسب
            
            119 :37 حول عيني عن النظر إلى الباطل في طريقك احيني
            
            119 :38 اقم لعبدك قولك الذي لمتقيك
            
            119 :39 ازل عاري الذي حذرت منه لان احكامك طيبة
            
            119 :40 هانذا قد اشتهيت وصاياك بعدلك احيني
            
            119 :41 لتاتني رحمتك يا رب خلاصك حسب قولك
            
            119 :42 فاجاوب معيري كلمة لأني اتكلت على كلامك
            
            119 :43 و لا تنزع من فمي كلام الحق كل النزع لأني انتظرت احكامك
            
            119 :44 فاحفظ شريعتك دائما إلى الدهر و الابد
            
            119 :45 و اتمشى في رحب لأني طلبت وصاياك
            
            119 :46 و اتكلم بشهاداتك قدام ملوك و لا اخزى
            
            119 :47 و اتلذذ بوصاياك التي احببت
            
            119 :48 و ارفع يدي إلى وصاياك التي وددت و اناجي بفرائضك
            
            119 :49 اذكر لعبدك القول الذي جعلتني انتظره
            
            119 :50 هذه هي تعزيتي في مذلتي لان قولك احياني
            
            119 :51 المتكبرون استهزاوا بي إلى الغاية عن شريعتك لم امل
            
            119 :52 تذكرت احكامك منذ الدهر يا رب فتعزيت
            
            119 :53 الحمية اخذتني بسبب الاشرار تاركي شريعتك
            
            119 :54 ترنيمات صارت لي فرائضك في بيت غربتي
            
            119 :55 ذكرت في الليل اسمك يا رب و حفظت شريعتك
            
            119 :56 هذا صار لي لأني حفظت وصاياك
            
            119 :57 نصيبي الرب قلت لحفظ كلامك
            
            119 :58 ترضيت وجهك بكل قلبي ارحمني حسب قولك
            
            119 :59 تفكرت في طرقي و رددت قدمي إلى شهاداتك
            
            119 :60 اسرعت و لم اتوان لحفظ وصاياك
            
            119 :61 حبال الاشرار التفت علي اما شريعتك فلم انسها
            
            119 :62 في منتصف الليل أقوم لاحمدك على احكام برك
            
            119 :63 رفيق أنا لكل الذين يتقونك و لحافظي وصاياك
            
            119 :64 رحمتك يا رب قد ملات الأرض علمني فرائضك
            
            119 :65 خيرا صنعت مع عبدك يا رب حسب كلامك
            
            119 :66 ذوقا صالحا و معرفة علمني لأني بوصاياك امنت
            
            119 :67 قبل ان اذلل أنا ضللت اما الآن فحفظت قولك
            
            119 :68 صالح أنت و محسن علمني فرائضك
            
            119 :69 المتكبرون قد لفقوا علي كذبا اما أنا فبكل قلبي احفظ وصاياك
            
            119 :70 سمن مثل الشحم قلبهم اما أنا فبشريعتك اتلذذ
            
            119 :71 خير لي اني تذللت لكي اتعلم فرائضك
            
            119 :72 شريعة فمك خير لي من الوف ذهب و فضة
            
            119 :73 يداك صنعتاني و انشاتاني فهمني فاتعلم وصاياك
            
            119 :74 متقوك يرونني فيفرحون لأني انتظرت كلامك
            
            119 :75 قد علمت يا رب ان احكامك عدل و بالحق اذللتني
            
            119 :76 فلتصر رحمتك لتعزيتي حسب قولك لعبدك
            
            119 :77 لتاتني مراحمك فاحيا لان شريعتك هي لذتي
            
            119 :78 ليخز المتكبرون لانهم زورا افتروا علي اما أنا فاناجي بوصاياك
            
            119 :79 ليرجع إلي متقوك و عارفو شهاداتك
            
            119 :80 ليكن قلبي كاملا في فرائضك لكيلا اخزى
            
            119 :81 تاقت نفسي إلى خلاصك كلامك انتظرت
            
            119 :82 كلت عيناي من النظر إلى قولك فاقول متى تعزيني
            
            119 :83 لأني قد صرت كزق في الدخان اما فرائضك فلم انسها
            
            119 :84 كم هي أيام عبدك متى تجري حكما على مضطهدي
            
            119 :85 المتكبرون قد كروا لي حفائر ذلك ليس حسب شريعتك
            
            119 :86 كل وصاياك امانة زورا يضطهدونني اعني
            
            119 :87 لولا قليل لافنوني من الأرض اما أنا فلم اترك وصاياك
            
            119 :88 حسب رحمتك احيني فاحفظ شهادات فمك
            
            119 :89 إلى الابد يا رب كلمتك مثبتة في السماوات
            
            119 :90 إلى دور فدور امانتك اسست الأرض فثبتت
            
            119 :91 على احكامك ثبتت اليوم لان الكل عبيدك
            
            119 :92 لو لم تكن شريعتك لذتي لهلكت حينئذ في مذلتي
            
            119 :93 إلى الدهر لا انسى وصاياك لانك بها احييتني
            
            119 :94 لك أنا فخلصني لأني طلبت وصاياك
            
            119 :95 اياي انتظر الاشرار ليهلكوني بشهاداتك افطن
            
            119 :96 لكل كمال رايت حدا اما وصيتك فواسعة جدا
            
            119 :97 كم احببت شريعتك اليوم كله هي لهجي
            
            119 :98 وصيتك جعلتني احكم من اعدائي لانها إلى الدهر هي لي
            
            119 :99 أكثر من كل معلمي تعقلت لان شهاداتك هي لهجي
            
            119 :100 أكثر من الشيوخ فطنت لأني حفظت وصاياك
            
            119 :101 من كل طريق شر منعت رجلي لكي احفظ كلامك
            
            119 :102 عن احكامك لم امل لانك أنت علمتني
            
            119 :103 ما احلى قولك لحنكي احلى من العسل لفمي
            
            119 :104 من وصاياك اتفطن لذلك ابغضت كل طريق كذب
            
            119 :105 سراج لرجلي كلامك و نور لسبيلي
            
            119 :106 حلفت فابره ان احفظ احكام برك
            
            119 :107 تذللت إلى الغاية يا رب احيني حسب كلامك
            
            119 :108 ارتض بمندوبات فمي يا رب و احكامك علمني
            
            119 :109 نفسي دائما في كفي اما شريعتك فلم انسها
            
            119 :110 الاشرار وضعوا لي فخا اما وصاياك فلم اضل عنها
            
            119 :111 ورثت شهاداتك إلى الدهر لانها هي بهجة قلبي
            
            119 :112 عطفت قلبي لاصنع فرائضك إلى الدهر إلى النهاية
            
            119 :113 المتقلبين ابغضت و شريعتك احببت
            
            119 :114 ستري و مجني أنت كلامك انتظرت
            
            119 :115 انصرفوا عني ايها الاشرار فاحفظ وصايا الهي
            
            119 :116 اعضدني حسب قولك فاحيا و لا تخزني من رجائي
            
            119 :117 اسندني فاخلص و اراعي فرائضك دائما
            
            119 :118 احتقرت كل الضالين عن فرائضك لان مكرهم باطل
            
            119 :119 كزغل عزلت كل اشرار الأرض لذلك احببت شهاداتك
            
            119 :120 قد اقشعر لحمي من رعبك و من احكامك جزعت
            
            119 :121 اجريت حكما و عدلا لا تسلمني إلى ظالمي
            
            119 :122 كن ضامن عبدك للخير لكيلا يظلمني المستكبرون
            
            119 :123 كلت عيناي اشتياقا إلى خلاصك و إلى كلمة برك
            
            119 :124 اصنع مع عبدك حسب رحمتك و فرائضك علمني
            
            119 :125 عبدك أنا فهمني فاعرف شهاداتك
            
            119 :126 انه وقت عمل للرب قد نقضوا شريعتك
            
            119 :127 لاجل ذلك احببت وصاياك أكثر من الذهب و الابريز
            
            119 :128 لاجل ذلك حسبت كل وصاياك في كل شيء مستقيمة كل طريق كذب ابغضت
            
            119 :129 عجيبة هي شهاداتك لذلك حفظتها نفسي
            
            119 :130 فتح كلامك ينير يعقل الجهال
            
            119 :131 فغرت فمي و لهثت لأني إلى وصاياك اشتقت
            
            119 :132 التفت إلي و ارحمني كحق محبي اسمك
            
            119 :133 ثبت خطواتي في كلمتك و لا يتسلط علي إثم
            
            119 :134 افدني من ظلم الانسان فاحفظ وصاياك
            
            119 :135 اضئ بوجهك على عبدك و علمني فرائضك
            
            119 :136 جداول مياه جرت من عيني لانهم لم يحفظوا شريعتك
            
            119 :137 بار أنت يا رب و احكامك مستقيمة
            
            119 :138 عدلا امرت بشهاداتك و حقا إلى الغاية
            
            119 :139 اهلكتني غيرتي لان اعدائي نسوا كلامك
            
            119 :140 كلمتك ممحصة جدا و عبدك احبها
            
            119 :141 صغير أنا و حقير اما وصاياك فلم انسها
            
            119 :142 عدلك عدل إلى الدهر و شريعتك حق
            
            119 :143 ضيق و شدة اصاباني اما وصاياك فهي لذاتي
            
            119 :144 عادلة شهاداتك إلى الدهر فهمني فاحيا
            
            119 :145 صرخت من كل قلبي استجب لي يا رب فرائضك احفظ
            
            119 :146 دعوتك خلصني فاحفظ شهاداتك
            
            119 :147 تقدمت في الصبح و صرخت كلامك انتظرت
            
            119 :148 تقدمت عيناي الهزع لكي الهج باقوالك
            
            119 :149 صوتي استمع حسب رحمتك يا رب حسب احكامك احيني
            
            119 :150 اقترب التابعون الرذيلة عن شريعتك بعدوا
            
            119 :151 قريب أنت يا رب و كل وصاياك حق
            
            119 :152 منذ زمان عرفت من شهاداتك انك إلى الدهر اسستها
            
            119 :153 انظر إلى ذلي و انقذني لأني لم انس شريعتك
            
            119 :154 احسن دعواي و فكني حسب كلمتك احيني
            
            119 :155 الخلاص بعيد عن الاشرار لانهم لم يلتمسوا فرائضك
            
            119 :156 كثيرة هي مراحمك يا رب حسب احكامك احيني
            
            119 :157 كثيرون مضطهدي و مضايقي اما شهاداتك فلم امل عنها
            
            119 :158 رايت الغادرين و مقت لانهم لم يحفظوا كلمتك
            
            119 :159 انظر اني احببت وصاياك يا رب حسب رحمتك احيني
            
            119 :160 راس كلامك حق و إلى الدهر كل احكام عدلك
            
            119 :161 رؤساء اضطهدوني بلا سبب و من كلامك جزع قلبي
            
            119 :162 ابتهج أنا بكلامك كمن وجد غنيمة وافرة
            
            119 :163 ابغضت الكذب و كرهته اما شريعتك فاحببتها
            
            119 :164 سبع مرات في النهار سبحتك على احكام عدلك
            
            119 :165 سلامة جزيلة لمحبي شريعتك و ليس لهم معثرة
            
            119 :166 رجوت خلاصك يا رب و وصاياك عملت
            
            119 :167 حفظت نفسي شهاداتك و احبها جدا
            
            119 :168 حفظت وصاياك و شهاداتك لان كل طرقي امامك
            
            119 :169 ليبلغ صراخي إليك يا رب حسب كلامك فهمني
            
            119 :170 لتدخل طلبتي إلى حضرتك ككلمتك نجني
            
            119 :171 تنبع شفتاي تسبيحا إذا علمتني فرائضك
            
            119 :172 يغني لساني باقوالك لان كل وصاياك عدل
            
            119 :173 لتكن يدك لمعونتي لانني اخترت وصاياك
            
            119 :174 اشتقت إلى خلاصك يا رب و شريعتك هي لذتي
            
            119 :175 لتحي نفسي و تسبحك و احكامك لتعني
            
            119 :176 ضللت كشاة ضالة اطلب عبدك لأني لم انس وصاياك
            
            
            
            
            
            المزمور المئة والعشرون
            120 :0 ترنيمة المصاعد
            
            120 :1 إلى الرب في ضيقي صرخت فاستجاب لي
            
            120 :2 يا رب نج نفسي من شفاه الكذب من لسان غش
            
            120 :3 ماذا يعطيك و ماذا يزيد لك لسان الغش
            
            120 :4 سهام جبار مسنونة مع جمر الرتم
            
            120 :5 ويلي لغربتي في ماشك لسكني في خيام قيدار
            
            120 :6 طال على نفسي سكنها مع مبغض السلام
            
            120 :7 أنا سلام و حينما اتكلم فهم للحرب
            
            
            
            
            
            المزمور المئة والحادي والعشرون
            121 :0 ترنيمة المصاعد
            
            121 :1 ارفع عيني إلى الجبال من حيث يأتي عوني
            
            121 :2 معونتي من عند الرب صانع السماوات و الأرض
            
            121 :3 لا يدع رجلك تزل لا ينعس حافظك
            
            121 :4 انه لا ينعس و لا ينام حافظ إسرائيل
            
            121 :5 الرب حافظك الرب ظل لك عن يدك اليمنى
            
            121 :6 لا تضربك الشمس في النهار و لا القمر في الليل
            
            121 :7 الرب يحفظك من كل شر يحفظ نفسك
            
            121 :8 الرب يحفظ خروجك و دخولك من الآن و إلى الدهر
            
            122 :0 ترنيمة المصاعد لداود
            
            
            
            
            
            المزمور المئة والثاني والعشرون
            122 :1 فرحت بالقائلين لي إلى بيت الرب نذهب
            
            122 :2 تقف ارجلنا في ابوابك يا أورشليم
            
            122 :3 أورشليم المبنية كمدينة متصلة كلها
            
            122 :4 حيث صعدت الاسباط اسباط الرب شهادة لإسرائيل ليحمدوا اسم الرب
            
            122 :5 لانه هناك استوت الكراسي للقضاء كراسي بيت داود
            
            122 :6 اسالوا سلامة أورشليم ليسترح محبوك
            
            122 :7 ليكن سلام في ابراجك راحة في قصورك
            
            122 :8 من اجل اخوتي و اصحابي لاقولن سلام بك
            
            122 :9 من اجل بيت الرب الهنا التمس لك خيرا
            
            
            
            
            
            المزمور المئة والثالث والعشرون
            123 :0 ترنيمة المصاعد
            
            123 :1 إليك رفعت عيني يا ساكنا في السماوات
            
            123 :2 هوذا كما ان عيون العبيد نحو ايدي سادتهم كما ان عيني الجارية نحو يد سيدتها هكذا عيوننا نحو الرب الهنا حتى يتراف علينا
            
            123 :3 ارحمنا يا رب ارحمنا لاننا كثيرا ما امتلانا هوانا
            
            123 :4 كثيرا ما شبعت انفسنا من هزء المستريحين و اهانة المستكبرين
            
            
            
            
            
            المزمور المئة والرابع والعشرون
            124 :0 ترنيمة المصاعد لداود
            
            124 :1 لولا الرب الذي كان لنا ليقل إسرائيل
            
            124 :2 لولا الرب الذي كان لنا عندما قام الناس علينا
            
            124 :3 إذا لابتلعونا احياء عند احتماء غضبهم علينا
            
            124 :4 إذا لجرفتنا المياه لعبر السيل على انفسنا
            
            124 :5 إذا لعبرت على انفسنا المياه الطامية
            
            124 :6 مبارك الرب الذي لم يسلمنا فريسة لاسنانهم
            
            124 :7 انفلتت انفسنا مثل العصفور من فخ الصيادين الفخ انكسر و نحن انفلتنا
            
            124 :8 عوننا باسم الرب الصانع السماوات و الأرض
            
            
            
            
            
            المزمور المئة والخامس والعشرون
            125 :0 ترنيمة المصاعد
            
            125 :1 المتوكلون على الرب مثل جبل صهيون الذي لا يتزعزع بل يسكن إلى الدهر
            
            125 :2 أورشليم الجبال حولها و الرب حول شعبه من الآن و إلى الدهر
            
            125 :3 لانه لا تستقر عصا الاشرار على نصيب الصديقين لكيلا يمد الصديقون أيديهم إلى الإثم
            
            125 :4 احسن يا رب إلى الصالحين و إلى المستقيمي القلوب
            
            125 :5 اما العادلون إلى طرق معوجة فيذهبهم الرب مع فعلة الإثم سلام على إسرائيل
            
            
            
            
            
            المزمور المئة والسادس والعشرون
            126 :0 ترنيمة المصاعد
            
            126 :1 عندما رد الرب سبي صهيون صرنا مثل الحالمين
            
            126 :2 حينئذ امتلات افواهنا ضحكا و السنتنا ترنما حينئذ قالوا بين الامم ان الرب قد عظم العمل مع هؤلاء
            
            126 :3 عظم الرب العمل معنا و صرنا فرحين
            
            126 :4 اردد يا رب سبينا مثل السواقي في الجنوب
            
            126 :5 الذين يزرعون بالدموع يحصدون بالابتهاج
            
            126 :6 الذاهب ذهابا بالبكاء حاملا مبذر الزرع مجيئا يجيء بالترنم حاملا حزمه
            
            
            
            
            
            المزمور المئة والسابع والعشرون
            127 :0 ترنيمة المصاعد لسليمان
            
            127 :1 ان لم يبن الرب البيت فباطلا يتعب البناؤون ان لم يحفظ الرب المدينة فباطلا يسهر الحارس
            
            127 :2 باطل هو لكم ان تبكروا إلى القيام مؤخرين الجلوس اكلين خبز الاتعاب لكنه يعطي حبيبه نوما
            
            127 :3 هوذا البنون ميراث من عند الرب ثمرة البطن اجرة
            
            127 :4 كسهام بيد جبار هكذا ابناء الشبيبة
            
            127 :5 طوبى للذي ملا جعبته منهم لا يخزون بل يكلمون الاعداء في الباب
            
            
            
            
            
            المزمور المئة والثامن والعشرون
            128 :0 ترنيمة المصاعد
            
            128 :1 طوبى لكل من يتقي الرب و يسلك في طرقه
            
            128 :2 لانك تاكل تعب يديك طوباك و خير لك
            
            128 :3 امراتك مثل كرمة مثمرة في جوانب بيتك بنوك مثل غروس الزيتون حول مائدتك
            
            128 :4 هكذا يبارك الرجل المتقي الرب
            
            128 :5 يباركك الرب من صهيون و تبصر خير أورشليم كل أيام حياتك
            
            128 :6 و ترى بني بنيك سلام على إسرائيل
            
            
            
            
            
            المزمور المئة والتاسع والعشرون
            129 :0 ترنيمة المصاعد
            
            129 :1 كثيرا ما ضايقوني منذ شبابي ليقل إسرائيل
            
            129 :2 كثيرا ما ضايقوني منذ شبابي لكن لم يقدروا علي
            
            129 :3 على ظهري حرث الحراث طولوا اتلامهم
            
            129 :4 الرب صديق قطع ربط الاشرار
            
            129 :5 فليخز و ليرتد إلى الوراء كل مبغضي صهيون
            
            129 :6 ليكونوا كعشب السطوح الذي ييبس قبل ان يقلع
            
            129 :7 الذي لا يملا الحاصد كفه منه و لا المحزم حضنه
            
            129 :8 و لا يقول العابرون بركة الرب عليكم باركناكم باسم الرب
            
            
            
            
            
            المزمور المائة والثلاثون
            130 :0 ترنيمة المصاعد
            
            130 :1 من الاعماق صرخت إليك يا رب
            
            130 :2 يا رب اسمع صوتي لتكن اذناك مصغيتين إلى صوت تضرعاتي
            
            130 :3 ان كنت تراقب الاثام يا رب يا سيد فمن يقف
            
            130 :4 لان عندك المغفرة لكي يخاف منك
            
            130 :5 انتظرتك يا رب انتظرت نفسي و بكلامه رجوت
            
            130 :6 نفسي تنتظر الرب أكثر من المراقبين الصبح أكثر من المراقبين الصبح
            
            130 :7 ليرج إسرائيل الرب لان عند الرب الرحمة و عنده فدى كثير
            
            130 :8 و هو يفدي إسرائيل من كل اثامه
            
            
            
            
            
            المزمور المئه والحادي والثلاثون
            131 :0 ترنيمة المصاعد لداود
            
            131 :1 يا رب لم يرتفع قلبي و لم تستعل عيناي و لم اسلك في العظائم و لا في عجائب فوقي
            
            131 :2 بل هدات و سكت نفسي كفطيم نحو امه نفسي نحوي كفطيم
            
            131 :3 ليرج إسرائيل الرب من الآن و إلى الدهر
            
            
            
            
            
            المزمور المائه والثاني والثلاثون
            132 :0 ترنيمة المصاعد
            
            132 :1 اذكر يا رب داود كل ذله
            
            132 :2 كيف حلف للرب نذر لعزيز يعقوب
            
            132 :3 لا ادخل خيمة بيتي لا اصعد على سرير فراشي
            
            132 :4 لا اعطي وسنا لعيني و لا نوما لاجفاني
            
            132 :5 أو اجد مقاما للرب مسكنا لعزيز يعقوب
            
            132 :6 هوذا قد سمعنا به في افراتة وجدناه في حقول الوعر
            
            132 :7 لندخل إلى مساكنه لنسجد عند موطئ قدميه
            
            132 :8 قم يا رب إلى راحتك أنت و تابوت عزك
            
            132 :9 كهنتك يلبسون البر و اتقياؤك يهتفون
            
            132 :10 من اجل داود عبدك لا ترد وجه مسيحك
            
            132 :11 اقسم الرب لداود بالحق لا يرجع عنه من ثمرة بطنك اجعل على كرسيك
            
            132 :12 ان حفظ بنوك عهدي و شهاداتي التي اعلمهم اياها فبنوهم أيضا إلى الابد يجلسون على كرسيك
            
            132 :13 لان الرب قد اختار صهيون اشتهاها مسكنا له
            
            132 :14 هذه هي راحتي إلى الابد ههنا اسكن لأني اشتهيتها
            
            132 :15 طعامها ابارك بركة مساكينها اشبع خبزا
            
            132 :16 كهنتها البس خلاصا و اتقياؤها يهتفون هتافا
            
            132 :17 هناك انبت قرنا لداود رتبت سراجا لمسيحي
            
            132 :18 اعداءه البس خزيا و عليه يزهر اكليله
            
            
            
            
            
            المزمور المئة والثالث والثلاثون
            133 :0 ترنيمة المصاعد لداود
            
            133 :1 هوذا ما احسن و ما اجمل ان يسكن الاخوة معا
            
            133 :2 مثل الدهن الطيب على الراس النازل على اللحية لحية هرون النازل إلى طرف ثيابه
            
            133 :3 مثل ندى حرمون النازل على جبل صهيون لانه هناك امر الرب بالبركة حياة إلى الابد
            
            
            
            
            
            المزمور المئة والرابع والثلاثون
            134 :0 ترنيمة المصاعد
            
            134 :1 هوذا باركوا الرب يا جميع عبيد الرب الواقفين في بيت الرب بالليالي
            
            134 :2 ارفعوا ايديكم نحو القدس و باركوا الرب
            
            134 :3 يباركك الرب من صهيون الصانع السماوات و الأرض
            
            
            
            
            
            المزمور المئة والخامس والثلاثون
            135 :1 هللويا سبحوا اسم الرب سبحوا يا عبيد الرب
            
            135 :2 الواقفين في بيت الرب في ديار بيت الهنا
            
            135 :3 سبحوا الرب لان الرب صالح رنموا لاسمه لان ذاك حلو
            
            135 :4 لان الرب قد اختار يعقوب لذاته و إسرائيل لخاصته
            
            135 :5 لأني أنا قد عرفت ان الرب عظيم و ربنا فوق جميع الالهة
            
            135 :6 كل ما شاء الرب صنع في السماوات و في الأرض في البحار و في كل اللجج
            
            135 :7 المصعد السحاب من اقاصي الأرض الصانع بروقا للمطر المخرج الريح من خزائنه
            
            135 :8 الذي ضرب ابكار مصر من الناس إلى البهائم
            
            135 :9 أرسل ايات و عجائب في وسطك يا مصر على فرعون و على كل عبيده
            
            135 :10 الذي ضرب امما كثيرة و قتل ملوكا اعزاء
            
            135 :11 سيحون ملك الاموريين و عوج ملك باشان و كل ممالك كنعان
            
            135 :12 و اعطى ارضهم ميراثا ميراثا لإسرائيل شعبه
            
            135 :13 يا رب اسمك إلى الدهر يا رب ذكرك إلى دور فدور
            
            135 :14 لان الرب يدين شعبه و على عبيده يشفق
            
            135 :15 اصنام الامم فضة و ذهب عمل ايدي الناس
            
            135 :16 لها افواه و لا تتكلم لها اعين و لا تبصر
            
            135 :17 لها اذان و لا تسمع كذلك ليس في افواهها نفس
            
            135 :18 مثلها يكون صانعوها و كل من يتكل عليها
            
            135 :19 يا بيت إسرائيل باركوا الرب يا بيت هرون باركوا الرب
            
            135 :20 يا بيت لاوي باركوا الرب يا خائفي الرب باركوا الرب
            
            135 :21 مبارك الرب من صهيون الساكن في أورشليم هللويا
            
            
            
            
            
            المزمور المئة والسادس والثلاثون
            136 :1 احمدوا الرب لانه صالح لان إلى الابد رحمته
            
            136 :2 احمدوا اله الالهة لان إلى الابد رحمته
            
            136 :3 احمدوا رب الارباب لان إلى الابد رحمته
            
            136 :4 الصانع العجائب العظام وحده لان إلى الابد رحمته
            
            136 :5 الصانع السماوات بفهم لان إلى الابد رحمته
            
            136 :6 الباسط الأرض على المياه لان إلى الابد رحمته
            
            136 :7 الصانع انوارا عظيمة لان إلى الابد رحمته
            
            136 :8 الشمس لحكم النهار لان إلى الابد رحمته
            
            136 :9 القمر و الكواكب لحكم الليل لان إلى الابد رحمته
            
            136 :10 الذي ضرب مصر مع ابكارها لان إلى الابد رحمته
            
            136 :11 و اخرج إسرائيل من وسطهم لان إلى الابد رحمته
            
            136 :12 بيد شديدة و ذراع ممدودة لان إلى الابد رحمته
            
            136 :13 الذي شق بحر سوف إلى شقق لان إلى الابد رحمته
            
            136 :14 و عبر إسرائيل في وسطه لان إلى الابد رحمته
            
            136 :15 و دفع فرعون و قوته في بحر سوف لان إلى الابد رحمته
            
            136 :16 الذي سار بشعبه في البرية لان إلى الابد رحمته
            
            136 :17 الذي ضرب ملوكا عظماء لان إلى الابد رحمته
            
            136 :18 و قتل ملوكا اعزاء لان إلى الابد رحمته
            
            136 :19 سيحون ملك الاموريين لان إلى الابد رحمته
            
            136 :20 و عوج ملك باشان لان إلى الابد رحمته
            
            136 :21 و اعطى ارضهم ميراثا لان إلى الابد رحمته
            
            136 :22 ميراثا لإسرائيل عبده لان إلى الابد رحمته
            
            136 :23 الذي في مذلتنا ذكرنا لان إلى الابد رحمته
            
            136 :24 و نجانا من اعدائنا لان إلى الابد رحمته
            
            136 :25 الذي يعطي خبزا لكل بشر لان إلى الابد رحمته
            
            136 :26 احمدوا اله السماوات لان إلى الابد رحمته
            
            
            
            
            
            المزمور المئة والسابع والثلاثون
            137 :1 على انهار بابل هناك جلسنا بكينا أيضا عندما تذكرنا صهيون
            
            137 :2 على الصفصاف في وسطها علقنا اعوادنا
            
            137 :3 لانه هناك سالنا الذين سبونا كلام ترنيمة و معذبونا سالونا فرحا قائلين رنموا لنا من ترنيمات صهيون
            
            137 :4 كيف نرنم ترنيمة الرب في ارض غريبة
            
            137 :5 ان نسيتك يا أورشليم تنسى يميني
            
            137 :6 ليلتصق لساني بحنكي ان لم اذكرك ان لم افضل أورشليم على أعظم فرحي
            
            137 :7 اذكر يا رب لبني ادوم يوم أورشليم القائلين هدوا هدوا حتى إلى اساسها
            
            137 :8 يا بنت بابل المخربة طوبى لمن يجازيك جزاءك الذي جازيتنا
            
            137 :9 طوبى لمن يمسك اطفالك و يضرب بهم الصخرة
            
            
            
            
            
            المزمور المئة والثامن والثلاثون
            138 :0 لداود
            
            138 :1 احمدك من كل قلبي قدام الالهة ارنم لك
            
            138 :2 أسجد في هيكل قدسك و احمد اسمك على رحمتك و حقك لانك قد عظمت كلمتك على كل اسمك
            
            138 :3 في يوم دعوتك اجبتني شجعتني قوة في نفسي
            
            138 :4 يحمدك يا رب كل ملوك الأرض إذا سمعوا كلمات فمك
            
            138 :5 و يرنمون في طرق الرب لان مجد الرب عظيم
            
            138 :6 لان الرب عال و يرى المتواضع اما المتكبر فيعرفه من بعيد
            
            138 :7 ان سلكت في وسط الضيق تحيني على غضب اعدائي تمد يدك و تخلصني يمينك
            
            138 :8 الرب يحامي عني يا رب رحمتك إلى الابد عن أعمال يديك لا تتخل
            
            
            
            
            
            المزمور المئة والتاسع والثلاثون
            139 :0 لامام المغنين لداود مزمور
            
            139 :1 يا رب قد اختبرتني و عرفتني
            
            139 :2 أنت عرفت جلوسي و قيامي فهمت فكري من بعيد
            
            139 :3 مسلكي و مربضي ذريت و كل طرقي عرفت
            
            139 :4 لانه ليس كلمة في لساني الا و أنت يا رب عرفتها كلها
            
            139 :5 من خلف و من قدام حاصرتني و جعلت علي يدك
            
            139 :6 عجيبة هذه المعرفة فوقي ارتفعت لا استطيعها
            
            139 :7 أين اذهب من روحك و من وجهك أين اهرب
            
            139 :8 ان صعدت إلى السماوات فانت هناك و ان فرشت في الهاوية فها أنت
            
            139 :9 ان اخذت جناحي الصبح و سكنت في اقاصي البحر
            
            139 :10 فهناك أيضا تهديني يدك و تمسكني يمينك
            
            139 :11 فقلت إنما الظلمة تغشاني فالليل يضيء حولي
            
            139 :12 الظلمة أيضا لا تظلم لديك و الليل مثل النهار يضيء كالظلمة هكذا النور
            
            139 :13 لانك أنت اقتنيت كليتي نسجتني في بطن أمي
            
            139 :14 احمدك من اجل اني قد امتزت عجبا عجيبة هي اعمالك و نفسي تعرف ذلك يقينا
            
            139 :15 لم تختف عنك عظامي حينما صنعت في الخفاء و رقمت في اعماق الأرض
            
            139 :16 رأت عيناك اعضائي و في سفرك كلها كتبت يوم تصورت إذ لم يكن واحد منها
            
            139 :17 ما اكرم افكارك يا الله عندي ما أكثر جملتها
            
            139 :18 ان احصها فهي أكثر من الرمل استيقظت و أنا بعد معك
            
            139 :19 ليتك تقتل الاشرار يا الله فيا رجال الدماء ابعدوا عني
            
            139 :20 الذين يكلمونك بالمكر ناطقين بالكذب هم اعداؤك
            
            139 :21 الا ابغض مبغضيك يا رب و امقت مقاوميك
            
            139 :22 بغضا تاما ابغضتهم صاروا لي اعداء
            
            139 :23 اختبرني يا الله و اعرف قلبي امتحني و اعرف افكاري
            
            139 :24 و انظر ان كان في طريق باطل و اهدني طريقا ابديا
            
            
            
            
            
            المزمور المئة والأربعون
            140 :0 لامام المغنين مزمور لداود
            
            140 :1 انقذني يا رب من اهل الشر من رجل الظلم احفظني
            
            140 :2 الذين يتفكرون بشرور في قلوبهم اليوم كله يجتمعون للقتال
            
            140 :3 سنوا ألسنتهم كحية حمة الافعوان تحت شفاههم سلاه
            
            140 :4 احفظني يا رب من يدي الشرير من رجل الظلم انقذني الذين تفكروا في تعثير خطواتي
            
            140 :5 اخفى لي المستكبرون فخا و حبالا مدوا شبكة بجانب الطريق وضعوا لي اشراكا سلاه
            
            140 :6 قلت للرب أنت الهي اصغ يا رب إلى صوت تضرعاتي
            
            140 :7 يا رب السيد قوة خلاصي ظللت راسي في يوم القتال
            
            140 :8 لا تعط يا رب شهوات الشرير لا تنجح مقاصده يترفعون سلاه
            
            140 :9 اما رؤوس المحيطين بي فشقاء شفاههم يغطيهم
            
            140 :10 ليسقط عليهم جمر ليسقطوا في النار و في غمرات فلا يقوموا
            
            140 :11 رجل لسان لا يثبت في الأرض رجل الظلم يصيده الشر إلى هلاكه
            
            140 :12 قد علمت ان الرب يجري حكما للمساكين و حقا للبائسين
            
            140 :13 إنما الصديقون يحمدون اسمك المستقيمون يجلسون في حضرتك
            
            
            
            
            
            المزمور المئة والحادى والأربعون
            141 :0 مزمور لداود
            
            141 :1 يا رب إليك صرخت اسرع إلي اصغ إلى صوتي عندما اصرخ اليك
            
            141 :2 لتستقم صلاتي كالبخور قدامك ليكن رفع يدي كذبيحة مسائية
            
            141 :3 اجعل يا رب حارسا لفمي احفظ باب شفتي
            
            141 :4 لا تمل قلبي إلى امر رديء لاتعلل بعلل الشر مع اناس فاعلي إثم و لا اكل من نفائسهم
            
            141 :5 ليضربني الصديق فرحمة و ليوبخني فزيت للراس لا يابى راسي لان صلاتي بعد في مصائبهم
            
            141 :6 قد انطرح قضاتهم من على الصخرة و سمعوا كلماتي لانها لذيذة
            
            141 :7 كمن يفلح و يشق الأرض تبددت عظامنا عند فم الهاوية
            
            141 :8 لانه إليك يا سيد يا رب عيناي بك احتميت لا تفرغ نفسي
            
            141 :9 احفظني من الفخ الذي قد نصبوه لي و من اشراك فاعلي الاثم
            
            141 :10 ليسقط الاشرار في شباكهم حتى انجو أنا بالكلية
            
            
            
            
            
            المزمور المئة والثانى والاربعون
            142 :0 قصيدة لداود لما كان في المغارة صلاة
            
            142 :1 بصوتي إلى الرب اصرخ بصوتي إلى الرب اتضرع
            
            142 :2 اسكب امامه شكواي بضيقي قدامه اخبر
            
            142 :3 عند ما اعيت روحي في و أنت عرفت مسلكي في الطريق التي اسلك اخفوا لي فخا
            
            142 :4 انظر إلى اليمين و ابصر فليس لي عارف باد عني المناص ليس من يسال عن نفسي
            
            142 :5 صرخت إليك يا رب قلت أنت ملجاي نصيبي في ارض الاحياء
            
            142 :6 اصغ إلى صراخي لأني قد تذللت جدا نجني من مضطهدي لانهم اشد مني
            
            142 :7 اخرج من الحبس نفسي لتحميد اسمك الصديقون يكتنفونني لانك تحسن إلي
            
            
            
            
            
            المزمور المئة والثالث و الأربعون
            143 :0 مزمور لداود
            
            143 :1 يا رب اسمع صلاتي و اصغ إلى تضرعاتي بامانتك استجب لي بعدلك
            
            143 :2 و لا تدخل في المحاكمة مع عبدك فانه لن يتبرر قدامك حي
            
            143 :3 لان العدو قد اضطهد نفسي سحق إلى الأرض حياتي اجلسني في الظلمات مثل الموتى منذ الدهر
            
            143 :4 اعيت في روحي تحير في داخلي قلبي
            
            143 :5 تذكرت أيام القدم لهجت بكل اعمالك بصنائع يديك اتامل
            
            143 :6 بسطت إليك يدي نفسي نحوك كارض يابسة سلاه
            
            143 :7 اسرع اجبني يا رب فنيت روحي لا تحجب وجهك عني فاشبه الهابطين في الجب
            
            143 :8 اسمعني رحمتك في الغداة لأني عليك توكلت عرفني الطريق التي اسلك فيها لأني إليك رفعت نفسي
            
            143 :9 انقذني من اعدائي يا رب إليك التجات
            
            143 :10 علمني ان اعمل رضاك لانك أنت الهي روحك الصالح يهديني في ارض مستوية
            
            143 :11 من اجل اسمك يا رب تحييني بعدلك تخرج من الضيق نفسي
            
            143 :12 و برحمتك تستاصل اعدائي و تبيد كل مضايقي نفسي لأني أنا عبدك
            
            
            
            
            
            المزمور المئة والرابع والأربعون
            144 :0 لداود
            
            144 :1 مبارك الرب صخرتي الذي يعلم يدي القتال و اصابعي الحرب
            
            144 :2 رحمتي و ملجاي صرحي و منقذي مجني و الذي عليه توكلت المخضع شعبي تحتي
            
            144 :3 يا رب اي شيء هو الانسان حتى تعرفه أو ابن الانسان حتى تفتكر به
            
            144 :4 الانسان اشبه نفخة ايامه مثل ظل عابر
            
            144 :5 يا رب طاطئ سماواتك و انزل المس الجبال فتدخن
            
            144 :6 ابرق بروقا و بددهم أرسل سهامك و ازعجهم
            
            144 :7 أرسل يدك من العلاء انقذني و نجني من المياه الكثيرة من ايدي الغرباء
            
            144 :8 الذين تكلمت أفواههم بالباطل و يمينهم يمين كذب
            
            144 :9 يا الله ارنم لك ترنيمة جديدة برباب ذات عشرة اوتار ارنم لك
            
            144 :10 المعطي خلاصا للملوك المنقذ داود عبده من السيف السوء
            
            144 :11 انقذني و نجني من ايدي الغرباء الذين تكلمت أفواههم بالباطل و يمينهم يمين كذب
            
            144 :12 لكي يكون بنونا مثل الغروس النامية في شبيبتها بناتنا كاعمدة الزوايا منحوتات حسب بناء هيكل
            
            144 :13 اهراؤنا ملانة تفيض من صنف فصنف اغنامنا تنتج الوفا و ربوات في شوارعنا
            
            144 :14 بقرنا محملة لا اقتحام و لا هجوم و لا شكوى في شوارعنا
            
            144 :15 طوبى للشعب الذي له كهذا طوبى للشعب الذي الرب الهه
            
            
            
            
            
            المزمور المئة والخامس والأربعون
            145 :0 تسبيحة لداود
            
            145 :1 ارفعك يا الهي الملك و ابارك اسمك إلى الدهر و الابد
            
            145 :2 في كل يوم اباركك و اسبح اسمك إلى الدهر و الابد
            
            145 :3 عظيم هو الرب و حميد جدا و ليس لعظمته استقصاء
            
            145 :4 دور إلى دور يسبح اعمالك و بجبروتك يخبرون
            
            145 :5 بجلال مجد حمدك و امور عجائبك الهج
            
            145 :6 بقوة مخاوفك ينطقون و بعظمتك احدث
            
            145 :7 ذكر كثرة صلاحك يبدون و بعدلك يرنمون
            
            145 :8 الرب حنان و رحيم طويل الروح و كثير الرحمة
            
            145 :9 الرب صالح للكل و مراحمه على كل اعماله
            
            145 :10 يحمدك يا رب كل اعمالك و يباركك اتقياؤك
            
            145 :11 بمجد ملكك ينطقون و بجبروتك يتكلمون
            
            145 :12 ليعرفوا بني ادم قدرتك و مجد جلال ملكك
            
            145 :13 ملكك ملك كل الدهور و سلطانك في كل دور فدور
            
            145 :14 الرب عاضد كل الساقطين و مقوم كل المنحنين
            
            145 :15 اعين الكل اياك تترجى و أنت تعطيهم طعامهم في حينه
            
            145 :16 تفتح يدك فتشبع كل حي رضى
            
            145 :17 الرب بار في كل طرقه و رحيم في كل اعماله
            
            145 :18 الرب قريب لكل الذين يدعونه الذين يدعونه بالحق
            
            145 :19 يعمل رضى خائفيه و يسمع تضرعهم فيخلصهم
            
            145 :20 يحفظ الرب كل محبيه و يهلك جميع الاشرار
            
            145 :21 بتسبيح الرب ينطق فمي و ليبارك كل بشر اسمه القدوس إلى الدهر و الابد
            
            
            
            
            
            المزمور المئة والسادس والأربعون
            146 :1 هللويا سبحي يا نفسي الرب
            
            146 :2 اسبح الرب في حياتي و ارنم لالهي ما دمت موجودا
            
            146 :3 لا تتكلوا على الرؤساء و لا على ابن ادم حيث لا خلاص عنده
            
            146 :4 تخرج روحه فيعود إلى ترابه في ذلك اليوم نفسه تهلك افكاره
            
            146 :5 طوبى لمن اله يعقوب معينه و رجاؤه على الرب الهه
            
            146 :6 الصانع السماوات و الأرض البحر و كل ما فيها الحافظ الامانة إلى الابد
            
            146 :7 المجري حكما للمظلومين المعطي خبزا للجياع الرب يطلق الاسرى
            
            146 :8 الرب يفتح اعين العمي الرب يقوم المنحنين الرب يحب الصديقين
            
            146 :9 الرب يحفظ الغرباء يعضد اليتيم و الأرملة اما طريق الاشرار فيعوجه
            
            146 :10 يملك الرب إلى الابد الهك يا صهيون إلى دور فدور هللويا
            
            
            
            
            
            المزمور المئة والسابع والأربعون
            147 :1 سبحوا الرب لان الترنم لالهنا صالح لانه ملذ التسبيح لائق
            
            147 :2 الرب يبني أورشليم يجمع منفيي إسرائيل
            
            147 :3 يشفي المنكسري القلوب و يجبر كسرهم
            
            147 :4 يحصي عدد الكواكب يدعو كلها باسماء
            
            147 :5 عظيم هو ربنا و عظيم القوة لفهمه لا احصاء
            
            147 :6 الرب يرفع الودعاء و يضع الاشرار إلى الأرض
            
            147 :7 اجيبوا الرب بحمد رنموا لالهنا بعود
            
            147 :8 الكاسي السماوات سحابا المهيئ للارض مطرا المنبت الجبال عشبا
            
            147 :9 المعطي للبهائم طعامها لفراخ الغربان التي تصرخ
            
            147 :10 لا يسر بقوة الخيل لا يرضى بساقي الرجل
            
            147 :11 يرضى الرب باتقيائه بالراجين رحمته
            
            147 :12 سبحي يا أورشليم الرب سبحي الهك يا صهيون
            
            147 :13 لانه قد شدد عوارض ابوابك بارك ابناءك داخلك
            
            147 :14 الذي يجعل تخومك سلاما و يشبعك من شحم الحنطة
            
            147 :15 يرسل كلمته في الأرض سريعا جدا يجري قوله
            
            147 :16 الذي يعطي الثلج كالصوف و يذري الصقيع كالرماد
            
            147 :17 يلقي جمده كفتات قدام برده من يقف
            
            147 :18 يرسل كلمته فيذيبها يهب بريحه فتسيل المياه
            
            147 :19 يخبر يعقوب بكلمته و إسرائيل بفرائضه و احكامه
            
            147 :20 لم يصنع هكذا باحدى الامم و احكامه لم يعرفوها هللويا
            
            
            
            
            
            المزمور المئة والثامن و الاربعون
            148 :1 هللويا سبحوا الرب من السماوات سبحوه في الأعالي
            
            148 :2 سبحوه يا جميع ملائكته سبحوه يا كل جنوده
            
            148 :3 سبحيه يا ايتها الشمس و القمر سبحيه يا جميع كواكب النور
            
            148 :4 سبحيه يا سماء السماوات و يا ايتها المياه التي فوق السماوات
            
            148 :5 لتسبح اسم الرب لانه امر فخلقت
            
            148 :6 و ثبتها إلى الدهر و الابد وضع لها حدا فلن تتعداه
            
            148 :7 سبحي الرب من الأرض يا ايتها التنانين و كل اللجج
            
            148 :8 النار و البرد الثلج و الضباب الريح العاصفة الصانعة كلمته
            
            148 :9 الجبال و كل الاكام الشجر المثمر و كل الارز
            
            148 :10 الوحوش و كل البهائم الدبابات و الطيور ذوات الاجنحة
            
            148 :11 ملوك الأرض و كل الشعوب الرؤساء و كل قضاة الأرض
            
            148 :12 الاحداث و العذارى أيضا الشيوخ مع الفتيان
            
            148 :13 ليسبحوا اسم الرب لانه قد تعالى اسمه وحده مجده فوق الأرض و السماوات
            
            148 :14 و ينصب قرنا لشعبه فخرا لجميع اتقيائه لبني إسرائيل الشعب القريب إليه هللويا
            
            
            
            
            
            المزمور المئة والتاسع والأربعون
            149 :1 هللويا غنوا للرب ترنيمة جديدة تسبيحته في جماعة الاتقياء
            
            149 :2 ليفرح إسرائيل بخالقه ليبتهج بنو صهيون بملكهم
            
            149 :3 ليسبحوا اسمه برقص بدف و عود ليرنموا له
            
            149 :4 لان الرب راض عن شعبه يجمل الودعاء بالخلاص
            
            149 :5 ليبتهج الاتقياء بمجد ليرنموا على مضاجعهم
            
            149 :6 تنويهات الله في أفواههم و سيف ذو حدين في يدهم
            
            149 :7 ليصنعوا نقمة في الامم و تاديبات في الشعوب
            
            149 :8 لاسر ملوكهم بقيود و شرفائهم بكبول من حديد
            
            149 :9 ليجروا بهم الحكم المكتوب كرامة هذا لجميع اتقيائه هللويا
            
            
            
            
            
            المزمور المئة والخمسون
            150 :1 هللويا سبحوا الله في قدسه سبحوه في فلك قوته
            
            150 :2 سبحوه على قواته سبحوه حسب كثرة عظمته
            
            150 :3 سبحوه بصوت الصور سبحوه برباب و عود
            
            150 :4 سبحوه بدف و رقص سبحوه باوتار و مزمار
            
            150 :5 سبحوه بصنوج التصويت سبحوه بصنوج الهتاف
            
            150 :6 كل نسمة فلتسبح الرب هللويا
            
            
            
            
            
            المزمور المائة والحادي والخمسون
            (من الأسفار القانونية الثانية)
            151 :1 أنا صغيرا كنت في اخوتي، وحدثا في بيت ابي، كنت راعيا غنم ابي.
            
            151 :2 يداي صنعتا الارغن، واصابعي الفت المزمار. هلليلويا
            
            151 :3 من هو الذي يخبر سيدي، هو الرب الذي يستجيب للذين يصرخون اليه.
            
            151 :4 هو أرسل ملاكه، وحملني (واخذني) من غنم ابي ومسحني بدهن مسحته. هلليلويا
            
            151 :5 اخوتي حسان وهم أكبر مني والرب لم يسر بهم.
            
            151 :6 خرجت للقاء الفلسطيني فلعنني باوثانه.
            
            151 :7 و لكن أنا سللت سيفه الذي كان بيده، وقطعت راسه.
            
            151 :8 ونزعت العار عن بني إسرائيل. هلليلويا`;
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'MAZMOUR-151.TXT';
            hiddenElement.click();
        }
    </script>
    </div>
</body>

</html>سرور جدا بوصاياه. 2 نسله يكون قويا في الارض.جيل المستقيمين يبارك. 3 رغد وغنى في بيته وبره قائم الى الابد‏. 4 نور اشرق في الظلمة للمستقيمين.هو حنان ورحيم وصديق 5 سعيد هو الرجل الذي يتراف ويقرض.يدبر اموره بالحق. 6 لانه لا يتزعزع الى الدهر.الصديق يكون لذكر ابدي. 7 لا يخشى من خبر سوء.قلبه ثابت متكلا على الرب. 8 قلبه ممكن فلا يخاف حتى يرى بمضايقيه. 9 فرق اعطى المساكين بره قائم الى الابد.قرنه ينتصب بالمجد. 10 الشرير يرى فيغضب.يحرق اسنانه ويذوب.شهوة الشرير تبيد`
  );
  location.reload();
}
function op113() {
  document.getElementById(`show-ld`).innerText = `113`;
  localStorage.setItem(`count`, `113`);
  document.getElementById(`one`).innerText =
    `1 هللويا.سبحوا يا عبيد الرب.سبحوا اسم الرب. 2 ليكن اسم الرب مباركا من الان والى الابد. 3 من مشرق الشمس الى مغربها اسم الرب مسبح. 4 الرب عال فوق كل الامم.فوق السموات مجده. 5 من مثل الرب الهنا الساكن في الاعالي 6 الناظر الاسافل في السموات وفي الارض 7 المقيم المسكين من التراب.الرافع البائس من المزبلة 8 ليجلسه مع اشراف مع اشراف شعبه. 9 المسكن العاقر في بيت ام اولاد فرحانة.هللويا`;
  localStorage.setItem(
    `words`,
    `1 هللويا.سبحوا يا عبيد الرب.سبحوا اسم الرب. 2 ليكن اسم الرب مباركا من الان والى الابد. 3 من مشرق الشمس الى مغربها اسم الرب مسبح. 4 الرب عال فوق كل الامم.فوق السموات مجده. 5 من مثل الرب الهنا الساكن في الاعالي 6 الناظر الاسافل في السموات وفي الارض 7 المقيم المسكين من التراب.الرافع البائس من المزبلة 8 ليجلسه مع اشراف مع اشراف شعبه. 9 المسكن العاقر في بيت ام اولاد فرحانة.هللويا`
  );
  location.reload();
}
function op114() {
  document.getElementById(`show-ld`).innerText = `114`;
  localStorage.setItem(`count`, `114`);
  document.getElementById(`one`).innerText =
    `1 عند خروج اسرائيل من مصر وبيت يعقوب من شعب اعجم 2 كان يهوذا مقدسه.واسرائيل محل سلطانه. 3 البحر راه فهرب.الاردن رجع الى خلف. 4 الجبال قفزت مثل الكباش والاكام مثل حملان الغنم. 5 ما لك ايها البحر قد هربت وما لك ايها الاردن قد رجعت الى خلف 6 وما لكن ايتها الجبال قد قفزتن مثل الكباش وايتها التلال مثل حملان الغنم. 7 ايتها الارض تزلزلي من قدام الرب من قدام اله يعقوب 8 المحول الصخرة الى غدران مياه الصوان الى ينابيع مياه`;
  localStorage.setItem(
    `words`,
    `1 عند خروج اسرائيل من مصر وبيت يعقوب من شعب اعجم 2 كان يهوذا مقدسه.واسرائيل محل سلطانه. 3 البحر راه فهرب.الاردن رجع الى خلف. 4 الجبال قفزت مثل الكباش والاكام مثل حملان الغنم. 5 ما لك ايها البحر قد هربت وما لك ايها الاردن قد رجعت الى خلف 6 وما لكن ايتها الجبال قد قفزتن مثل الكباش وايتها التلال مثل حملان الغنم. 7 ايتها الارض تزلزلي من قدام الرب من قدام اله يعقوب 8 المحول الصخرة الى غدران مياه الصوان الى ينابيع مياه`
  );
  location.reload();
}
function op115() {
  document.getElementById(`show-ld`).innerText = `115`;
  localStorage.setItem(`count`, `115`);
  document.getElementById(`one`).innerText =
    `1 ليس لنا يا رب ليس لنا لكن لاسمك اعط مجدا من اجل رحمتك من اجل امانتك. 2 لماذا يقول الامم اين هو الههم. 3 ان الهنا في السماء.كلما شاء صنع. 4 اصنامهم فضة وذهب عمل ايدي الناس. 5 لها افواه ولا تتكلم.لها اعين ولا تبصر. 6 لها اذان ولا تسمع.لها مناخر ولا تشم. 7 لها ايد ولا تلمس.لها ارجل ولا تمشي ولا تنطق بحناجرها. 8 مثلها يكون صانعوها بل كل من يتكل عليها 9 يا اسرائيل اتكل على الرب.هو معينهم ومجنهم. 10 يا بيت هرون اتكلوا على الرب.هو معينهم ومجنهم. 11 يا متقي الرب اتكلوا على الرب.هو معينهم ومجنهم. 12 الرب قد ذكرنا فيبارك.يبارك بيت اسرائيل يبارك بيت هرون. 13 يبارك متقي الرب الصغار مع الكبار. 14 ليزد الرب عليكم.عليكم وعلى ابنائكم. 15 انتم مباركون للرب الصانع السموات والارض. 16 السموات سموات للرب.اما الارض فاعطاها لبني ادم. 17 ليس الاموات يسبحون الرب ولا من ينحدر الى ارض السكوت. 18 اما نحن فنبارك الرب من الان والى الدهر.هللويا`;
  localStorage.setItem(
    `words`,
    `1 ليس لنا يا رب ليس لنا لكن لاسمك اعط مجدا من اجل رحمتك من اجل امانتك. 2 لماذا يقول الامم اين هو الههم. 3 ان الهنا في السماء.كلما شاء صنع. 4 اصنامهم فضة وذهب عمل ايدي الناس. 5 لها افواه ولا تتكلم.لها اعين ولا تبصر. 6 لها اذان ولا تسمع.لها مناخر ولا تشم. 7 لها ايد ولا تلمس.لها ارجل ولا تمشي ولا تنطق بحناجرها. 8 مثلها يكون صانعوها بل كل من يتكل عليها 9 يا اسرائيل اتكل على الرب.هو معينهم ومجنهم. 10 يا بيت هرون اتكلوا على الرب.هو معينهم ومجنهم. 11 يا متقي الرب اتكلوا على الرب.هو معينهم ومجنهم. 12 الرب قد ذكرنا فيبارك.يبارك بيت اسرائيل يبارك بيت هرون. 13 يبارك متقي الرب الصغار مع الكبار. 14 ليزد الرب عليكم.عليكم وعلى ابنائكم. 15 انتم مباركون للرب الصانع السموات والارض. 16 السموات سموات للرب.اما الارض فاعطاها لبني ادم. 17 ليس الاموات يسبحون الرب ولا من ينحدر الى ارض السكوت. 18 اما نحن فنبارك الرب من الان والى الدهر.هللويا`
  );
  location.reload();
}
function op116() {
  document.getElementById(`show-ld`).innerText = `116`;
  localStorage.setItem(`count`, `116`);
  document.getElementById(`one`).innerText =
    `1 احببت لان الرب يسمع صوتي تضرعاتي. 2 لانه امال اذنه الي.فادعوه مدة حياتي. 3 اكتنفتني حبال الموت اصابتني شدائد الهاوية.كابدت ضيقا وحزنا. 4 وباسم الرب دعوت اه يا رب نج نفسي. 5 الرب حنان وصديق والهنا رحيم. 6 الرب حافظ البسطاء.تذللت فخلصني. 7 ارجعي يا نفسي الى راحتك لان الرب قد احسن اليك. 8 لانك انقذت نفسي من الموت وعيني من الدمعة ورجلي من الزلق. 9 اسلك قدام الرب في ارض الاحياء 10 امنت لذلك تكلمت.انا تذللت جدا. 11 انا قلت في حيرتي كل انسان كاذب. 12 ماذا ارد للرب من اجل كل حسناته لي. 13 كاس الخلاص اتناول وباسم الرب ادعو. 14 اوفي نذوري للرب مقابل كل شعبه 15 عزيز في عيني الرب موت اتقيائه. 16 اه يا رب.لاني عبدك.انا عبدك ابن امتك.حللت قيودي. 17 فلك اذبح ذبيحة حمد وباسم الرب ادعو‏. 18 اوفي نذوري للرب مقابل شعبه 19 في ديار بيت الرب في وسطك يا اورشليم.هللويا`;
  localStorage.setItem(
    `words`,
    `1 احببت لان الرب يسمع صوتي تضرعاتي. 2 لانه امال اذنه الي.فادعوه مدة حياتي. 3 اكتنفتني حبال الموت اصابتني شدائد الهاوية.كابدت ضيقا وحزنا. 4 وباسم الرب دعوت اه يا رب نج نفسي. 5 الرب حنان وصديق والهنا رحيم. 6 الرب حافظ البسطاء.تذللت فخلصني. 7 ارجعي يا نفسي الى راحتك لان الرب قد احسن اليك. 8 لانك انقذت نفسي من الموت وعيني من الدمعة ورجلي من الزلق. 9 اسلك قدام الرب في ارض الاحياء 10 امنت لذلك تكلمت.انا تذللت جدا. 11 انا قلت في حيرتي كل انسان كاذب. 12 ماذا ارد للرب من اجل كل حسناته لي. 13 كاس الخلاص اتناول وباسم الرب ادعو. 14 اوفي نذوري للرب مقابل كل شعبه 15 عزيز في عيني الرب موت اتقيائه. 16 اه يا رب.لاني عبدك.انا عبدك ابن امتك.حللت قيودي. 17 فلك اذبح ذبيحة حمد وباسم الرب ادعو‏. 18 اوفي نذوري للرب مقابل شعبه 19 في ديار بيت الرب في وسطك يا اورشليم.هللويا`
  );
  location.reload();
}
function op117() {
  document.getElementById(`show-ld`).innerText = `117`;
  localStorage.setItem(`count`, `117`);
  document.getElementById(`one`).innerText =
    `1 سبحوا الرب يا كل الامم حمدوه يا كل الشعوب. 2 لان رحمته قد قويت علينا وامانة الرب الى الدهر.هللويا`;
  localStorage.setItem(
    `words`,
    `1 سبحوا الرب يا كل الامم حمدوه يا كل الشعوب. 2 لان رحمته قد قويت علينا وامانة الرب الى الدهر.هللويا`
  );
  location.reload();
}
function op118() {
  document.getElementById(`show-ld`).innerText = `118`;
  localStorage.setItem(`count`, `118`);
  document.getElementById(`one`).innerText =
    `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل اسرائيل ان الى الابد رحمته. 3 ليقل بيت هرون ان الى الابد رحمته. 4 ليقل متقو الرب ان الى الابد رحمته 5 من الضيق دعوت الرب فاجابني من الرحب. 6 الرب لي فلا اخاف.ماذا يصنع بي الانسان. 7 الرب لي بين معيني وانا سارى باعدائي. 8 الاحتماء بالرب خير من التوكل على انسان 9 الاحتماء بالرب خير من التوكل على الرؤساء. 10 كل الامم احاطوا بي.باسم الرب ابيدهم. 11 احاطوا بي واكتنفوني.باسم الرب ابيدهم. 12 احاطوا بي مثل النحل.انطفاوا كنار الشوك.باسم الرب ابيدهم. 13 دحرتني دحورا لاسقط.اما الرب فعضدني. 14 قوتي وترنمي الرب وقد صار لي خلاصا. 15 صوت ترنم وخلاص في خيام الصديقين.يمين الرب صانعة بباس 16 يمين الرب مرتفعة.يمين الرب صانعة بباس. 17 لا اموت بل احيا واحدث باعمال الرب. 18 تاديبا ادبني الرب والى الموت لم يسلمني 19 افتحوا لي ابواب البر.ادخل فيها واحمد الرب. 20 هذا الباب للرب.الصديقون يدخلون فيه. 21 احمدك لانك استجبت لي وصرت لي خلاصا. 22 الحجر الذي رفضه البناؤون قد صار راس الزاوية. 23 من قبل الرب كان هذا وهو عجيب في اعيننا 24 هذا هو اليوم الذي صنعه الرب.نبتهج ونفرح فيه. 25 اه يا رب خلص.اه يا رب انقذ. 26 مبارك الاتي باسم الرب.باركناكم من بيت الرب. 27 الرب هو الله وقد انار لنا.اوثقوا الذبيحة بربط الى قرون المذبح. 28 الهي انت فاحمدك الهي فارفعك. 29 احمدوا الرب لانه صالح لان الى الابد رحمته`;
  localStorage.setItem(
    `words`,
    `1 احمدوا الرب لانه صالح لان الى الابد رحمته. 2 ليقل اسرائيل ان الى الابد رحمته. 3 ليقل بيت هرون ان الى الابد رحمته. 4 ليقل متقو الرب ان الى الابد رحمته 5 من الضيق دعوت الرب فاجابني من الرحب. 6 الرب لي فلا اخاف.ماذا يصنع بي الانسان. 7 الرب لي بين معيني وانا سارى باعدائي. 8 الاحتماء بالرب خير من التوكل على انسان 9 الاحتماء بالرب خير من التوكل على الرؤساء. 10 كل الامم احاطوا بي.باسم الرب ابيدهم. 11 احاطوا بي واكتنفوني.باسم الرب ابيدهم. 12 احاطوا بي مثل النحل.انطفاوا كنار الشوك.باسم الرب ابيدهم. 13 دحرتني دحورا لاسقط.اما الرب فعضدني. 14 قوتي وترنمي الرب وقد صار لي خلاصا. 15 صوت ترنم وخلاص في خيام الصديقين.يمين الرب صانعة بباس 16 يمين الرب مرتفعة.يمين الرب صانعة بباس. 17 لا اموت بل احيا واحدث باعمال الرب. 18 تاديبا ادبني الرب والى الموت لم يسلمني 19 افتحوا لي ابواب البر.ادخل فيها واحمد الرب. 20 هذا الباب للرب.الصديقون يدخلون فيه. 21 احمدك لانك استجبت لي وصرت لي خلاصا. 22 الحجر الذي رفضه البناؤون قد صار راس الزاوية. 23 من قبل الرب كان هذا وهو عجيب في اعيننا 24 هذا هو اليوم الذي صنعه الرب.نبتهج ونفرح فيه. 25 اه يا رب خلص.اه يا رب انقذ. 26 مبارك الاتي باسم الرب.باركناكم من بيت الرب. 27 الرب هو الله وقد انار لنا.اوثقوا الذبيحة بربط الى قرون المذبح. 28 الهي انت فاحمدك الهي فارفعك. 29 احمدوا الرب لانه صالح لان الى الابد رحمته`
  );
  location.reload();
}
function op119() {
  document.getElementById(`show-ld`).innerText = `119`;
  localStorage.setItem(`count`, `119`);
  document.getElementById(`one`).innerText =
    `1 ا ـ طوبى للكاملين طريقا السالكين في شريعة الرب. 2 طوبى لحافظي شهاداته.من كل قلوبهم يطلبونه. 3 ايضا لا يرتكبون اثما.في طرقه يسلكون. 4 انت اوصيت بوصاياك ان تحفظ تماما 5 ليت طرقي تثبت في حفظ فرائضك. 6 حينئذ لا اخزى اذا نظرت الى كل وصاياك. 7 احمدك باستقامة قلب عند تعلمي احكام عدلك. 8 وصاياك احفظ.لا تتركني الى الغاية 9 ب ـ بم يزكي الشاب طريقه.بحفظه اياه حسب كلامك. 10 بكل قلبي طلبتك.لا تضلني عن وصاياك. 11 خبات كلامك في قلبي لكيلا اخطئ اليك. 12 مبارك انت يا رب.علمني فرائضك. 13 بشفتي حسبت كل احكام فمك. 14 بطريق شهاداتك فرحت كما على كل الغنى. 15 بوصاياك الهج والاحظ سبلك. 16 بفرائضك اتلذذ.لا انسى كلامك 17 ج ـ احسن الى عبدك فاحيا واحفظ امرك. 18 اكشف عن عيني فارى عجائب من شريعتك. 19 غريب انا في الارض.لا تخف عني وصاياك. 20 انسحقت نفسي شوقا الى احكامك في كل حين. 21 انتهرت المتكبرين الملاعين الضالين عن وصاياك. 22 دحرج عني العار والاهانة لاني حفظت شهاداتك. 23 جلس ايضا رؤساء تقاولوا علي.اما عبدك فيناجي بفرائضك. 24 ايضا شهاداتك هي لذتي اهل مشورتي 25 د ـ لصقت بالتراب نفسي فاحيني حسب كلمتك. 26 قد صرحت بطرقي فاستجبت لي.علمني فرائضك. 27 طريق وصاياك فهمني فاناجي بعجائبك. 28 قطرت نفسي من الحزن.اقمني حسب كلامك. 29 طريق الكذب ابعد عني وبشريعتك ارحمني. 30 اخترت طريق الحق.جعلت احكامك قدامي. 31 لصقت بشهاداتك.يا رب لا تخزني. 32 في طريق وصاياك اجري لانك ترحب قلبي 33 ه ـ علمني يا رب طريق فرائضك فاحفظها الى النهاية. 34 فهمني فالاحظ شريعتك واحفظها بكل قلبي. 35 دربني في سبيل وصاياك لاني به سررت. 36 امل قلبي الى شهاداتك لا الى المكسب. 37 حول عيني عن النظر الى الباطل.في طريقك احيني. 38 اقم لعبدك قولك الذي لمتقيك. 39 ازل عاري الذي حذرت منه لان احكامك طيبة. 40 هانذا قد اشتهيت وصاياك.بعدلك احيني 41 و ـ لتاتني رحمتك يا رب خلاصك حسب قولك 42 فاجاوب معيري كلمة.لاني اتكلت على كلامك. 43 ولا تنزع من فمي كلام الحق كل النزع لاني انتظرت احكامك. 44 فاحفظ شريعتك دائما الى الدهر والابد. 45 واتمشى في رحب لاني طلبت وصاياك. 46 واتكلم بشهاداتك قدام ملوك ولا اخزى 47 واتلذذ بوصاياك التي احببت. 48 وارفع يدي الى وصاياك التي وددت واناجي بفرائضك 49 ز ـ اذكر لعبدك القول الذي جعلتني انتظره. 50 هذه هي تعزيتي في مذلتي.لان قولك احياني. 51 المتكبرون استهزاوا بي الى الغاية.عن شريعتك لم امل. 52 تذكرت احكامك منذ الدهر يا رب فتعزيت. 53 الحمية اخذتني بسبب الاشرار تاركي شريعتك. 54 ترنيمات صارت لي فرائضك في بيت غربتي. 55 ذكرت في الليل اسمك يا رب وحفظت شريعتك. 56 هذا صار لي لاني حفظت وصاياك 57 ح ـ نصيبي الرب قلت لحفظ كلامك. 58 ترضيت وجهك بكل قلبي.ارحمني حسب قولك. 59 تفكرت في طرقي ورددت قدمي الى شهاداتك. 60 اسرعت ولم اتوان لحفظ وصاياك. 61 حبال الاشرار التفت علي.اما شريعتك فلم انسها. 62 في منتصف الليل اقوم لاحمدك على احكام برك. 63 رفيق انا لكل الذين يتقونك ولحافظي وصاياك. 64 رحمتك يا رب قد ملات الارض.علمني فرائضك 65 ط ـ خيرا صنعت مع عبدك يا رب حسب كلامك. 66 ذوقا صالحا ومعرفة علمني لاني بوصاياك امنت. 67 قبل ان اذلل انا ضللت.اما الان فحفظت قولك. 68 صالح انت ومحسن علمني فرائضك. 69 المتكبرون قد لفقوا علي كذبا.اما انا فبكل قلبي احفظ وصاياك. 70 سمن مثل الشحم قلبهم.اما انا فبشريعتك اتلذذ. 71 خير لي اني تذللت لكي اتعلم فرائضك. 72 شريعة فمك خير لي من الوف ذهب وفضة 73 ي ـ يداك صنعتاني وانشاتاني.فهمني فاتعلم وصاياك. 74 متقوك يرونني فيفرحون لاني انتظرت كلامك. 75 قد علمت يا رب ان احكامك عدل وبالحق اذللتني. 76 فلتصر رحمتك لتعزيتي حسب قولك لعبدك. 77 لتاتني مراحمك فاحيا لان شريعتك هي لذتي. 78 ليخز المتكبرون لانهم زورا افتروا علي.اما انا فاناجي بوصاياك. 79 ليرجع الي متقوك وعارفو شهاداتك. 80 ليكن قلبي كاملا في فرائضك لكيلا اخزى 81 ك ـ تاقت نفسي الى خلاصك.كلامك انتظرت. 82 كلت عيناي من النظر الى قولك فاقول متى تعزيني. 83 لاني قد صرت كزق في الدخان.اما فرائضك فلم انسها. 84 كم هي ايام عبدك.متى تجري حكما على مضطهدي. 85 المتكبرون قد كروا لي حفائر.ذلك ليس حسب شريعتك. 86 كل وصاياك امانة.زورا يضطهدونني.اعني. 87 لولا قليل لافنوني من الارض.اما انا فلم اترك وصاياك. 88 حسب رحمتك احيني فاحفظ شهادات فمك 89 ل ـ الى الابد يا رب كلمتك مثبتة في السموات. 90 الى دور فدور امانتك.اسست الارض فثبتت. 91 على احكامك ثبتت اليوم لان الكل عبيدك. 92 لو لم تكن شريعتك لذتي لهلكت حينئذ في مذلتي‏. 93 الى الدهر لا انسى وصاياك لانك بها احييتني. 94 لك انا فخلصني لاني طلبت وصاياك. 95 اياي انتظر الاشرار ليهلكوني.بشهاداتك افطن. 96 لكل كمال رايت حدا.اما وصيتك فواسعة جدا 97 م ـ كم احببت شريعتك.اليوم كله هي لهجي. 98 وصيتك جعلتني احكم من اعدائي لانها الى الدهر هي لي. 99 اكثر من كل معلمي تعقلت لان شهاداتك هي لهجي. 100 اكثر من الشيوخ فطنت لاني حفظت وصاياك. 101 من كل طريق شر منعت رجلي لكي احفظ كلامك. 102 عن احكامك لم امل لانك انت علمتني. 103 ما احلى قولك لحنكي احلى من العسل لفمي. 104 من وصاياك اتفطن.لذلك ابغضت كل طريق كذب 105 ن ـ سراج لرجلي كلامك ونور لسبيلي. 106 حلفت فابره ان احفظ احكام برك. 107 تذللت الى الغاية.يا رب احيني حسب كلامك. 108 ارتض بمندوبات فمي يا رب واحكامك علمني. 109 نفسي دائما في كفي.اما شريعتك فلم انسها. 110 الاشرار وضعوا لي فخا.اما وصاياك فلم اضل عنها. 111 ورثت شهاداتك الى الدهر لانها هي بهجة قلبي. 112 عطفت قلبي لاصنع فرائضك الى الدهر الى النهاية 113 س ـ المتقلبين ابغضت وشريعتك احببت. 114 ستري ومجني انت.كلامك انتظرت. 115 انصرفوا عني ايها الاشرار فاحفظ وصايا الهي. 116 اعضدني حسب قولك فاحيا ولا تخزني من رجائي. 117 اسندني فاخلص واراعي فرائضك دائما. 118 احتقرت كل الضالين عن فرائضك لان مكرهم باطل. 119 كزغل عزلت كل اشرار الارض.لذلك احببت شهاداتك. 120 قد اقشعر لحمي من رعبك ومن احكامك جزعت 121 ع ـ اجريت حكما وعدلا.لا تسلمني الى ظالمي. 122 كن ضامن عبدك للخير لكيلا يظلمني المستكبرون. 123 كلت عيناي اشتياقا الى خلاصك والى كلمة برك. 124 اصنع مع عبدك حسب رحمتك وفرائضك علمني. 125 عبدك انا.فهمني فاعرف شهاداتك. 126 انه وقت عمل للرب.قد نقضوا شريعتك. 127 لاجل ذلك احببت وصاياك اكثر من الذهب والابريز. 128 لاجل ذلك حسبت كل وصاياك في كل شيء مستقيمة.كل طريق كذب ابغضت 129 ف ـ عجيبة هي شهاداتك لذلك حفظتها نفسي. 130 فتح كلامك ينير يعقل الجهال. 131 فغرت فمي ولهثت لاني الى وصاياك اشتقت. 132 التفت الي وارحمني كحق محبي اسمك. 133 ثبت خطواتي في كلمتك ولا يتسلط علي اثم. 134 افدني من ظلم الانسان فاحفظ وصاياك. 135 اضئ بوجهك على عبدك وعلمني فرائضك. 136 جداول مياه جرت من عيني لانهم لم يحفظوا شريعتك 137 ص ـ بار انت يا رب واحكامك مستقيمة. 138 عدلا امرت بشهاداتك وحقا الى الغاية. 139 اهلكتني غيرتي لان اعدائي نسوا كلامك. 140 كلمتك ممحصة جدا وعبدك احبها. 141 صغير انا وحقير.اما وصاياك فلم انسها. 142 عدلك عدل الى الدهر وشريعتك حق. 143 ضيق وشدة اصاباني اما وصاياك فهي لذاتي. 144 عادلة شهاداتك الى الدهر فهمني فاحيا 145 ق ـ صرخت من كل قلبي.استجب لي يا رب.فرائضك احفظ. 146 دعوتك.خلصني فاحفظ شهاداتك. 147 تقدمت في الصبح وصرخت.كلامك انتظرت. 148 تقدمت عيناي الهزع لكي الهج باقوالك. 149 صوتي استمع حسب رحمتك.يا رب حسب احكامك احيني. 150 اقترب التابعون الرذيلة.عن شريعتك بعدوا. 151 قريب انت يا رب وكل وصاياك حق. 152 منذ زمان عرفت من شهاداتك انك الى الدهر اسستها 153 ر ـ انظر الى ذلي وانقذني لاني لم انسى شريعتك. 154 احسن دعواي وفكني.حسب كلمتك احيني. 155 الخلاص بعيد عن الاشرار لانهم لم يلتمسوا فرائضك. 156 كثيرة هي مراحمك يا رب.حسب احكامك احيني. 157 كثيرون مضطهدي ومضايقي.اما شهاداتك فلم امل عنها. 158 رايت الغادرين ومقت لانهم لم يحفظوا كلمتك. 159 انظر اني احببت وصاياك.يا رب حسب رحمتك احيني. 160 راس كلامك حق والى الدهر كل احكام عدلك 161 ش ـ رؤساء اضطهدوني بلا سبب.ومن كلامك جزع قلبي. 162 ابتهج انا بكلامك كمن وجد غنيمة وافرة. 163 ابغضت الكذب وكرهته.اما شريعتك فاحببتها. 164 سبع مرات في النهار سبحتك على احكام عدلك. 165 سلامة جزيلة لمحبي شريعتك وليس لهم معثرة. 166 رجوت خلاصك يا رب ووصاياك عملت. 167 حفظت نفسي شهاداتك واحبها جدا. 168 حفظت وصاياك وشهاداتك لان كل طرقي امامك 169 ت ـ ليبلغ صراخي اليك يا رب.حسب كلامك فهمني. 170 لتدخل طلبتي الى حضرتك .ككلمتك نجني. 171 تنبع شفتاي تسبيحا اذا علمتني فرائضك. 172 يغني لساني باقوالك لان كل وصاياك عدل. 173 لتكن يدك لمعونتي لانني اخترت وصاياك. 174 اشتقت الى خلاصك يا رب وشريعتك هي لذتي. 175 لتحي نفسي وتسبحك واحكامك لتعني. 176 ضللت كشاة ضالة.اطلب عبدك لاني لم انس وصاياك`;
  localStorage.setItem(
    `words`,
    `1 ا ـ طوبى للكاملين طريقا السالكين في شريعة الرب. 2 طوبى لحافظي شهاداته.من كل قلوبهم يطلبونه. 3 ايضا لا يرتكبون اثما.في طرقه يسلكون. 4 انت اوصيت بوصاياك ان تحفظ تماما 5 ليت طرقي تثبت في حفظ فرائضك. 6 حينئذ لا اخزى اذا نظرت الى كل وصاياك. 7 احمدك باستقامة قلب عند تعلمي احكام عدلك. 8 وصاياك احفظ.لا تتركني الى الغاية 9 ب ـ بم يزكي الشاب طريقه.بحفظه اياه حسب كلامك. 10 بكل قلبي طلبتك.لا تضلني عن وصاياك. 11 خبات كلامك في قلبي لكيلا اخطئ اليك. 12 مبارك انت يا رب.علمني فرائضك. 13 بشفتي حسبت كل احكام فمك. 14 بطريق شهاداتك فرحت كما على كل الغنى. 15 بوصاياك الهج والاحظ سبلك. 16 بفرائضك اتلذذ.لا انسى كلامك 17 ج ـ احسن الى عبدك فاحيا واحفظ امرك. 18 اكشف عن عيني فارى عجائب من شريعتك. 19 غريب انا في الارض.لا تخف عني وصاياك. 20 انسحقت نفسي شوقا الى احكامك في كل حين. 21 انتهرت المتكبرين الملاعين الضالين عن وصاياك. 22 دحرج عني العار والاهانة لاني حفظت شهاداتك. 23 جلس ايضا رؤساء تقاولوا علي.اما عبدك فيناجي بفرائضك. 24 ايضا شهاداتك هي لذتي اهل مشورتي 25 د ـ لصقت بالتراب نفسي فاحيني حسب كلمتك. 26 قد صرحت بطرقي فاستجبت لي.علمني فرائضك. 27 طريق وصاياك فهمني فاناجي بعجائبك. 28 قطرت نفسي من الحزن.اقمني حسب كلامك. 29 طريق الكذب ابعد عني وبشريعتك ارحمني. 30 اخترت طريق الحق.جعلت احكامك قدامي. 31 لصقت بشهاداتك.يا رب لا تخزني. 32 في طريق وصاياك اجري لانك ترحب قلبي 33 ه ـ علمني يا رب طريق فرائضك فاحفظها الى النهاية. 34 فهمني فالاحظ شريعتك واحفظها بكل قلبي. 35 دربني في سبيل وصاياك لاني به سررت. 36 امل قلبي الى شهاداتك لا الى المكسب. 37 حول عيني عن النظر الى الباطل.في طريقك احيني. 38 اقم لعبدك قولك الذي لمتقيك. 39 ازل عاري الذي حذرت منه لان احكامك طيبة. 40 هانذا قد اشتهيت وصاياك.بعدلك احيني 41 و ـ لتاتني رحمتك يا رب خلاصك حسب قولك 42 فاجاوب معيري كلمة.لاني اتكلت على كلامك. 43 ولا تنزع من فمي كلام الحق كل النزع لاني انتظرت احكامك. 44 فاحفظ شريعتك دائما الى الدهر والابد. 45 واتمشى في رحب لاني طلبت وصاياك. 46 واتكلم بشهاداتك قدام ملوك ولا اخزى 47 واتلذذ بوصاياك التي احببت. 48 وارفع يدي الى وصاياك التي وددت واناجي بفرائضك 49 ز ـ اذكر لعبدك القول الذي جعلتني انتظره. 50 هذه هي تعزيتي في مذلتي.لان قولك احياني. 51 المتكبرون استهزاوا بي الى الغاية.عن شريعتك لم امل. 52 تذكرت احكامك منذ الدهر يا رب فتعزيت. 53 الحمية اخذتني بسبب الاشرار تاركي شريعتك. 54 ترنيمات صارت لي فرائضك في بيت غربتي. 55 ذكرت في الليل اسمك يا رب وحفظت شريعتك. 56 هذا صار لي لاني حفظت وصاياك 57 ح ـ نصيبي الرب قلت لحفظ كلامك. 58 ترضيت وجهك بكل قلبي.ارحمني حسب قولك. 59 تفكرت في طرقي ورددت قدمي الى شهاداتك. 60 اسرعت ولم اتوان لحفظ وصاياك. 61 حبال الاشرار التفت علي.اما شريعتك فلم انسها. 62 في منتصف الليل اقوم لاحمدك على احكام برك. 63 رفيق انا لكل الذين يتقونك ولحافظي وصاياك. 64 رحمتك يا رب قد ملات الارض.علمني فرائضك 65 ط ـ خيرا صنعت مع عبدك يا رب حسب كلامك. 66 ذوقا صالحا ومعرفة علمني لاني بوصاياك امنت. 67 قبل ان اذلل انا ضللت.اما الان فحفظت قولك. 68 صالح انت ومحسن علمني فرائضك. 69 المتكبرون قد لفقوا علي كذبا.اما انا فبكل قلبي احفظ وصاياك. 70 سمن مثل الشحم قلبهم.اما انا فبشريعتك اتلذذ. 71 خير لي اني تذللت لكي اتعلم فرائضك. 72 شريعة فمك خير لي من الوف ذهب وفضة 73 ي ـ يداك صنعتاني وانشاتاني.فهمني فاتعلم وصاياك. 74 متقوك يرونني فيفرحون لاني انتظرت كلامك. 75 قد علمت يا رب ان احكامك عدل وبالحق اذللتني. 76 فلتصر رحمتك لتعزيتي حسب قولك لعبدك. 77 لتاتني مراحمك فاحيا لان شريعتك هي لذتي. 78 ليخز المتكبرون لانهم زورا افتروا علي.اما انا فاناجي بوصاياك. 79 ليرجع الي متقوك وعارفو شهاداتك. 80 ليكن قلبي كاملا في فرائضك لكيلا اخزى 81 ك ـ تاقت نفسي الى خلاصك.كلامك انتظرت. 82 كلت عيناي من النظر الى قولك فاقول متى تعزيني. 83 لاني قد صرت كزق في الدخان.اما فرائضك فلم انسها. 84 كم هي ايام عبدك.متى تجري حكما على مضطهدي. 85 المتكبرون قد كروا لي حفائر.ذلك ليس حسب شريعتك. 86 كل وصاياك امانة.زورا يضطهدونني.اعني. 87 لولا قليل لافنوني من الارض.اما انا فلم اترك وصاياك. 88 حسب رحمتك احيني فاحفظ شهادات فمك 89 ل ـ الى الابد يا رب كلمتك مثبتة في السموات. 90 الى دور فدور امانتك.اسست الارض فثبتت. 91 على احكامك ثبتت اليوم لان الكل عبيدك. 92 لو لم تكن شريعتك لذتي لهلكت حينئذ في مذلتي‏. 93 الى الدهر لا انسى وصاياك لانك بها احييتني. 94 لك انا فخلصني لاني طلبت وصاياك. 95 اياي انتظر الاشرار ليهلكوني.بشهاداتك افطن. 96 لكل كمال رايت حدا.اما وصيتك فواسعة جدا 97 م ـ كم احببت شريعتك.اليوم كله هي لهجي. 98 وصيتك جعلتني احكم من اعدائي لانها الى الدهر هي لي. 99 اكثر من كل معلمي تعقلت لان شهاداتك هي لهجي. 100 اكثر من الشيوخ فطنت لاني حفظت وصاياك. 101 من كل طريق شر منعت رجلي لكي احفظ كلامك. 102 عن احكامك لم امل لانك انت علمتني. 103 ما احلى قولك لحنكي احلى من العسل لفمي. 104 من وصاياك اتفطن.لذلك ابغضت كل طريق كذب 105 ن ـ سراج لرجلي كلامك ونور لسبيلي. 106 حلفت فابره ان احفظ احكام برك. 107 تذللت الى الغاية.يا رب احيني حسب كلامك. 108 ارتض بمندوبات فمي يا رب واحكامك علمني. 109 نفسي دائما في كفي.اما شريعتك فلم انسها. 110 الاشرار وضعوا لي فخا.اما وصاياك فلم اضل عنها. 111 ورثت شهاداتك الى الدهر لانها هي بهجة قلبي. 112 عطفت قلبي لاصنع فرائضك الى الدهر الى النهاية 113 س ـ المتقلبين ابغضت وشريعتك احببت. 114 ستري ومجني انت.كلامك انتظرت. 115 انصرفوا عني ايها الاشرار فاحفظ وصايا الهي. 116 اعضدني حسب قولك فاحيا ولا تخزني من رجائي. 117 اسندني فاخلص واراعي فرائضك دائما. 118 احتقرت كل الضالين عن فرائضك لان مكرهم باطل. 119 كزغل عزلت كل اشرار الارض.لذلك احببت شهاداتك. 120 قد اقشعر لحمي من رعبك ومن احكامك جزعت 121 ع ـ اجريت حكما وعدلا.لا تسلمني الى ظالمي. 122 كن ضامن عبدك للخير لكيلا يظلمني المستكبرون. 123 كلت عيناي اشتياقا الى خلاصك والى كلمة برك. 124 اصنع مع عبدك حسب رحمتك وفرائضك علمني. 125 عبدك انا.فهمني فاعرف شهاداتك. 126 انه وقت عمل للرب.قد نقضوا شريعتك. 127 لاجل ذلك احببت وصاياك اكثر من الذهب والابريز. 128 لاجل ذلك حسبت كل وصاياك في كل شيء مستقيمة.كل طريق كذب ابغضت 129 ف ـ عجيبة هي شهاداتك لذلك حفظتها نفسي. 130 فتح كلامك ينير يعقل الجهال. 131 فغرت فمي ولهثت لاني الى وصاياك اشتقت. 132 التفت الي وارحمني كحق محبي اسمك. 133 ثبت خطواتي في كلمتك ولا يتسلط علي اثم. 134 افدني من ظلم الانسان فاحفظ وصاياك. 135 اضئ بوجهك على عبدك وعلمني فرائضك. 136 جداول مياه جرت من عيني لانهم لم يحفظوا شريعتك 137 ص ـ بار انت يا رب واحكامك مستقيمة. 138 عدلا امرت بشهاداتك وحقا الى الغاية. 139 اهلكتني غيرتي لان اعدائي نسوا كلامك. 140 كلمتك ممحصة جدا وعبدك احبها. 141 صغير انا وحقير.اما وصاياك فلم انسها. 142 عدلك عدل الى الدهر وشريعتك حق. 143 ضيق وشدة اصاباني اما وصاياك فهي لذاتي. 144 عادلة شهاداتك الى الدهر فهمني فاحيا 145 ق ـ صرخت من كل قلبي.استجب لي يا رب.فرائضك احفظ. 146 دعوتك.خلصني فاحفظ شهاداتك. 147 تقدمت في الصبح وصرخت.كلامك انتظرت. 148 تقدمت عيناي الهزع لكي الهج باقوالك. 149 صوتي استمع حسب رحمتك.يا رب حسب احكامك احيني. 150 اقترب التابعون الرذيلة.عن شريعتك بعدوا. 151 قريب انت يا رب وكل وصاياك حق. 152 منذ زمان عرفت من شهاداتك انك الى الدهر اسستها 153 ر ـ انظر الى ذلي وانقذني لاني لم انسى شريعتك. 154 احسن دعواي وفكني.حسب كلمتك احيني. 155 الخلاص بعيد عن الاشرار لانهم لم يلتمسوا فرائضك. 156 كثيرة هي مراحمك يا رب.حسب احكامك احيني. 157 كثيرون مضطهدي ومضايقي.اما شهاداتك فلم امل عنها. 158 رايت الغادرين ومقت لانهم لم يحفظوا كلمتك. 159 انظر اني احببت وصاياك.يا رب حسب رحمتك احيني. 160 راس كلامك حق والى الدهر كل احكام عدلك 161 ش ـ رؤساء اضطهدوني بلا سبب.ومن كلامك جزع قلبي. 162 ابتهج انا بكلامك كمن وجد غنيمة وافرة. 163 ابغضت الكذب وكرهته.اما شريعتك فاحببتها. 164 سبع مرات في النهار سبحتك على احكام عدلك. 165 سلامة جزيلة لمحبي شريعتك وليس لهم معثرة. 166 رجوت خلاصك يا رب ووصاياك عملت. 167 حفظت نفسي شهاداتك واحبها جدا. 168 حفظت وصاياك وشهاداتك لان كل طرقي امامك 169 ت ـ ليبلغ صراخي اليك يا رب.حسب كلامك فهمني. 170 لتدخل طلبتي الى حضرتك .ككلمتك نجني. 171 تنبع شفتاي تسبيحا اذا علمتني فرائضك. 172 يغني لساني باقوالك لان كل وصاياك عدل. 173 لتكن يدك لمعونتي لانني اخترت وصاياك. 174 اشتقت الى خلاصك يا رب وشريعتك هي لذتي. 175 لتحي نفسي وتسبحك واحكامك لتعني. 176 ضللت كشاة ضالة.اطلب عبدك لاني لم انس وصاياك`
  );
  location.reload();
}
function op120() {
  document.getElementById(`show-ld`).innerText = `120`;
  localStorage.setItem(`count`, `120`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.الى الرب في ضيقي صرخت فاستجاب لي. 2 يا رب نج نفسي من شفاه الكذب من لسان غش. 3 ماذا يعطيك وماذا يزيد لك لسان الغش. 4 سهام جبار مسنونة مع جمر الرتم. 5 ويلي لغربتي في ماشك لسكني في خيام قيدار. 6 طال على نفسي سكنها مع مبغض السلام. 7 انا سلام وحينما اتكلم فهم للحرب`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.الى الرب في ضيقي صرخت فاستجاب لي. 2 يا رب نج نفسي من شفاه الكذب من لسان غش. 3 ماذا يعطيك وماذا يزيد لك لسان الغش. 4 سهام جبار مسنونة مع جمر الرتم. 5 ويلي لغربتي في ماشك لسكني في خيام قيدار. 6 طال على نفسي سكنها مع مبغض السلام. 7 انا سلام وحينما اتكلم فهم للحرب`
  );
  location.reload();
}
function op121() {
  document.getElementById(`show-ld`).innerText = `121`;
  localStorage.setItem(`count`, `121`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.ارفع عيني الى الجبال من حيث ياتي عوني. 2 معونتي من عند الرب صانع السموات والارض. 3 لا يدع رجلك تزل.لا ينعس حافظك. 4 انه لا ينعس ولا ينام حافظ اسرائيل. 5 الرب حافظك.الرب ظل لك عن يدك اليمنى. 6 لا تضربك الشمس في النهار ولا القمر في الليل. 7 الرب يحفظك من كل شر يحفظ نفسك. 8 الرب يحفظ خروجك ودخولك من الان والى الدهر`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.ارفع عيني الى الجبال من حيث ياتي عوني. 2 معونتي من عند الرب صانع السموات والارض. 3 لا يدع رجلك تزل.لا ينعس حافظك. 4 انه لا ينعس ولا ينام حافظ اسرائيل. 5 الرب حافظك.الرب ظل لك عن يدك اليمنى. 6 لا تضربك الشمس في النهار ولا القمر في الليل. 7 الرب يحفظك من كل شر يحفظ نفسك. 8 الرب يحفظ خروجك ودخولك من الان والى الدهر`
  );
  location.reload();
}
function op122() {
  document.getElementById(`show-ld`).innerText = `122`;
  localStorage.setItem(`count`, `122`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.لداود.فرحت بالقائلين لي الى بيت الرب نذهب. 2 تقف ارجلنا في ابوابك يا اورشليم. 3 اورشليم المبنية كمدينة متصلة كلها 4 حيث صعدت الاسباط اسباط الرب شهادة لاسرائيل ليحمدوا اسم الرب. 5 لانه هناك استوت الكراسي للقضاء كراسي بيت داود. 6 اسالوا سلامة اورشليم.ليسترح محبوك. 7 ليكن سلام في ابراجك راحة في قصورك. 8 من اجل اخوتي واصحابي لاقولن سلام بك. 9 من اجل بيت الرب الهنا التمس لك خيرا`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.لداود.فرحت بالقائلين لي الى بيت الرب نذهب. 2 تقف ارجلنا في ابوابك يا اورشليم. 3 اورشليم المبنية كمدينة متصلة كلها 4 حيث صعدت الاسباط اسباط الرب شهادة لاسرائيل ليحمدوا اسم الرب. 5 لانه هناك استوت الكراسي للقضاء كراسي بيت داود. 6 اسالوا سلامة اورشليم.ليسترح محبوك. 7 ليكن سلام في ابراجك راحة في قصورك. 8 من اجل اخوتي واصحابي لاقولن سلام بك. 9 من اجل بيت الرب الهنا التمس لك خيرا`
  );
  location.reload();
}
function op123() {
  document.getElementById(`show-ld`).innerText = `123`;
  localStorage.setItem(`count`, `123`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.اليك رفعت عيني يا ساكنا في السموات. 2 هوذا كما ان عيون العبيد نحو ايادي ساداتهم كما ان عيني الجارية نحو يد سيدتها هكذا عيوننا نحو الرب الهنا حتى يتراف علينا. 3 ارحمنا يا رب ارحمنا لاننا كثيرا ما امتلانا هوانا. 4 كثيرا ما شبعت انفسنا من هزء المستريحين واهانة المستكبرين`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.اليك رفعت عيني يا ساكنا في السموات. 2 هوذا كما ان عيون العبيد نحو ايادي ساداتهم كما ان عيني الجارية نحو يد سيدتها هكذا عيوننا نحو الرب الهنا حتى يتراف علينا. 3 ارحمنا يا رب ارحمنا لاننا كثيرا ما امتلانا هوانا. 4 كثيرا ما شبعت انفسنا من هزء المستريحين واهانة المستكبرين`
  );
  location.reload();
}
function op124() {
  document.getElementById(`show-ld`).innerText = `124`;
  localStorage.setItem(`count`, `124`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.لداود.لولا الرب الذي كان لنا ليقل اسرائيل 2 لولا الرب الذي كان لنا عندما قام الناس علينا 3 اذا لابتلعونا احياء عند احتماء غضبهم علينا 4 اذا لجرفتنا المياه لعبر السيل على انفسنا 5 اذا لعبرت على انفسنا المياه الطامية. 6 مبارك الرب الذي لم يسلمنا فريسة لاسنانهم. 7 انفلتت انفسنا مثل العصفور من فخ الصيادين الفخ انكسر ونحن انفلتنا. 8 عوننا باسم الرب الصانع السموات والارض`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.لداود.لولا الرب الذي كان لنا ليقل اسرائيل 2 لولا الرب الذي كان لنا عندما قام الناس علينا 3 اذا لابتلعونا احياء عند احتماء غضبهم علينا 4 اذا لجرفتنا المياه لعبر السيل على انفسنا 5 اذا لعبرت على انفسنا المياه الطامية. 6 مبارك الرب الذي لم يسلمنا فريسة لاسنانهم. 7 انفلتت انفسنا مثل العصفور من فخ الصيادين الفخ انكسر ونحن انفلتنا. 8 عوننا باسم الرب الصانع السموات والارض`
  );
  location.reload();
}
function op125() {
  document.getElementById(`show-ld`).innerText = `125`;
  localStorage.setItem(`count`, `125`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.المتوكلون على الرب مثل جبل صهيون الذي لا يتزعزع بل يسكن الى الدهر. 2 اورشليم الجبال حولها والرب حول شعبه من الان والى الدهر. 3 لانه لا تستقر عصا الاشرار على نصيب الصديقين لكيلا يمد الصديقون ايديهم الى الاثم. 4 احسن يا رب الى الصالحين والى المستقيمي القلوب. 5 اما العادلون الى طرق معوجة فيذهبهم الرب مع فعلة الاثم.سلام على اسرائيل`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.المتوكلون على الرب مثل جبل صهيون الذي لا يتزعزع بل يسكن الى الدهر. 2 اورشليم الجبال حولها والرب حول شعبه من الان والى الدهر. 3 لانه لا تستقر عصا الاشرار على نصيب الصديقين لكيلا يمد الصديقون ايديهم الى الاثم. 4 احسن يا رب الى الصالحين والى المستقيمي القلوب. 5 اما العادلون الى طرق معوجة فيذهبهم الرب مع فعلة الاثم.سلام على اسرائيل`
  );
  location.reload();
}
function op126() {
  document.getElementById(`show-ld`).innerText = `126`;
  localStorage.setItem(`count`, `126`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.عندما رد الرب سبي صهيون صرنا مثل الحالمين. 2 حينئذ امتلات افواهنا ضحكا والسنتنا ترنما.حينئذ قالوا بين الامم ان الرب قد عظم العمل مع هؤلاء‏. 3 عظم الرب العمل معنا وصرنا فرحين. 4 اردد يا رب سبينا مثل السواقي في الجنوب. 5 الذين يزرعون بالدموع يحصدون بالابتهاج. 6 الذاهب ذهابا بالبكاء حاملا مبذر الزرع مجيئا يجيء بالترنم حاملا حزمه`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.عندما رد الرب سبي صهيون صرنا مثل الحالمين. 2 حينئذ امتلات افواهنا ضحكا والسنتنا ترنما.حينئذ قالوا بين الامم ان الرب قد عظم العمل مع هؤلاء‏. 3 عظم الرب العمل معنا وصرنا فرحين. 4 اردد يا رب سبينا مثل السواقي في الجنوب. 5 الذين يزرعون بالدموع يحصدون بالابتهاج. 6 الذاهب ذهابا بالبكاء حاملا مبذر الزرع مجيئا يجيء بالترنم حاملا حزمه`
  );
  location.reload();
}
function op127() {
  document.getElementById(`show-ld`).innerText = `127`;
  localStorage.setItem(`count`, `127`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.لسليمان.ان لم يبن الرب البيت فباطلا يتعب البناؤون.ان لم يحفظ الرب المدينة فباطلا يسهر الحارس. 2 باطل هو لكم ان تبكروا الى القيام مؤخرين الجلوس اكلين خبز الاتعاب.لكنه يعطي حبيبه نوما. 3 هوذا البنون ميراث من عند الرب ثمرة البطن اجرة. 4 كسهام بيد جبار هكذا ابناء الشبيبة. 5 طوبى للذي ملا جعبته منهم.لا يخزون بل يكلمون الاعداء في الباب`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.لسليمان.ان لم يبن الرب البيت فباطلا يتعب البناؤون.ان لم يحفظ الرب المدينة فباطلا يسهر الحارس. 2 باطل هو لكم ان تبكروا الى القيام مؤخرين الجلوس اكلين خبز الاتعاب.لكنه يعطي حبيبه نوما. 3 هوذا البنون ميراث من عند الرب ثمرة البطن اجرة. 4 كسهام بيد جبار هكذا ابناء الشبيبة. 5 طوبى للذي ملا جعبته منهم.لا يخزون بل يكلمون الاعداء في الباب`
  );
  location.reload();
}
function op128() {
  document.getElementById(`show-ld`).innerText = `128`;
  localStorage.setItem(`count`, `128`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.طوبى لكل من يتقي الرب ويسلك في طرقه. 2 لانك تاكل تعب يديك.طوباك وخير لك. 3 امراتك مثل كرمة مثمرة في جوانب بيتك.بنوك مثل غروس الزيتون حول مائدتك. 4 هكذا يبارك الرجل المتقي الرب. 5 يباركك الرب من صهيون وتبصر خير اورشليم كل ايام حياتك. 6 وترى بني بنيك.سلام على اسرائيل`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.طوبى لكل من يتقي الرب ويسلك في طرقه. 2 لانك تاكل تعب يديك.طوباك وخير لك. 3 امراتك مثل كرمة مثمرة في جوانب بيتك.بنوك مثل غروس الزيتون حول مائدتك. 4 هكذا يبارك الرجل المتقي الرب. 5 يباركك الرب من صهيون وتبصر خير اورشليم كل ايام حياتك. 6 وترى بني بنيك.سلام على اسرائيل`
  );
  location.reload();
}
function op129() {
  document.getElementById(`show-ld`).innerText = `129`;
  localStorage.setItem(`count`, `129`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.كثيرا ما ضايقوني منذ شبابي ليقل اسرائيل 2 كثيرا ما ضايقوني منذ شبابي.لكن لم يقدروا علي. 3 على ظهري حرث الحراث.طولوا اتلامهم. 4 الرب صديق.قطع ربط الاشرار. 5 فليخز وليرتد الى الوراء كل مبغضي صهيون. 6 ليكونوا كعشب السطوح الذي ييبس قبل ان يقلع. 7 الذي لا يملا الحاصد كفه منه ولا المحزم حضنه. 8 ولا يقول العابرون بركة الرب عليكم.باركناكم باسم الرب`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.كثيرا ما ضايقوني منذ شبابي ليقل اسرائيل 2 كثيرا ما ضايقوني منذ شبابي.لكن لم يقدروا علي. 3 على ظهري حرث الحراث.طولوا اتلامهم. 4 الرب صديق.قطع ربط الاشرار. 5 فليخز وليرتد الى الوراء كل مبغضي صهيون. 6 ليكونوا كعشب السطوح الذي ييبس قبل ان يقلع. 7 الذي لا يملا الحاصد كفه منه ولا المحزم حضنه. 8 ولا يقول العابرون بركة الرب عليكم.باركناكم باسم الرب`
  );
  location.reload();
}
function op130() {
  document.getElementById(`show-ld`).innerText = `130`;
  localStorage.setItem(`count`, `130`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.من الاعماق صرخت اليك يا رب. 2 يا رب اسمع صوتي لتكن اذناك مصغيتين الى صوت تضرعاتي. 3 ان كنت تراقب الاثام يا رب يا سيد فمن يقف‏. 4 لان عندك المغفرة لكي يخاف منك. 5 انتظرتك يا رب انتظرت نفسي وبكلامه رجوت. 6 نفسي تنتظر الرب اكثر من المراقبين الصبح اكثر من المراقبين الصبح. 7 ليرج اسرائيل الرب لان عند الرب الرحمة وعنده فدى كثير. 8 وهو يفدي اسرائيل من كل اثامه`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.من الاعماق صرخت اليك يا رب. 2 يا رب اسمع صوتي لتكن اذناك مصغيتين الى صوت تضرعاتي. 3 ان كنت تراقب الاثام يا رب يا سيد فمن يقف‏. 4 لان عندك المغفرة لكي يخاف منك. 5 انتظرتك يا رب انتظرت نفسي وبكلامه رجوت. 6 نفسي تنتظر الرب اكثر من المراقبين الصبح اكثر من المراقبين الصبح. 7 ليرج اسرائيل الرب لان عند الرب الرحمة وعنده فدى كثير. 8 وهو يفدي اسرائيل من كل اثامه`
  );
  location.reload();
}
function op131() {
  document.getElementById(`show-ld`).innerText = `131`;
  localStorage.setItem(`count`, `131`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.لداود.يا رب لم يرتفع قلبي ولم تستعل عيناي ولم اسلك في العظائم ولا في عجائب فوقي. 2 بل هدات وسكت نفسي كفطيم نحو امه نفسي نحوي كفطيم. 3 ليرج اسرائيل الرب من الان والى الدهر`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.لداود.يا رب لم يرتفع قلبي ولم تستعل عيناي ولم اسلك في العظائم ولا في عجائب فوقي. 2 بل هدات وسكت نفسي كفطيم نحو امه نفسي نحوي كفطيم. 3 ليرج اسرائيل الرب من الان والى الدهر`
  );
  location.reload();
}
function op132() {
  document.getElementById(`show-ld`).innerText = `132`;
  localStorage.setItem(`count`, `132`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.اذكر يا رب داود كل ذله. 2 كيف حلف للرب نذر لعزيز يعقوب 3 لا ادخل خيمة بيتي لا اصعد على سرير فراشي 4 لا اعطي وسنا لعيني ولا نوما لاجفاني 5 او اجد مقاما للرب مسكنا لعزيز يعقوب. 6 هوذا قد سمعنا به في افراتة.وجدناه في حقول الوعر. 7 لندخل الى مساكنه.لنسجد عند موطئ قدميه 8 قم يا رب الى راحتك انت وتابوت عزك. 9 كهنتك يلبسون البر واتقياؤك يهتفون. 10 من اجل داود عبدك لا ترد وجه مسيحك. 11 اقسم الرب لداود بالحق لا يرجع عنه.من ثمرة بطنك اجعل على كرسيك. 12 ان حفظ بنوك عهدي وشهاداتي التي اعلمهم اياها فبنوهم ايضا الى الابد يجلسون على كرسيك. 13 لان الرب قد اختار صهيون اشتهاها مسكنا له. 14 هذه هي راحتي الى الابد ههنا اسكن لاني اشتهيتها. 15 طعامها ابارك بركة مساكينها اشبع خبزا. 16 كهنتها البس خلاصا واتقياؤها يهتفون هتافا. 17 هناك انبت قرنا لداود.رتبت سراجا لمسيحي. 18 اعداءه البس خزيا وعليه يزهر اكليله`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.اذكر يا رب داود كل ذله. 2 كيف حلف للرب نذر لعزيز يعقوب 3 لا ادخل خيمة بيتي لا اصعد على سرير فراشي 4 لا اعطي وسنا لعيني ولا نوما لاجفاني 5 او اجد مقاما للرب مسكنا لعزيز يعقوب. 6 هوذا قد سمعنا به في افراتة.وجدناه في حقول الوعر. 7 لندخل الى مساكنه.لنسجد عند موطئ قدميه 8 قم يا رب الى راحتك انت وتابوت عزك. 9 كهنتك يلبسون البر واتقياؤك يهتفون. 10 من اجل داود عبدك لا ترد وجه مسيحك. 11 اقسم الرب لداود بالحق لا يرجع عنه.من ثمرة بطنك اجعل على كرسيك. 12 ان حفظ بنوك عهدي وشهاداتي التي اعلمهم اياها فبنوهم ايضا الى الابد يجلسون على كرسيك. 13 لان الرب قد اختار صهيون اشتهاها مسكنا له. 14 هذه هي راحتي الى الابد ههنا اسكن لاني اشتهيتها. 15 طعامها ابارك بركة مساكينها اشبع خبزا. 16 كهنتها البس خلاصا واتقياؤها يهتفون هتافا. 17 هناك انبت قرنا لداود.رتبت سراجا لمسيحي. 18 اعداءه البس خزيا وعليه يزهر اكليله`
  );
  location.reload();
}
function op133() {
  document.getElementById(`show-ld`).innerText = `133`;
  localStorage.setItem(`count`, `133`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.لداود.هوذا ما احسن وما اجمل ان يسكن الاخوة معا. 2 مثل الدهن الطيب على الراس النازل على اللحية لحية هرون النازل الى طرف ثيابه. 3 مثل ندى حرمون النازل على جبل صهيون.لانه هناك امر الرب بالبركة حياة الى الابد`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.لداود.هوذا ما احسن وما اجمل ان يسكن الاخوة معا. 2 مثل الدهن الطيب على الراس النازل على اللحية لحية هرون النازل الى طرف ثيابه. 3 مثل ندى حرمون النازل على جبل صهيون.لانه هناك امر الرب بالبركة حياة الى الابد`
  );
  location.reload();
}
function op134() {
  document.getElementById(`show-ld`).innerText = `134`;
  localStorage.setItem(`count`, `134`);
  document.getElementById(`one`).innerText =
    `1 ترنيمة المصاعد.هوذا باركوا الرب يا جميع عبيد الرب الواقفين في بيت الرب بالليالي. 2 ارفعوا ايديكم نحو القدس وباركوا الرب. 3 يباركك الرب من صهيون الصانع السموات والارض`;
  localStorage.setItem(
    `words`,
    `1 ترنيمة المصاعد.هوذا باركوا الرب يا جميع عبيد الرب الواقفين في بيت الرب بالليالي. 2 ارفعوا ايديكم نحو القدس وباركوا الرب. 3 يباركك الرب من صهيون الصانع السموات والارض`
  );
  location.reload();
}
function op135() {
  document.getElementById(`show-ld`).innerText = `135`;
  localStorage.setItem(`count`, `135`);
  document.getElementById(`one`).innerText =
    `1 هللويا.سبحوا اسم الرب.سبحوا يا عبيد الرب 2 الواقفين في بيت الرب في ديار بيت الهنا 3 سبحوا الرب لان الرب صالح.رنموا لاسمه لان ذاك حلو. 4 لان الرب قد اختار يعقوب لذاته واسرائيل لخاصته. 5 لاني انا قد عرفت ان الرب عظيم وربنا فوق جميع الالهة. 6 كل ما شاء الرب صنع في السموات وفي الارض في البحار وفي كل اللجج. 7 المصعد السحاب من اقاصي الارض.الصانع بروقا للمطر.المخرج الريح من خزائنه. 8 الذي ضرب ابكار مصر من الناس الى البهائم. 9 ارسل ايات وعجائب في وسطك يا مصر على فرعون وعلى كل عبيده. 10 الذي ضرب امما كثيرة وقتل ملوكا اعزاء 11 سيحون ملك الاموريين وعوج ملك باشان وكل ممالك كنعان. 12 واعطى ارضهم ميراثا.ميراثا لاسرائيل شعبه 13 يا رب اسمك الى الدهر.يا رب ذكرك الى دور فدور. 14 لان الرب يدين شعبه وعلى عبيده يشفق. 15 اصنام الامم فضة وذهب عمل ايدي الناس. 16 لها افواه ولا تتكلم.لها اعين ولا تبصر. 17 لها اذان ولا تسمع.كذلك ليس في افواهها نفس. 18 مثلها يكون صانعوها وكل من يتكل عليها. 19 يا بيت اسرائيل باركوا الرب.يا بيت هرون باركوا الرب. 20 يا بيت لاوي باركوا الرب.يا خائفي الرب باركوا الرب. 21 مبارك الرب من صهيون الساكن في اورشليم.هللويا`;
  localStorage.setItem(
    `words`,
    `1 هللويا.سبحوا اسم الرب.سبحوا يا عبيد الرب 2 الواقفين في بيت الرب في ديار بيت الهنا 3 سبحوا الرب لان الرب صالح.رنموا لاسمه لان ذاك حلو. 4 لان الرب قد اختار يعقوب لذاته واسرائيل لخاصته. 5 لاني انا قد عرفت ان الرب عظيم وربنا ف
