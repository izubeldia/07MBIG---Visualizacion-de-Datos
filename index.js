// Import stylesheets
import './style.css';
<script type="text/javascript"
   src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<script type="text/javascript">
    function initViz() {
        var containerDiv = document.getElementById("vizContainer"),
            url = "https://eu-west-1a.online.tableau.com/#/site/izube/workbooks/92153/views",
            options = {
                hideTabs: true,
                onFirstInteractive: function () {
                    console.log("Run this code when the viz has finished loading.");
                }
            };
         var viz = new tableau.Viz(containerDiv, url, options);
        // Create a viz object and embed it in the container div.
    }
</script>