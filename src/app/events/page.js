"use client";
import React from "react";

const EventsPage = () => {
  const data = [
    {
      iframe:
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fquraancoaching%2Fposts%2Fpfbid0icnUwS9JtpqhyrkKHkZayuQSnD8wz1JjVu63E5o2dQeDnD3Y59T6uFEhUyt8dMyfl&show_text=true&width=500" width="500" height="635" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    },
    {
      iframe:
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fquraancoaching%2Fposts%2Fpfbid023tDso8bHyLufiEwK43zi4AyZcx3Ez6XsG5QeCgSMMC1HNKnPgfUMGJ9AvZ1wRMAZl&show_text=true&width=500" width="500" height="646" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    },
    {
      iframe:
        '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Farraza92%2Fposts%2Fpfbid036dzjNQsQk91QoaQ4XRvx6SxRbf9iYANSs6m6RvBjN3mwmDKcDpoEaAEpc3HUEoBhl&show_text=true" width="500" height="745" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    },
  ];

  let urls = [];

  data.map((item) => {
    var srcMatch = item.iframe.match(/src="([^"]+)"/);
    var heightMatch = item.iframe.match(/height="(\d+)"/);

    if (srcMatch && srcMatch.length > 1) {
      // The src value is in the second element of the match array
      var srcValue = srcMatch[1];
      var heightValue = heightMatch[1];

      urls.push({"src": srcValue, "height": heightValue});
    }
  });

  return (
    <div className="ali">
      {urls.map((url) => (
        <iframe
          key={url.src}
          src={url.src}
          height={url.height}
          width={500}
          // className="w-[800px] bg-red"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      ))}
    </div>
  );
};

export default EventsPage;
