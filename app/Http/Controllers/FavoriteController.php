<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index($utilisateur_id)
    {
        $favorites = Favorite::with('service') // Charge la relation service
            ->where('utilisateur_id', $utilisateur_id)
            ->get();

        return response()->json($favorites);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'utilisateur_id' => 'required|exists:users,id',
            'service_id' => 'required|exists:services,id',
        ]);

        $exists = Favorite::where('utilisateur_id', $validated['utilisateur_id'])
            ->where('service_id', $validated['service_id'])
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'Déjà dans les favoris'], 409);
        }

        Favorite::create($validated);

        return response()->json(['message' => 'Ajouté aux favoris !']);
    }

    public function destroy($id)
    {
        $favorite = Favorite::findOrFail($id);
        $favorite->delete();

        return response()->json(['message' => 'Favori supprimé avec succès.']);
    }
}
