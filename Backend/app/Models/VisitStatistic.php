<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitStatistic extends Model
{
    use HasFactory;
    // This model will be used to save the visit statistics per hour in a day and see the peak hours
    // This will help the admin to see the peak hours and plan accordingly
    // (Note: Just an idea) There is also an idea where we can have this accessible on patient dashboard to see the live statistics of the patients in the clinic
    // This will help the patients to see the peak hours and plan accordingly
}
