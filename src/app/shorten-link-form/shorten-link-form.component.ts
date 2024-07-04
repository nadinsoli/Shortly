import { Component } from '@angular/core';
import { ShortenService } from '../shorten.service';

@Component({
  selector: 'app-shorten-link-form',
  templateUrl: './shorten-link-form.component.html',
  styleUrls: ['./shorten-link-form.component.css']
})
export class ShortenLinkFormComponent {
  originalLink: string = '';
  shortenedLinks: { original: string, short: string }[] = [];
  errorMessage: string | null = null;

  constructor(private shortenService: ShortenService) {}

  shortenLink() {
    if (!this.originalLink) {
      this.errorMessage = 'Please add a link';
      return;
    }

    this.shortenService.shortenUrl(this.originalLink).subscribe(
      (response: any) => {
        console.log('API response:', response);
        if (response.result_url) {
          const shortLink = response.result_url;
          this.shortenedLinks.push({ original: this.originalLink, short: shortLink });
          this.originalLink = '';
          this.errorMessage = null;
        } else {
          this.errorMessage = 'Failed to shorten the link. Please try again.';
        }
      },
      error => {
        console.error('API error:', error);
        this.errorMessage = 'Failed to shorten the link. Please try again.';
      }
    );
  }

  copyToClipboard(link: string) {
    navigator.clipboard.writeText(link).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Unable to copy:', err);
    });
  }
}
