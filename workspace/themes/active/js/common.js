// Generated by CoffeeScript 1.3.3
(function() {
  "use strict";

  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $(document).ready(function() {
    var alertLiveCookie, hostName, link, links, placeholdersupport, _i, _len;
    $.fn.exists(function() {
      return $(this).length > 0;
    });
    audiojs.events.ready(function() {
      return audiojs.createAll();
    });
    $('.downloadPopover').hover(function() {
      return $(this).popover('toggle');
    });
    hostName = window.location.hostname;
    links = $("a");
    alertLiveCookie = $.cookie("alertLive");
    if (alertLiveCookie !== "hidden") {
      $(".alertLive").removeClass("hidden");
      $(".alertLive .close").on("click", function() {
        return $.cookie("alertLive", "hidden", {
          expires: 1,
          path: "/"
        });
      });
    }
    $(".alert").alert();
    $('.carousel').carousel();
    placeholdersupport = false;
    isPlaceholderSupported(function() {
      var input;
      input = document.createElement("input");
      placeholdersupport = (__indexOf.call(input, 'placeholder') >= 0);
      if (!isPlaceholderSupported()) {
        return $('.search-query').val('Search');
      }
    });
    $('.search-query').focus(function() {
      if (!placeholdersupport && $(this).val() === 'Search') {
        return $(this).val('');
      }
    });
    $('.search-query').blur(function() {
      if (!placeholdersupport && !$(this).val().length) {
        return $(this).val('Search');
      }
    });
    $(".modalLiveLink").on("click", function(e) {
      e.preventDefault();
      return $(".modalLive").modal("show");
    });
    $(".modalLive .close").on("click", function(e) {
      e.preventDefault();
      return $(".modalLive").modal("hide");
    });
    $(".modalLive").on("show", function() {
      var url;
      url = $(".modalLive .modal-body .url").html();
      return $(".modalLive .modal-body .ustream-embed").html("<iframe src=\"" + url + "\" width=\"600\" height=\"363\" scrolling=\"no\" frameborder=\"0\" style=\"border: 0px none transparent\"></iframe>");
    });
    $(".modalLive").on("hidden", function() {
      $(".modalLive .modal-body .ustream-embed").html("#");
      return $(".modalLive").hide();
    });
    targetBlank(function(link) {
      if (link.href.indexOf(hostName) === -1) {
        return link.setAttribute("target", "_blank");
      }
    });
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      link = links[_i];
      targetBlank(link);
    }
    Logos.ReferenceTagging.lbsBibleVersion = "KJV";
    Logos.ReferenceTagging.lbsLinksOpenNewWindow = true;
    Logos.ReferenceTagging.lbsLogosLinkIcon = "dark";
    Logos.ReferenceTagging.lbsNoSearchTagNames = ["cite", "h1", "h2", "h3", "h4", "h5", "h6"];
    Logos.ReferenceTagging.lbsTargetSite = "biblia";
    Logos.ReferenceTagging.tag();
    return Logos.ReferenceTagging.lbsCssOverride = true;
  });

}).call(this);
