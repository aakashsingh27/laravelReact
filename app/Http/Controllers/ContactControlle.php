<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactControlle extends Controller
{
    public function contact_submit(Request $req)
    {
        dd($req->all());
    }
}
