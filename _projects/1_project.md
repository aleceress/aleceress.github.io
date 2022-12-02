---
layout: page
title: MBTI Sentiment Analysis
description: A Sentiment Analysis over different Myers-Briggs Personality subreddits
img: assets/img/ftemotion.png
importance: 1
category: personal
---

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

### Aggregate Analysis


<div id="tester" class="row">
<script>
	TESTER = document.getElementById('tester');

	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );

</script>
</div>


    
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

