<?php


namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getAdminData()
    {
        $admin = Admin::first();

        if (!$admin) {
            return response()->json(['message' => 'Administrateur non trouvé'], 404);
        }

        return response()->json([
            'admin' => $admin
        ]);
    }

    public function updateAdminData(Request $request)
    {
        $admin = Admin::first();

        if (!$admin) {
            return response()->json(['message' => 'Administrateur non trouvé'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'city' => 'nullable|string',
            'country' => 'nullable|string',
            'role' => 'nullable|string',
        ]);

       
        $admin->update($validated);

        return response()->json([
            'message' => 'Données de l\'administrateur mises à jour',
            'admin' => $admin
        ]);
    }
}





