//Function For Http Request
function getInputValue() {

    //Get Input From User
    var inputVal = document.getElementById("myInput").value;

    $.getJSON("https://api.github.com/users/" + inputVal, function (data) {
        var txtname = `${data.name}`;
        var txtfollowers = `${data.followers}`;
        var txtfollowing = `${data.following}`;
        var txtbio = `${data.bio}`;
        var txtlink = `${data.html_url}`;
        var txttype = `${data.type}`;
        var txtlocation = `${data.location}`;

        //URL of Image Allocated To Image
        document.getElementById("urlimg").src = `${data.avatar_url}`;

        //Data Allocated To InnerHtml
        $(".mypanel-name").html(txtname);
        $(".num-follower").html(txtfollowers);
        $(".num-following").html(txtfollowing);
        $(".mypanel-bio").html(txtbio);
        $(".mypanel-type").html(txttype);
        $(".mypanel-location").html(txtlocation);

        //URL of Account Allocated To <A>
        document.getElementById("btn2navigate").href = txtlink;
    });
}
