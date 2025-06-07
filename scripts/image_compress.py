import argparse
from PIL import Image


def compress_image(input_path, output_path, quality):
    try:
        # Open the image using Pillow
        img = Image.open(input_path)
        # Save the image with the given quality setting
        img.save(output_path, format="JPEG", optimize=True, quality=quality)
        print(f"Compression complete. Saved to {output_path} with quality={quality}.")
    except Exception as e:
        print(f"Error compressing image: {e}")


def main():
    parser = argparse.ArgumentParser(description="Simple Image Compressor")
    parser.add_argument("input", help="Path to the input image file")
    parser.add_argument("output", help="Path to the output image file")
    parser.add_argument(
        "--quality",
        type=int,
        default=70,
        help="Quality of the output image (1-95, default: 70)",
    )

    args = parser.parse_args()

    compress_image(args.input, args.output, args.quality)


if __name__ == "__main__":
    main()
