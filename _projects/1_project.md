---
layout: page
title: MBTI Sentiment Analysis
description: A Sentiment Analysis over different Myers-Briggs Personality subreddits
img: assets/img/ftemotion.png
importance: 1
category: personal
---

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>  
<script defer src="{{ '/assets/js/projects/project_1/typeemotions.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/typesentiment.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/typesemotions-comp.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/typessentiment-comp.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/traitsemotions-comp.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/traitsentiment-comp.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/cognitivefunctions-sentiment.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/cognitivefunctions-emotion.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/projects/project_1/clustering.js' | relative_url }}"></script>




<link rel="stylesheet" href="{{ '/assets/css/slick.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/slick-theme.css' | relative_url }}">


<script src="{{ '/assets/js/jquery-2.1.1.js' | relative_url }}"></script>
<script type="text/javascript" src="http://cdn.jsdelivr.net/jquery.slick/1.3.15/slick.min.js"></script>
<script src="{{ '/assets/js/slick.min.js' | relative_url }}"></script>
<script src="{{ '/assets/js/slick.js' | relative_url }}"></script>
<script src="{{ '/assets/js/bootstrap.bundle.min.js' | relative_url }}"></script>


## Introduction

Sooo... at some point in my adolescence, like many other people I guess, I took the [16 Personalities Test](https://www.16personalities.com/free-personality-test). Once I saw the results, I clearly remember this feeling of being understood: matching my characteristics with an abstract model shared by other people made me feel part of a crowd, even without actually seing it.

Years later - don't even remember how - I literally became _obsessed_ with this personality classification, spending my whole summer reading about it and discovering a world behind it. The more I read and learned, the more I was fascinated. I started trying to _type_ people around me and matching their actions with my expectations based on that. This also gave me a sense of protection: I finally had a tool to _model_ others, and that would have reduced the uncertainty!

Well.. I had become _a little too obsessed_, to the point that I couldn't filter out the model from reality anymore. So I decided to quit.

**Fast forward**: now that I'm an older oldie, I've decided to hug that little girl and start an MBTI-based investigation, using the new tools data science gave me. In particular, this project aims at answering the following question: 

_Is there a correlation between Myers-Briggs type and the sentiment expressed in written comunication?_

## The data
To perform any kind analysis, we first need data. Better if a lot of them.

There's a big Reddit world for Myers-Briggs fans. In particular, there's a subreddit for each personality type.
You don't need to test as a particular personality to write on the corresponding subreddit, but from an empirical observation I saw that this is what happens in most of the cases. Therefore, I applied the analysis on subreddit posts, with the approximation of labeling them as written by the associated personality. If you want to be more precise, you can change the original question in:

_Is there a correlation between Myers-Briggs subreddit and the sentiment expressed in its post?_


## Sentiment analysis

<br>

### Type analysis


<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="0">
    <div class="plot" id="plotdiv"></div>
      <div class="control-row">
        Type: <select class="typedata" style = "padding: 0px">
        </select>
      </div>
    </div>
  </div>
</div>


<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="1">
    <div class="plot" id="plotsentimentdiv"></div>
      <div class="control-row">
        Type: <select class="typedata_s">
        </select>
      </div>
    </div>
  </div>
</div>

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="2">
    <div class="plot2" id="plotemotioncomp"></div>
      <div class="control-row">
        Emotion: <select class="typedata2">
        </select>
      </div>
    </div>
  </div>
</div>

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="3">
    <div class="plot3" id="plotsentimentcomp"></div>
      <div class="control-row">
        Sentiment: <select class="typedata3">
        </select>
      </div>
    </div>
  </div>
</div>

<br>

<div class ="wordclouds">
  
  <div style = "text-align:center"><img src="/assets/img/infj_wordcloud.png" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INFJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/intj_wordcloud.png" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INTJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/infp_wordcloud.png" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INFP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/intj_wordcloud.png" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/entj_wordcloud.png" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> ENTJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/enfp_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENFP </caption></div>
    <div style = "text-align:center"><img src="/assets/img/entp_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/enfj_wordcloud.png" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENFJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/isfj_wordcloud.png" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISFJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/istj_wordcloud.png" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISTJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/istp_wordcloud.png" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISTP </caption></div>
   <div style = "text-align:center"><img src="/assets/img/isfp_wordcloud.png" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISFP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/esfj_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESFJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/estj_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESTJ </caption></div>
    <div style = "text-align:center"><img src="/assets/img/estp_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/esfp_wordcloud.png" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESFP </caption></div>
  
</div>

<script>
    $(".wordclouds").slick({
      dots: true
    })
</script>

<body>
	<div id='clustering'></div>
</body>

<br>



### Aggregate Analysis

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="4">
    <div class="plot4" id="traitemotioncomp"></div>
      <div class="control-row">
        Traits to compare: <select class="typedata4">
        </select>
      </div>
    </div>
  </div>
</div>

<div id = "trait-comp-description" style= "text-align:center; padding:10px; font-size:80% "></div>

<br>

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="5">
    <div class="plot5" id="traitsentimentcomp"></div>
      <div class="control-row">
        Traits to compare: <select class="typedata5">
        </select>
      </div>
    </div>
  </div>
</div>

<div id = "trait-sentiment-description" style= "text-align:center; padding:10px; font-size:80% "></div>

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="6">
    <div class="plot6" id="functionsemotioncomp"></div>
      <div class="control-row">
        Emotions to compare: <select class="typedata6">
        </select>
      </div>
    </div>
  </div>
</div>

<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="7">
    <div class="plot7" id="functionsentimentcomp"></div>
      <div class="control-row">
        Sentiment to compare: <select class="typedata7">
        </select>
      </div>
    </div>
  </div>
</div>

