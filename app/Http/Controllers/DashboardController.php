<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Service_Submission;
use App\Models\Service;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
{
    
    $stats = [
        'business_submissions' => Service_Submission::count(),
        'website_visitors' => 420000, 
        'users' => User::count(),
    ];

    
    $users = User::select('id', 'name', 'username', 'email', 'role')->get();

    $submissions = Service_Submission::with('user', 'city', 'category')
        ->orderBy('created_at', 'desc')
        ->take(5)
        ->get();

    $dailySubmissions = Service_Submission::selectRaw('DATE(created_at) as date, COUNT(*) as count')
        ->where('created_at', '>=', now()->subDays(7)) 
        ->groupBy('date')
        ->orderBy('date')
        ->get();

   
    $trending = Service::with('submission', 'city', 'category')
        ->orderBy('created_at', 'desc')
        ->take(5)
        ->get();

    return response()->json([
        'stats' => $stats,
        'users' => $users,
        'submissions' => $submissions,
        'trending' => $trending,
        'dailySubmissions' => $dailySubmissions, 
    ]);
}

}
