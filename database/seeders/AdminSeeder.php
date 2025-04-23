<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
   
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            'last_connection' => now(),
            'name' => ' Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'), // Assure une sécurité minimale
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}


