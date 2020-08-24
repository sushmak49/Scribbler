function showCreatePostModal() {
    document.getElementById('post-modal').style.display="flex";
}

function hideCreatePostModal(){
    document.getElementById('post-modal').style.display="none";
}

function showAllPosts(){
    window.location.href = "./html/postslist.html";
}