var context = {
    Title: "Thermal Non-Line-of-Sight Imaging",
    Authors: [
      {
        Name: "Tomohiro Maeda*",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Yiqin Wang*",
        Link: "https://www.linkedin.com/in/yiqin-wang-91765a139/",
        AssociationNumber: 2
      },
      {
        Name: "Ramesh Raskar",
        Link: "http://web.media.mit.edu/~raskar/",
        AssociationNumber: 1
      },
      {
        Name: "Achuta Kadambi",
        Link: "https://scholar.google.com/citations?user=UMzWJikAAAAJ&hl=en&oi=ao",
        AssociationNumber: 2
      }
    ],
    Associations: [
      {
        Name: "MIT Media Lab",
        Link: "http://web.mit.edu/"
      },
      {
        Name: "Visual Machines Group, UCLA",
        Link: "https://visual.ee.ucla.edu/staging"
      }
    ],
    PublishSource: {
      Name: "ICCP 2019",
      Link: "http://iccp2019.naist.jp/"
    },
    Abstract:
      "We propose a novel non-line-of-sight (NLOS) imaging framework with long-wave infrared (IR). At long-wave IR wavelengths, certain physical parameters are more favorable for high-fidelity reconstruction. In contrast to prior work in visible light NLOS, at long-wave IR wavelengths, the hidden heat source acts as a light source. This simplifies the problem to a single bounce problem. In addition, surface reflectance has a much stronger specular reflection in the long-wave IR spectrum than in the visible light spectrum. We reformulate a light transport model that leverages these favorable physical properties of long-wave IR. Specifically, we demonstrate 2D shape recovery and 3D localization of a hidden object. Furthermore, we demonstrate near real-time and robust NLOS pose estimation of a human figure, the first such demonstration, to our knowledge.",
    Bibtex: `TBA`,
    Press: [

    ],
    Files: [
      {
        Name: "Paper",
        Links: ["./img/Thermal_NLOS-compressed.pdf"

        ]
      },
      {
        Name: "Supplement and Impl. Details",
        Links: [

        ]
      },
      {
        Name: "ICCP Slides",
        Links: [
        ]
      },
      {
        Name: "Poster",
        Links: [

        ]
      },

    ],
  
    Contacts: `
      Tomohiro Maeda<br>
      MIT Media Lab<br>
      tomotomo@mit.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/TNLOS_ICCP19/comparisons.svg",
        Caption: "Fig. 1: NLOS imaging with long-wave IR is fundamentally different from NLOS at the visible wavelengths. (a) The visible light problem is a two-bounce problem, where the hidden object is a reflector. (b) The long-wave IR problem is a one-bounce problem since the hidden object is a light emitter. In addition to the bounce order, the two problems also differ in their BRDF characteristics.",
      },
      {
        Link: "./img/TNLOS_ICCP19/setup.svg",
        Caption: "Fig. 2: Corner setup. The canonical scene setup consists of a camera looking at the wall at a corner. o and w denote point locations on a target object and wall, and unit vectors ~l,~v,~n denote the directions of incoming, outgoing light and surface normal of the wall. f( ~l,~v,~n) is the BRDF of the wall.",
      },
      {
        Link: "./img/TNLOS_ICCP19/reconstructionStepsFinal.svg",
        Caption: "Fig. 3: Reconstruction algorithm for 2D shape recovery and 3D localization. (a) Corner setup. From (b) measurement, (c) we perform 2D shape reconstruction at different depths. (d) Given the fitted BRDF model, long-wave IR radiance of an object is estimated for each depth. We estimate depth by finding a depth whose estimated radiance is the closest to expected radiance from the temperature prior.",
      },
      {
        Link: "./img/TNLOS_ICCP19/result_final2.pdf",
        Caption: "Fig. 4: NLOS scene reconstruction results. (a) Corner setups. In the visible spectrum, the object is not visible on the wall. (b) Thermal image of the target. (c) BRDF is fitted with GGX specular BRDF model. (d) Localization of the target (red circle shown in (b)). Reconstruction does not require prior knowledge on the shape or size of the hidden object. ",
      },
      {
        Link: "./img/TNLOS_ICCP19/pose_results2.pdf",
        Caption: "Fig. 10: NLOS pose estimation results. We show that processing raw frames of thermal images can improve the pose estimation algorithm. (a) shows NLOS imaging setup. (b) is an example of raw output from the camera. (c), (d), (e) Appropriate processing of raw thermal video frames results in better posture estimation. (f) (g) TV regularization could correct pose estimation on median filtering, while in (h), it could introduce artifacts that result in pose estimation error. (g) and (h) include human detection through score thresholding. Raw frames did not get high enough score for body detection.",
      }
    ],
  
    Teaser: {
      imageURL: "",
      imageBackgroundURL: "",
      imageHeight: 128, //in pixels
      rawHTML: `
      `,
    },
    FAQ: [
       
    ],
  };

function getTemplateAjax(path, callback) {
    var source;
    var template;
    $.ajax({
        url: path,
        success: function(data) {
            source    = data;
            template  = Handlebars.compile(source);

            //execute the callback if passed
            if (callback) callback(template);
        }
    });
}
Handlebars.registerHelper("AssociationsList", function(items, options) {
    var out = "";
  
    for (var i = 0, l = items.length; i < l; i++) {
      items[i].Number = i + 1;
      console.log(items[i].Number);
      out = out + options.fn(items[i]);
    }
    return out;
  });
  Handlebars.registerHelper("FileLinksList", function(items, options) {
    return options.fn(items);
  });
  Handlebars.registerHelper("RenderTeaser", function(Teaser) {
    return Teaser;
});

//run our template loader with callback
getTemplateAjax("js/templates/paper_template.html", function(template) {
    //do something with compiled template
    $("#SinglePaper").html(template(context));
});
       
  
