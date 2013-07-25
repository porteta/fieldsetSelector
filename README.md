# Jquery fieldsetSelector

Jquery fieldsetSelector is a small jquery plugin that allows you to easily
add conditional fields to your forms.


## Quick start

Choose one of the following options:

1. Download the source file and add it to your project
2. The basic markup is as follows:

```
<form>
    <select name="options" class="fs">
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
    </select>
    <fieldset class="option-1">
        <p>Option 1 Fields</p>
        <label><input type="radio" name="fieldset1" value="0">Radio 1</label><br>
        <label><input type="radio" name="fieldset1" value="1">Radio 2</label>
    </fieldset>
    <fieldset class="option-2">
        <p>Option 2 Fields</p>
        <label>Text 1</label><br>
        <input type="text" name="fieldset2" value="">
    </fieldset>
</form>

```
3. Apply the plugin with js:

```
$('.fs').fieldsetSelector();
```
4. You can use multiple fieldsetSelectors on the same page by supplying a unique
class name for each section

```
$('#fs').fieldsetSelector();
$('#fs2').fieldsetSelector({className : 'fs2-fields'});
```
