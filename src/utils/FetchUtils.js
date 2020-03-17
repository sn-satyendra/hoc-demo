import {generateName, generateEmail} from './RandomUtils';

export const fetchData = (api, count, cb) => {
  // fetch(api, {
  //   mode: 'cors'
  // })
  //   .then(response => response.json())
  //   .then(parsedResponse =>
  //     parsedResponse.results.map(user => ({
  //       name: `${user.name.first} ${user.name.last}`,
  //       email: user.email,
  //       thumbnail: user.picture.thumbnail
  //     }))
  //   )
  //   .then(users => {
  //     if (typeof cb === 'function') {
  //       cb(users);
  //     }
  //   });
  setTimeout(() => {
    const data = [];
    for(let i=0 ; i< count; i++) {
      const photoId = Math.floor(Math.random() * 50) + 1;
      data.push({
        name: generateName(),
        email: generateEmail(),
        thumbnail: `https://randomuser.me/api/portraits/men/${photoId}.jpg`
      });
    }
    if (typeof cb === 'function') {
      cb(data);
    }
  }, 4000);
};