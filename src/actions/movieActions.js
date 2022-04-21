export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    console.log('deleteMovie action', id)
    return({type: DELETE_MOVIE, payload:id});
}