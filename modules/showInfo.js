export const ShowInfo = (data, container) => {

        const { avatar_url, login, name, followers, following, followers_url, following_url } = data;
        container.innerHTML +=`
            <img src="${avatar_url}" />
            <h2>${login}</h2>
            <h5>${name}</h5>

            <button>Follow ${followers}</button>
            <button>Sponsor</button>
        `
}