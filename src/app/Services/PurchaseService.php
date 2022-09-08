<?php

namespace App\Services;

use App\Models\Item;

class PurchaseService{

    public static function getItems()
    {
        $users = Item::select('id', 'name', 'price')->get();

        return response()->json([
            "success" => true,
            "message" => "Items retrieved successfully.",
            "data" => $users
        ]);
    }
}