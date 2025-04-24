<?php

// app/Http/Controllers/ContactController.php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function send(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

    
        $contact = new Contact();
        $contact->name = $validated['name'];
        $contact->email = $validated['email'];
        $contact->message = $validated['message'];
        $contact->save();

       
        return response()->json(['success' => true, 'message' => 'Message received!'], 200);
    }
}

