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

### Type analysis


<div class="showcase__section" id="bubble">
  <div class="spacer --small"></div>
  <div id="bubbleplots">
    <div class="bubbleplot" data-num="0">
    <div class="plot" id="plotdiv"></div>
      <div class="control-row">
        Type: <select class="typedata">
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


### Aggregate Analysis




