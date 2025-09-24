# Hugo Version Upgrade Log

## v0.150.0
Go version: 1.24

### Errors
- `ERROR Image not found: %!s(<nil>)`<br>
    Hugo's **image processing pipeline** got an empty or invalid source path

  _**POSSIBLE CAUSES:**_

  1. **Wrong image path in your templates**
      Example:

      ```go
      {{ $img := resources.Get "" }}
      ```

      or the variable used for the path is `nil` / empty.

  2. **Front matter referencing a missing image**
      In a content file:

      ```yaml
      featured_image: "images/missing.jpg"
      ```

      but that file doesn’t exist in `static/images`.

  3. **Path issue after upgrading Hugo**
      Newer Hugo versions are stricter:

      * `resources.Get` only works inside `/assets`, not `/static`.
      * If you want to just link an image, it should go in `static/`.
      * If you want to process (resize, crop), the source must be in `assets/`.


      