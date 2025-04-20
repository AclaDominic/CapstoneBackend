<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentSlot extends Model
{
    use HasFactory;
    // Where the appointments will be stored and retrieved for patient reminder prefilled messages
    // This will also where the staff can accept or reject the appointment
    // This model will be used to store the appointment slots for each patient
}
