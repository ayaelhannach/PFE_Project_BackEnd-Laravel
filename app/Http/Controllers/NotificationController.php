<?php
// NotificationController.php
namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getUnreadNotificationsCount(Request $request)
    {
        if (!$request->user()->is_admin) {
            return response()->json(['message' => 'Access denied'], 403); 
        }

        $unreadCount = Notification::forAdmin()
            ->unread()
            ->count();

        return response()->json(['unread_count' => $unreadCount]);
    }
}
