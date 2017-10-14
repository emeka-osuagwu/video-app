<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{

	protected $table = "orders";

    protected $fillable = [
        'name',
        'email',
        'price',
        'carts',
        'reference'
    ];
}
