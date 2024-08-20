<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('short_about')->default('');
            $table->text('about')->default('');

            $table->json('links')->default('[]');
            $table->string('first_name')->default('');
            $table->string('last_name')->default('');
            $table->string('nick_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('short_about');
            $table->dropColumn('about');

            $table->dropColumn('links');
            $table->dropColumn('first_name');
            $table->dropColumn('last_name');
            $table->dropColumn('nick_name');
        });
    }
};
