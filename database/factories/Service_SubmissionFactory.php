<?php
namespace Database\Factories;

use App\Models\Service_Submission;
use App\Models\User;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class Service_SubmissionFactory extends Factory
{
    protected $model = Service_Submission::class;

    public function definition()
    {
        return [
            'description' => $this->faker->paragraph(),
            'date' => $this->faker->date(),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'utilisateur_id' => User::factory(),
            'service_id' => Service::factory(),
        ];
    }
}
