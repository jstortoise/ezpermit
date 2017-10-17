<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('nationality');
            $table->string('city');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('tob');
            $table->string('category1');
            $table->string('category2');
            $table->string('category3');
            $table->string('category4');
            $table->string('etc');
            $table->string('career');
            $table->string('job');
            $table->string('sdate');
            $table->string('edate');
            $table->string('purpose');
            $table->string('verifyToken');
            $table->boolean('status');
            $table->string('description');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
