<?php

namespace App\Http\Controllers;


//use Youtube;
use Socialite;
use Alaouy\Youtube\Youtube;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $youtube = new Youtube(config("youtube.KEY"));
        $results = $youtube->search('Los millenials');
//        $results = Youtube::search('Los millenials');
//        dd($results);

//        return $user = Socialite::driver('facebook')->redirect();

//        return View('welcome');
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $youtube = new Youtube(config("youtube.KEY"));
        $results = $youtube->search($search);

        return \Response::json($results);

    }

    public function song(Request $request)
    {
        $videoId = $request->videoId;
        $title = $request->title;
        $description = $request->description;

        return view('default.song', array('videoid' => $videoId,
                                          'title' => $title,
                                          'description' => $description));
    }
}
