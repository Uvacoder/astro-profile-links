import { renderStudio,defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    plugins: [deskTool()],
    name: "Sanity Studio",
    projectId: "n4t88rgg",
    dataset: "production",
    schema: {
        types: [
            {
                type: "document",
                name: "post",
                title: "Post",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        title: "Title"
                    }
                ]
            }
        ]
    }
});

// This assumes that there is a <div id="app"></div> node in the HTML structure where this code is executed.
renderStudio(document.getElementById("app"), config);

