@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Youtube - <span class="msg"></span></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-offset-2">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search for..."
                                           id="inputSearch">
                                      <span class="input-group-btn">
                                        <button class="btn btn-default" id="search" type="button">Search</button>
                                          {{ csrf_field() }}
                                      </span>
                                </div>
                            </div>
                        </div>
                        <div class="row song">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Spotify</div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-offset-2">
                                <iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3pGcBQlq94eOjoKLG2NoQi" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
