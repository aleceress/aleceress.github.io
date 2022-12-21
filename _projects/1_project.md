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

**Fast forward**: now that I'm an older oldie, I've decided to hug that little girl and start an MBTI-based investigation, using the new tools data analysis gave me. In particular, this project aims at answering the following question: 

_Is there a correlation between Myers-Briggs type and the sentiment expressed in written comunication?_

## The data
To perform any kind analysis, we first need data. Better if a lot of them.

There's a big Reddit world for Myers-Briggs fans. In particular, there's a subreddit for each personality type.
You don't need to test as a particular personality to write on the corresponding subreddit, but from an empirical observation I saw that this is what happens in most of the cases. Therefore, I applied the analysis on subreddit posts, with the approximation of labeling them as written by the associated personality. If you want to be more precise, you can change the original question in:

_Is there a correlation between Myers-Briggs subreddit and the sentiment expressed in its posts?_


## Sentiment analysis

To perform the analysis, I used the following models.

- [DistilBERT base uncased finetuned SST-2 ](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english?text=I+like+you.+I+love+you), to obtain a positive and negative score for each post. 
- [Distilbert-base-uncased-emotion](https://huggingface.co/bhadresh-savani/distilbert-base-uncased-emotion), to get post scores over the following emotions: _love, joy, anger, sadness, surprise_ and _fear_.


### Type analysis

For each personality type, I aggregated the scores obtained for each __emotion__, and computed the __average value__. I also assessed the __percentage__ of posts classified as _positive_ and _negative_ (based on the higher score in the sentiment measure). Here are some interactive graphs displaying the results: you can view the emotion and sentiment values for each personality type by selecting it.


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

<br>

The obtained values were then __compared__ across different personality types, and the differences are shown in the following graphs.


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

<br>

It looks like _ISFJ_ and _ESFJ_ tend to have the higher _love_ scores, while _INTP_ has the lowest. 
Expression of _joy_ appears to be relatively uniform across personality types, with a slightly higher score for _ESFP_. According to the analysis of text data, _ESTJ_ posts convey the highest  _anger_ score on average, while _INFJ_ posts the weakest. _INFJ_ posts have, on the other hand, the maximum _sadness_ and _surprise_ scores. _INFP_ posts manifest the highest value of fear, while _ENTJ_ ones the minimum across all personalities.

Of course these results should be interpreted with caution, as they are based on a limited and contaminated sample (let's remember that posts are not necessarily written by the corresponding personality type). 
With that being said, I find them broadly consistent with what is known about the corresponding personality types.

The __ISFJ__ (Introverted, Sensing, Feeling, Judging) and __ESFJ__ (Extraverted, Sensing, Feeling, Judging) personality types are known for their strong feelings and emotional sensitivity, which may explain why they tend to have higher scores on the _love_ emotion. The __INTP__ (Introverted, Intuitive, Thinking, Perceiving) personality type, on the other hand, is known for its logical and analytical approach to decision making, which may lead to a lower score on the _love_ emotion. This is confirmed by the fact that also other notoriously analytical types (like _ENTP_ and _ENTJ_) tend to have lower _love_ scores when compared to the other personalities.

The relatively uniform expression of _joy_ across personality types is consistent with the idea that this emotion is relatively universal and not strongly influenced by individual differences in personality. However, the slightly higher score for individuals with the __ESFP__ (Extraverted, Sensing, Feeling, Perceiving) personality type may be due to their outgoing and sociable nature, which could lead to a greater tendency to express _joy_ in written communication.

The higher _anger_ score for __ESTJ__ (Extraverted, Sensing, Thinking, Judging) posts is consistent with the assertive and decisive nature of this personality type, as they may be more likely to express anger in response to a perceived threat or challenge. The lower _anger_ score for __INFJ__ (Introverted, Intuitive, Feeling, Judging) posts is consistent with their introspective and empathetic nature, as they may be more inclined to consider others' feelings and avoid expressing _anger_.

The higher _sadness_ and _surprise_ scores for __INFJ__ posts are consistent with their deep feelings and strong intuition, which may lead to a greater tendency to experience and express these emotions. The higher _fear_ score for __INFP__ (Introverted, Intuitive, Feeling, Perceiving) posts is consistent with their sensitive and imaginative nature, as they may be more prone to feeling anxious or fearful in certain situations. The lower _fear_ score for __ENTJ__ (Extraverted, Intuitive, Thinking, Judging) posts is consistent with their confident and strategic approach to problem-solving, which may lead to a lower tendency to experience fear.

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

The __sentiment__ of posts on various subreddits tends to be evenly split between positive and negative, but there are some exceptions. 

The __INFP__ subreddit, for example,  has a higher percentage of positive posts at 61%. It is interesting to notice that INFPs also had the highest fear score. __INTJ__, __INFJ__, __ENTJ__, __ISTJ__ and __ENTP__ (in that order) have the highest percentages of negative posts, ranging from 65% to 56%.

In the following graph, you can see the results of a [__clustering__](https://it.wikipedia.org/wiki/Clustering) of different personalities, based on the sentiment of scraped text data. Each personality was represented as a vector containing the average value of each emotion and the percentage of posts classified with each sentiment. This brought to 6-dimensional vectors, which I projected in a two dimensional space applying a [PCA](https://it.wikipedia.org/wiki/Analisi_delle_componenti_principali). The following table shows how the original variables contributed to the Principal Components.


 <table border = "1" align = "center" style =  "border: 1px solid black; padding: 0, border-collapse: collapse;">
  <tr>
    <th></th>
    <th align = "right">love</th>
    <th>joy</th>
    <th>anger</th>
    <th align = "right">sadness</th>
    <th>surprise</th>
    <th>fear</th>
    <th>positive</th>
    <th>negative</th>
  </tr>
  <tr>
    <td><b>PC_1</b></td>
    <td align = "right"> 0.04</td>
    <td align = "right">0.14</td>
    <td align = "right">0.19 </td>
    <td align = "right">0.21 </td>
    <td align = "right">0.44 </td>
    <td align = "right">0.32 </td>
    <td align = "right">0.54 </td>
    <td align = "right">0.56 </td>
  </tr>
  <tr>
    <td align = "right"><b>PC_2 </b></td>
    <td align = "right"> 0.33</td>
    <td align = "right">0.02</td>
    <td align = "right">0.19 </td>
    <td align = "right">0.62 </td>
    <td align = "right">0.46 </td>
    <td align = "right">0.18 </td>
    <td align = "right">0.48 </td>
    <td align = "right">0.12 </td>
  </tr>
</table> 

<br>
After performing principal component analysis, I utilized [K-Means clustering](https://en.wikipedia.org/wiki/K-means_clustering), whose fitting indicated that the optimal number of clusters was four, with the configuration shown.
It was noteworthy that the outlying clusters included INFJ and INTJ personality types, as these types are known to be relatively rare among the general population (though to be the two rarest types).

<body>
	<div id='clustering'></div>
</body>



<br>



### Aggregate Analysis

Upon conducting individual analysis of the various personality types, I became curious as to whether there might be correlations between certain __traits__ (such as _Extraversion_) and the observed differences in sentiment expressed on different subreddits. In order to explore this hypothesis, I aggregated the personalities based on their dominant traits and __functions__. 

#### Traits

The following graphs compare the differences in emotion and sentiment in the presence of a specific trait versus its opposite. You can change the trait being compared by selecting it.

In contrast to the non-aggregated analysis, for this case I did not use the average for emotions but rather a similar approach to the one used for sentiment. Specifically, I compared the __percentages__ of posts classified as containing a particular emotion using a _winner takes all_ approach. This means that a post is classified as expressing that emotion if the emotion value for that post is higher that the values assigned to other emotions. I chose this approach because it was a better measure for calculating the correlation.

To identify dependencies between traits and emotions and traits and sentiment, I used the following statistics.

- __Chi squared__: The chi-squared test is a statistical test that is used to compare the __observed frequencies__ of events or categories in a sample to the __expected frequencies__ of those events or categories based on some theoretical expectation. It is used to determine whether there is a __significant difference__ between the observed frequencies and the expected frequencies, and can be used to test hypotheses about a population. 
  
  I used the chi-squared test to compare the number of posts classified as positive or negative, or the number of posts classified with a particular emotion versus all the others, in the presence or absence of a particular trait. The comparison was conducted using a contingency table with one degree of freedom, so the expected frequencies were computed based on the marginal sums under the assumption of independence.

  The __p-value__ in a chi-squared test is a measure of the probability that the differences between the observed and expected frequencies could have occurred by chance. A small p-value suggests that the observed differences are statistically significant and not likely due to chance alone, while a large p-value suggests that the observed differences are likely due to chance and are not statistically significant. 

  I didn't include all the computed __p-values__ in this discussion because I found the following measure more intuitive. If you are interested in computation and results you can find them [here](https://github.com/aleceress/mbti_sentiment/blob/master/aggregate_analysis.ipynb), in the github repository in which I included all the code for this project.
  
- __Odds Ratio__: The odds ratio is a __measure of the relationship__ between two events or categories in a study. It is used to compare the odds of an event occurring in one group to the odds of the event occurring in another group.
  I  computed the odds ratio to compare the odds of scoring _negative_ (or with a particular emotion) having one trait to the odds of doing so not having it (therefore, having the opposite one). An odds ratio greater than 1 indicates that the event is more likely to occur in the first group compared to the second group, while an odds ratio less than 1 indicates that the event is less likely to occur in the first group compared to the second group. You can find the _odds ratio_ with its _p values_ and the consequent interpretation in the caption of the following graphs. 


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

<div id = "trait-emotion-description" style= "text-align:center; padding:10px; font-size:80% "></div>

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

#### Cognitive functions

I also investigated the relation between the __Dominant Cognitive Function__ and the percentages of sentiment and emotions in posts. Differences are shown in the following graphs, after selecting the emotion or sentiment of interest.

Again, the results should be interpreted with care, but I could appreciate some similarities between results and what is known about cognitive functions. 
Specifically, it appears that individuals with __Fe__ (Extraverted Feeling) as their dominant cognitive function tend to have more posts classified with _love_. We know that Fe is focused on the interpersonal and social aspects of life and involves a deep concern for the well-being of others. People with Fe as their dominant cognitive function tend to be empathetic, compassionate, and attuned to the emotional needs of others, so it seems likely that they would express more love in written communication with them.
__Ni__ dominant individuals are often imaginative, introspective, and insightful, with a strong intuition and a deep understanding of their own motivations and desires: this focus on the inner world and perception of patterns could correlate respectively with higher _sadness_ ad _surprise_ scores. 

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

<br>

__Extra tidbit__: I made Word Clouds for each subreddit using the text that I had scraped. I think they turned out really cute!
<div class ="wordclouds">
  
  <div style = "text-align:center"><img src="/assets/img/infj_wordcloud.webp" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INFJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/intj_wordcloud.webp" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INTJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/infp_wordcloud.webp" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INFP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/intj_wordcloud.webp" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> INTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/entj_wordcloud.webp" style = "margin:auto; padding: 10px" width="700" height="350" center=true><caption style="text-align:right"> ENTJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/enfp_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENFP </caption></div>
    <div style = "text-align:center"><img src="/assets/img/entp_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/enfj_wordcloud.webp" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ENFJ </caption></div>
  <div style = "text-align:center"><img src="/assets/img/isfj_wordcloud.webp" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISFJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/istj_wordcloud.webp" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISTJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/istp_wordcloud.webp" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISTP </caption></div>
   <div style = "text-align:center"><img src="/assets/img/isfp_wordcloud.webp" style = "margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ISFP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/esfj_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESFJ </caption></div>
   <div style = "text-align:center"><img src="/assets/img/estj_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESTJ </caption></div>
    <div style = "text-align:center"><img src="/assets/img/estp_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESTP </caption></div>
  <div style = "text-align:center"><img src="/assets/img/esfp_wordcloud.webp" style ="margin:auto; padding:10px" width="700" height="350" center=true><caption style="text-align:right"> ESFP </caption></div>
  
</div>

<script>
    $(".wordclouds").slick({
      dots: true
    })
</script>

#### Conclusion 

While it was not the goal of this study to arrive at a definitive conclusion, it was interesting to approach the topic from a data analysis perspective and observe any similarities between my prior knowledge, expectations, and results. If you have any questions or comments, please do not hesitate to contact me. I hope you enjoyed this exploration and found the interactive graphs engaging.
Thank you for reading, and until next time!

_Sincerly,_

_Alessia (an INFJ)_