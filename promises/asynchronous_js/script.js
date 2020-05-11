// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Boom !');
//     }, 2000);
// });

// promise.then(user => {
//     console.log(user);
// }).catch(err => {
//     console.error(err);
// });

function loginUser(email, pwd){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We got the mail...')
            resolve({usermail: email});
        }, 2000);
    });
}

function getVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We got the videos related to that mail...');
            resolve(['video1', 'video2']);
        }, 2000);
    }); 
}

function getVideoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is the details of that video, you requested for...');
            if(video == 'video1'){
                resolve('You have requested for first video...');
            }else if(video == 'video2'){
                resolve('You have requested for second video...');
            }else{
                resolve('You have requested for third video...');
            }
        }, 2000);
    });
}

// loginUser('YOUR_MAIL_ID', 'YOUR_PWD')
// .then(user => {
//     return getVideos(user.usermail);
// })
// .then(videos => {
//     return getVideoDetails(videos[0]);
// })
// .then(details => {
//     console.log(details);
// })
// .catch(err => {
//     console.error(err);
// });
async function displayUser(){
    const user = await loginUser('YOUR_MAIL_ID', 'YOUR_PWD');
    console.log(user);
    const videos = await getVideos(user.usermail);
    console.log(videos);
    const details = await getVideoDetails(videos[2]);
    console.log(details);
}
displayUser()