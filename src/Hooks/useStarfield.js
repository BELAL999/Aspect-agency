import { useEffect } from 'react';
export const useStarfield = (canvasRef) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const numStars = 150;
        const stars = [];
        let animationFrameId;
        class Star {
            constructor(x, y, radius, vx, vy) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.vx = vx;
                this.vy = vy;
                this.baseColor = `rgba(253, 136, 72 , ${Math.random()})`;
                this.color = this.baseColor;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
                if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
                this.draw();
            }
        }
        function init() {
            stars.length = 0; 
            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.2;
                const vx = (Math.random() - 0.5) * 0.1;
                const vy = (Math.random() - 0.5) * 0.1;
                stars.push(new Star(x, y, radius, vx, vy));
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => star.update());
            animationFrameId = requestAnimationFrame(animate);
        }
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            init();
        };
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                animate();
            }
        };

        window.addEventListener('resize', resizeCanvas);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        resizeCanvas(); // This calls init()
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, [canvasRef]);
};
