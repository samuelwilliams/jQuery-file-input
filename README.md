jQuery File Input
=================

This library changes the default browser file input field allowing you to add style.

## What does it do?

This library takes a file input field and turns it into a text field ready for styling without affecting normal file
operation. Effectively, this:

    <input type="file" name="upload">

becomes this:

    <div class="jquery-file-input-wrapper">
        <input type="file" name="upload">
        <input type="text" class="jquery-file-input-field">
        <span class="jquery-file-input-button">browse</span>
    </div>

More info [here](http://www.quirksmode.org/dom/inputfile.html).

## Usage

    jQuery('input[type=file]').fileInput();

## Options

<table>
    <thead>
        <tr>
            <th>Option Name</th>
            <th>Option Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>buttonFirst</td>
            <td>false</td>
            <td>Should the button come before the input</td>
        </tr>
        <tr>
            <td>wrapperClass</td>
            <td>jquery-file-input-wrapper</td>
            <td>The class(es) on the wrapper element</td>
        </tr>
        <tr>
            <td>inputClass</td>
            <td>jquery-file-input-field</td>
            <td>The class(es) on the input field</td>
        </tr>
        <tr>
            <td>inputPlaceholder</td>
            <td>select a file</td>
            <td>The placeholder value on the input field</td>
        </tr>
        <tr>
            <td>buttonClass</td>
            <td>jquery-file-input-button</td>
            <td>The class(es) on the browse button</td>
        </tr>
        <tr>
            <td>buttonText</td>
            <td>browse</td>
            <td>The text for the browse button</td>
        </tr>
    </tbody>
</table>