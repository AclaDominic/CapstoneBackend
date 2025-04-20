<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerformanceGoal extends Model
{
    use HasFactory;
    // This model will be used to store the performance goals that the clinic want to achieve
    // Then it will be used to compare to the actual performance of the clinic(Data to be gathered)
    // The performance goals will be stored in the database and will be used to generate reports
}
