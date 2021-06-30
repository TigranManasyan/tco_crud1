<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i < 50; $i++) {
            DB::table('posts')
                ->insert([
                    'title' => 'Title ' . $i,
                    'author' => 'Admin',
                    'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate dolor doloribus earum, enim, eum fugiat incidunt magni maiores natus nemo nihil non quasi quo, quos reiciendis rem ut voluptas!
',
                    'created_at' => NOW(),
                    'updated_at' => NOW()
                ]);
        }
    }
}
