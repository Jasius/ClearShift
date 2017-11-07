$.get('https://api.github.com/repos/jasius/clearshift/releases/latest', function (data) {
    $('#result').attr('href', data.zipball_url);
});