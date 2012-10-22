# Grandomizr jQuery Plugin v1.0
* * *

## Overview

A jQuery plugin that allows you to randomly generate groups from a list of items.


## Demo And Usage

See index.html for demo and suggested HTML structure (the element class names and IDs are the important part).

To initialize your quiz:

    $(function() {
        $('.grandomizr').grandomizr();
    });


## Base HTML Structure

There are two ways to set up the page

1. By placing an unordered list of items on the page
1. By placing a textarea on the page containing comma separated values (CSVs)

The slickQuiz ID and class names are what are important here:

**Unordered List Setup**

    <div class="grandomizr">
        <ul class="togroup">
            <li>Brad Pitt</li>
            <li>Angelina Jolie</li>
            <li>Matt Damon</li>
            <li>Ben Affleck</li>
            <li>Tom Cruise</li>
            <li>Anne Hathaway</li>
            <li>Leonardo DiCaprio</li>
            <li>Tom Hanks</li>
            <li>Nicole Kidman</li>
            <li>Johnny Depp</li>
            <li>Jennifer Aniston</li>
            <li>Samuel L. Jackson</li>
            <li>Charlize Theron</li>
            <li>Christian Bale</li>
            <li>Milla Jovovich</li>
        </ul>
        <form>
            <label>Number of Groups:</label><br />
            <input type="number" value="5" name="group_number" id="group_number" />
            <input type="submit" value="Grandomize!" class="grandomize" />
        </form>
        <div class="groups"></div>
        </div>
    </div>

**Textarea w/ CSV List Setup**

    <div class="grandomizr">
        <textarea class="togroup">
            Brad Pitt,
            Angelina Jolie,
            Matt Damon,
            Ben Affleck,
            Tom Cruise,
            Anne Hathaway,
            Leonardo DiCaprio,
            Tom Hanks,
            Nicole Kidman,
            Johnny Depp,
            Jennifer Aniston,
            Samuel L. Jackson,
            Charlize Theron,
            Christian Bale,
            Milla Jovovich
        </textarea>
        <form>
            <label>Number of Groups:</label><br />
            <input type="number" value="5" name="group_number" id="group_number" />
            <input type="submit" value="Grandomize!" class="grandomize" />
        </form>
        <div class="groups"></div>
        </div>
    </div>

Created by [Julie Bellinson](http://jewlofthelotus.com) - Software Engineer at [Quicken Loans](http://quickenloans.com), Detroit, MI
