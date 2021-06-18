

export const goToPokedex = (history) => {
    history.push("/pokedex");
  };
  

export const goTohome= (history) => {
  history.push("/");
};

export const goToDetail = (history, id) =>{
  history.push(`/pokemon/${id}`)
}