<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'name' => 'Patient One',
            'email' => 'patient@example.com',
            'contact_number' => '09171234567',
            'password' => Hash::make('password123'),
            'role' => 'patient',
        ]);

        // Staff Account
        User::create([
            'name' => 'Staff One',
            'email' => 'staff@example.com',
            'contact_number' => '09181234567',
            'password' => Hash::make('password123'),
            'role' => 'staff',
        ]);

        // Dentist Account
        User::create([
            'name' => 'Dentist One',
            'email' => 'dentist@example.com',
            'contact_number' => '09191234567',
            'password' => Hash::make('password123'),
            'role' => 'dentist',
        ]);
    }
}
