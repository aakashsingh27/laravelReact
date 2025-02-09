<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactForm;
class ContactControlle extends Controller
{
    public function contact_submit(Request $req)
    {
        $insertdata = ContactForm::Create([
            'name'=>$req->name,
            'email'=>$req->email,
            'message'=>$req->message
        ]);
      if( $insertdata)
      {
        return response()->json(['success'=>true,'message'=>"Data submitted successfully"]);
      }
    }

    public function contact_list(Request $req)
    {
        $contactForm_list = ContactForm::OrderBY('id','desc')->get();
        return response()->json(['success'=>true,'data'=>$contactForm_list]);
    }
}
