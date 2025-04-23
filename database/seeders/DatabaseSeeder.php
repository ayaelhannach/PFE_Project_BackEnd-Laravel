<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
{
    $this->call([
        UserSeeder::class,
        CitySeeder::class,
        CategorySeeder::class,
        GuideSeeder::class,
        SubmissionSeeder::class,
        ServiceSeeder::class,
        AdminSeeder::class
    ]);
    //\App\Models\Admin::factory(5)->create();
    //\App\Models\City::factory(5)->create();
    //\App\Models\Categorie::factory(5)->create();
    //\App\Models\Service::factory(10)->create();
    //\App\Models\Tourist_Guide::factory(5)->create();

}

}
