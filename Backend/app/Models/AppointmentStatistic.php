<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentStatistic extends Model
{
    use HasFactory;
    //Where the appointment statistics will be stored(patientID, appointmentStatus, appointmentDate, appointmentTime)
    //This model will be used to store the appointment statistics for each patient
    //It will be used to retrieve the appointment statistics for each patient
}
