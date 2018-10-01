$.get(
  "https://api.github.com/repos/jasius/clearshift/releases/latest",
  function(data) {
    $("#result").attr("href", assets.browser_download_url);
  }
);
