@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>
                    <div class="panel-body">
                        <p>Title: {{ $title or 'Default' }}</p>
                        <p>Description: {{ $description or 'Default' }}</p>
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/{{ $videoid or 'Default' }}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <a href="/" class="btn btn-default btn-lg" type="button">
                    Back
                </a>
            </div>
        </div>
    </div>
@endsection

