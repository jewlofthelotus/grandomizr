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

The slickQuiz ID and class names are what are important here:

    <div class="grandomizr">
        <ul class="items togroup">
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


Created by [Julie Bellinson](http://jewlofthelotus.com) - Software Engineer at [Quicken Loans](http://quickenloans.com), Detroit, MI
