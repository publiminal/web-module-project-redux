import React from 'react';
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    // const movies = []; //before connect the value was this empty array [];
    const { movies } = props; // get movies from injected properties with connect by redux

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return{
        movies:state.movies
    }
}


// export default MovieList; // before adding connect by redux
export default connect(mapStateToProps)(MovieList)